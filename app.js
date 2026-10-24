const versions = [
  {
    id: "g4-mid",
    grade: "四上翰林版",
    phase: "期中",
    label: "四上翰林版（期中）",
    sourceNote: "出處：翰林四上國語（期中）",
    courses: window.FOUR_UP_MID_COURSES || []
  },
  {
    id: "g4-final",
    grade: "四上翰林版",
    phase: "期末",
    label: "四上翰林版（期末）",
    sourceNote: "尚未匯入教材",
    pending: true,
    courses: []
  },
  {
    id: "g5-mid",
    grade: "五上翰林版",
    phase: "期中",
    label: "五上翰林版（期中）",
    sourceNote: "出處：翰林五上國語（期中）",
    courses: window.FIVE_UP_MID_COURSES || []
  },
  {
    id: "g5-final",
    grade: "五上翰林版",
    phase: "期末",
    label: "五上翰林版（期末）",
    sourceNote: "尚未匯入教材",
    pending: true,
    courses: []
  }
];

versions.forEach((version) => {
  version.leveled = version.courses.some((course) => course.pages.some((item) => item.levels));
});

const levels = [
  { id: "easy", label: "簡單" },
  { id: "medium", label: "中等" },
  { id: "hard", label: "困難" }
];
const levelStorageKey = "glyphMeaningLevel";
const levelViews = new WeakMap();

const storageKey = "glyphMeaningScoresV2";
const state = {
  versionId: null,
  level: loadLevel(),
  courseIndex: 0,
  page: 0,
  placements: [],
  checked: false,
  selectedTile: null,
  results: [],
  mistakes: new Map(),
  drag: null,
  scores: loadScores()
};

const els = {
  versionScreen: document.getElementById("versionScreen"),
  versionGrid: document.getElementById("versionGrid"),
  homeScreen: document.getElementById("homeScreen"),
  gameScreen: document.getElementById("gameScreen"),
  selectedVersion: document.getElementById("selectedVersion"),
  sourceNote: document.getElementById("sourceNote"),
  lessonGrid: document.getElementById("lessonGrid"),
  difficultyPicker: document.getElementById("difficultyPicker"),
  courseTitle: document.getElementById("courseTitle"),
  pageNow: document.getElementById("pageNow"),
  pageTotal: document.getElementById("pageTotal"),
  progressDots: document.getElementById("progressDots"),
  mistakeCount: document.getElementById("mistakeCount"),
  unitLabel: document.getElementById("unitLabel"),
  lessonTitle: document.getElementById("lessonTitle"),
  pairList: document.getElementById("pairList"),
  storyCard: document.getElementById("storyCard"),
  tiles: document.getElementById("tiles"),
  backVersions: document.getElementById("backVersions"),
  backHome: document.getElementById("backHome"),
  prevPage: document.getElementById("prevPage"),
  nextPage: document.getElementById("nextPage"),
  submitPage: document.getElementById("submitPage"),
  resetPage: document.getElementById("resetPage"),
  scorePrint: document.getElementById("scorePrint"),
  scoreHome: document.getElementById("scoreHome"),
  toast: document.getElementById("toast"),
  likeOverlay: document.getElementById("likeOverlay"),
  scoreOverlay: document.getElementById("scoreOverlay"),
  scoreCourse: document.getElementById("scoreCourse"),
  scoreValue: document.getElementById("scoreValue"),
  printReport: document.getElementById("printReport")
};

function init() {
  renderVersions();
  bindEvents();
  const params = new URLSearchParams(window.location.search);
  if (params.has("resetScores")) {
    localStorage.removeItem(storageKey);
    localStorage.removeItem("glyphMeaningScores");
    state.scores = {};
    history.replaceState(null, "", window.location.pathname);
  }
  const versionId = params.get("version");
  if (levels.some((level) => level.id === params.get("level"))) state.level = params.get("level");
  const courseId = params.has("course") ? Number(params.get("course")) : null;
  const pageNumber = params.has("page") ? Number(params.get("page")) : null;
  const target = versions.find((version) => version.id === versionId) || (Number.isInteger(courseId) ? versions[0] : null);
  if (target) selectVersion(target.id);
  if (target && !target.pending && Number.isInteger(courseId)) {
    startCourse(courseId, Number.isInteger(pageNumber) ? pageNumber - 1 : 0);
  }
}

