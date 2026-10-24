"""Build five-up-mid-data.js from the per-lesson modules.

Each page is (title, textbook words per character, sentences per level).
The build fails if any textbook word is not used in at least one level,
or if the title characters do not match the textbook characters.
"""
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
import lesson1, lesson2, lesson3, lesson4, lesson5, lesson6

LESSON_NUMBERS = ["一", "二", "三", "四", "五", "六"]
LESSONS = [lesson1.PAGES, lesson2.PAGES, lesson3.PAGES, lesson4.PAGES, lesson5.PAGES, lesson6.PAGES]
LEVELS = ("easy", "medium", "hard")

def check(lesson_index, title, textbook, levels):
    problems = []
    where = f"第{LESSON_NUMBERS[lesson_index]}課「{title}」"
    if title.split(" / ") != list(textbook):
        problems.append(f"{where} 標題的字與課本語詞的字不一致")
    used = {(e[0], e[2]) for level in LEVELS for e in levels[level]}
    for char, words in textbook.items():
        for word in words:
            if (char, word) not in used:
                problems.append(f"{where} 課本語詞「{word}」（{char}）沒有出現在任何難度")
    return problems

def page_block(title, levels):
    body = []
    for level in LEVELS:
        rows = ",\n".join("            " + json.dumps(e, ensure_ascii=False) for e in levels[level])
        body.append(f"          {level}: [\n{rows}\n          ]")
    return f"        lv({json.dumps(title, ensure_ascii=False)}, {{\n" + ",\n".join(body) + "\n        })"

def course_block(index, pages):
    number = LESSON_NUMBERS[index]
    rendered = ",\n".join(page_block(title, levels) for title, _, levels in pages)
    return (f"    {{\n      id: {index + 1},\n      label: \"第{number}課\",\n      sourceImage: \"翰林五上第{number}課\",\n"
            f"      pages: [\n{rendered}\n      ]\n    }}")

problems = [p for i, pages in enumerate(LESSONS) for title, textbook, levels in pages for p in check(i, title, textbook, levels)]
if problems:
    print("\n".join(problems))
    sys.exit(1)

header = """(function () {
  function lv(title, levels) {
    return { title, levels };
  }

  window.FIVE_UP_MID_COURSES = [
"""
footer = """
  ];
})();
"""
body = ",\n".join(course_block(i, pages) for i, pages in enumerate(LESSONS))
out = Path(__file__).resolve().parents[2] / "five-up-mid-data.js"
out.write_text(header + body + footer, encoding="utf-8")
words = sum(len(w) for pages in LESSONS for _, textbook, _ in pages for w in textbook.values())
print("courses", len(LESSONS), "pages", sum(len(p) for p in LESSONS), "textbook words covered", words)
