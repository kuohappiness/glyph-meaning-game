#!/usr/bin/env node
// Validates the leveled word bank before publishing.
// Usage: node tools/check-data.js [four-up-mid-data.js]
//
// Rules checked:
// - every page has easy, medium and hard entries as [字, 句前, 語詞, 句後]
// - each entry's 語詞 contains its 字, and the 字 appears in the page title
// - at most 8 blanks per page per level, and no repeated 語詞 within a level
// - each 字 has 1 or 2 語詞 per level where it appears; every 字 appears in at least one level
// - sentences are at most 30 characters and end with punctuation
// Not checked here: whether 語詞 are real dictionary words or near-synonyms.
// Those need the dictionary word index, which cannot be built offline.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const LEVELS = ["easy", "medium", "hard"];
const MAX_BLANKS = 8;
const MAX_WORDS_PER_CHAR = 2;
const MAX_SENTENCE_CHARS = 30;

const dataFile = process.argv[2] || path.join(__dirname, "..", "four-up-mid-data.js");
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(dataFile, "utf8"), sandbox);
const courses = sandbox.window.FOUR_UP_MID_COURSES;

const errors = [];
const notes = [];
const singleWord = [];
let pages = 0;
let sentences = 0;

for (const course of courses) {
  course.pages.forEach((page, pageIndex) => {
    pages += 1;
    const where = `${course.label} 第${pageIndex + 1}頁「${page.title}」`;
    const chars = page.title.split(" / ");
    if (!page.levels) {
      errors.push(`${where} 沒有分級內容`);
      return;
    }
    const appears = new Set();
    for (const level of LEVELS) {
      const entries = page.levels[level];
      const at = `${where}［${level}］`;
      if (!Array.isArray(entries)) {
        errors.push(`${at} 缺少這個難度`);
        continue;
      }
      if (entries.length > MAX_BLANKS) errors.push(`${at} 有 ${entries.length} 格，超過 ${MAX_BLANKS} 格`);
      const words = new Set();
      const perChar = {};
      for (const entry of entries) {
        sentences += 1;
        if (!Array.isArray(entry) || entry.length !== 4 || !entry.every((part) => typeof part === "string")) {
          errors.push(`${at} 格式錯誤：${JSON.stringify(entry)}`);
          continue;
        }
        const [char, before, word, after] = entry;
        if (!chars.includes(char)) errors.push(`${at}「${word}」標示的字「${char}」不在本頁標題中`);
        if (!word.includes(char)) errors.push(`${at}「${word}」不含「${char}」`);
        if (words.has(word)) errors.push(`${at}「${word}」重複`);
        words.add(word);
        perChar[char] = (perChar[char] || 0) + 1;
        appears.add(char);
        const length = [...(before + word + after)].length;
        if (length > MAX_SENTENCE_CHARS) errors.push(`${at}「${word}」的句子有 ${length} 字，超過 ${MAX_SENTENCE_CHARS} 字`);
        if (!/[。！？][」』”"]?$/.test(after) && !/[。！？」』”"]$/.test(after)) {
          errors.push(`${at}「${word}」的句子沒有以標點結尾`);
        }
      }
      for (const [char, count] of Object.entries(perChar)) {
        if (count > MAX_WORDS_PER_CHAR) errors.push(`${at}「${char}」有 ${count} 個語詞，超過 ${MAX_WORDS_PER_CHAR} 個`);
        if (count === 1) singleWord.push(`${at}「${char}」`);
      }
    }
    for (const char of chars) {
      if (!appears.has(char)) errors.push(`${where}「${char}」在所有難度都沒有語詞`);
    }
  });
}

if (singleWord.length) console.log(`提示：${singleWord.length} 個字在某個難度只有 1 個語詞（不列出，可參考 CLAUDE.md）`);
errors.forEach((message) => console.log(`錯誤：${message}`));
console.log(`共 ${pages} 頁，${sentences} 句；錯誤 ${errors.length}。`);
process.exit(errors.length ? 1 : 0);