function bindEvents() {
  els.backVersions.addEventListener("click", showVersions);
  els.backHome.addEventListener("click", showHome);
  els.prevPage.addEventListener("click", () => loadPage(Math.max(0, state.page - 1)));
  els.nextPage.addEventListener("click", () => loadPage(Math.min(currentCourse().pages.length - 1, state.page + 1)));
  els.submitPage.addEventListener("click", submitPage);
  els.resetPage.addEventListener("click", resetPage);
  els.scorePrint.addEventListener("click", printMistakes);
  els.scoreHome.addEventListener("click", showHome);
}

function renderVersions() {
  els.versionGrid.innerHTML = versions
    .map((version) => {
      const className = version.pending ? "version-card pending" : "version-card";
      const phase = version.pending ? `${version.phase}・待匯入` : version.phase;
      return `<button class="${className}" type="button" data-version="${version.id}"><strong>${version.grade}</strong><span>${phase}</span></button>`;
    })
    .join("");

  els.versionGrid.querySelectorAll(".version-card").forEach((button) => {
    button.addEventListener("click", () => selectVersion(button.dataset.version));
  });
}

function selectVersion(versionId) {
  const selected = versions.find((version) => version.id === versionId) || versions[0];
  if (selected.pending) {
    showToast(`${selected.label}題庫尚未匯入。`);
    return;
  }
  state.versionId = selected.id;
  els.selectedVersion.textContent = selected.label;
  els.sourceNote.textContent = selected.sourceNote;
  els.versionScreen.classList.add("hidden");
  els.gameScreen.classList.add("hidden");
  els.homeScreen.classList.remove("hidden");
  renderHome();
}

function renderHome() {
  renderDifficultyPicker();
  const versionScores = scoresForCurrentVersion();
  els.lessonGrid.innerHTML = currentCourses()
    .map((course) => {
      const score = versionScores[scoreKey(course)];
      const unleveled = isLeveled() && !courseIsLeveled(course);
      const scoreText = Number.isFinite(score) ? `${score}分` : unleveled ? "未分級" : "尚未測驗";
      return `<button class="lesson-button" type="button" data-course="${course.id}"><strong>${course.label}</strong><span class="lesson-score">${scoreText}</span></button>`;
    })
    .join("");

  els.lessonGrid.querySelectorAll(".lesson-button").forEach((button) => {
    button.addEventListener("click", () => startCourse(Number(button.dataset.course), 0));
  });
}

function renderDifficultyPicker() {
  els.difficultyPicker.classList.toggle("hidden", !isLeveled());
  els.difficultyPicker.innerHTML = levels
    .map((level) => `<button type="button" data-level="${level.id}" aria-pressed="${level.id === state.level}">${level.label}</button>`)
    .join("");
  els.difficultyPicker.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.level = button.dataset.level;
      saveLevel();
      renderHome();
    });
  });
}

function isLeveled() {
  return Boolean(versions.find((version) => version.id === state.versionId)?.leveled);
}

function courseIsLeveled(course) {
  return course.pages.some((item) => item.levels);
}

function levelLabel() {
  return levels.find((level) => level.id === state.level).label;
}

function courseLabel(course) {
  return courseIsLeveled(course) ? `${course.label}・${levelLabel()}` : course.label;
}

function scoreKey(course) {
  return courseIsLeveled(course) ? `${course.id}-${state.level}` : course.id;
}

function startCourse(courseId, pageIndex = 0) {
  if (!state.versionId) state.versionId = versions[0].id;
  const found = currentCourses().findIndex((course) => course.id === courseId);
  state.courseIndex = found >= 0 ? found : 0;
  const course = currentCourse();
  state.page = Math.min(Math.max(pageIndex, 0), course.pages.length - 1);
  state.results = Array(course.pages.length).fill(null);
  state.mistakes = new Map();
  els.versionScreen.classList.add("hidden");
  els.homeScreen.classList.add("hidden");
  els.gameScreen.classList.remove("hidden");
  els.courseTitle.textContent = courseLabel(course);
  els.pageTotal.textContent = String(course.pages.length);
  updateMistakeCount();
  loadPage(state.page);
}

