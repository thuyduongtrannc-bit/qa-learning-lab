(function () {
  const practiceSet = "lo-coverage";
  const practiceTitle = "Syllabus LO Coverage Drill";

  function q(chapter, index, lo, k, question, options, answer, explanation, rationales) {
    return {
      id: `c${chapter}-lo-coverage-${index}`,
      chapter,
      lo,
      k,
      practiceSet,
      practiceTitle,
      question,
      options,
      answer,
      explanation,
      rationales:
        rationales ||
        options.map((option, optionIndex) =>
          optionIndex === answer
            ? `Dung. ${explanation}`
            : `Sai. Lua chon nay khong phu hop voi ${lo} (${k}) hoac nham sang mot khai niem khac trong syllabus.`
        )
    };
  }

  const questionsByChapter = {
    1: [
      q(
        1,
        1,
        "FL-1.2.1",
        "K2",
        "A team reviews requirements before coding and finds ambiguous tax rules. Which testing contribution is best shown?",
        [
          "Testing helps prevent downstream defects and reduces rework",
          "Testing proves that the implemented product has no failures",
          "Testing replaces quality assurance activities",
          "Testing is only useful after code is executable"
        ],
        0,
        "Static testing som giup tim ambiguity trong requirement truoc khi loi lan sang design/code, nen giam rework va tang kha nang thanh cong."
      ),
      q(
        1,
        2,
        "FL-1.4.2",
        "K2",
        "Which factor is most likely to change how formal the test process should be?",
        [
          "Product risk, regulatory constraints, SDLC, team skills, tools, and stakeholder expectations",
          "The tester's preferred note-taking style only",
          "The alphabetical order of requirements",
          "Whether the project uses four answer options"
        ],
        0,
        "Test process phai duoc dieu chinh theo context: risk, regulation, SDLC, tool, skill, budget, time va stakeholder expectation."
      ),
      q(
        1,
        3,
        "FL-1.4.3",
        "K2",
        "Which set contains only examples of testware?",
        [
          "Test plan, test cases, test data, test scripts, test logs, and defect reports",
          "Source code only",
          "Customer invoices and marketing banners only",
          "Production sales targets only"
        ],
        0,
        "Testware la work product duoc tao trong testing, vi du plan, condition, case, data, script, result, log, report va defect report."
      ),
      q(
        1,
        4,
        "FL-1.4.5",
        "K2",
        "Which comparison between test management and testing roles is most accurate?",
        [
          "Test management focuses on planning, monitoring, control and completion; testing focuses on analysis, design, implementation and execution",
          "Testing roles only approve budgets; test management roles only run test cases",
          "The two roles are always performed by different organizations",
          "Testing roles are unnecessary in Agile teams"
        ],
        0,
        "ISTQB tach trach nhiem theo concept. Mot nguoi co the kiem nhieu vai tro, nhung noi dung cong viec van khac nhau."
      ),
      q(
        1,
        5,
        "FL-1.5.1",
        "K2",
        "Which combination of skills is especially useful for a tester?",
        [
          "Analytical thinking, communication, curiosity, attention to detail, domain knowledge, and testing knowledge",
          "Only the ability to run a tool without understanding results",
          "Only programming skill, with no need to communicate",
          "Only business authority to approve releases"
        ],
        0,
        "Tester can ket hop testing knowledge, phan tich, giao tiep, lang nghe, domain/technical knowledge va su to mo."
      ),
      q(
        1,
        6,
        "FL-1.5.2",
        "K1",
        "What is a main advantage of the whole team approach?",
        [
          "Quality becomes a shared responsibility and feedback improves across roles",
          "Only testers are allowed to discuss quality",
          "Developers no longer need to test their own work",
          "The team can skip acceptance criteria"
        ],
        0,
        "Whole team approach giup quality la trach nhiem chung, cai thien collaboration va shared understanding."
      )
    ],
    2: [
      q(
        2,
        1,
        "FL-2.1.2",
        "K1",
        "Which is a good testing practice that applies across SDLC models?",
        [
          "Each development activity should have a corresponding test activity",
          "Dynamic testing must start only after release",
          "All test levels should have identical objectives",
          "Draft work products should never be reviewed"
        ],
        0,
        "Moi development activity nen co test activity tuong ung; test analysis/design nen bat dau som va review draft work products."
      ),
      q(
        2,
        2,
        "FL-2.1.6",
        "K2",
        "After an iteration, the team discusses flaky tests, unclear acceptance criteria, and environment issues, then agrees on improvement actions. What is this?",
        ["A retrospective supporting process improvement", "Confirmation testing", "System integration testing", "A defect triage board only"],
        0,
        "Retrospective giup team giu diem tot, tim diem can cai tien va tao action cu the cho process/testware/test basis."
      ),
      q(
        2,
        3,
        "FL-2.2.2",
        "K2",
        "Which pair correctly matches a test type with its focus?",
        [
          "Functional testing checks what the system does; non-functional testing checks how well it behaves",
          "Functional testing checks only performance; non-functional testing checks only business rules",
          "White-box testing ignores internal structure",
          "Black-box testing is always exploratory testing"
        ],
        0,
        "Functional = what the system does. Non-functional = quality characteristics such as performance, security, usability, reliability."
      ),
      q(
        2,
        4,
        "FL-2.3.1",
        "K2",
        "A deployed ecommerce system is migrated to a new database. The team tests data conversion and affected workflows. Which testing is this?",
        ["Maintenance testing", "Component testing only", "Static analysis only", "Test-first development"],
        0,
        "Maintenance testing duoc trigger boi modification, migration, retirement hoac environment/lifecycle change cua operational system."
      )
    ],
    3: [
      q(
        3,
        1,
        "FL-3.2.1",
        "K1",
        "Which is a benefit of early and frequent stakeholder feedback?",
        [
          "It reduces misunderstandings and the risk of building the wrong product",
          "It guarantees all defects are removed",
          "It replaces dynamic testing",
          "It removes the need to document review findings"
        ],
        0,
        "Feedback som tu stakeholder giup phat hien missing rule, ambiguity va assumption sai truoc khi rework tro nen dat."
      ),
      q(
        3,
        2,
        "FL-3.2.2",
        "K2",
        "Which sequence best fits the formal review process?",
        [
          "Planning, review initiation, individual review, communication and analysis, fixing and reporting",
          "Execution, debugging, deployment, retirement",
          "Coding, production monitoring, marketing approval",
          "Risk acceptance, release, then requirement writing"
        ],
        0,
        "Review process formal gom planning, initiation, individual review, communication/analysis, fixing va reporting."
      ),
      q(
        3,
        3,
        "FL-3.2.5",
        "K1",
        "Which factor supports a successful review?",
        [
          "Clear objectives, small review scope, preparation time, and constructive communication",
          "Very large documents reviewed without preparation",
          "Personal criticism of the author",
          "No follow-up after anomalies are found"
        ],
        0,
        "Review thanh cong can objective ro, scope hop ly, preparation, facilitation, culture tot va follow-up."
      )
    ],
    4: [
      q(
        4,
        1,
        "FL-4.3.3",
        "K2",
        "What is a key value of white-box testing?",
        [
          "It uses implementation structure to measure coverage and identify additional tests",
          "It proves that omitted requirements were implemented",
          "It replaces all black-box testing",
          "It can only be done after user acceptance testing"
        ],
        0,
        "White-box testing xem xet implementation, do coverage khach quan va giup tao test bo sung. No khong thay the black-box testing."
      ),
      q(
        4,
        2,
        "FL-4.4.1",
        "K2",
        "A tester designs tests for missing parameters, wrong data types, duplicate submissions, and rounding errors based on past defects. Which technique is this?",
        ["Error guessing", "Decision table testing", "Branch testing", "Acceptance criteria writing"],
        0,
        "Error guessing du doan loi/defect/failure dua tren kinh nghiem, defect history va common failure patterns."
      ),
      q(
        4,
        3,
        "FL-4.4.3",
        "K2",
        "A tester uses a maintained list of usability checks to systematically test each page. Which technique is this?",
        ["Checklist-based testing", "Statement testing", "Equivalence partitioning", "System integration testing"],
        0,
        "Checklist-based testing dung danh sach condition/rule/chat luong can check; checklist can duoc review va update."
      )
    ],
    5: [
      q(
        5,
        1,
        "FL-5.1.7",
        "K2",
        "What is the purpose of testing quadrants?",
        [
          "To help visualize appropriate test levels, test types, activities and work products in Agile testing",
          "To calculate three-point estimation",
          "To replace risk-based testing",
          "To require exactly four test cases per feature"
        ],
        0,
        "Testing quadrants giup nhin day du cac loai test trong Agile: business/technology facing va support team/critique product."
      ),
      q(
        5,
        2,
        "FL-5.2.1",
        "K1",
        "Risk level is primarily determined using which two attributes?",
        ["Likelihood and impact", "Severity and priority", "Entry and exit criteria", "Static and dynamic testing"],
        0,
        "Risk level duoc xac dinh boi likelihood va impact. Severity/priority la thuong dung trong defect management."
      ),
      q(
        5,
        3,
        "FL-5.2.3",
        "K2",
        "How does product risk analysis influence testing?",
        [
          "It guides test scope, priority, levels, types, techniques, coverage and effort",
          "It removes the need for test design",
          "It decides only the color of the dashboard",
          "It is unrelated to test prioritization"
        ],
        0,
        "Product risk analysis cho biet test o dau sau hon, uu tien gi, dung technique/type/level nao va can effort bao nhieu."
      ),
      q(
        5,
        4,
        "FL-5.2.4",
        "K2",
        "A high product risk is identified for payment calculation. Which response is a testing-related risk control measure?",
        [
          "Design deeper tests for the risky calculation and monitor residual risk",
          "Ignore the risk because the schedule is fixed",
          "Delete payment tests to save time",
          "Classify it as a project risk only"
        ],
        0,
        "Risk control co the mitigate bang test sau hon, them review/prototype/monitoring, transfer/accept risk va communicate residual risk."
      ),
      q(
        5,
        5,
        "FL-5.3.1",
        "K1",
        "Which is an example of a testing metric?",
        [
          "Number of passed, failed, blocked and not-run test cases",
          "The tester's favorite browser",
          "The product logo color",
          "The office seating plan"
        ],
        0,
        "Metrics testing gom progress, quality, defect, risk, coverage, cost/effort va test result metrics."
      ),
      q(
        5,
        6,
        "FL-5.3.2",
        "K2",
        "Why should test reports be tailored to their audience?",
        [
          "Different stakeholders need different levels of formality, detail and decision-focused information",
          "All reports must contain only raw logs",
          "Executives and developers always need identical information",
          "Reports are only useful after production release"
        ],
        0,
        "Test reporting phai phu hop audience: team can detail/action, manager can risk/status, executive can decision summary."
      ),
      q(
        5,
        7,
        "FL-5.4.1",
        "K2",
        "Which statement best describes configuration management support for testing?",
        [
          "It identifies, versions, controls and relates test items and testware so results are reproducible and traceable",
          "It is only a way to choose test case priority",
          "It means all tests must be manual",
          "It replaces defect management"
        ],
        0,
        "CM giup biet build nao, testware version nao, data/environment nao da duoc dung, va co the reproduce/trace result."
      )
    ]
  };

  if (!Array.isArray(window.ISTQB_CHAPTERS)) return;

  window.ISTQB_CHAPTERS = window.ISTQB_CHAPTERS.map((chapter) => ({
    ...chapter,
    exercises: [...(questionsByChapter[chapter.id] || []), ...(chapter.exercises || [])]
  }));
})();
