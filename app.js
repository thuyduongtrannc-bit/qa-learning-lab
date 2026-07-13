const istqbChapters = window.ISTQB_CHAPTERS || [];
const mockExams = window.ISTQB_MOCK_EXAMS || [];
const extraCourses = window.EXTRA_COURSES || {};
const istqbApkgFlashcards = window.ISTQB_APKG_FLASHCARDS || [];

const accounts = {
  admin: { password: "123456A@", role: "admin" },
  user: { password: "123456A@", role: "user" }
};

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function readSession() {
  const session = readJson("qa.session", null);
  return session && accounts[session.username] ? session : null;
}

const state = {
  user: readSession(),
  courseId: localStorage.getItem("qa.courseId") || "istqb",
  moduleByCourse: readJson("qa.moduleByCourse", {
    istqb: Number(localStorage.getItem("istqb.chapterId")) || 1
  }),
  tabByCourse: readJson("qa.tabByCourse", {
    istqb: localStorage.getItem("istqb.tab") || "theory"
  }),
  completedByCourse: readJson("qa.completedByCourse", {
    istqb: readJson("istqb.completed", [])
  }),
  theoryLanguage: readJson("qa.theoryLanguage", {}),
  practiceSet: readJson("qa.practiceSet", {}),
  answers: readJson("istqb.answers", {}),
  mockExamId: localStorage.getItem("istqb.mockExamId") || "mock-1",
  mockAnswers: readJson("istqb.mockAnswers", {}),
  extraQuizId: readJson("qa.extraQuizId", {}),
  extraQuizAnswers: readJson("qa.extraQuizAnswers", {}),
  flashcardIndex: readJson("qa.flashcardIndex", {}),
  flashcardFlipped: readJson("qa.flashcardFlipped", {}),
  apiPracticeRequests: readJson("qa.apiPracticeRequests", {}),
  sqlPracticeQueries: readJson("qa.sqlPracticeQueries", {}),
  search: ""
};

const elements = {
  loginScreen: document.querySelector("#loginScreen"),
  loginForm: document.querySelector("#loginForm"),
  loginUsername: document.querySelector("#loginUsername"),
  loginPassword: document.querySelector("#loginPassword"),
  loginError: document.querySelector("#loginError"),
  demoAccountLinks: Array.from(document.querySelectorAll(".demo-account-link")),
  appShell: document.querySelector("#appShell"),
  currentUser: document.querySelector("#currentUser"),
  logoutButton: document.querySelector("#logoutButton"),
  courseNav: document.querySelector("#courseNav"),
  courseButtons: Array.from(document.querySelectorAll(".course-button")),
  courseSubtitle: document.querySelector("#courseSubtitle"),
  searchLabel: document.querySelector("#searchLabel"),
  chapterNav: document.querySelector("#chapterNav"),
  chapterSearch: document.querySelector("#chapterSearch"),
  chapterTitle: document.querySelector("#chapterTitle"),
  chapterSubtitle: document.querySelector("#chapterSubtitle"),
  completeToggle: document.querySelector("#completeToggle"),
  courseEyebrow: document.querySelector("#courseEyebrow"),
  contentArea: document.querySelector("#contentArea"),
  progressText: document.querySelector("#progressText"),
  progressLabel: document.querySelector("#progressLabel"),
  overallProgress: document.querySelector("#overallProgress"),
  tabButtons: Array.from(document.querySelectorAll(".tab-button")),
  footerNote: document.querySelector("#footerNote"),
  footerSourceLink: document.querySelector(".page-footer a")
};

function istqbCourse() {
  return {
    id: "istqb",
    title: "ISTQB CTFL",
    subtitle: "Foundation Level v4.0",
    type: "istqb",
    modules: istqbChapters,
    sourceLinks: [
      {
        label: "ISTQB CTFL official syllabus and sample exams",
        url: "https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/"
      }
    ],
    footerNote:
      "Practice questions are original study items modeled on the CTFL v4.0 structure and official sample-exam style."
  };
}

function currentCourse() {
  if (state.courseId === "istqb") return istqbCourse();
  return extraCourses[state.courseId] || istqbCourse();
}

function isIstqb() {
  return currentCourse().type === "istqb";
}

function currentModules() {
  return currentCourse().modules || [];
}

function currentTab() {
  const allowedTabs = isIstqb() ? ["theory", "examples", "practice", "mock", "flashcards"] : ["theory", "practice", "mock"];
  const tab = state.tabByCourse[state.courseId] || "theory";
  return allowedTabs.includes(tab) ? tab : "theory";
}

function setCurrentTab(tab) {
  state.tabByCourse[state.courseId] = tab;
}

function currentModuleId() {
  const modules = currentModules();
  const fallback = modules[0] ? modules[0].id : 1;
  return state.moduleByCourse[state.courseId] || fallback;
}

function setCurrentModuleId(id) {
  state.moduleByCourse[state.courseId] = id;
}

function currentChapter() {
  const modules = currentModules();
  return modules.find((module) => String(module.id) === String(currentModuleId())) || modules[0];
}

function completedList() {
  if (!Array.isArray(state.completedByCourse[state.courseId])) {
    state.completedByCourse[state.courseId] = [];
  }
  return state.completedByCourse[state.courseId];
}

function getTheoryLanguage() {
  return state.theoryLanguage[state.courseId] || "en";
}

function setTheoryLanguage(language) {
  state.theoryLanguage[state.courseId] = language;
}

function persist() {
  localStorage.setItem("qa.courseId", state.courseId);
  localStorage.setItem("qa.moduleByCourse", JSON.stringify(state.moduleByCourse));
  localStorage.setItem("qa.tabByCourse", JSON.stringify(state.tabByCourse));
  localStorage.setItem("qa.completedByCourse", JSON.stringify(state.completedByCourse));
  localStorage.setItem("qa.theoryLanguage", JSON.stringify(state.theoryLanguage));
  localStorage.setItem("qa.practiceSet", JSON.stringify(state.practiceSet));
  localStorage.setItem("istqb.chapterId", String(state.moduleByCourse.istqb || 1));
  localStorage.setItem("istqb.tab", state.tabByCourse.istqb || "theory");
  localStorage.setItem("istqb.completed", JSON.stringify(state.completedByCourse.istqb || []));
  localStorage.setItem("istqb.answers", JSON.stringify(state.answers));
  localStorage.setItem("istqb.mockExamId", state.mockExamId);
  localStorage.setItem("istqb.mockAnswers", JSON.stringify(state.mockAnswers));
  localStorage.setItem("qa.extraQuizId", JSON.stringify(state.extraQuizId));
  localStorage.setItem("qa.extraQuizAnswers", JSON.stringify(state.extraQuizAnswers));
  localStorage.setItem("qa.flashcardIndex", JSON.stringify(state.flashcardIndex));
  localStorage.setItem("qa.flashcardFlipped", JSON.stringify(state.flashcardFlipped));
  localStorage.setItem("qa.apiPracticeRequests", JSON.stringify(state.apiPracticeRequests));
  localStorage.setItem("qa.sqlPracticeQueries", JSON.stringify(state.sqlPracticeQueries));
}

function htmlEscape(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderCourseNav() {
  elements.courseButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.course === state.courseId);
  });
}