function showHome() {
  els.versionScreen.classList.add("hidden");
  els.gameScreen.classList.add("hidden");
  els.homeScreen.classList.remove("hidden");
  els.likeOverlay.classList.remove("show");
  els.scoreOverlay.classList.remove("show");
  renderHome();
}

function showVersions() {
  els.homeScreen.classList.add("hidden");
  els.gameScreen.classList.add("hidden");
  els.versionScreen.classList.remove("hidden");
  els.likeOverlay.classList.remove("show");
  els.scoreOverlay.classList.remove("show");
}

function currentCourse() {
  return currentCourses()[state.courseIndex];
}

function currentCourses() {
  const selected = versions.find((version) => version.id === state.versionId);
  return selected?.courses || [];
}

function currentPage() {
  return pageAt(state.page);
}

function pageAt(pageIndex) {
  const item = currentCourse().pages[pageIndex];
  return item.levels ? levelView(item, state.level) : item;
}

// A leveled page stores one [字, 句前, 語詞, 句後] entry per blank for each difficulty.
function levelView(item, level) {
  if (!levelViews.has(item)) levelViews.set(item, {});
  const cache = levelViews.get(item);
  if (!cache[level]) {
    const sentences = item.levels[level].map(([char, before, word, after]) => ({ char, before, word, after }));
    const answers = sentences.map((sentence) => sentence.word);
    const pairs = item.title.split(" / ").flatMap((char) => {
      const words = sentences.filter((sentence) => sentence.char === char).map((sentence) => sentence.word);
      return words.length ? [`${char}：${words.join("、")}`] : [];
    });
    cache[level] = { title: item.title, pairs, sentences, answers, tiles: shuffle([...answers], `${item.title}${level}`) };
  }
  return cache[level];
}

function loadPage(pageIndex) {
  state.page = pageIndex;
  state.placements = Array(currentPage().answers.length).fill(null);
  state.checked = false;
  state.selectedTile = null;

  const course = currentCourse();
  const lesson = currentPage();
  els.pageNow.textContent = String(pageIndex + 1);
  els.unitLabel.textContent = `${course.sourceImage} - 第 ${pageIndex + 1} 頁`;
  els.lessonTitle.textContent = lesson.title;
  els.pairList.innerHTML = lesson.pairs.map((pair) => `<span class="pair-chip">${pair}</span>`).join("");
  els.prevPage.disabled = pageIndex === 0;
  els.nextPage.disabled = pageIndex === course.pages.length - 1;
  renderStory();
  renderTiles();
  renderProgressDots();
}

function renderStory() {
  const lesson = currentPage();
  const blank = (slot) => {
    const placed = state.placements[slot];
    const classNames = ["blank"];
    if (placed) classNames.push("filled");
    return `<button class="${classNames.join(" ")}" data-slot="${slot}" type="button">${placed ? escapeHtml(placed) : ""}</button>`;
  };
  if (lesson.sentences) {
    const items = lesson.sentences.map((sentence, slot) => `<li>${escapeHtml(sentence.before)}${blank(slot)}${escapeHtml(sentence.after)}</li>`);
    els.storyCard.innerHTML = `<ol class="sentence-list">${items.join("")}</ol>`;
  } else {
    let answerIndex = 0;
    const parts = lesson.story.map((part, index) => {
      if (index % 2 === 0) return escapeHtml(part);
      const html = blank(answerIndex);
      answerIndex += 1;
      return html;
    });
    els.storyCard.innerHTML = `<p>${parts.join("")}</p>`;
  }
  els.storyCard.querySelectorAll(".blank").forEach((blank) => blank.addEventListener("click", onBlankClick));
}

function renderTiles() {
  const lesson = currentPage();
  const used = new Set(state.placements.filter(Boolean));
  els.tiles.innerHTML = lesson.tiles
    .map((word) => `<button class="tile${used.has(word) ? " used" : ""}" type="button" data-word="${word}">${word}</button>`)
    .join("");

  els.tiles.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("click", onTileClick);
    tile.addEventListener("pointerdown", onPointerDown);
  });
}

