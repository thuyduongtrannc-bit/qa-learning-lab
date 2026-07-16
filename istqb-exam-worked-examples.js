(function () {
  const englishExamples = {
    "4.2.1": [
      {
        title: "Worked example: equivalence partitioning",
        prompt: "A field accepts whole numbers from 18 to 65 inclusive.",
        steps: [
          "Identify partitions: invalid below 18, valid 18-65, invalid above 65.",
          "Choose one representative from each partition, for example 17, 30 and 66.",
          "Coverage item is the partition, not every value inside the partition."
        ],
        answer: "A minimal EP set is 17, 30, 66.",
        examTip: "Exam trap: choosing 18 and 65 checks boundaries, but does not by itself cover invalid partitions."
      }
    ],
    "4.2.2": [
      {
        title: "Worked example: 3-value boundary value analysis",
        prompt: "A password length is valid from 8 to 12 characters inclusive.",
        steps: [
          "Lower boundary is 8, so test 7, 8 and 9.",
          "Upper boundary is 12, so test 11, 12 and 13.",
          "Remove duplicates if the same value appears twice."
        ],
        answer: "3-value BVA set: 7, 8, 9, 11, 12, 13.",
        examTip: "BVA applies to ordered partitions. Do not use it for unordered categories."
      }
    ],
    "4.2.3": [
      {
        title: "Worked example: decision table coverage",
        prompt: "A decision table has 12 columns. Two combinations are infeasible and removed. Five feasible rules are covered.",
        steps: [
          "Coverage is based on feasible decision rules only.",
          "Feasible rules = 12 - 2 = 10.",
          "Covered feasible rules = 5."
        ],
        answer: "Decision table coverage = 5/10 = 50%.",
        examTip: "Exam trap: do not divide by columns that were removed as infeasible."
      }
    ],
    "4.2.4": [
      {
        title: "Worked example: state transition coverage",
        prompt: "A model has 5 states and 6 valid transitions. Tests visit all states and exercise 4 valid transitions.",
        steps: [
          "All states coverage is 100% because every state was visited.",
          "Valid transition coverage is 4/6.",
          "All states coverage does not guarantee valid transitions coverage."
        ],
        answer: "Valid transition coverage = 67% when rounded.",
        examTip: "Full valid transitions coverage guarantees full all states coverage, but not the other way around."
      }
    ],
    "4.5.3": [
      {
        title: "Worked example: ATDD examples",
        prompt: "Rule: Premium customers get free shipping for orders of 50 USD or more. Standard customers always pay shipping.",
        steps: [
          "Cover the business condition: premium vs standard customer.",
          "Cover the boundary: 49 and 50.",
          "Include at least one example that should not receive free shipping."
        ],
        answer: "Useful examples: premium 50 -> free, premium 49 -> pays, standard 70 -> pays.",
        examTip: "ATDD K3 questions often ask you to derive examples from rules and acceptance criteria."
      }
    ],
    "5.1.4": [
      {
        title: "Worked example: three-point estimation",
        prompt: "Optimistic a=4h, most likely m=7h, pessimistic b=16h.",
        steps: [
          "Use the weighted formula E = (a + 4*m + b) / 6.",
          "Calculate E = (4 + 4*7 + 16) / 6.",
          "Calculate standard deviation if asked: SD = (b - a) / 6."
        ],
        answer: "E = 48/6 = 8h. SD = 12/6 = 2h.",
        examTip: "Exam trap: do not use the simple average unless the question explicitly asks for it."
      }
    ],
    "5.1.5": [
      {
        title: "Worked example: additional coverage prioritization",
        prompt: "TC1 covers R1,R2. TC2 covers R2,R3,R4. TC3 covers R5. TC1 has already been selected.",
        steps: [
          "Already covered: R1 and R2.",
          "TC2 adds R3 and R4, so it adds two new requirements.",
          "TC3 adds R5, so it adds one new requirement."
        ],
        answer: "Choose TC2 next because it adds the highest additional coverage.",
        examTip: "Count only new coverage added after previously selected tests."
      }
    ],
    "5.5.1": [
      {
        title: "Worked example: defect report quality",
        prompt: "A report says only: 'Checkout is broken.'",
        steps: [
          "Add environment, build/version and test object.",
          "Add preconditions, exact steps, input data, expected result and actual result.",
          "Attach logs, screenshots or recordings, and classify severity and priority."
        ],
        answer: "A good report lets another person reproduce, analyze, prioritize, fix and retest the anomaly.",
        examTip: "Severity is impact. Priority is urgency or order of fixing."
      }
    ]
  };

  const vietnameseExamples = {
    "4.2.1": [
      {
        title: "Vi du lam bai: equivalence partitioning",
        prompt: "Field chi nhan so nguyen tu 18 den 65.",
        steps: [
          "Chia partition: invalid duoi 18, valid 18-65, invalid tren 65.",
          "Chon mot gia tri dai dien moi partition, vi du 17, 30 va 66.",
          "Coverage item la partition, khong phai tat ca gia tri trong partition."
        ],
        answer: "Bo EP toi thieu: 17, 30, 66.",
        examTip: "Bay de thi: chi chon 18 va 65 la dang check boundary, chua cover invalid partitions."
      }
    ],
    "4.2.2": [
      {
        title: "Vi du lam bai: 3-value BVA",
        prompt: "Password length hop le tu 8 den 12 ky tu.",
        steps: [
          "Boundary duoi la 8, test 7, 8, 9.",
          "Boundary tren la 12, test 11, 12, 13.",
          "Neu gia tri trung nhau thi bo trung."
        ],
        answer: "Bo 3-value BVA: 7, 8, 9, 11, 12, 13.",
        examTip: "BVA chi ap dung cho ordered partitions, khong dung cho category khong co thu tu."
      }
    ],
    "4.2.3": [
      {
        title: "Vi du lam bai: decision table coverage",
        prompt: "Decision table co 12 columns. Hai combination la infeasible va bi loai. Da cover 5 feasible rules.",
        steps: [
          "Coverage tinh tren feasible decision rules.",
          "Feasible rules = 12 - 2 = 10.",
          "Da cover 5 feasible rules."
        ],
        answer: "Decision table coverage = 5/10 = 50%.",
        examTip: "Bay de thi: khong chia cho columns da bi loai vi infeasible."
      }
    ],
    "4.2.4": [
      {
        title: "Vi du lam bai: state transition coverage",
        prompt: "Model co 5 states va 6 valid transitions. Test visit tat ca states va exercise 4 valid transitions.",
        steps: [
          "All states coverage = 100% vi moi state da duoc visit.",
          "Valid transition coverage = 4/6.",
          "All states coverage khong dam bao valid transitions coverage."
        ],
        answer: "Valid transition coverage = 67% neu lam tron.",
        examTip: "Full valid transitions coverage dam bao full all states coverage, nhung chieu nguoc lai khong dung."
      }
    ],
    "4.5.3": [
      {
        title: "Vi du lam bai: ATDD examples",
        prompt: "Rule: Premium customer duoc free shipping neu order tu 50 USD tro len. Standard customer luon tra shipping.",
        steps: [
          "Cover dieu kien business: premium va standard.",
          "Cover boundary: 49 va 50.",
          "Can co it nhat mot example khong duoc free shipping."
        ],
        answer: "Example tot: premium 50 -> free, premium 49 -> pays, standard 70 -> pays.",
        examTip: "ATDD K3 thuong yeu cau derive examples tu rule va acceptance criteria."
      }
    ],
    "5.1.4": [
      {
        title: "Vi du lam bai: three-point estimation",
        prompt: "Optimistic a=4h, most likely m=7h, pessimistic b=16h.",
        steps: [
          "Dung cong thuc E = (a + 4*m + b) / 6.",
          "Tinh E = (4 + 4*7 + 16) / 6.",
          "Neu de hoi sai so: SD = (b - a) / 6."
        ],
        answer: "E = 48/6 = 8h. SD = 12/6 = 2h.",
        examTip: "Bay de thi: khong lay average don gian neu de khong yeu cau."
      }
    ],
    "5.1.5": [
      {
        title: "Vi du lam bai: additional coverage prioritization",
        prompt: "TC1 cover R1,R2. TC2 cover R2,R3,R4. TC3 cover R5. TC1 da duoc chon.",
        steps: [
          "Da cover: R1 va R2.",
          "TC2 them R3 va R4, tuc them hai requirement moi.",
          "TC3 them R5, tuc them mot requirement moi."
        ],
        answer: "Chon TC2 tiep theo vi no them nhieu coverage moi nhat.",
        examTip: "Chi dem coverage moi sau cac test da duoc chon."
      }
    ],
    "5.5.1": [
      {
        title: "Vi du lam bai: defect report",
        prompt: "Report chi ghi: 'Checkout is broken.'",
        steps: [
          "Them environment, build/version va test object.",
          "Them precondition, steps, input data, expected result va actual result.",
          "Dinh kem log/screenshot/recording va phan loai severity/priority."
        ],
        answer: "Report tot giup nguoi khac reproduce, analyze, prioritize, fix va retest anomaly.",
        examTip: "Severity la impact. Priority la do khan cap hoac thu tu fix."
      }
    ]
  };

  function addExamples(sections, examplesByCode) {
    if (!Array.isArray(sections)) return sections;
    return sections.map((section) => ({
      ...section,
      subsections: (section.subsections || []).map((subsection) => ({
        ...subsection,
        examples: examplesByCode[subsection.code] || subsection.examples
      }))
    }));
  }

  if (!Array.isArray(window.ISTQB_CHAPTERS)) return;

  window.ISTQB_CHAPTERS = window.ISTQB_CHAPTERS.map((chapter) => ({
    ...chapter,
    sections: addExamples(chapter.sections, englishExamples),
    viSections: addExamples(chapter.viSections, vietnameseExamples)
  }));
})();