function renderNav() {
  const query = normalize(state.search.trim());
  const modules = currentModules();
  const filtered = modules.filter((module) => {
    if (!query) return true;
    const haystack = normalize(
      [module.title, module.official, module.summary, (module.keywords || []).join(" ")].join(" ")
    );
    return haystack.includes(query);
  });

  elements.chapterNav.innerHTML = filtered.length
    ? filtered
        .map((module) => {
          const active = String(module.id) === String(currentModuleId()) ? " active" : "";
          const done = completedList().map(String).includes(String(module.id)) ? " done" : "";
          const badge = isIstqb() ? `${module.weight} questions` : `${module.minutes || 45} min`;
          return `
            <button class="chapter-link${active}" type="button" data-module="${htmlEscape(module.id)}">
              <span class="chapter-num">${htmlEscape(module.id)}</span>
              <span>${htmlEscape(module.title)}</span>
              <span class="chapter-weight">${htmlEscape(badge)}</span>
              <span class="done-dot${done}" aria-hidden="true"></span>
            </button>
          `;
        })
        .join("")
    : `<div class="empty-state">No module matches this search.</div>`;

  elements.chapterNav.querySelectorAll("[data-module]").forEach((button) => {
    button.addEventListener("click", () => {
      const rawId = button.dataset.module;
      const numericId = Number(rawId);
      setCurrentModuleId(Number.isNaN(numericId) ? rawId : numericId);
      persist();
      render();
      scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function renderHeader() {
  const course = currentCourse();
  const module = currentChapter();
  if (!module) {
    elements.chapterTitle.textContent = "No content";
    elements.chapterSubtitle.textContent = "";
    return;
  }

  elements.courseSubtitle.textContent = course.subtitle || "";
  elements.courseEyebrow.textContent = course.title;
  elements.chapterTitle.textContent = `${isIstqb() ? "Chapter" : "Module"} ${module.id}. ${module.title}`;
  elements.chapterSubtitle.textContent = `${module.official || module.title} - ${module.summary || ""}`;
  elements.completeToggle.checked = completedList().map(String).includes(String(module.id));
  elements.searchLabel.textContent = isIstqb() ? "Search chapters" : "Search modules";
  elements.chapterSearch.placeholder = isIstqb() ? "risk, static, BVA..." : "auth, join, report...";
  elements.footerNote.textContent = course.footerNote || "";
  elements.footerSourceLink.classList.toggle("hidden", !isIstqb());
}

function renderProgress() {
  const modules = currentModules();
  const done = completedList().length;
  elements.progressText.textContent = `${done}/${modules.length}`;
  elements.progressLabel.textContent = isIstqb() ? "chapters marked complete" : "modules marked complete";
  elements.overallProgress.style.width = modules.length ? `${(done / modules.length) * 100}%` : "0%";
}

function renderTabs() {
  const tab = currentTab();
  elements.tabButtons.forEach((button) => {
    const isExamples = button.dataset.tab === "examples";
    const isFlashcards = button.dataset.tab === "flashcards";
    const hideForExtraCourse = !isIstqb() && (isExamples || isFlashcards);
    button.classList.toggle("hidden", hideForExtraCourse);
    button.hidden = hideForExtraCourse;
    if (isIstqb()) {
      if (button.dataset.tab === "practice") button.textContent = "Chapter Practice";
      if (button.dataset.tab === "mock") button.textContent = "Mock Exams";
    } else {
      if (button.dataset.tab === "practice") button.textContent = "Practice";
      if (button.dataset.tab === "mock") button.textContent = "Quiz";
    }
    if (button.dataset.tab === "flashcards") button.textContent = "Flashcards";

    const isSelected = button.dataset.tab === tab;
    button.setAttribute("aria-selected", String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
  });
}

function getLearningObjectiveMap(module, language) {
  const objectives =
    language === "vi" && module.viLearningObjectives ? module.viLearningObjectives : module.learningObjectives || [];
  return Object.fromEntries(objectives.map((objective) => [objective.code, objective]));
}

function renderLearningObjectivesForSection(section, objectiveMap) {
  if (!section.los || !section.los.length) return "";
  return `
    <div class="lo-inline" aria-label="Learning objectives for this section">
      ${section.los
        .map((code) => {
          const objective = objectiveMap[code];
          return `
            <div class="lo-inline-row">
              <strong>${htmlEscape(code)}</strong>
              ${objective?.k ? `<span class="lo-chip">${htmlEscape(objective.k)}</span>` : ""}
              ${objective?.text ? `<span>${htmlEscape(objective.text)}</span>` : ""}
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderSourceLinks(module) {
  const links = module.sourceLinks || currentCourse().sourceLinks || [];
  if (!links.length) return "";

  return `
    <section class="source-panel">
      <h3>Sources</h3>
      <div class="source-list">
        ${links
          .map(
            (link) => `
              <a class="source-link" href="${htmlEscape(link.url)}" target="_blank" rel="noreferrer">
                <span>${htmlEscape(link.label)}</span>
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTheory(module) {
  const language = getTheoryLanguage();
  const hasVietnamese = Boolean(module.viSections || module.viTerms);
  const sections =
    language === "vi" && module.viSections ? module.viSections : module.sections || module.theory || [];
  const terms = language === "vi" && module.viTerms ? module.viTerms : module.terms || [];
  const objectiveMap = getLearningObjectiveMap(module, language);
  const toolbarHtml = hasVietnamese
    ? `
      <section class="theory-toolbar">
        <button id="languageToggle" class="language-toggle" type="button">${
          language === "vi" ? "Show English" : "Translate to Vietnamese"
        }</button>
      </section>
    `
    : "";

  const sectionHtml = sections
    .map(
      (section) => `
        <article class="section-panel">
          <div class="section-title-row">
            ${section.code ? `<span class="section-code">${htmlEscape(section.code)}</span>` : ""}
            <h3>${htmlEscape(section.heading)}</h3>
          </div>
          ${renderLearningObjectivesForSection(section, objectiveMap)}
          <p>${htmlEscape(section.body)}</p>
          ${
            section.bullets?.length
              ? `<ul class="key-list">${section.bullets.map((item) => `<li>${htmlEscape(item)}</li>`).join("")}</ul>`
              : ""
          }
          ${section.exam ? `<div class="exam-focus"><strong>Exam focus:</strong> ${htmlEscape(section.exam)}</div>` : ""}
        </article>
      `
    )
    .join("");

  const formulaHtml = module.formulas
    ? `
      <section class="formula-panel">
        ${module.formulas
          .map(
            ([name, formula]) => `
              <div class="formula-box">
                <h3>${htmlEscape(name)}</h3>
                <code>${htmlEscape(formula)}</code>
              </div>
            `
          )
          .join("")}
      </section>
    `
    : "";

  const termsHtml = terms.length
    ? `
      <section class="section-panel">
        <h3>${language === "vi" ? "Thuật ngữ chính" : "Key Terms"}</h3>
        <div class="term-grid">
          ${terms
            .map(
              ([term, meaning]) => `
                <div class="term-card">
                  <strong>${htmlEscape(term)}</strong>
                  <span>${htmlEscape(meaning)}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
    `
    : "";

  elements.contentArea.innerHTML = toolbarHtml + sectionHtml + formulaHtml + termsHtml + renderSourceLinks(module);

  const languageToggle = elements.contentArea.querySelector("#languageToggle");
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      setTheoryLanguage(language === "vi" ? "en" : "vi");
      persist();
      renderTheory(currentChapter());
    });
  }
}

function compactText(parts) {
  return parts.filter(Boolean).join(" ");
}

function buildFlashcards(module) {
  const objectiveCards = (module.learningObjectives || []).map((objective) => ({
    meta: compactText([objective.code, objective.k]),
    front: objective.code,
    back: objective.text,
    viBack: "Hãy tự giải thích learning objective này bằng một ví dụ trong dự án thật.",
    tag: "Learning Objective"
  }));

  const viTerms = new Map((module.viTerms || []).map(([term, meaning]) => [term, meaning]));
  const termCards = (module.terms || []).map(([term, meaning]) => ({
    meta: "Key Term",
    front: term,
    back: meaning,
    viBack: viTerms.get(term) && viTerms.get(term) !== meaning ? viTerms.get(term) : "",
    tag: "Term"
  }));

  const viSections = new Map((module.viSections || []).map((section) => [section.code || section.heading, section]));
  const sectionCards = (module.sections || module.theory || []).map((section) => {
    const viSection = viSections.get(section.code || section.heading);
    const bullets = section.bullets?.length ? ` Key points: ${section.bullets.slice(0, 3).join(" ")}` : "";
    const viBullets = viSection?.bullets?.length ? ` Ý chính: ${viSection.bullets.slice(0, 3).join(" ")}` : "";
    return {
      meta: section.code || "Theory",
      front: section.heading,
      back: `${section.body}${bullets}`,
      viBack: viSection ? `${viSection.body}${viBullets}` : "",
      tag: "Theory"
    };
  });

  return [...objectiveCards, ...termCards, ...sectionCards].filter((card) => card.front && card.back);
}

function flashcardKey(module) {
  return `${state.courseId}:${module.id}`;
}

function renderFlashcards(module) {
  if (!isIstqb()) {
    elements.contentArea.innerHTML = `<div class="empty-state">Flashcards are available for ISTQB only.</div>`;
    return;
  }

  const cards = istqbApkgFlashcards.length ? istqbApkgFlashcards : buildFlashcards(module);
  if (!cards.length) {
    elements.contentArea.innerHTML = `<div class="empty-state">No flashcards are available for this module.</div>`;
    return;
  }

  const key = flashcardKey(module);
  const index = Math.min(state.flashcardIndex[key] || 0, cards.length - 1);
  const card = cards[index];
  const flipped = Boolean(state.flashcardFlipped[key]);
  const sourceLinks =
    istqbApkgFlashcards.length
      ? [{ label: "Imported from Chứng chỉ ISTQB Foundation (CTFL) v40.apkg", url: "" }]
      : module.sourceLinks || currentCourse().sourceLinks || [];

  elements.contentArea.innerHTML = `
    <section class="flashcard-layout">
      <div class="flashcard-summary">
        <div>
          <h3>Flashcards</h3>
          <p>${
            istqbApkgFlashcards.length
              ? "Review ISTQB CTFL cards imported from the provided Anki APKG deck."
              : "Review key terms, learning objectives, and theory points in a quick recall format."
          }</p>
        </div>
        <span class="score-pill">${index + 1}/${cards.length}</span>
      </div>

      <button id="flashcardCard" class="flashcard-card${flipped ? " flipped" : ""}" type="button">
        <span class="badge">${htmlEscape(card.tag)}</span>
        <span class="flashcard-meta">${htmlEscape(card.meta)}</span>
        <strong>${htmlEscape(flipped ? "Answer" : "Question")}</strong>
        <span class="flashcard-main">${htmlEscape(flipped ? card.back : card.front)}</span>
        ${
          flipped && card.viBack
            ? `<span class="flashcard-vi"><strong>Giải thích dễ hiểu:</strong> ${htmlEscape(card.viBack)}</span>`
            : ""
        }
        <small>${flipped ? "Click to hide answer" : "Click to show answer"}</small>
      </button>

      <div class="flashcard-actions">
        <button class="secondary-button" type="button" id="prevFlashcard">Previous</button>
        <button class="secondary-button" type="button" id="flipFlashcard">${flipped ? "Hide Answer" : "Show Answer"}</button>
        <button class="secondary-button" type="button" id="nextFlashcard">Next</button>
      </div>

      <section class="source-panel flashcard-source">
        <h3>Sources</h3>
        <div class="source-list">
          ${sourceLinks
            .map(
              (link) =>
                link.url
                  ? `<a class="source-link" href="${htmlEscape(link.url)}" target="_blank" rel="noreferrer">${htmlEscape(
                      link.label
                    )}</a>`
                  : `<span class="source-text">${htmlEscape(link.label)}</span>`
            )
            .join("")}
        </div>
      </section>
    </section>
  `;

  function setFlashcard(nextIndex, nextFlipped = false) {
    state.flashcardIndex[key] = (nextIndex + cards.length) % cards.length;
    state.flashcardFlipped[key] = nextFlipped;
    persist();
    renderFlashcards(currentChapter());
  }

  elements.contentArea.querySelector("#flashcardCard").addEventListener("click", () => {
    state.flashcardFlipped[key] = !flipped;
    persist();
    renderFlashcards(currentChapter());
  });

  elements.contentArea.querySelector("#flipFlashcard").addEventListener("click", () => {
    state.flashcardFlipped[key] = !flipped;
    persist();
    renderFlashcards(currentChapter());
  });

  elements.contentArea.querySelector("#prevFlashcard").addEventListener("click", () => setFlashcard(index - 1));
  elements.contentArea.querySelector("#nextFlashcard").addEventListener("click", () => setFlashcard(index + 1));
}

function renderExamples(module) {
  elements.contentArea.innerHTML = `
    <div class="example-grid">
      ${(module.examples || [])
        .map(
          (example) => `
            <article class="example-card">
              <span class="example-label">${htmlEscape(example.label)}</span>
              ${example.lo ? `<span class="lo-chip">${htmlEscape(example.lo)}</span>` : ""}
              <h3>${htmlEscape(example.title)}</h3>
              <p>${htmlEscape(example.text)}</p>
              ${
                example.steps
                  ? `<ul class="key-list">${example.steps.map((step) => `<li>${htmlEscape(step)}</li>`).join("")}</ul>`
                  : ""
              }
              <div class="takeaway">${htmlEscape(example.takeaway)}</div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function optionClassForSelected(question, index, selected) {
  if (selected === undefined) return "";
  if (index === question.answer) return " correct";
  if (index === selected && index !== question.answer) return " wrong";
  return "";
}

function answerText(question) {
  const letters = ["A", "B", "C", "D", "E"];
  return `${letters[question.answer]}. ${question.options[question.answer]}`;
}

function renderQuestionCard(question, index, selected, name, meta = []) {
  const letters = ["A", "B", "C", "D", "E"];
  return `
    <article class="question-card">
      <div class="question-meta">
        <span class="badge">Question ${index + 1}</span>
        ${meta.map((item) => `<span class="badge">${htmlEscape(item)}</span>`).join("")}
      </div>
      <h3>${htmlEscape(question.question)}</h3>
      <div class="options">
        ${question.options
          .map(
            (option, optionIndex) => `
              <label class="option${optionClassForSelected(question, optionIndex, selected)}">
                <input
                  type="radio"
                  name="${htmlEscape(name)}"
                  data-question-id="${htmlEscape(question.id)}"
                  value="${optionIndex}"
                  ${selected === optionIndex ? "checked" : ""}
                />
                <span><strong>${letters[optionIndex]}.</strong> ${htmlEscape(option)}</span>
              </label>
            `
          )
          .join("")}
      </div>
      <div class="explanation${selected !== undefined ? " visible" : ""}">
        <strong class="answer-line">Đáp án đúng: ${htmlEscape(answerText(question))}</strong>
        <strong>Giải thích:</strong> ${htmlEscape(question.explanation)}
      </div>
    </article>
  `;
}

function uniquePracticeSets(questions) {
  const map = new Map();
  questions.forEach((question) => {
    if (question.practiceSet) {
      map.set(question.practiceSet, question.practiceTitle || question.practiceSet);
    }
  });
  return Array.from(map, ([id, title]) => ({ id, title }));
}

function renderPractice(module) {
  const allQuestions = module.exercises || [];
  const sets = uniquePracticeSets(allQuestions);
  const selectedSet = state.practiceSet[module.id] || sets[0]?.id || "all";
  const questions =
    selectedSet === "all" ? allQuestions : allQuestions.filter((question) => question.practiceSet === selectedSet);
  const answered = questions.filter((question) => state.answers[question.id] !== undefined);
  const correct = questions.filter((question) => state.answers[question.id] === question.answer);

  elements.contentArea.innerHTML = `
    <section class="practice-summary">
      <div>
        <h3>Chapter ${module.id} Practice</h3>
        <p>Choose a practice set for this chapter. Questions and options are in English; answers and explanations are in Vietnamese.</p>
      </div>
      <div class="practice-actions">
        <select id="practiceSetSelect" class="practice-set-select" aria-label="Practice set">
          ${sets
            .map(
              (set) =>
                `<option value="${htmlEscape(set.id)}" ${set.id === selectedSet ? "selected" : ""}>${htmlEscape(
                  set.title
                )}</option>`
            )
            .join("")}
          <option value="all" ${selectedSet === "all" ? "selected" : ""}>All questions (${allQuestions.length})</option>
        </select>
        <span class="score-pill">${correct.length}/${questions.length} correct - ${answered.length} answered</span>
        <button class="secondary-button" type="button" id="resetChapterPractice">Reset This Set</button>
      </div>
    </section>
    ${questions
      .map((question, index) =>
        renderQuestionCard(question, index, state.answers[question.id], question.id, [
          question.practiceTitle || "",
          question.k || "",
          question.lo || ""
        ].filter(Boolean))
      )
      .join("")}
  `;

  const selector = elements.contentArea.querySelector("#practiceSetSelect");
  if (selector) {
    selector.addEventListener("change", () => {
      state.practiceSet[module.id] = selector.value;
      persist();
      renderPractice(currentChapter());
    });
  }

  const resetButton = elements.contentArea.querySelector("#resetChapterPractice");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      questions.forEach((question) => delete state.answers[question.id]);
      persist();
      renderPractice(currentChapter());
    });
  }

  elements.contentArea.querySelectorAll("input[type='radio']").forEach((radio) => {
    radio.addEventListener("change", () => {
      state.answers[radio.dataset.questionId] = Number(radio.value);
      persist();
      renderPractice(currentChapter());
    });
  });
}

function currentMockExam() {
  return mockExams.find((exam) => exam.id === state.mockExamId) || mockExams[0];
}

function getMockAnswerStore(examId) {
  if (!state.mockAnswers[examId]) {
    state.mockAnswers[examId] = {};
  }
  return state.mockAnswers[examId];
}

function renderMockExams() {
  if (!mockExams.length) {
    elements.contentArea.innerHTML = `<div class="empty-state">No mock exams are available yet.</div>`;
    return;
  }

  const exam = currentMockExam();
  state.mockExamId = exam.id;
  const answers = getMockAnswerStore(exam.id);
  const answered = exam.questions.filter((question) => answers[question.id] !== undefined);
  const correct = exam.questions.filter((question) => answers[question.id] === question.answer);
  const resultText =
    answered.length === exam.questions.length ? (correct.length >= exam.passMark ? "Passed" : "Needs review") : "In progress";

  elements.contentArea.innerHTML = `
    <section class="mock-layout">
      <aside class="mock-picker" aria-label="Mock exam selector">
        <h3>Mock Exams</h3>
        <p>10 CTFL-style practice papers, each with 40 questions.</p>
        <div class="mock-list">
          ${mockExams
            .map((item) => {
              const itemAnswers = getMockAnswerStore(item.id);
              const itemCorrect = item.questions.filter((question) => itemAnswers[question.id] === question.answer).length;
              const itemAnswered = item.questions.filter((question) => itemAnswers[question.id] !== undefined).length;
              const active = item.id === exam.id ? " active" : "";
              return `
                <button class="mock-link${active}" type="button" data-exam="${htmlEscape(item.id)}">
                  <span>${htmlEscape(item.title)}</span>
                  <strong>${itemCorrect}/${item.questions.length}</strong>
                  <small>${itemAnswered} answered</small>
                </button>
              `;
            })
            .join("")}
        </div>
      </aside>

      <div class="mock-paper">
        <section class="practice-summary">
          <div>
            <h3>${htmlEscape(exam.title)}</h3>
            <p>${htmlEscape(exam.description)}</p>
          </div>
          <span class="score-pill">${correct.length}/40 correct - ${answered.length}/40 answered - ${resultText}</span>
          <button class="secondary-button" type="button" id="resetMockExam">Reset This Exam</button>
        </section>
        ${exam.questions
          .map((question, index) =>
            renderQuestionCard(question, index, answers[question.id], `${exam.id}-${question.id}`, [
              `Chapter ${question.chapter}`,
              question.k,
              question.lo
            ])
          )
          .join("")}
      </div>
    </section>
  `;

  elements.contentArea.querySelectorAll("[data-exam]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mockExamId = button.dataset.exam;
      persist();
      renderMockExams();
    });
  });

  const resetButton = elements.contentArea.querySelector("#resetMockExam");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      state.mockAnswers[exam.id] = {};
      persist();
      renderMockExams();
    });
  }

  elements.contentArea.querySelectorAll("input[type='radio']").forEach((radio) => {
    radio.addEventListener("change", () => {
      const store = getMockAnswerStore(exam.id);
      store[radio.dataset.questionId] = Number(radio.value);
      persist();
      renderMockExams();
    });
  });
}

const apiDemoStore = {
  customers: [
    { customer_id: 1, name: "An Nguyen", email: "an.nguyen@example.com", city: "Ho Chi Minh", status: "ACTIVE" },
    { customer_id: 2, name: "Binh Tran", email: "binh.tran@example.com", city: "Ha Noi", status: "ACTIVE" },
    { customer_id: 4, name: "Dung Pham", email: "dung.pham@example.com", city: "Can Tho", status: "ACTIVE" },
    { customer_id: 5, name: "Eva Ho", email: "eva.ho@example.com", city: "Ho Chi Minh", status: "ACTIVE" },
    { customer_id: 6, name: "Finn Vo", email: "finn.vo@example.com", city: "Hai Phong", status: "BLOCKED" }
  ],
  products: [
    { product_id: 101, product_name: "Wireless Mouse", category: "Accessories", price: 25, stock: 120, active: true },
    { product_id: 102, product_name: "Mechanical Keyboard", category: "Accessories", price: 85, stock: 42, active: true },
    { product_id: 103, product_name: "USB-C Hub", category: "Accessories", price: 45, stock: 60, active: true },
    { product_id: 201, product_name: "Office Chair", category: "Furniture", price: 180, stock: 18, active: true },
    { product_id: 202, product_name: "Standing Desk", category: "Furniture", price: 420, stock: 7, active: true },
    { product_id: 301, product_name: "Noise Canceling Headset", category: "Audio", price: 150, stock: 25, active: true }
  ],
  orders: [
    { order_id: 1001, customer_id: 1, order_date: "2026-04-01", status: "PAID", channel: "WEB" },
    { order_id: 1002, customer_id: 2, order_date: "2026-04-03", status: "PENDING", channel: "APP" },
    { order_id: 1003, customer_id: 1, order_date: "2026-04-07", status: "PAID", channel: "WEB" },
    { order_id: 1004, customer_id: 4, order_date: "2026-04-11", status: "CANCELLED", channel: "WEB" },
    { order_id: 1005, customer_id: 5, order_date: "2026-04-15", status: "PAID", channel: "APP" },
    { order_id: 1006, customer_id: 2, order_date: "2026-04-18", status: "PAID", channel: "WEB" }
  ],
  orderItems: [
    { order_id: 1001, product_id: 101, quantity: 2, unit_price: 25 },
    { order_id: 1001, product_id: 102, quantity: 1, unit_price: 85 },
    { order_id: 1002, product_id: 201, quantity: 1, unit_price: 180 },
    { order_id: 1003, product_id: 202, quantity: 1, unit_price: 420 },
    { order_id: 1003, product_id: 103, quantity: 2, unit_price: 45 },
    { order_id: 1004, product_id: 301, quantity: 1, unit_price: 150 },
    { order_id: 1005, product_id: 201, quantity: 2, unit_price: 180 },
    { order_id: 1005, product_id: 101, quantity: 1, unit_price: 25 },
    { order_id: 1006, product_id: 102, quantity: 2, unit_price: 85 }
  ],
  payments: [
    { payment_id: 5001, order_id: 1001, amount: 135, method: "CARD", status: "SUCCESS" },
    { payment_id: 5002, order_id: 1003, amount: 510, method: "BANK_TRANSFER", status: "SUCCESS" },
    { payment_id: 5003, order_id: 1004, amount: 0, method: "CARD", status: "VOIDED" },
    { payment_id: 5004, order_id: 1005, amount: 385, method: "EWALLET", status: "SUCCESS" },
    { payment_id: 5005, order_id: 1006, amount: 170, method: "CARD", status: "FAILED" }
  ]
};

const apiTokens = {
  "qa-user-token": { role: "user", customer_id: 2 },
  "qa-admin-token": { role: "admin", customer_id: 1 },
  "qa-support-token": { role: "support", customer_id: 4 }
};

const apiEndpointDocs = [
  { method: "GET", path: "/api/products", notes: ["query: category, active", "public catalog search"] },
  { method: "GET", path: "/api/orders", notes: ["requires Authorization", "query: status, sort"] },
  { method: "POST", path: "/api/cart/items", notes: ["requires JSON body", "validates product and quantity"] },
  { method: "GET", path: "/api/admin/customers/{id}/orders", notes: ["admin-only endpoint", "useful for 403 tests"] },
  { method: "POST", path: "/api/checkout", notes: ["requires Idempotency-Key", "creates order and payment"] },
  { method: "GET", path: "/api/orders/{id}/payment-audit", notes: ["support/admin endpoint", "returns data mismatch evidence"] }
];

const apiPracticeTasks = {
  1: {
    id: "api-task-1",
    title: "Search active products",
    scenario: "Product listing page should show active accessories only.",
    prompt: "Send a GET request that returns active Accessories products from the ecommerce catalog.",
    expectedRequest: `GET /api/products?category=Accessories&active=true HTTP/1.1
Accept: application/json`,
    expected: {
      method: "GET",
      path: "/api/products",
      query: { category: "Accessories", active: "true" },
      headers: { Accept: "application/json" },
      status: 200,
      body: {
        data: [
          { product_id: 101, product_name: "Wireless Mouse", category: "Accessories", price: 25, stock: 120 },
          { product_id: 102, product_name: "Mechanical Keyboard", category: "Accessories", price: 85, stock: 42 },
          { product_id: 103, product_name: "USB-C Hub", category: "Accessories", price: 45, stock: 60 }
        ],
        meta: { count: 3 }
      }
    },
    hints: ["Use GET.", "Use category=Accessories.", "Use active=true.", "Ask for application/json."]
  },
  2: {
    id: "api-task-2",
    title: "Filter paid orders",
    scenario: "Order history API must return only paid orders for a tester account.",
    prompt: "Send an authorized GET request for PAID orders sorted by newest order_date first.",
    expectedRequest: `GET /api/orders?status=PAID&sort=-order_date HTTP/1.1
Authorization: Bearer qa-user-token
Accept: application/json`,
    expected: {
      method: "GET",
      path: "/api/orders",
      query: { status: "PAID", sort: "-order_date" },
      headers: { Authorization: "Bearer qa-user-token", Accept: "application/json" },
      status: 200,
      body: {
        data: [
          { order_id: 1006, customer_id: 2, status: "PAID", order_date: "2026-04-18", channel: "WEB", total: 170 },
          { order_id: 1005, customer_id: 5, status: "PAID", order_date: "2026-04-15", channel: "APP", total: 385 },
          { order_id: 1003, customer_id: 1, status: "PAID", order_date: "2026-04-07", channel: "WEB", total: 510 },
          { order_id: 1001, customer_id: 1, status: "PAID", order_date: "2026-04-01", channel: "WEB", total: 135 }
        ],
        meta: { count: 4 }
      }
    },
    hints: ["Use Authorization: Bearer qa-user-token.", "Filter status=PAID.", "Use sort=-order_date."]
  },
  3: {
    id: "api-task-3",
    title: "Add item to cart",
    scenario: "Cart API should validate JSON body fields before checkout.",
    prompt: "Add two Mechanical Keyboards to customer 2's cart.",
    expectedRequest: `POST /api/cart/items HTTP/1.1
Authorization: Bearer qa-user-token
Content-Type: application/json
Accept: application/json

{
  "customer_id": 2,
  "product_id": 102,
  "quantity": 2
}`,
    expected: {
      method: "POST",
      path: "/api/cart/items",
      headers: {
        Authorization: "Bearer qa-user-token",
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: { customer_id: 2, product_id: 102, quantity: 2 },
      status: 201,
      bodyResponse: {
        data: {
          cart_id: "cart-2",
          item_id: "cart-2-102",
          customer_id: 2,
          product_id: 102,
          product_name: "Mechanical Keyboard",
          quantity: 2,
          line_total: 170
        },
        message: "Item added to cart"
      }
    },
    hints: ["Use POST.", "Send JSON body.", "Include Content-Type: application/json.", "quantity must be a positive number."]
  },
  4: {
    id: "api-task-4",
    title: "Verify access control",
    scenario: "A normal user must not access admin customer order history.",
    prompt: "Send a request with a normal user token and verify the API returns 403 Forbidden.",
    expectedRequest: `GET /api/admin/customers/6/orders HTTP/1.1
Authorization: Bearer qa-user-token
Accept: application/json`,
    expected: {
      method: "GET",
      path: "/api/admin/customers/6/orders",
      headers: { Authorization: "Bearer qa-user-token", Accept: "application/json" },
      status: 403,
      body: {
        error: "FORBIDDEN",
        message: "Admin role required"
      }
    },
    hints: ["Use a normal user token.", "Do not use qa-admin-token for this negative test.", "Expected status is 403."]
  },
  5: {
    id: "api-task-5",
    title: "Checkout contract",
    scenario: "Checkout integrates cart, order creation, and payment capture.",
    prompt: "Create a checkout request for customer 2 with one Wireless Mouse and two USB-C Hubs.",
    expectedRequest: `POST /api/checkout HTTP/1.1
Authorization: Bearer qa-user-token
Content-Type: application/json
Idempotency-Key: qa-checkout-1007
Accept: application/json

{
  "customer_id": 2,
  "items": [
    { "product_id": 101, "quantity": 1 },
    { "product_id": 103, "quantity": 2 }
  ],
  "payment": {
    "method": "CARD"
  }
}`,
    expected: {
      method: "POST",
      path: "/api/checkout",
      headers: {
        Authorization: "Bearer qa-user-token",
        "Content-Type": "application/json",
        "Idempotency-Key": "qa-checkout-1007",
        Accept: "application/json"
      },
      body: {
        customer_id: 2,
        items: [
          { product_id: 101, quantity: 1 },
          { product_id: 103, quantity: 2 }
        ],
        payment: { method: "CARD" }
      },
      status: 201,
      bodyResponse: {
        data: {
          order_id: 1007,
          customer_id: 2,
          status: "PAID",
          total: 115,
          payment: { method: "CARD", status: "SUCCESS" },
          idempotency_key: "qa-checkout-1007"
        },
        message: "Checkout completed"
      }
    },
    hints: ["Use Idempotency-Key for safe retry.", "Body must include items array.", "Total should be 25 + 45 * 2 = 115."]
  },
  6: {
    id: "api-task-6",
    title: "Capture payment audit evidence",
    scenario: "Bug report evidence should prove an order marked PAID has a failed payment.",
    prompt: "Send a support request for order 1006 payment audit and verify the mismatch response.",
    expectedRequest: `GET /api/orders/1006/payment-audit HTTP/1.1
Authorization: Bearer qa-support-token
Accept: application/json`,
    expected: {
      method: "GET",
      path: "/api/orders/1006/payment-audit",
      headers: { Authorization: "Bearer qa-support-token", Accept: "application/json" },
      status: 409,
      body: {
        error: "PAYMENT_STATUS_MISMATCH",
        message: "Order is PAID but latest payment is FAILED.",
        data: {
          order_id: 1006,
          order_status: "PAID",
          payment_status: "FAILED",
          expected_payment_status: "SUCCESS"
        }
      }
    },
    hints: ["Use qa-support-token.", "Order 1006 is the inconsistent record.", "Expected status is 409."]
  }
};

function formatJson(value) {
  return JSON.stringify(value, null, 2);
}

function normalizeHeaderName(name) {
  return String(name || "").trim().toLowerCase();
}

function getHeader(headers, name) {
  return headers[normalizeHeaderName(name)] || "";
}

function parseApiRequest(rawRequest) {
  const text = String(rawRequest || "").replace(/\r\n/g, "\n").trim();
  if (!text) throw new Error("Request is empty.");

  const lines = text.split("\n");
  const requestLine = lines.shift().trim();
  const requestMatch = requestLine.match(/^(GET|POST|PUT|PATCH|DELETE)\s+(\S+)(?:\s+HTTP\/\d(?:\.\d)?)?$/i);
  if (!requestMatch) {
    throw new Error("First line must look like: GET /api/products?active=true HTTP/1.1");
  }

  const headers = {};
  while (lines.length && lines[0].trim() !== "") {
    const line = lines.shift();
    const separatorIndex = line.indexOf(":");
    if (separatorIndex < 0) throw new Error(`Invalid header line: ${line}`);
    const name = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    headers[normalizeHeaderName(name)] = value;
  }
  if (lines.length && lines[0].trim() === "") lines.shift();

  const bodyText = lines.join("\n").trim();
  let body = null;
  if (bodyText) {
    try {
      body = JSON.parse(bodyText);
    } catch (error) {
      throw new Error(`Body is not valid JSON: ${error.message}`);
    }
  }

  const url = new URL(requestMatch[2], "https://qa-shop.test");
  return {
    method: requestMatch[1].toUpperCase(),
    path: url.pathname,
    query: Object.fromEntries(url.searchParams.entries()),
    headers,
    body,
    bodyText,
    target: requestMatch[2]
  };
}

function readAuthContext(parsed) {
  const auth = getHeader(parsed.headers, "Authorization");
  const match = auth.match(/^Bearer\s+(.+)$/i);
  return match ? apiTokens[match[1]] : null;
}

function unauthorizedResponse() {
  return { status: 401, body: { error: "UNAUTHORIZED", message: "Valid bearer token required" } };
}

function unsupportedJsonResponse() {
  return { status: 415, body: { error: "UNSUPPORTED_MEDIA_TYPE", message: "Content-Type must be application/json" } };
}

function validationResponse(message) {
  return { status: 400, body: { error: "VALIDATION_ERROR", message } };
}

function productPublicView(product) {
  return {
    product_id: product.product_id,
    product_name: product.product_name,
    category: product.category,
    price: product.price,
    stock: product.stock
  };
}

function orderTotal(orderId) {
  return apiDemoStore.orderItems
    .filter((item) => item.order_id === orderId)
    .reduce((total, item) => total + item.quantity * item.unit_price, 0);
}

function orderSummary(order) {
  return {
    order_id: order.order_id,
    customer_id: order.customer_id,
    status: order.status,
    order_date: order.order_date,
    channel: order.channel,
    total: orderTotal(order.order_id)
  };
}

function hasJsonContentType(parsed) {
  return getHeader(parsed.headers, "Content-Type").toLowerCase().includes("application/json");
}

function runMockApi(parsed) {
  if (parsed.method === "GET" && parsed.path === "/api/products") {
    let products = apiDemoStore.products.slice();
    if (parsed.query.category) products = products.filter((product) => product.category === parsed.query.category);
    if (parsed.query.active !== undefined) {
      const expectedActive = ["true", "1"].includes(String(parsed.query.active).toLowerCase());
      products = products.filter((product) => product.active === expectedActive);
    }
    const data = products.map(productPublicView);
    return { status: 200, body: { data, meta: { count: data.length } } };
  }

  if (parsed.method === "GET" && parsed.path === "/api/orders") {
    if (!readAuthContext(parsed)) return unauthorizedResponse();
    let orders = apiDemoStore.orders.slice();
    if (parsed.query.status) orders = orders.filter((order) => order.status === parsed.query.status);
    let data = orders.map(orderSummary);
    if (parsed.query.sort === "-order_date") {
      data = data.sort((left, right) => right.order_date.localeCompare(left.order_date));
    }
    return { status: 200, body: { data, meta: { count: data.length } } };
  }

  if (parsed.method === "POST" && parsed.path === "/api/cart/items") {
    if (!readAuthContext(parsed)) return unauthorizedResponse();
    if (!hasJsonContentType(parsed)) return unsupportedJsonResponse();
    const body = parsed.body || {};
    if (!body.customer_id || !body.product_id || !body.quantity) {
      return validationResponse("customer_id, product_id and quantity are required.");
    }
    const product = apiDemoStore.products.find((item) => item.product_id === Number(body.product_id));
    if (!product || !product.active) return { status: 404, body: { error: "PRODUCT_NOT_FOUND" } };
    if (Number(body.quantity) < 1 || Number(body.quantity) > product.stock) {
      return validationResponse("quantity must be positive and must not exceed stock.");
    }
    return {
      status: 201,
      body: {
        data: {
          cart_id: `cart-${body.customer_id}`,
          item_id: `cart-${body.customer_id}-${body.product_id}`,
          customer_id: Number(body.customer_id),
          product_id: Number(body.product_id),
          product_name: product.product_name,
          quantity: Number(body.quantity),
          line_total: Number(body.quantity) * product.price
        },
        message: "Item added to cart"
      }
    };
  }

  const adminOrdersMatch = parsed.path.match(/^\/api\/admin\/customers\/(\d+)\/orders$/);
  if (parsed.method === "GET" && adminOrdersMatch) {
    const auth = readAuthContext(parsed);
    if (!auth) return unauthorizedResponse();
    if (auth.role !== "admin") return { status: 403, body: { error: "FORBIDDEN", message: "Admin role required" } };
    const customerId = Number(adminOrdersMatch[1]);
    const data = apiDemoStore.orders.filter((order) => order.customer_id === customerId).map(orderSummary);
    return { status: 200, body: { data, meta: { count: data.length } } };
  }

  if (parsed.method === "POST" && parsed.path === "/api/checkout") {
    if (!readAuthContext(parsed)) return unauthorizedResponse();
    if (!hasJsonContentType(parsed)) return unsupportedJsonResponse();
    const idempotencyKey = getHeader(parsed.headers, "Idempotency-Key");
    if (!idempotencyKey) return validationResponse("Idempotency-Key header is required.");
    const body = parsed.body || {};
    if (!body.customer_id || !Array.isArray(body.items) || !body.items.length || !body.payment?.method) {
      return validationResponse("customer_id, items and payment.method are required.");
    }
    const total = body.items.reduce((sum, item) => {
      const product = apiDemoStore.products.find((candidate) => candidate.product_id === Number(item.product_id));
      return sum + (product ? product.price * Number(item.quantity) : 0);
    }, 0);
    return {
      status: 201,
      body: {
        data: {
          order_id: 1007,
          customer_id: Number(body.customer_id),
          status: "PAID",
          total,
          payment: { method: body.payment.method, status: "SUCCESS" },
          idempotency_key: idempotencyKey
        },
        message: "Checkout completed"
      }
    };
  }

  const paymentAuditMatch = parsed.path.match(/^\/api\/orders\/(\d+)\/payment-audit$/);
  if (parsed.method === "GET" && paymentAuditMatch) {
    const auth = readAuthContext(parsed);
    if (!auth) return unauthorizedResponse();
    if (!["support", "admin"].includes(auth.role)) {
      return { status: 403, body: { error: "FORBIDDEN", message: "Support or admin role required" } };
    }
    const orderId = Number(paymentAuditMatch[1]);
    const order = apiDemoStore.orders.find((item) => item.order_id === orderId);
    const payment = apiDemoStore.payments.find((item) => item.order_id === orderId);
    if (!order || !payment) return { status: 404, body: { error: "NOT_FOUND" } };
    if (order.status === "PAID" && payment.status !== "SUCCESS") {
      return {
        status: 409,
        body: {
          error: "PAYMENT_STATUS_MISMATCH",
          message: "Order is PAID but latest payment is FAILED.",
          data: {
            order_id: order.order_id,
            order_status: order.status,
            payment_status: payment.status,
            expected_payment_status: "SUCCESS"
          }
        }
      };
    }
    return { status: 200, body: { data: { order_id: order.order_id, order_status: order.status, payment_status: payment.status } } };
  }

  return { status: 404, body: { error: "NOT_FOUND", message: `${parsed.method} ${parsed.path} is not mocked.` } };
}

function deepEqual(left, right) {
  if (left === right) return true;
  if (typeof left !== typeof right) return false;
  if (left === null || right === null) return left === right;
  if (Array.isArray(left) || Array.isArray(right)) {
    return (
      Array.isArray(left) &&
      Array.isArray(right) &&
      left.length === right.length &&
      left.every((item, index) => deepEqual(item, right[index]))
    );
  }
  if (typeof left === "object") {
    const leftKeys = Object.keys(left);
    const rightKeys = Object.keys(right);
    return (
      leftKeys.length === rightKeys.length &&
      leftKeys.every((key) => Object.prototype.hasOwnProperty.call(right, key) && deepEqual(left[key], right[key]))
    );
  }
  return false;
}

function containsSubset(actual, expected) {
  if (expected === undefined) return true;
  if (expected === null || typeof expected !== "object") return actual === expected;
  if (Array.isArray(expected)) {
    return Array.isArray(actual) && expected.length === actual.length && expected.every((item, index) => containsSubset(actual[index], item));
  }
  return Object.entries(expected).every(([key, value]) => containsSubset(actual?.[key], value));
}

function expectedResponseBody(task) {
  return task.expected.responseBody || task.expected.bodyResponse || task.expected.body || {};
}

function expectedRequestBody(task) {
  if (task.expected.requestBody) return task.expected.requestBody;
  if (task.expected.bodyResponse) return task.expected.body || {};
  return {};
}

function headerMatches(actual, expected, name) {
  if (!actual) return false;
  if (normalizeHeaderName(name) === "accept" || normalizeHeaderName(name) === "content-type") {
    return actual.toLowerCase().includes(String(expected).toLowerCase());
  }
  return actual === expected;
}

function buildApiChecks(task, parsed, actualResponse) {
  const expected = task.expected;
  const requiredHeaders = expected.headers || {};
  const checks = [
    {
      label: "Method",
      passed: parsed.method === expected.method,
      expected: expected.method,
      actual: parsed.method
    },
    {
      label: "Endpoint path",
      passed: parsed.path === expected.path,
      expected: expected.path,
      actual: parsed.path
    },
    {
      label: "Query parameters",
      passed: containsSubset(parsed.query, expected.query || {}),
      expected: expected.query || {},
      actual: parsed.query
    },
    {
      label: "Headers",
      passed: Object.entries(requiredHeaders).every(([name, value]) => headerMatches(getHeader(parsed.headers, name), value, name)),
      expected: requiredHeaders,
      actual: Object.fromEntries(Object.keys(requiredHeaders).map((name) => [name, getHeader(parsed.headers, name) || "(missing)"]))
    },
    {
      label: "JSON body",
      passed: containsSubset(parsed.body || {}, expectedRequestBody(task)),
      expected: expectedRequestBody(task),
      actual: parsed.body || {}
    },
    {
      label: "Response status",
      passed: actualResponse.status === expected.status,
      expected: expected.status,
      actual: actualResponse.status
    },
    {
      label: "Response body",
      passed: deepEqual(actualResponse.body, expectedResponseBody(task)),
      expected: expectedResponseBody(task),
      actual: actualResponse.body
    }
  ];

  return checks;
}

function renderApiCheckList(checks) {
  return `
    <div class="api-check-list">
      ${checks
        .map(
          (check) => `
            <div class="api-check ${check.passed ? "pass" : "fail"}">
              <strong>${check.passed ? "Đúng" : "Sai"} - ${htmlEscape(check.label)}</strong>
              <span>Expected: <code>${htmlEscape(typeof check.expected === "object" ? formatJson(check.expected) : check.expected)}</code></span>
              <span>Actual: <code>${htmlEscape(typeof check.actual === "object" ? formatJson(check.actual) : check.actual)}</code></span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderApiResult(parsed, actualResponse, checks) {
  return `
    <section class="api-result-grid">
      <article class="api-result-card">
        <h3>Parsed Request</h3>
        <pre class="api-response">${htmlEscape(
          formatJson({
            method: parsed.method,
            path: parsed.path,
            query: parsed.query,
            headers: parsed.headers,
            body: parsed.body
          })
        )}</pre>
      </article>
      <article class="api-result-card">
        <h3>Mock API Response</h3>
        <pre class="api-response">${htmlEscape(formatJson(actualResponse))}</pre>
      </article>
      <article class="api-result-card api-result-card-wide">
        <h3>Commit Checks</h3>
        ${renderApiCheckList(checks)}
      </article>
    </section>
  `;
}

function renderApiPracticePlayground(module) {
  const task = apiPracticeTasks[module.id] || apiPracticeTasks[1];
  const requestKey = `${state.courseId}:${module.id}:${task.id}`;
  const savedRequest = state.apiPracticeRequests[requestKey] || task.expectedRequest;

  elements.contentArea.innerHTML = `
    <section class="api-service-panel">
      <div class="sql-db-header">
        <div>
          <h3>QA Shop Mock API</h3>
          <p>Offline ecommerce API for catalog, orders, cart, checkout, admin access, and payment audit testing.</p>
        </div>
        <span class="badge">Raw HTTP request</span>
      </div>
      <div class="api-endpoint-grid">
        ${apiEndpointDocs
          .map(
            (endpoint) => `
              <article class="api-endpoint-card">
                <span class="method-chip">${htmlEscape(endpoint.method)}</span>
                <code>${htmlEscape(endpoint.path)}</code>
                <ul>${endpoint.notes.map((note) => `<li>${htmlEscape(note)}</li>`).join("")}</ul>
              </article>
            `
          )
          .join("")}
      </div>
      <details class="data-preview">
        <summary>Preview mock API data and tokens</summary>
        <pre class="json-preview">${htmlEscape(
          formatJson({
            tokens: Object.keys(apiTokens),
            products: apiDemoStore.products.map(productPublicView),
            orders: apiDemoStore.orders.map(orderSummary),
            payments: apiDemoStore.payments
          })
        )}</pre>
      </details>
    </section>

    <section class="api-runner">
      <div class="sql-task">
        <div>
          <span class="badge">${htmlEscape(task.id)}</span>
          <h3>${htmlEscape(task.title)}</h3>
          <p>${htmlEscape(task.scenario)}</p>
        </div>
        <div class="takeaway">${htmlEscape(task.prompt)}</div>
        <ul class="key-list">${task.hints.map((hint) => `<li>${htmlEscape(hint)}</li>`).join("")}</ul>
      </div>

      <label class="sql-editor-label" for="apiRequestEditor">Your API request</label>
      <textarea id="apiRequestEditor" class="sql-editor api-editor" spellcheck="false">${htmlEscape(savedRequest)}</textarea>
      <div class="sql-actions">
        <button class="primary-button" type="button" id="runApiPractice">Run / Commit Request</button>
        <button class="secondary-button" type="button" id="resetApiPractice">Reset Expected Request</button>
      </div>
      <div id="apiFeedback" class="sql-feedback" aria-live="polite"></div>
      <div id="apiResultArea"></div>

      <details class="expected-api">
        <summary>Expected request and response</summary>
        <h4>Expected request</h4>
        <pre class="api-response">${htmlEscape(task.expectedRequest)}</pre>
        <h4>Expected response</h4>
        <pre class="api-response">${htmlEscape(formatJson({ status: task.expected.status, body: expectedResponseBody(task) }))}</pre>
      </details>
    </section>
  `;

  const editor = elements.contentArea.querySelector("#apiRequestEditor");
  const feedback = elements.contentArea.querySelector("#apiFeedback");
  const resultArea = elements.contentArea.querySelector("#apiResultArea");

  function runPractice() {
    const rawRequest = editor.value.trim();
    state.apiPracticeRequests[requestKey] = rawRequest;
    persist();
    try {
      const parsed = parseApiRequest(rawRequest);
      const actualResponse = runMockApi(parsed);
      const checks = buildApiChecks(task, parsed, actualResponse);
      const failed = checks.filter((check) => !check.passed);
      feedback.className = `sql-feedback ${failed.length ? "warning" : "success"}`;
      feedback.textContent = failed.length
        ? `Request chạy được nhưng còn ${failed.length} check sai. Xem từng dòng đúng/sai bên dưới để sửa request.`
        : `Success: request đúng và response khớp expected answer.`;
      resultArea.innerHTML = renderApiResult(parsed, actualResponse, checks);
    } catch (error) {
      feedback.className = "sql-feedback error";
      feedback.textContent = `API request error: ${error.message}`;
      resultArea.innerHTML = "";
    }
  }

  elements.contentArea.querySelector("#runApiPractice").addEventListener("click", runPractice);
  elements.contentArea.querySelector("#resetApiPractice").addEventListener("click", () => {
    editor.value = task.expectedRequest;
    runPractice();
  });
  editor.addEventListener("input", () => {
    state.apiPracticeRequests[requestKey] = editor.value;
    persist();
  });
}

const sqlDemoDatabase = {
  customers: [
    { customer_id: 1, name: "An Nguyen", email: "an.nguyen@example.com", city: "Ho Chi Minh", status: "ACTIVE", created_at: "2025-11-02" },
    { customer_id: 2, name: "Binh Tran", email: "binh.tran@example.com", city: "Ha Noi", status: "ACTIVE", created_at: "2025-11-16" },
    { customer_id: 3, name: "Chi Le", email: "chi.le@example.com", city: "Da Nang", status: "INACTIVE", created_at: "2025-12-01" },
    { customer_id: 4, name: "Dung Pham", email: "dung.pham@example.com", city: "Can Tho", status: "ACTIVE", created_at: "2026-01-08" },
    { customer_id: 5, name: "Eva Ho", email: "eva.ho@example.com", city: "Ho Chi Minh", status: "ACTIVE", created_at: "2026-02-10" },
    { customer_id: 6, name: "Finn Vo", email: "finn.vo@example.com", city: "Hai Phong", status: "BLOCKED", created_at: "2026-03-05" }
  ],
  products: [
    { product_id: 101, product_name: "Wireless Mouse", category: "Accessories", price: 25, stock: 120, active: 1 },
    { product_id: 102, product_name: "Mechanical Keyboard", category: "Accessories", price: 85, stock: 42, active: 1 },
    { product_id: 103, product_name: "USB-C Hub", category: "Accessories", price: 45, stock: 60, active: 1 },
    { product_id: 201, product_name: "Office Chair", category: "Furniture", price: 180, stock: 18, active: 1 },
    { product_id: 202, product_name: "Standing Desk", category: "Furniture", price: 420, stock: 7, active: 1 },
    { product_id: 301, product_name: "Noise Canceling Headset", category: "Audio", price: 150, stock: 25, active: 1 }
  ],
  orders: [
    { order_id: 1001, customer_id: 1, order_date: "2026-04-01", status: "PAID", channel: "WEB" },
    { order_id: 1002, customer_id: 2, order_date: "2026-04-03", status: "PENDING", channel: "APP" },
    { order_id: 1003, customer_id: 1, order_date: "2026-04-07", status: "PAID", channel: "WEB" },
    { order_id: 1004, customer_id: 4, order_date: "2026-04-11", status: "CANCELLED", channel: "WEB" },
    { order_id: 1005, customer_id: 5, order_date: "2026-04-15", status: "PAID", channel: "APP" },
    { order_id: 1006, customer_id: 2, order_date: "2026-04-18", status: "PAID", channel: "WEB" }
  ],
  order_items: [
    { order_item_id: 1, order_id: 1001, product_id: 101, quantity: 2, unit_price: 25 },
    { order_item_id: 2, order_id: 1001, product_id: 102, quantity: 1, unit_price: 85 },
    { order_item_id: 3, order_id: 1002, product_id: 201, quantity: 1, unit_price: 180 },
    { order_item_id: 4, order_id: 1003, product_id: 202, quantity: 1, unit_price: 420 },
    { order_item_id: 5, order_id: 1003, product_id: 103, quantity: 2, unit_price: 45 },
    { order_item_id: 6, order_id: 1004, product_id: 301, quantity: 1, unit_price: 150 },
    { order_item_id: 7, order_id: 1005, product_id: 201, quantity: 2, unit_price: 180 },
    { order_item_id: 8, order_id: 1005, product_id: 101, quantity: 1, unit_price: 25 },
    { order_item_id: 9, order_id: 1006, product_id: 102, quantity: 2, unit_price: 85 }
  ],
  payments: [
    { payment_id: 5001, order_id: 1001, payment_date: "2026-04-01", amount: 135, method: "CARD", status: "SUCCESS" },
    { payment_id: 5002, order_id: 1003, payment_date: "2026-04-07", amount: 510, method: "BANK_TRANSFER", status: "SUCCESS" },
    { payment_id: 5003, order_id: 1004, payment_date: "2026-04-11", amount: 0, method: "CARD", status: "VOIDED" },
    { payment_id: 5004, order_id: 1005, payment_date: "2026-04-15", amount: 385, method: "EWALLET", status: "SUCCESS" },
    { payment_id: 5005, order_id: 1006, payment_date: "2026-04-18", amount: 170, method: "CARD", status: "FAILED" }
  ]
};

const sqlTableMeta = {
  customers: ["customer_id PK", "name", "email", "city", "status", "created_at"],
  products: ["product_id PK", "product_name", "category", "price", "stock", "active"],
  orders: ["order_id PK", "customer_id FK -> customers", "order_date", "status", "channel"],
  order_items: ["order_item_id PK", "order_id FK -> orders", "product_id FK -> products", "quantity", "unit_price"],
  payments: ["payment_id PK", "order_id FK -> orders", "payment_date", "amount", "method", "status"]
};

const sqlPracticeTasks = {
  1: {
    id: "sql-task-1",
    title: "Find active customers",
    scenario: "Business asks: list active customers so QA can choose valid test accounts.",
    prompt: "Return customer_id, name, city for ACTIVE customers, sorted by customer_id.",
    expectedSql:
      "SELECT customer_id, name, city\nFROM customers\nWHERE status = 'ACTIVE'\nORDER BY customer_id;",
    hints: ["Use customers table.", "Filter status = 'ACTIVE'.", "Sort by customer_id."]
  },
  2: {
    id: "sql-task-2",
    title: "Filter paid orders",
    scenario: "Checkout report should include paid orders only.",
    prompt: "Return order_id, customer_id, status, order_date for PAID orders, newest first.",
    expectedSql:
      "SELECT order_id, customer_id, status, order_date\nFROM orders\nWHERE status = 'PAID'\nORDER BY order_date DESC;",
    hints: ["Use WHERE for status.", "Use ORDER BY order_date DESC."]
  },
  3: {
    id: "sql-task-3",
    title: "Verify order detail with JOINs",
    scenario: "API GET /orders/1001 returns customer name and product lines. Verify the relational data.",
    prompt: "For order 1001, return order_id, name, product_name, quantity. Sort by product_name.",
    expectedSql:
      "SELECT order_id, name, product_name, quantity\nFROM orders o\nJOIN customers c ON c.customer_id = o.customer_id\nJOIN order_items oi ON oi.order_id = o.order_id\nJOIN products p ON p.product_id = oi.product_id\nWHERE order_id = 1001\nORDER BY product_name;",
    hints: ["Join orders -> customers -> order_items -> products.", "Filter order_id = 1001."]
  },
  4: {
    id: "sql-task-4",
    title: "Revenue by category",
    scenario: "Finance dashboard shows paid revenue grouped by product category.",
    prompt: "Return category and revenue for paid orders only. Revenue is SUM(quantity * unit_price). Show groups above 500, highest first.",
    expectedSql:
      "SELECT category, SUM(quantity * unit_price) AS revenue\nFROM orders o\nJOIN order_items oi ON oi.order_id = o.order_id\nJOIN products p ON p.product_id = oi.product_id\nWHERE o.status = 'PAID'\nGROUP BY category\nHAVING revenue > 500\nORDER BY revenue DESC;",
    hints: ["Use SUM(quantity * unit_price).", "Use GROUP BY category.", "Use HAVING for grouped revenue."]
  },
  5: {
    id: "sql-task-5",
    title: "Find paid orders with failed payment",
    scenario: "Data integrity check: a PAID order should not have a failed payment.",
    prompt: "Return order_id, status, payment_status for orders marked PAID but payment status is not SUCCESS.",
    expectedSql:
      "SELECT order_id, o.status, p.status AS payment_status\nFROM orders o\nJOIN payments p ON p.order_id = o.order_id\nWHERE o.status = 'PAID' AND p.status <> 'SUCCESS'\nORDER BY order_id;",
    hints: ["Join orders and payments.", "Use <> for not equal.", "Alias p.status AS payment_status."]
  },
  6: {
    id: "sql-task-6",
    title: "Customer paid spending",
    scenario: "Loyalty feature needs customers whose paid spending is above 500.",
    prompt: "Return customer_id, name, paid_total for paid orders. paid_total is SUM(quantity * unit_price). Show only paid_total above 500, highest first.",
    expectedSql:
      "SELECT customer_id, name, SUM(quantity * unit_price) AS paid_total\nFROM customers c\nJOIN orders o ON o.customer_id = c.customer_id\nJOIN order_items oi ON oi.order_id = o.order_id\nWHERE o.status = 'PAID'\nGROUP BY customer_id, name\nHAVING paid_total > 500\nORDER BY paid_total DESC;",
    hints: ["Join customers -> orders -> order_items.", "Filter paid orders before grouping.", "Use HAVING paid_total > 500."]
  }
};

function splitTopLevel(value, separator = ",") {
  const parts = [];
  let current = "";
  let depth = 0;
  let quote = "";
  for (const char of value) {
    if (quote) {
      current += char;
      if (char === quote) quote = "";
      continue;
    }
    if (char === "'" || char === '"') {
      quote = char;
      current += char;
      continue;
    }
    if (char === "(") depth += 1;
    if (char === ")") depth -= 1;
    if (char === separator && depth === 0) {
      parts.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function findClause(sql, keyword) {
  const pattern = new RegExp(`\\b${keyword.replace(" ", "\\s+")}\\b`, "i");
  const match = pattern.exec(sql);
  return match ? match.index : -1;
}

function parseSqlClauses(sql) {
  const text = sql.trim().replace(/;$/, "");
  if (!/^SELECT\s/i.test(text)) {
    throw new Error("Only SELECT statements are allowed in this practice database.");
  }

  const fromIndex = findClause(text, "FROM");
  if (fromIndex < 0) throw new Error("Syntax error: missing FROM clause.");

  const positions = [
    ["WHERE", findClause(text, "WHERE")],
    ["GROUP BY", findClause(text, "GROUP BY")],
    ["HAVING", findClause(text, "HAVING")],
    ["ORDER BY", findClause(text, "ORDER BY")]
  ].filter(([, index]) => index > fromIndex);

  function clauseEnd(startIndex) {
    const next = positions.map(([, index]) => index).filter((index) => index > startIndex).sort((a, b) => a - b)[0];
    return next || text.length;
  }

  function readClause(keyword) {
    const start = findClause(text, keyword);
    if (start < 0) return "";
    return text.slice(start + keyword.length, clauseEnd(start)).trim();
  }

  return {
    select: text.slice(6, fromIndex).trim(),
    from: text.slice(fromIndex + 4, positions.map(([, index]) => index).sort((a, b) => a - b)[0] || text.length).trim(),
    where: readClause("WHERE"),
    groupBy: readClause("GROUP BY"),
    having: readClause("HAVING"),
    orderBy: readClause("ORDER BY")
  };
}

function parseTableRef(value) {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) throw new Error("Syntax error: missing table name.");
  const table = parts[0];
  if (!sqlDemoDatabase[table]) throw new Error(`Unknown table: ${table}`);
  const alias = parts[1] && parts[1].toUpperCase() !== "AS" ? parts[1] : parts[2] || table;
  return { table, alias };
}

function qualifyRow(row, table, alias) {
  const output = {};
  Object.entries(row).forEach(([key, value]) => {
    output[`${table}.${key}`] = value;
    output[`${alias}.${key}`] = value;
    if (output[key] === undefined) output[key] = value;
  });
  return output;
}

function valueFromRow(row, token) {
  const name = token.trim();
  if (/^'.*'$/.test(name) || /^".*"$/.test(name)) return name.slice(1, -1);
  if (/^-?\d+(\.\d+)?$/.test(name)) return Number(name);
  if (row[name] !== undefined) return row[name];
  const matches = Object.keys(row).filter((key) => key.endsWith(`.${name}`));
  if (matches.length === 1) return row[matches[0]];
  if (matches.length > 1) throw new Error(`Ambiguous column: ${name}. Use table alias, for example o.${name}.`);
  throw new Error(`Unknown column: ${name}`);
}

function evalExpression(row, expression) {
  const expr = expression.trim();
  if (expr.includes("*")) {
    return splitTopLevel(expr, "*").reduce((total, item) => total * Number(evalExpression(row, item)), 1);
  }
  return valueFromRow(row, expr);
}

function compareValues(left, operator, right) {
  if (operator === "=") return left === right;
  if (operator === "<>" || operator === "!=") return left !== right;
  if (operator === ">") return left > right;
  if (operator === "<") return left < right;
  if (operator === ">=") return left >= right;
  if (operator === "<=") return left <= right;
  if (operator.toUpperCase() === "LIKE") {
    const regex = new RegExp(`^${String(right).replaceAll("%", ".*")}$`, "i");
    return regex.test(String(left));
  }
  throw new Error(`Unsupported operator: ${operator}`);
}

function evalCondition(row, condition) {
  return condition
    .split(/\s+AND\s+/i)
    .map((part) => part.trim())
    .every((part) => {
      const match = part.match(/^(.+?)\s*(<>|!=|>=|<=|=|>|<|LIKE)\s*(.+)$/i);
      if (!match) throw new Error(`Unsupported WHERE/HAVING condition: ${part}`);
      const [, leftExpr, operator, rightExpr] = match;
      return compareValues(evalExpression(row, leftExpr), operator, evalExpression(row, rightExpr));
    });
}

function parseSelectItem(item) {
  const aliasMatch = item.match(/^(.+?)\s+AS\s+([a-z_][\w]*)$/i);
  if (aliasMatch) return { expression: aliasMatch[1].trim(), alias: aliasMatch[2] };
  const clean = item.trim();
  const aggregateAlias = clean.match(/^(SUM|COUNT|AVG|MIN|MAX)\s*\(/i)
    ? clean.replace(/[^\w]+/g, "_").replace(/^_|_$/g, "").toLowerCase()
    : null;
  const alias = aggregateAlias || clean.split(".").pop();
  return { expression: clean, alias };
}

function aggregateValue(rows, expression) {
  const match = expression.match(/^(SUM|COUNT|AVG|MIN|MAX)\s*\((.*)\)$/i);
  if (!match) return evalExpression(rows[0], expression);
  const fn = match[1].toUpperCase();
  const inner = match[2].trim();
  if (fn === "COUNT" && inner === "*") return rows.length;
  const values = rows.map((row) => Number(evalExpression(row, inner)));
  if (fn === "SUM") return values.reduce((sum, value) => sum + value, 0);
  if (fn === "AVG") return values.reduce((sum, value) => sum + value, 0) / values.length;
  if (fn === "MIN") return Math.min(...values);
  if (fn === "MAX") return Math.max(...values);
  throw new Error(`Unsupported aggregate: ${fn}`);
}

function rowsFromClause(fromClause) {
  const firstJoin = fromClause.search(/\b(?:LEFT\s+JOIN|INNER\s+JOIN|JOIN)\b/i);
  const baseRef = parseTableRef(firstJoin >= 0 ? fromClause.slice(0, firstJoin) : fromClause);
  let rows = sqlDemoDatabase[baseRef.table].map((row) => qualifyRow(row, baseRef.table, baseRef.alias));
  const joinText = firstJoin >= 0 ? fromClause.slice(firstJoin) : "";
  const joinRegex = /\b(LEFT\s+JOIN|INNER\s+JOIN|JOIN)\s+([a-z_][\w]*)(?:\s+(?:AS\s+)?([a-z_][\w]*))?\s+ON\s+([\s\S]*?)(?=\b(?:LEFT\s+JOIN|INNER\s+JOIN|JOIN)\b|$)/gi;
  let match;
  while ((match = joinRegex.exec(joinText))) {
    const joinType = match[1].toUpperCase();
    const table = match[2];
    const alias = match[3] || table;
    const condition = match[4].trim();
    if (!sqlDemoDatabase[table]) throw new Error(`Unknown table: ${table}`);
    const rightRows = sqlDemoDatabase[table].map((row) => qualifyRow(row, table, alias));
    const joined = [];
    rows.forEach((leftRow) => {
      const matches = rightRows.filter((rightRow) => evalCondition({ ...leftRow, ...rightRow }, condition));
      if (matches.length) {
        matches.forEach((rightRow) => joined.push({ ...leftRow, ...rightRow }));
      } else if (joinType.startsWith("LEFT")) {
        joined.push(leftRow);
      }
    });
    rows = joined;
  }
  return rows;
}

function runMiniSql(sql) {
  if (/\b(INSERT|UPDATE|DELETE|DROP|ALTER|TRUNCATE|CREATE)\b/i.test(sql)) {
    throw new Error("This playground is read-only. Use SELECT queries only.");
  }
  const clauses = parseSqlClauses(sql);
  const selectItems = splitTopLevel(clauses.select).map(parseSelectItem);
  let rows = rowsFromClause(clauses.from);
  if (clauses.where) rows = rows.filter((row) => evalCondition(row, clauses.where));

  let outputRows;
  if (clauses.groupBy) {
    const groupExpressions = splitTopLevel(clauses.groupBy);
    const groups = new Map();
    rows.forEach((row) => {
      const key = JSON.stringify(groupExpressions.map((expression) => evalExpression(row, expression)));
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(row);
    });
    outputRows = Array.from(groups.values()).map((groupRows) => {
      const projected = {};
      selectItems.forEach((item) => {
        projected[item.alias] = aggregateValue(groupRows, item.expression);
      });
      return projected;
    });
    if (clauses.having) outputRows = outputRows.filter((row) => evalCondition(row, clauses.having));
  } else {
    outputRows = rows.map((row) => {
      const projected = {};
      selectItems.forEach((item) => {
        if (item.expression === "*") {
          Object.entries(row)
            .filter(([key]) => !key.includes("."))
            .forEach(([key, value]) => {
              projected[key] = value;
            });
        } else {
          projected[item.alias] = evalExpression(row, item.expression);
        }
      });
      return projected;
    });
  }

  if (clauses.orderBy) {
    const orderItems = splitTopLevel(clauses.orderBy).map((item) => {
      const match = item.match(/^(.+?)\s+(ASC|DESC)$/i);
      return { expression: (match ? match[1] : item).trim().split(".").pop(), direction: match ? match[2].toUpperCase() : "ASC" };
    });
    outputRows.sort((a, b) => {
      for (const item of orderItems) {
        const left = a[item.expression];
        const right = b[item.expression];
        if (left < right) return item.direction === "DESC" ? 1 : -1;
        if (left > right) return item.direction === "DESC" ? -1 : 1;
      }
      return 0;
    });
  }

  return outputRows;
}

function normalizeSqlResult(rows) {
  return JSON.stringify(rows);
}

function renderResultTable(rows) {
  if (!rows.length) return `<div class="empty-state">Query ran successfully but returned 0 records.</div>`;
  const columns = Object.keys(rows[0]);
  return `
    <div class="result-table-wrap">
      <table class="result-table">
        <thead><tr>${columns.map((column) => `<th>${htmlEscape(column)}</th>`).join("")}</tr></thead>
        <tbody>
          ${rows
            .map((row) => `<tr>${columns.map((column) => `<td>${htmlEscape(row[column])}</td>`).join("")}</tr>`)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderSqlPracticePlayground(module) {
  const task = sqlPracticeTasks[module.id] || sqlPracticeTasks[1];
  const queryKey = `${state.courseId}:${module.id}:${task.id}`;
  const savedQuery = state.sqlPracticeQueries[queryKey] || task.expectedSql;

  elements.contentArea.innerHTML = `
    <section class="sql-db-panel">
      <div class="sql-db-header">
        <div>
          <h3>Ecommerce Demo Database</h3>
          <p>Mock database for customer orders, product lines, and payments.</p>
        </div>
        <span class="badge">Read-only SELECT</span>
      </div>
      <div class="schema-grid">
        ${Object.entries(sqlTableMeta)
          .map(
            ([table, columns]) => `
              <article class="schema-card">
                <h4>${htmlEscape(table)}</h4>
                <ul>${columns.map((column) => `<li>${htmlEscape(column)}</li>`).join("")}</ul>
              </article>
            `
          )
          .join("")}
      </div>
      <details class="data-preview">
        <summary>Preview demo records</summary>
        ${Object.entries(sqlDemoDatabase)
          .map(
            ([table, rows]) => `
              <h4>${htmlEscape(table)} (${rows.length} rows)</h4>
              ${renderResultTable(rows)}
            `
          )
          .join("")}
      </details>
    </section>

    <section class="sql-runner">
      <div class="sql-task">
        <div>
          <span class="badge">${htmlEscape(task.id)}</span>
          <h3>${htmlEscape(task.title)}</h3>
          <p>${htmlEscape(task.scenario)}</p>
        </div>
        <div class="takeaway">${htmlEscape(task.prompt)}</div>
        <ul class="key-list">${task.hints.map((hint) => `<li>${htmlEscape(hint)}</li>`).join("")}</ul>
      </div>

      <label class="sql-editor-label" for="sqlEditor">Your SQL</label>
      <textarea id="sqlEditor" class="sql-editor" spellcheck="false">${htmlEscape(savedQuery)}</textarea>
      <div class="sql-actions">
        <button class="primary-button" type="button" id="runSqlPractice">Run / Commit Answer</button>
        <button class="secondary-button" type="button" id="resetSqlPractice">Reset Expected SQL</button>
      </div>
      <div id="sqlFeedback" class="sql-feedback" aria-live="polite"></div>
      <div id="sqlResultArea"></div>

      <details class="expected-sql">
        <summary>Expected answer SQL</summary>
        <code>${htmlEscape(task.expectedSql)}</code>
      </details>
    </section>
  `;

  const editor = elements.contentArea.querySelector("#sqlEditor");
  const feedback = elements.contentArea.querySelector("#sqlFeedback");
  const resultArea = elements.contentArea.querySelector("#sqlResultArea");

  function runPractice() {
    const query = editor.value.trim();
    state.sqlPracticeQueries[queryKey] = query;
    persist();
    try {
      const rows = runMiniSql(query);
      const expectedRows = runMiniSql(task.expectedSql);
      const isSuccess = normalizeSqlResult(rows) === normalizeSqlResult(expectedRows);
      feedback.className = `sql-feedback ${isSuccess ? "success" : "warning"}`;
      feedback.textContent = isSuccess
        ? `Success: syntax is valid and ${rows.length} record(s) match the expected answer.`
        : `Query ran successfully and returned ${rows.length} record(s), but the result does not match the expected answer yet. Check columns, filters, joins, grouping, and sort order.`;
      resultArea.innerHTML = renderResultTable(rows);
    } catch (error) {
      feedback.className = "sql-feedback error";
      feedback.textContent = `SQL error: ${error.message}`;
      resultArea.innerHTML = "";
    }
  }

  elements.contentArea.querySelector("#runSqlPractice").addEventListener("click", runPractice);
  elements.contentArea.querySelector("#resetSqlPractice").addEventListener("click", () => {
    editor.value = task.expectedSql;
    runPractice();
  });
  editor.addEventListener("input", () => {
    state.sqlPracticeQueries[queryKey] = editor.value;
    persist();
  });
}

function renderExtraPractice(module) {
  if (state.courseId === "api") {
    renderApiPracticePlayground(module);
    return;
  }

  if (state.courseId === "sql") {
    renderSqlPracticePlayground(module);
    return;
  }

  const labs = module.labs || [];
  elements.contentArea.innerHTML = `
    <section class="practice-summary">
      <div>
        <h3>Practice Labs</h3>
        <p>Thực hành theo task dự án thật. Bạn có thể dùng Postman/Hoppscotch cho API hoặc SQL playground cho SQL.</p>
      </div>
      <span class="score-pill">${labs.length} labs</span>
    </section>
    <div class="lab-grid">
      ${labs
        .map(
          (lab) => `
            <article class="lab-card">
              <div class="lab-meta">
                <span class="badge">${htmlEscape(lab.level)}</span>
                <span class="badge">${htmlEscape(lab.id)}</span>
              </div>
              <h3>${htmlEscape(lab.title)}</h3>
              <p>${htmlEscape(lab.scenario)}</p>
              <ul class="key-list">
                ${(lab.tasks || []).map((task) => `<li>${htmlEscape(task)}</li>`).join("")}
              </ul>
              ${lab.code ? `<code>${htmlEscape(lab.code)}</code>` : ""}
              <div class="takeaway">${htmlEscape(lab.takeaway)}</div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function currentExtraQuiz(course) {
  const quizId = state.extraQuizId[course.id];
  return course.quizExams.find((exam) => exam.id === quizId) || course.quizExams[0];
}

function getExtraQuizAnswerStore(examId) {
  if (!state.extraQuizAnswers[examId]) {
    state.extraQuizAnswers[examId] = {};
  }
  return state.extraQuizAnswers[examId];
}

function renderExtraQuiz() {
  const course = currentCourse();
  const exams = course.quizExams || [];
  if (!exams.length) {
    elements.contentArea.innerHTML = `<div class="empty-state">No quiz sets are available yet.</div>`;
    return;
  }

  const exam = currentExtraQuiz(course);
  state.extraQuizId[course.id] = exam.id;
  const answers = getExtraQuizAnswerStore(exam.id);
  const answered = exam.questions.filter((question) => answers[question.id] !== undefined);
  const correct = exam.questions.filter((question) => answers[question.id] === question.answer);
  const resultText =
    answered.length === exam.questions.length ? (correct.length >= exam.passMark ? "Passed" : "Needs review") : "In progress";

  elements.contentArea.innerHTML = `
    <section class="mock-layout">
      <aside class="mock-picker" aria-label="Quiz set selector">
        <h3>${htmlEscape(course.title)} Quiz</h3>
        <p>5 quiz sets, each with 20 questions from basic to advanced.</p>
        <div class="mock-list">
          ${exams
            .map((item) => {
              const itemAnswers = getExtraQuizAnswerStore(item.id);
              const itemCorrect = item.questions.filter((question) => itemAnswers[question.id] === question.answer).length;
              const itemAnswered = item.questions.filter((question) => itemAnswers[question.id] !== undefined).length;
              const active = item.id === exam.id ? " active" : "";
              return `
                <button class="mock-link${active}" type="button" data-extra-exam="${htmlEscape(item.id)}">
                  <span>${htmlEscape(item.title)}</span>
                  <strong>${itemCorrect}/${item.questions.length}</strong>
                  <small>${itemAnswered} answered</small>
                </button>
              `;
            })
            .join("")}
        </div>
      </aside>

      <div class="mock-paper">
        <section class="practice-summary">
          <div>
            <h3>${htmlEscape(exam.title)}</h3>
            <p>${htmlEscape(exam.description)}</p>
          </div>
          <span class="score-pill">${correct.length}/${exam.questions.length} correct - ${answered.length}/${exam.questions.length} answered - ${resultText}</span>
          <button class="secondary-button" type="button" id="resetExtraQuiz">Reset This Quiz</button>
        </section>
        ${exam.questions
          .map((question, index) =>
            renderQuestionCard(question, index, answers[question.id], `${exam.id}-${question.id}`, [
              `Module ${question.module}`,
              question.difficulty
            ])
          )
          .join("")}
      </div>
    </section>
  `;

  elements.contentArea.querySelectorAll("[data-extra-exam]").forEach((button) => {
    button.addEventListener("click", () => {
      state.extraQuizId[course.id] = button.dataset.extraExam;
      persist();
      renderExtraQuiz();
    });
  });

  const resetButton = elements.contentArea.querySelector("#resetExtraQuiz");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      state.extraQuizAnswers[exam.id] = {};
      persist();
      renderExtraQuiz();
    });
  }

  elements.contentArea.querySelectorAll("input[type='radio']").forEach((radio) => {
    radio.addEventListener("change", () => {
      const store = getExtraQuizAnswerStore(exam.id);
      store[radio.dataset.questionId] = Number(radio.value);
      persist();
      renderExtraQuiz();
    });
  });
}

function renderContent() {
  const module = currentChapter();
  if (!module) {
    elements.contentArea.innerHTML = `<div class="empty-state">No content is available.</div>`;
    return;
  }

  const tab = currentTab();
  if (tab === "examples" && isIstqb()) {
    renderExamples(module);
  } else if (tab === "flashcards" && isIstqb()) {
    renderFlashcards(module);
  } else if (tab === "practice" && isIstqb()) {
    renderPractice(module);
  } else if (tab === "practice") {
    renderExtraPractice(module);
  } else if (tab === "mock" && isIstqb()) {
    renderMockExams();
  } else if (tab === "mock") {
    renderExtraQuiz();
  } else {
    renderTheory(module);
  }
}

function render() {
  renderCourseNav();
  renderNav();
  renderHeader();
  renderProgress();
  renderTabs();
  renderContent();
}

function applyAuthState() {
  const isLoggedIn = Boolean(state.user);
  elements.loginScreen.classList.toggle("hidden", isLoggedIn);
  elements.appShell.classList.toggle("hidden", !isLoggedIn);
  if (isLoggedIn) {
    elements.currentUser.textContent = state.user.username;
    render();
  }
}

elements.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = elements.loginUsername.value.trim();
  const password = elements.loginPassword.value;
  const account = accounts[username];

  if (!account || account.password !== password) {
    elements.loginError.textContent = "Sai username hoặc password.";
    return;
  }

  state.user = { username, role: account.role };
  localStorage.setItem("qa.session", JSON.stringify(state.user));
  elements.loginError.textContent = "";
  elements.loginPassword.value = "";
  applyAuthState();
});

elements.demoAccountLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    elements.loginUsername.value = link.dataset.username || "";
    elements.loginPassword.value = link.dataset.password || "";
    elements.loginError.textContent = "";
    elements.loginUsername.focus();
  });
});

elements.logoutButton.addEventListener("click", () => {
  state.user = null;
  localStorage.removeItem("qa.session");
  applyAuthState();
});

elements.courseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.courseId = button.dataset.course;
    state.search = "";
    elements.chapterSearch.value = "";
    if (!state.moduleByCourse[state.courseId]) {
      const firstModule = currentModules()[0];
      if (firstModule) setCurrentModuleId(firstModule.id);
    }
    if (!state.tabByCourse[state.courseId]) {
      setCurrentTab("theory");
    }
    persist();
    render();
    scrollTo({ top: 0, behavior: "smooth" });
  });
});

elements.tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCurrentTab(button.dataset.tab);
    persist();
    render();
  });
});

elements.completeToggle.addEventListener("change", () => {
  const module = currentChapter();
  if (!module) return;
  const list = completedList();
  const id = module.id;
  if (elements.completeToggle.checked && !list.map(String).includes(String(id))) {
    list.push(id);
  }
  if (!elements.completeToggle.checked) {
    state.completedByCourse[state.courseId] = list.filter((moduleId) => String(moduleId) !== String(id));
  }
  persist();
  render();
});

elements.chapterSearch.addEventListener("input", () => {
  state.search = elements.chapterSearch.value;
  renderNav();
});

applyAuthState();