function onTileClick(event) {
  if (state.checked) return;
  const tile = event.currentTarget;
  if (tile.classList.contains("used")) return;
  state.selectedTile = tile.dataset.word;
  document.querySelectorAll(".tile").forEach((item) => item.classList.toggle("selected", item === tile));
}

function onBlankClick(event) {
  if (state.checked) return;
  const slot = Number(event.currentTarget.dataset.slot);
  if (state.selectedTile) {
    placeWord(slot, state.selectedTile);
    state.selectedTile = null;
    return;
  }
  if (state.placements[slot]) {
    state.placements[slot] = null;
    renderStory();
    renderTiles();
  }
}

function onPointerDown(event) {
  if (state.checked || event.currentTarget.classList.contains("used")) return;
  const tile = event.currentTarget;
  state.drag = { word: tile.dataset.word, pointerId: event.pointerId, clone: tile.cloneNode(true) };
  state.drag.clone.classList.add("drag-clone");
  document.body.appendChild(state.drag.clone);
  tile.setPointerCapture(event.pointerId);
  moveClone(event.clientX, event.clientY);
  tile.addEventListener("pointermove", onPointerMove);
  tile.addEventListener("pointerup", onPointerUp, { once: true });
  tile.addEventListener("pointercancel", cancelDrag, { once: true });
}

function onPointerMove(event) {
  if (!state.drag || state.drag.pointerId !== event.pointerId) return;
  moveClone(event.clientX, event.clientY);
}

function onPointerUp(event) {
  if (!state.drag || state.drag.pointerId !== event.pointerId) return;
  state.drag.clone.style.display = "none";
  const target = document.elementFromPoint(event.clientX, event.clientY);
  const blank = target?.closest?.(".blank");
  const word = state.drag.word;
  cancelDrag();
  if (blank) placeWord(Number(blank.dataset.slot), word);
}

function cancelDrag() {
  if (!state.drag) return;
  state.drag.clone.remove();
  document.querySelectorAll(".tile").forEach((tile) => tile.removeEventListener("pointermove", onPointerMove));
  state.drag = null;
}

function moveClone(x, y) {
  if (!state.drag) return;
  state.drag.clone.style.left = `${x}px`;
  state.drag.clone.style.top = `${y}px`;
}

function placeWord(slot, word) {
  const oldSlot = state.placements.indexOf(word);
  if (oldSlot >= 0) state.placements[oldSlot] = null;
  state.placements[slot] = word;
  renderStory();
  renderTiles();
}

function submitPage() {
  const lesson = currentPage();
  if (state.placements.some((item) => !item)) {
    showToast("還有空格沒有填入詞語。");
    return;
  }

  state.checked = true;
  let wrongCount = 0;
  clearPageMistakes(state.page);
  els.storyCard.querySelectorAll(".blank").forEach((blank, index) => {
    const expected = lesson.answers[index];
    const actual = state.placements[index];
    if (actual === expected) {
      blank.classList.add("correct");
    } else {
      wrongCount += 1;
      blank.classList.add("wrong");
      blank.textContent = expected;
      recordMistake(state.page, index, actual, expected);
    }
  });

  state.results[state.page] = wrongCount === 0 ? "correct" : "wrong";
  updateMistakeCount();
  renderProgressDots();
  renderTiles();

  if (wrongCount === 0) {
    showLike();
    showToast("本頁全部正確。");
  } else {
    els.likeOverlay.classList.remove("show");
    showToast(`本頁有 ${wrongCount} 題需要再留意，空格已顯示正確詞語。`);
  }

  if (state.results.every(Boolean)) {
    finishCourse();
  }
}

function resetPage() {
  state.placements = Array(currentPage().answers.length).fill(null);
  state.checked = false;
  state.selectedTile = null;
  state.results[state.page] = null;
  clearPageMistakes(state.page);
  updateMistakeCount();
  renderStory();
  renderTiles();
  renderProgressDots();
}

