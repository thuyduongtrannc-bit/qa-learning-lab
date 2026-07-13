(function () {
  const practiceSet = "scenario-examples";
  const practiceTitle = "Scenario Practice Examples";

  function q(chapter, index, lo, k, question, options, answer, explanation) {
    return {
      id: `c${chapter}-scenario-${index}`,
      chapter,
      lo,
      k,
      practiceSet,
      practiceTitle,
      question,
      options,
      answer,
      explanation
    };
  }

  const questionsByChapter = {
    1: [
      q(
        1,
        1,
        "FL-1.1.1",
        "K2",
        "A team reviews user stories before coding, runs API tests after coding, and reports residual release risk. Which testing objective is best represented?",
        [
          "Only proving that the product has no defects",
          "Evaluating work products and providing information for decisions",
          "Replacing debugging with test execution",
          "Guaranteeing that future changes will not fail"
        ],
        1,
        "Testing khong chi la chay test. No danh gia work product, tim defect, giam risk va cung cap thong tin cho stakeholder ra quyet dinh."
      ),
      q(
        1,
        2,
        "FL-1.1.2",
        "K2",
        "A tester finds that checkout shows the wrong total. A developer traces the issue to a rounding function and changes the code. What is the developer mainly doing?",
        ["Test monitoring", "Debugging", "Test design", "Acceptance testing"],
        1,
        "Tester lam lo failure qua testing. Developer reproduce, diagnose va fix defect la debugging."
      ),
      q(
        1,
        3,
        "FL-1.2.2",
        "K2",
        "A process team introduces code review rules to prevent repeated requirement mistakes. A test team executes scenarios to find product defects. Which distinction is correct?",
        [
          "Both activities are only testing",
          "The process improvement is QA; the scenario execution is testing/QC",
          "The scenario execution is QA; the process improvement is debugging",
          "Neither activity contributes to quality"
        ],
        1,
        "QA tap trung vao process-oriented/preventive. Testing/QC tap trung vao product/work product va corrective feedback."
      ),
      q(
        1,
        4,
        "FL-1.2.3",
        "K2",
        "A business analyst misunderstands a tax rule, writes the wrong requirement, the developer implements it, and invoices show a wrong amount. Which mapping is best?",
        [
          "Wrong invoice is the root cause",
          "Misunderstanding is an error, wrong requirement/code is a defect, wrong invoice is a failure",
          "Wrong requirement is a failure, wrong invoice is a test condition",
          "All items are only defects"
        ],
        1,
        "Chuoi hay gap: root cause co the dan den error; error tao defect trong requirement/code; defect khi execute co the gay failure."
      ),
      q(
        1,
        5,
        "FL-1.3.1",
        "K2",
        "A stable regression suite catches fewer new bugs every release, so testers add new risk-based tests around changed features. Which principle is being addressed?",
        ["Absence-of-defects fallacy", "Tests wear out", "Exhaustive testing is possible", "Testing proves correctness"],
        1,
        "Bo test lap lai lau ngay co the kem hieu qua trong viec tim defect moi. Can cap nhat theo risk va thay doi san pham."
      ),
      q(
        1,
        6,
        "FL-1.4.1",
        "K2",
        "A tester reads acceptance criteria and identifies 'valid refund within 30 days' and 'expired refund window' as things to test. Which activity is this?",
        ["Test analysis", "Test implementation", "Test execution", "Test completion"],
        0,
        "Test analysis tra loi 'test cai gi?' bang cach phan tich test basis va xac dinh test conditions."
      ),
      q(
        1,
        7,
        "FL-1.4.4",
        "K2",
        "A requirement changes from 'free shipping above $50' to 'free shipping above $75'. Traceability helps testers primarily by:",
        [
          "Deleting all old tests automatically",
          "Identifying impacted test conditions, cases, data, results and defects",
          "Preventing the requirement from changing",
          "Replacing impact analysis with debugging"
        ],
        1,
        "Traceability giup impact analysis, coverage, audit va reporting khi requirement thay doi."
      ),
      q(
        1,
        8,
        "FL-1.5.3",
        "K2",
        "A separate QA team finds defects developers missed, but developers stop owning unit quality and communication slows. What does this illustrate?",
        [
          "Only benefits of independence",
          "Only disadvantages of independence",
          "Both benefits and risks of test independence",
          "That independence is never useful"
        ],
        2,
        "Independence co the tang kha nang tim defect khac, nhung cung co risk ve communication, bottleneck va ownership."
      )
    ],
    2: [
      q(
        2,
        1,
        "FL-2.1.1",
        "K2",
        "In an iterative project, testers join story refinement, write acceptance tests early, and run regression every sprint. What is most affected by the SDLC model?",
        [
          "Only the color of the defect tool",
          "Timing and scope of test activities, documentation and automation",
          "Whether defects can exist",
          "The definition of failure"
        ],
        1,
        "SDLC anh huong thoi diem test, muc tai lieu, muc automation, vai tro va cach lap ke hoach."
      ),
      q(
        2,
        2,
        "FL-2.1.2",
        "K1",
        "Which activity is a good example of shift-left testing?",
        [
          "Waiting until production to review requirements",
          "Reviewing user stories and acceptance criteria before implementation",
          "Testing only after all code is merged",
          "Disabling static analysis until release day"
        ],
        1,
        "Shift-left dua test activities som hon trong SDLC, vi du review requirement/story truoc khi code."
      ),
      q(
        2,
        3,
        "FL-2.1.3",
        "K2",
        "A team writes a failing unit test before implementing the function. Which test-first approach is this closest to?",
        ["BDD", "TDD", "Exploratory testing", "Operational acceptance testing"],
        1,
        "TDD thuong bat dau bang automated unit test that bai, sau do viet code de pass test."
      ),
      q(
        2,
        4,
        "FL-2.2.1",
        "K2",
        "Testing that the checkout service correctly sends requests to a payment gateway owned by another company is mainly:",
        ["Component testing", "Component integration testing", "System integration testing", "Alpha testing"],
        2,
        "Interface giua system under test va external system/service la system integration testing."
      ),
      q(
        2,
        5,
        "FL-2.2.2",
        "K2",
        "A test checks whether product search returns results within two seconds for 1,000 concurrent users. Which test type is this?",
        ["Functional testing", "Performance efficiency testing", "Confirmation testing", "Maintenance testing"],
        1,
        "Response time va concurrent users thuoc non-functional/performance efficiency testing."
      ),
      q(
        2,
        6,
        "FL-2.2.3",
        "K2",
        "After fixing a login defect, the team reruns the failed login test and then runs related account tests. What are these activities?",
        [
          "Regression then confirmation",
          "Confirmation then regression",
          "Component then system integration",
          "Static then dynamic"
        ],
        1,
        "Rerun failed test de kiem tra fix la confirmation testing. Chay related tests de tim side effects la regression testing."
      ),
      q(
        2,
        7,
        "FL-2.3.1",
        "K2",
        "A database engine is upgraded. Testers assess affected reports, migration scripts and backup/restore procedures. This is an example of:",
        ["New feature testing only", "Maintenance testing supported by impact analysis", "TDD", "Usability testing only"],
        1,
        "Maintenance testing duoc kich hoat boi change/upgrade/migration. Impact analysis giup xac dinh pham vi test."
      ),
      q(
        2,
        8,
        "FL-2.2.1",
        "K2",
        "A developer tests a single tax calculation function using stubs for database access. Which level is most likely?",
        ["Component testing", "System testing", "System integration testing", "Acceptance testing"],
        0,
        "Test mot unit/component rieng le, co the dung stub/mock, la component testing."
      )
    ],
    3: [
      q(
        3,
        1,
        "FL-3.1.1",
        "K1",
        "Which work product is suitable for static testing?",
        ["Only running software", "A user story, API contract, test case or source code file", "Only production logs", "Only compiled binaries"],
        1,
        "Static testing co the ap dung cho work product co the doc/hieu nhu requirement, code, test case, model, contract."
      ),
      q(
        3,
        2,
        "FL-3.1.2",
        "K2",
        "A review finds ambiguous acceptance criteria before coding starts. What is a key value of this static testing activity?",
        [
          "It causes runtime failures",
          "It finds defects earlier and reduces rework",
          "It replaces all dynamic testing",
          "It proves the code works"
        ],
        1,
        "Static testing giup tim defect som trong work product, truoc khi defect lan sang code/test sau."
      ),
      q(
        3,
        3,
        "FL-3.1.3",
        "K2",
        "Which statement correctly contrasts static and dynamic testing?",
        [
          "Static testing executes software; dynamic testing does not",
          "Static testing can find defects directly; dynamic testing can reveal failures",
          "Dynamic testing is only review",
          "Static testing is only possible after release"
        ],
        1,
        "Static testing khong execute software va co the tim defect truc tiep trong artifact. Dynamic testing execute va quan sat failure."
      ),
      q(
        3,
        4,
        "FL-3.2.1",
        "K1",
        "Which role is responsible for creating or changing the work product under review?",
        ["Moderator", "Author", "Scribe", "Manager"],
        1,
        "Author la nguoi tao/chinh sua work product duoc review."
      ),
      q(
        3,
        5,
        "FL-3.2.2",
        "K2",
        "Review participants individually read a requirement and record questions before the meeting. Which review activity is this?",
        ["Review initiation", "Individual review", "Fixing", "Test execution"],
        1,
        "Individual review la giai doan reviewer tu doc artifact va ghi anomaly/question."
      ),
      q(
        3,
        6,
        "FL-3.2.3",
        "K1",
        "During a review meeting, who usually records anomalies, decisions and open actions?",
        ["Scribe or recorder", "Only the customer", "Compiler", "Test execution tool"],
        0,
        "Scribe/recorder ghi nhan anomaly, decision va thong tin review."
      ),
      q(
        3,
        7,
        "FL-3.2.4",
        "K2",
        "A safety-critical module needs defined roles, entry/exit criteria, metrics and a formal audit trail. Which review type fits best?",
        ["Informal review", "Inspection", "Ad hoc buddy check", "Pair programming only"],
        1,
        "Inspection la review formal nhat, co process, roles, metric va audit trail."
      ),
      q(
        3,
        8,
        "FL-3.2.5",
        "K2",
        "A review meeting is dominated by blame and off-topic design debates. Which success factor is missing?",
        [
          "Choosing the smallest possible document only",
          "Constructive communication and clear review objectives",
          "Skipping preparation",
          "Removing all roles"
        ],
        1,
        "Review hieu qua can objective ro, preparation, role phu hop va communication mang tinh xay dung, khong do loi."
      )
    ],
    4: [
      q(
        4,
        1,
        "FL-4.1.1",
        "K2",
        "A tester designs cases from requirements without looking at code. Which technique family is most likely?",
        ["White-box", "Black-box", "Static analysis only", "Debugging"],
        1,
        "Black-box techniques dua vao specification/requirement, khong dua vao code structure."
      ),
      q(
        4,
        2,
        "FL-4.2.1",
        "K3",
        "An age field accepts whole numbers 18-65 inclusive. Which values cover valid, below-valid and above-valid equivalence partitions?",
        ["17, 30, 66", "18, 65", "17, 18, 19, 64, 65, 66", "30 only"],
        0,
        "EP can mot representative cho moi partition: duoi 18, 18-65, tren 65."
      ),
      q(
        4,
        3,
        "FL-4.2.2",
        "K3",
        "For a valid range 100-500 inclusive, which set is 2-value boundary value analysis for both boundaries?",
        ["99, 100, 500, 501", "100, 500", "101, 499", "99, 101, 499, 501"],
        0,
        "2-value BVA lay boundary va gia tri ngay ben ngoai: 99/100 va 500/501."
      ),
      q(
        4,
        4,
        "FL-4.2.3",
        "K3",
        "A decision table has 10 feasible rules. Tests cover 7 rules. What is the decision table coverage?",
        ["70%", "7%", "100%", "3%"],
        0,
        "Coverage = covered feasible rules / total feasible rules = 7/10 = 70%."
      ),
      q(
        4,
        5,
        "FL-4.2.4",
        "K3",
        "A state model has 6 valid transitions. A test suite exercises 3 of them and visits all states. Which statement is correct?",
        [
          "Valid transition coverage is 50%",
          "All transition coverage must be 100%",
          "State coverage and transition coverage are always equal",
          "This is statement coverage"
        ],
        0,
        "Transition coverage tinh theo transitions duoc exercise. 3/6 = 50%, du da visit all states."
      ),
      q(
        4,
        6,
        "FL-4.3.1",
        "K2",
        "A function contains 20 executable statements and a test suite executes 15. What is the statement coverage?",
        ["15%", "75%", "80%", "100%"],
        1,
        "Statement coverage = executed statements / total statements = 15/20 = 75%."
      ),
      q(
        4,
        7,
        "FL-4.3.2",
        "K2",
        "Why does 100% branch coverage imply 100% statement coverage for reachable code?",
        [
          "Every branch outcome execution necessarily executes the related statements",
          "Branch testing ignores code",
          "Statement coverage is stronger than branch coverage",
          "Because all defects are found"
        ],
        0,
        "Branch coverage manh hon statement coverage: cover tat ca branch outcomes thi cac statement reachable lien quan cung duoc execute."
      ),
      q(
        4,
        8,
        "FL-4.4.3",
        "K2",
        "A tester uses knowledge of past production incidents to try invalid coupon combinations not listed in requirements. Which technique is this closest to?",
        ["Error guessing", "Statement testing", "Decision coverage calculation", "Formal inspection"],
        0,
        "Error guessing dua vao kinh nghiem va defect history de doan noi de loi."
      )
    ],
    5: [
      q(
        5,
        1,
        "FL-5.1.1",
        "K2",
        "A test plan lists scope, objectives, assumptions, risks, test approach, schedule and budget. What is this mainly supporting?",
        ["Test planning", "Debugging", "Code compilation", "Tool licensing only"],
        0,
        "Test plan ghi nhan objective, scope, assumptions, risk, approach, resource, schedule va budget."
      ),
      q(
        5,
        2,
        "FL-5.1.3",
        "K2",
        "A team starts system testing only when the test environment is ready and critical builds are deployed. These are examples of:",
        ["Exit criteria", "Entry criteria", "Defect states", "Branch conditions"],
        1,
        "Entry criteria la dieu kien can co de bat dau mot test activity/level."
      ),
      q(
        5,
        3,
        "FL-5.1.4",
        "K3",
        "Using three-point estimation, optimistic=2 days, most likely=5 days, pessimistic=14 days. What is the estimate E?",
        ["5 days", "6 days", "7 days", "14 days"],
        1,
        "E = (a + 4m + b) / 6 = (2 + 20 + 14) / 6 = 6 days."
      ),
      q(
        5,
        4,
        "FL-5.1.5",
        "K3",
        "TC1 covers R1,R2. TC2 covers R2,R3,R4. TC3 covers R5. If TC1 already ran, which test gives the most additional coverage?",
        ["TC1", "TC2", "TC3", "None"],
        1,
        "Sau TC1, R1/R2 da cover. TC2 them R3/R4 = 2 item moi, TC3 chi them R5 = 1."
      ),
      q(
        5,
        5,
        "FL-5.2.2",
        "K2",
        "Which is a product risk for an ecommerce project?",
        [
          "A key tester resigns",
          "The payment calculation may charge the wrong amount",
          "The test lab is booked by another team",
          "The vendor delays tool renewal"
        ],
        1,
        "Product risk de doa chat luong san pham. Charge sai tien anh huong truc tiep den product/business."
      ),
      q(
        5,
        6,
        "FL-5.3.1",
        "K2",
        "The test manager reports passed/failed tests, open critical defects, coverage and remaining product risks. This is mainly:",
        ["Test monitoring and reporting", "Static analysis", "TDD", "Debugging"],
        0,
        "Monitoring/reporting cung cap thong tin ve progress, quality, coverage, defect va residual risk."
      ),
      q(
        5,
        7,
        "FL-5.4.1",
        "K2",
        "A tester wants to know which test cases belong to build 2.4 and which test data was used. This is supported by:",
        ["Configuration management", "Equivalence partitioning", "State transition testing", "Pairwise testing"],
        0,
        "Configuration management giup quan ly version va moi quan he giua testware, builds, data va results."
      ),
      q(
        5,
        8,
        "FL-5.5.1",
        "K3",
        "Which defect report is most useful for developers?",
        [
          "Checkout is bad",
          "App broken, please fix",
          "Steps, environment, expected result, actual result, evidence, severity, priority and references",
          "Only a screenshot without context"
        ],
        2,
        "Defect report tot can du thong tin de reproduce, triage, resolve va trace ve requirement/test."
      )
    ],
    6: [
      q(
        6,
        1,
        "FL-6.1.1",
        "K2",
        "A spreadsheet is used to track test data, calculate coverage and share execution status. In this context, it is:",
        ["Not a test tool because it is not automation", "A test tool because it supports testing", "Only a defect", "A test level"],
        1,
        "Tool duoc xac dinh theo viec no ho tro testing, khong nhat thiet phai la automation framework."
      ),
      q(
        6,
        2,
        "FL-6.1.1",
        "K2",
        "Which tool is most suitable for finding unreachable code without executing the program?",
        ["Static analysis tool", "Load generation tool", "Defect tracking tool", "Screen recorder"],
        0,
        "Static analysis tool kiem tra artifact/code ma khong can execute program."
      ),
      q(
        6,
        3,
        "FL-6.2.1",
        "K1",
        "Which is a benefit of test automation?",
        [
          "It guarantees no defects remain",
          "It can reduce repetitive manual work and improve consistency",
          "It removes the need for test design",
          "It never requires maintenance"
        ],
        1,
        "Automation giup giam cong viec lap lai, tang consistency va feedback nhanh hon, nhung khong dam bao het defect."
      ),
      q(
        6,
        4,
        "FL-6.2.1",
        "K1",
        "Which is a realistic risk when introducing a new UI automation framework?",
        [
          "Underestimating script maintenance effort",
          "Getting faster regression feedback",
          "Reducing repeated manual typing",
          "Improving repeatability"
        ],
        0,
        "Mot risk pho bien la danh gia thap effort/cost/time de introduce va maintain tool/scripts."
      ),
      q(
        6,
        5,
        "FL-6.2.1",
        "K2",
        "A tool is selected because it is popular, but it does not integrate with the team's CI pipeline or skills. What is the main lesson?",
        [
          "Popularity is enough for tool selection",
          "Tool selection must consider context, process, skills and integration",
          "Tools replace process",
          "The team should stop testing"
        ],
        1,
        "Tool phai phu hop context, skill, process, platform va integration. Khong nen chon chi vi tool pho bien."
      ),
      q(
        6,
        6,
        "FL-6.2.1",
        "K2",
        "A team automates unstable tests before understanding expected behavior. The scripts fail often and nobody trusts the reports. What risk is shown?",
        [
          "Automation improves trust automatically",
          "Automating poor tests can create unreliable feedback",
          "Manual testing is always better",
          "Coverage is always 100%"
        ],
        1,
        "Automation khong sua test design kem. Neu expected behavior/chon test sai, report se unstable va mat trust."
      ),
      q(
        6,
        7,
        "FL-6.1.1",
        "K2",
        "Which tool best supports test management and traceability?",
        [
          "A tool linking requirements, test cases, execution results and defects",
          "A color picker",
          "A video player only",
          "A calculator with no saved data"
        ],
        0,
        "Test management tool ho tro requirement-test-result-defect traceability va reporting."
      ),
      q(
        6,
        8,
        "FL-6.2.1",
        "K2",
        "A pilot project is run before buying a tool for the whole organization. What risk does this reduce?",
        [
          "The risk of choosing a tool that does not fit real constraints",
          "The risk that defects exist",
          "The need for any training",
          "The need for test cases"
        ],
        0,
        "Pilot/evaluation giup kiem tra fit voi process, environment, skill, maintenance va integration truoc khi rollout rong."
      )
    ]
  };

  if (Array.isArray(window.ISTQB_CHAPTERS)) {
    window.ISTQB_CHAPTERS = window.ISTQB_CHAPTERS.map((chapter) => ({
      ...chapter,
      exercises: [...(questionsByChapter[chapter.id] || []), ...(chapter.exercises || [])]
    }));
  }
})();
