import json, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
import lesson1, lesson2, lesson3, lesson4, lesson5, lesson6

LESSON_NUMBERS = ["一", "二", "三", "四", "五", "六"]
LESSONS = [lesson1.PAGES, lesson2.PAGES, lesson3.PAGES, lesson4.PAGES, lesson5.PAGES, lesson6.PAGES]

def page_block(title, levels):
    body = []
    for level in ("easy", "medium", "hard"):
        rows = ",\n".join("            " + json.dumps(e, ensure_ascii=False) for e in levels[level])
        body.append(f"          {level}: [\n{rows}\n          ]")
    return f"        lv({json.dumps(title, ensure_ascii=False)}, {{\n" + ",\n".join(body) + "\n        })"

def course_block(index, pages):
    number = LESSON_NUMBERS[index]
    rendered = ",\n".join(page_block(title, levels) for title, levels in pages)
    return (f"    {{\n      id: {index + 1},\n      label: \"第{number}課\",\n      sourceImage: \"第{number}張圖\",\n"
            f"      pages: [\n{rendered}\n      ]\n    }}")

header = """(function () {
  function lv(title, levels) {
    return { title, levels };
  }

  window.FOUR_UP_MID_COURSES = [
"""
footer = """
  ];
})();
"""
body = ",\n".join(course_block(i, pages) for i, pages in enumerate(LESSONS))
out = Path(__file__).resolve().parents[2] / "four-up-mid-data.js"
out.write_text(header + body + footer, encoding="utf-8")
print("courses", len(LESSONS), "pages", sum(len(p) for p in LESSONS))