function finishCourse() {
  const course = currentCourse();
  const score = Math.max(0, 100 - state.mistakes.size * 3);
  if (!state.scores[state.versionId]) state.scores[state.versionId] = {};
  state.scores[state.versionId][scoreKey(course)] = score;
  saveScores();
  els.scoreCourse.textContent = courseLabel(course);
  els.scoreValue.textContent = `${score}分`;
  els.scoreOverlay.classList.remove("show");
  void els.scoreOverlay.offsetWidth;
  els.scoreOverlay.classList.add("show");
  if (score === 100) showLike();
}

function recordMistake(pageIndex, slot, actual, expected) {
  state.mistakes.set(`${pageIndex}-${slot}`, { page: pageIndex, slot, actual, expected });
}

function clearPageMistakes(pageIndex) {
  [...state.mistakes.keys()].forEach((key) => {
    if (key.startsWith(`${pageIndex}-`)) state.mistakes.delete(key);
  });
}

function updateMistakeCount() {
  els.mistakeCount.textContent = String(state.mistakes.size);
}

function renderProgressDots() {
  els.progressDots.innerHTML = state.results
    .map((result, index) => {
      const className = result ? ` ${result}` : "";
      const label = result === "correct" ? "答對" : result === "wrong" ? "答錯" : "未作答";
      return `<i class="progress-dot${className}" title="第 ${index + 1} 題：${label}" aria-label="第 ${index + 1} 題：${label}"></i>`;
    })
    .join("");
}

function printMistakes() {
  if (state.mistakes.size === 0) {
    showToast("目前沒有錯題可輸出。");
    return;
  }

  const course = currentCourse();
  const byPage = new Map();
  state.mistakes.forEach((mistake) => {
    if (!byPage.has(mistake.page)) byPage.set(mistake.page, new Set());
    byPage.get(mistake.page).add(mistake.slot);
  });

  const sections = [...byPage.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([pageIndex, wrongSlots]) => {
      const lesson = pageAt(pageIndex);
      const word = (text, slot) => `<span${wrongSlots.has(slot) ? " class=\"print-wrong\"" : ""}>${escapeHtml(text)}</span>`;
      const heading = `<h2>${escapeHtml(courseLabel(course))} ${escapeHtml(lesson.title)}</h2>`;
      if (lesson.sentences) {
        const items = lesson.sentences.map((sentence, slot) => `<li>${escapeHtml(sentence.before)}${word(sentence.word, slot)}${escapeHtml(sentence.after)}</li>`);
        return `<section>${heading}<ol>${items.join("")}</ol></section>`;
      }
      let answerIndex = 0;
      const story = lesson.story
        .map((part, index) => {
          if (index % 2 === 0) return escapeHtml(part);
          const html = word(part, answerIndex);
          answerIndex += 1;
          return html;
        })
        .join("");
      return `<section>${heading}<p>${story}</p></section>`;
    })
    .join("");

  els.printReport.innerHTML = `<h1>字形辨義錯題整理</h1>${sections}`;
  window.print();
}

function showLike() {
  els.likeOverlay.classList.remove("show");
  void els.likeOverlay.offsetWidth;
  els.likeOverlay.classList.add("show");
  clearTimeout(showLike.timer);
  showLike.timer = setTimeout(() => els.likeOverlay.classList.remove("show"), 1300);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 1800);
}

function shuffle(items, seedText) {
  let seed = 0;
  for (const char of seedText) seed += char.charCodeAt(0);
  return items
    .map((item, index) => {
      seed = (seed * 9301 + 49297 + index) % 233280;
      return { item, rank: seed / 233280 };
    })
    .sort((a, b) => a.rank - b.rank)
    .map((entry) => entry.item);
}

function loadScores() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch {
    return {};
  }
}

function loadLevel() {
  try {
    const saved = localStorage.getItem(levelStorageKey);
    return levels.some((level) => level.id === saved) ? saved : "easy";
  } catch {
    return "easy";
  }
}

function saveLevel() {
  try {
    localStorage.setItem(levelStorageKey, state.level);
  } catch {}
}

function scoresForCurrentVersion() {
  return state.scores[state.versionId] || {};
}

function saveScores() {
  localStorage.setItem(storageKey, JSON.stringify(state.scores));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
