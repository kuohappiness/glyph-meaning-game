#!/usr/bin/env node
// Validates the word bank before publishing.
// Usage: node tools/check-data.js [four-up-mid-data.js] [--words word-index.json]
// word-index.json (optional) maps each dictionary word to { level, sources } and
// turns "word must exist in the dictionaries" into a hard check.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const LEVELS = ["easy", "medium", "hard"];
const WORDS_PER_CHAR = 2;
const MAX_BLANKS = 8;
const MAX_SENTENCE_CHARS = 30;

const args = process.argv.slice(2);
const wordsFlag = args.indexOf("--words");
const wordIndex = wordsFlag >= 0 ? JSON.parse(fs.readFileSync(args[wordsFlag + 1], "utf8")) : null;
const dataFile = args.find((arg, index) => !arg.startsWith("--") && index !== wordsFlag + 1) || path.join(__dirname, "..", "four-up-mid-data.js");

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(dataFile, "utf8"), sandbox);
const courses = sandbox.window.FOUR_UP_MID_COURSES;

const errors = [];
const warnings = [];
const counts = { pages: 0, leveled: 0, sentences: 0 };

for (const course of courses) {
  const seen = {};
  course.pages.forEach((page, pageIndex) => {
    counts.pages += 1;
    const where = `${course.label} 第${pageIndex + 1}頁「${page.title}」`;
    const chars = page.title.split(" / ");
    if (!page.levels) {
      checkStoryPage(page, where);
      return;
    }
    counts.leveled += 1;
    for (const level of LEVELS) {
      const entries = page.levels[level];
      const at = `${where}［${level}］`;
      if (!Array.isArray(entries)) {
        errors.push(`${at} 缺少這個難度`);
        continue;
      }
      if (entries.length > MAX_BLANKS) errors.push(`${at} 有 ${entries.length} 格，超過 ${MAX_BLANKS} 格`);
      const words = new Set();
      for (const entry of entries) {
        counts.sentences += 1;
        const [char, before, word, after] = entry;
        if (entry.length !== 4 || ![char, before, word, after].every((part) => typeof part === "string")) {
          errors.push(`${at} 格式錯誤：${JSON.stringify(entry)}`);
          continue;
        }
        if (!chars.includes(char)) errors.push(`${at}「${word}」標示的字「${char}」不在本頁比較字中`);
        if (!word.includes(char)) errors.push(`${at}「${word}」不含「${char}」`);
        if (words.has(word)) errors.push(`${at}「${word}」重複`);
        words.add(word);
        const length = [...(before + word + after)].length;
        if (length > MAX_SENTENCE_CHARS) warnings.push(`${at}「${word}」的句子有 ${length} 字，超過 ${MAX_SENTENCE_CHARS} 字`);
        if (!/[。！？][」』”"]?$/.test(after)) warnings.push(`${at}「${word}」的句子沒有以句號、驚嘆號或問號結尾`);
        const key = `${level}:${word}`;
        if (seen[key]) warnings.push(`${at}「${word}」在本課${seen[key]}已出現`);
        seen[key] = `第${pageIndex + 1}頁`;
        if (wordIndex) {
          const info = wordIndex[word];
          if (!info) errors.push(`${at}「${word}」不在字典詞表中`);
        }
      }
      for (const char of chars) {
        const n = entries.filter((entry) => entry[0] === char).length;
        if (n !== WORDS_PER_CHAR) errors.push(`${at}「${char}」有 ${n} 個詞，應為 ${WORDS_PER_CHAR} 個`);
      }
    }
  });
}

function checkStoryPage(page, where) {
  const { story, answers } = page;
  if (story.length !== answers.length * 2 + 1) errors.push(`${where} story 與 answers 數量不符`);
  answers.forEach((answer, index) => {
    if (story[index * 2 + 1] !== answer) errors.push(`${where} 第 ${index + 1} 格答案與 story 不一致`);
  });
  if (answers.length > MAX_BLANKS) errors.push(`${where} 超過 ${MAX_BLANKS} 格`);
}

warnings.forEach((message) => console.log(`注意：${message}`));
errors.forEach((message) => console.log(`錯誤：${message}`));
console.log(`共 ${counts.pages} 頁（分級頁 ${counts.leveled}），分級句子 ${counts.sentences} 句；錯誤 ${errors.length}，注意 ${warnings.length}。`);
process.exit(errors.length ? 1 : 0);
