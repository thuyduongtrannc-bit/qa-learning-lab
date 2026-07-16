(function () {
  const ctx = {
    product: ["checkout service", "hospital booking system", "mobile banking app", "learning portal", "warehouse API"],
    external: ["payment gateway", "identity provider", "shipping carrier", "tax service", "email platform"],
    field: ["age", "quantity", "discount percentage", "booking duration", "password length"],
    feature: ["refund", "login", "search", "checkout", "appointment scheduling"],
    nonFunctional: ["performance efficiency", "security", "usability", "reliability", "maintainability"],
    defect: ["wrong tax total", "duplicate booking", "missing audit log", "incorrect discount", "timeout during login"],
    riskArea: ["payment calculation", "patient data access", "password reset", "inventory update", "order cancellation"]
  };

  function pick(list, index) {
    return list[index % list.length];
  }

  function rotateOptions(correct, distractors, seed) {
    const base = [correct, ...distractors];
    const shift = seed % base.length;
    const options = base.slice(shift).concat(base.slice(0, shift));
    return { options, answer: options.indexOf(correct) };
  }

  function makeQuestion(examIndex, chapter, localIndex, lo, k, question, correct, distractors, explanation) {
    const rotated = rotateOptions(correct, distractors, examIndex + chapter + localIndex);
    return {
      id: `m${examIndex + 1}-c${chapter}-q${localIndex + 1}`,
      chapter,
      lo,
      k,
      question,
      options: rotated.options,
      answer: rotated.answer,
      explanation,
      rationales: rotated.options.map((option) =>
        option === correct
          ? `Dung. ${explanation}`
          : `Sai. Lua chon nay khong phu hop voi ${lo} (${k}) hoac nham voi mot khai niem khac trong syllabus. Hay doi chieu voi dap an dung: ${correct}.`
      )
    };
  }

  const templates = {
    1: [
      (e, i) =>
        makeQuestion(
          e,
          1,
          i,
          "FL-1.1.1",
          "K1",
          `Which of the following is a typical test objective for a ${pick(ctx.product, e)}?`,
          "To provide information about quality and risk to support stakeholder decisions",
          [
            "To prove that no defects exist in the test object",
            "To replace debugging with test execution",
            "To guarantee that requirements will never change"
          ],
          "Mục tiêu đúng là cung cấp thông tin về chất lượng và rủi ro. Testing không chứng minh phần mềm hết lỗi."
        ),
      (e, i) =>
        makeQuestion(
          e,
          1,
          i,
          "FL-1.1.2",
          "K2",
          `A tester observes a failure in the ${pick(ctx.feature, e)} feature. A developer reproduces it, finds the faulty code, and fixes it. Which statement is correct?`,
          "Testing revealed a failure; debugging diagnosed and removed the defect",
          [
            "Testing performed the fix; debugging only reported the result",
            "Debugging proved that the software has no defects",
            "The tester performed quality assurance and the developer performed validation"
          ],
          "Testing làm lộ failure; debugging tái hiện, chẩn đoán và sửa defect."
        ),
      (e, i) =>
        makeQuestion(
          e,
          1,
          i,
          "FL-1.2.2",
          "K1",
          "Which statement best describes the relationship between testing and quality assurance?",
          "Testing is product-oriented quality control; QA is process-oriented and preventive",
          [
            "Testing and QA are synonyms in ISTQB terminology",
            "QA is product-oriented and corrective; testing is process-oriented and preventive",
            "QA starts only after all testing has been completed"
          ],
          "Testing là QC, tập trung vào sản phẩm/work product. QA tập trung phòng ngừa qua cải tiến quy trình."
        ),
      (e, i) =>
        makeQuestion(
          e,
          1,
          i,
          "FL-1.2.3",
          "K2",
          `A tired analyst misunderstands a business rule for ${pick(ctx.riskArea, e)}. The wrong rule is documented, implemented, and later causes ${pick(ctx.defect, e)} in operation. Which sequence best fits ISTQB terminology?`,
          "Root cause -> error -> defect -> failure",
          [
            "Failure -> defect -> error -> root cause",
            "Defect -> failure -> root cause -> error",
            "Error -> root cause -> failure -> defect"
          ],
          "Root cause là nguyên nhân gốc; error là sai sót con người; defect nằm trong work product; failure là biểu hiện khi chạy."
        ),
      (e, i) => {
        const scenario = [
          {
            text: "The same regression tests have been run for many releases and now find very few new defects.",
            correct: "Tests wear out"
          },
          {
            text: "A small number of modules contain most of the failures observed in production.",
            correct: "Defects cluster together"
          },
          {
            text: "A team reviews user stories before coding to avoid expensive rework later.",
            correct: "Early testing saves time and money"
          },
          {
            text: "A system passes all specified tests but does not solve the users' real business problem.",
            correct: "Absence-of-defects fallacy"
          }
        ][e % 4];
        return makeQuestion(
          e,
          1,
          i,
          "FL-1.3.1",
          "K2",
          `${scenario.text} Which testing principle is illustrated?`,
          scenario.correct,
          ["Exhaustive testing is impossible", "Testing shows absence of defects", "Testing is only dynamic execution"].filter(
            (option) => option !== scenario.correct
          ),
          "Đọc tình huống rồi ghép với nguyên lý phù hợp. Đây là kiểu câu rất hay gặp trong đề."
        );
      },
      (e, i) =>
        makeQuestion(
          e,
          1,
          i,
          "FL-1.4.1",
          "K2",
          "Which test activity answers the question 'what to test?' by identifying and prioritizing test conditions?",
          "Test analysis",
          ["Test design", "Test implementation", "Test completion"],
          "Test analysis trả lời 'what to test?'. Test design mới trả lời 'how to test?'."
        ),
      (e, i) =>
        makeQuestion(
          e,
          1,
          i,
          "FL-1.4.4",
          "K2",
          `A requirement for ${pick(ctx.feature, e)} changes. The team quickly identifies related risks, test cases, results, and defects. What enables this?`,
          "Traceability between the test basis, testware, results, and defects",
          [
            "Exploratory testing without notes",
            "Using only independent testers",
            "Deleting old test completion reports"
          ],
          "Traceability hỗ trợ coverage, impact analysis, audit, reporting và change evaluation."
        ),
      (e, i) =>
        makeQuestion(
          e,
          1,
          i,
          "FL-1.5.3",
          "K2",
          "Which statement about independence of testing is most accurate?",
          "Independence can reveal different defects but may also reduce collaboration if handled poorly",
          [
            "Maximum independence is always best and has no drawbacks",
            "Independent testing removes the need for developer testing",
            "Only external testers can find important defects"
          ],
          "Independence có lợi nhờ góc nhìn khác, nhưng có rủi ro cô lập, bottleneck hoặc đối đầu."
        )
    ],
    2: [
      (e, i) =>
        makeQuestion(
          e,
          2,
          i,
          "FL-2.1.1",
          "K2",
          "Which testing aspect is directly affected by the selected software development lifecycle?",
          "The timing, scope, documentation detail, techniques, automation, and tester responsibilities",
          [
            "Whether software can ever contain defects",
            "Whether validation is needed",
            "The legal ownership of all work products"
          ],
          "SDLC ảnh hưởng cách test diễn ra, không làm biến mất defect hay validation."
        ),
      (e, i) =>
        makeQuestion(
          e,
          2,
          i,
          "FL-2.1.3",
          "K1",
          "Which test-first approach commonly expresses expected behavior using Given/When/Then?",
          "Behavior-Driven Development",
          ["Test-Driven Development", "Maintenance testing", "Big-bang integration"],
          "Given/When/Then là dấu hiệu rất mạnh của BDD."
        ),
      (e, i) =>
        makeQuestion(
          e,
          2,
          i,
          "FL-2.1.4",
          "K2",
          "Which testing benefit is commonly associated with DevOps?",
          "Fast feedback through CI/CD pipelines and automated checks",
          [
            "No need for manual testing from the user's perspective",
            "No need for configuration management",
            "Complete elimination of regression risk"
          ],
          "DevOps giúp feedback nhanh và automation tốt hơn, nhưng vẫn cần manual testing và CM."
        ),
      (e, i) =>
        makeQuestion(
          e,
          2,
          i,
          "FL-2.1.5",
          "K2",
          `Which activity is the best example of shift left for the ${pick(ctx.feature, e)} feature?`,
          "Reviewing acceptance criteria for testability before implementation starts",
          [
            "Waiting until system testing to clarify ambiguous requirements",
            "Skipping regression tests because the team uses Agile",
            "Running only manual tests after production deployment"
          ],
          "Shift left là đưa hoạt động test có giá trị lên sớm hơn, không phải bỏ test về sau."
        ),
      (e, i) =>
        makeQuestion(
          e,
          2,
          i,
          "FL-2.2.1",
          "K2",
          `The system under test exchanges messages with a ${pick(ctx.external, e)} in a production-like environment. Which test level is most likely?`,
          "System integration testing",
          ["Component testing", "Component integration testing", "Alpha testing"],
          "Kết nối với hệ thống/dịch vụ bên ngoài là system integration testing."
        ),
      (e, i) =>
        makeQuestion(
          e,
          2,
          i,
          "FL-2.2.3",
          "K2",
          `After fixing a defect in ${pick(ctx.feature, e)}, the team reruns the failing test and then runs related tests to check for side effects. Which pair is correct?`,
          "Confirmation testing, then regression testing",
          [
            "Regression testing, then confirmation testing",
            "Acceptance testing, then component testing",
            "Static testing, then dynamic analysis"
          ],
          "Rerun lỗi cũ để kiểm tra fix là confirmation; kiểm tra tác dụng phụ là regression."
        )
    ],
    3: [
      (e, i) =>
        makeQuestion(
          e,
          3,
          i,
          "FL-3.1.1",
          "K1",
          "Which work product can be examined by a review?",
          "Any work product that can be read and understood",
          ["Only executable code", "Only a deployed system", "Only automated test scripts"],
          "Review áp dụng cho work product đọc và hiểu được, kể cả requirement, story, design, test case."
        ),
      (e, i) =>
        makeQuestion(
          e,
          3,
          i,
          "FL-3.1.2",
          "K2",
          "Which is a value of static testing?",
          "It can detect defects early in non-executable work products",
          [
            "It always replaces all dynamic testing",
            "It requires a fully integrated executable system",
            "It can only find performance failures"
          ],
          "Static testing rất mạnh ở việc phát hiện lỗi sớm trước khi có executable software."
        ),
      (e, i) =>
        makeQuestion(
          e,
          3,
          i,
          "FL-3.1.3",
          "K2",
          "Which statement correctly compares static and dynamic testing?",
          "Static testing can find defects directly; dynamic testing can reveal failures for later diagnosis",
          [
            "Static testing executes software; dynamic testing reviews documents",
            "Dynamic testing is applicable to non-executable work products",
            "Static testing can only be performed after system testing"
          ],
          "Static không chạy phần mềm; dynamic chạy phần mềm và quan sát failure."
        ),
      (e, i) => {
        const roleQuestion = true;
        return makeQuestion(
          e,
          3,
          i,
          roleQuestion ? "FL-3.2.3" : "FL-3.2.4",
          roleQuestion ? "K1" : "K2",
          roleQuestion
            ? "In a formal review, who records anomalies, decisions, and review information?"
            : "Which review type is the most formal and usually collects metrics?",
          roleQuestion ? "Scribe or recorder" : "Inspection",
          roleQuestion
            ? ["Author", "Manager", "Customer representative only"]
            : ["Informal review", "Walkthrough", "Pair programming"],
          roleQuestion
            ? "Scribe/recorder ghi anomaly và quyết định trong review."
            : "Inspection là review type formal nhất, theo process đầy đủ và thường thu metric."
        );
      }
    ],
    4: [
      (e, i) =>
        makeQuestion(
          e,
          4,
          i,
          "FL-4.1.1",
          "K2",
          "Which classification is correct?",
          "Exploratory testing is an experience-based technique",
          [
            "Equivalence partitioning is a white-box technique",
            "Statement testing is a black-box technique",
            "Decision table testing is an experience-based technique"
          ],
          "Exploratory testing dựa vào kỹ năng, kinh nghiệm và việc học trong lúc test."
        ),
      (e, i) => {
        const min = 1 + e;
        const max = min + 49;
        return makeQuestion(
          e,
          4,
          i,
          "FL-4.2.1",
          "K3",
          `A ${pick(ctx.field, e)} field accepts whole numbers from ${min} to ${max} inclusive. Which set achieves equivalence partition coverage for this single field?`,
          `${min - 1}, ${min + 10}, ${max + 1}`,
          [`${min}, ${min + 10}, ${max}`, `${min - 1}, ${min}, ${max}, ${max + 1}`, `${min + 10} only`],
          "EP cần một đại diện cho dưới range, trong range và trên range."
        );
      },
      (e, i) => {
        const min = 10 + e;
        const max = min + 10;
        return makeQuestion(
          e,
          4,
          i,
          "FL-4.2.2",
          "K3",
          `A valid partition is integers ${min} through ${max} inclusive. Which set provides 3-value BVA for both boundaries?`,
          `${min - 1}, ${min}, ${min + 1}, ${max - 1}, ${max}, ${max + 1}`,
          [`${min}, ${max}`, `${min - 1}, ${min + 1}, ${max - 1}, ${max + 1}`, `${min}, ${min + 1}, ${max - 1}, ${max}`],
          "3-value BVA lấy boundary và hai hàng xóm quanh mỗi boundary."
        );
      },
      (e, i) => {
        const total = 8 + (e % 3) * 2;
        const infeasible = 2;
        const covered = Math.floor((total - infeasible) / 2);
        return makeQuestion(
          e,
          4,
          i,
          "FL-4.2.3",
          "K3",
          `A decision table has ${total} columns. ${infeasible} columns are infeasible and removed. ${covered} feasible columns have been covered. What is the decision table coverage?`,
          `${covered}/${total - infeasible}`,
          [`${covered}/${total}`, `${total - infeasible}/${total}`, `${covered}/${covered}`],
          "Coverage của decision table tính trên feasible decision rules, không tính infeasible columns."
        );
      },
      (e, i) => {
        const states = 5 + (e % 3);
        const transitions = 8 + (e % 4);
        const exercised = transitions - 2;
        return makeQuestion(
          e,
          4,
          i,
          "FL-4.2.4",
          "K3",
          `A state model has ${states} states and ${transitions} valid transitions. Tests visit all states and exercise ${exercised} valid transitions. Which statement is correct?`,
          `All states coverage is 100%; valid transitions coverage is ${Math.round((exercised / transitions) * 100)}%`,
          [
            `All states coverage is ${Math.round((exercised / transitions) * 100)}%; valid transitions coverage is 100%`,
            "All transitions coverage is necessarily 100%",
            "This measures statement coverage"
          ],
          "All states coverage và valid transitions coverage là hai tiêu chí khác nhau."
        );
      },
      (e, i) => {
        const total = 60 + e * 4;
        const executed = total - 15;
        return makeQuestion(
          e,
          4,
          i,
          "FL-4.3.1",
          "K2",
          `A test suite executes ${executed} of ${total} executable statements. What is the statement coverage?`,
          `${Math.round((executed / total) * 100)}%`,
          [`${executed}%`, `${total - executed}%`, `${Math.round((total / executed) * 100)}%`],
          "Statement coverage = executed statements / executable statements * 100%."
        );
      },
      (e, i) =>
        makeQuestion(
          e,
          4,
          i,
          "FL-4.3.2",
          "K2",
          "Which statement about branch and statement coverage is correct?",
          "100% branch coverage implies 100% statement coverage",
          [
            "100% statement coverage always implies 100% branch coverage",
            "Branch coverage ignores conditional branches",
            "Statement coverage is stronger than branch coverage"
          ],
          "Branch coverage subsumes statement coverage, nhưng chiều ngược lại không chắc đúng."
        ),
      (e, i) =>
        makeQuestion(
          e,
          4,
          i,
          "FL-4.4.2",
          "K2",
          "A tester uses a time-boxed charter to learn about checkout recovery after network interruption, designing and executing tests at the same time. Which technique is this?",
          "Exploratory testing",
          ["Boundary value analysis", "Statement testing", "Decision table testing"],
          "Exploratory testing vừa học, vừa thiết kế, vừa thực thi và đánh giá test."
        ),
      (e, i) =>
        makeQuestion(
          e,
          4,
          i,
          "FL-4.5.1",
          "K2",
          "Which user story is most testable?",
          `As a user, I want to filter ${pick(["products", "appointments", "orders", "lessons"], e)} by status so that I can find relevant items quickly`,
          [
            "As a user, I want the system to be better so I am happy",
            "As a team, we need quality and performance",
            "As a manager, I want everything to work perfectly"
          ],
          "User story tốt có role, goal và business value rõ, dễ viết acceptance criteria."
        ),
      (e, i) =>
        makeQuestion(
          e,
          4,
          i,
          "FL-4.5.2",
          "K2",
          "Which acceptance criterion is scenario-oriented?",
          `Given a registered user, when the user submits valid ${pick(["login", "checkout", "search", "booking"], e)} data, then the system shows the expected confirmation`,
          [
            "The system shall be fast and reliable",
            "All screens should be intuitive",
            "The feature must support business rules"
          ],
          "Given/When/Then là dạng scenario-oriented acceptance criterion."
        ),
      (e, i) =>
        makeQuestion(
          e,
          4,
          i,
          "FL-4.5.3",
          "K3",
          "In ATDD, a rule says premium members get free shipping for orders of $50 or more; other orders pay shipping. Which set of examples best starts the acceptance tests?",
          "Premium $50 free, premium $49 pays, standard $70 pays",
          ["Premium $70 free only", "Standard $20 pays only", "Any user $50 free, any user $49 pays"],
          "Bộ đúng cover điều kiện membership, boundary $50 và case non-premium."
        )
    ],
    5: [
      (e, i) =>
        makeQuestion(
          e,
          5,
          i,
          "FL-5.1.1",
          "K2",
          "Which item is typical content of a test plan?",
          "Scope, objectives, risks, approach, resources, schedule, and entry/exit criteria",
          ["Only source code branch names", "Only fixed defect IDs", "Only final production monitoring results"],
          "Test plan cần context, approach, risk, resources, schedule, criteria và communication."
        ),
      (e, i) =>
        makeQuestion(
          e,
          5,
          i,
          "FL-5.1.2",
          "K1",
          "How can testers add value during iteration planning?",
          "By assessing story testability, identifying testing tasks, and estimating test effort",
          [
            "By refusing to estimate test work until coding is complete",
            "By replacing the product owner in all business decisions",
            "By postponing non-functional concerns until release day"
          ],
          "Trong iteration planning, tester giúp làm rõ testability, task, effort và functional/non-functional aspects."
        ),
      (e, i) =>
        makeQuestion(
          e,
          5,
          i,
          "FL-5.1.3",
          "K2",
          "Which statement best differentiates entry criteria from exit criteria?",
          "Entry criteria define what must be true before starting; exit criteria define what must be true to finish",
          [
            "Entry criteria define defect severity; exit criteria define defect priority",
            "Entry criteria are only for Agile; exit criteria are only for sequential models",
            "Entry criteria and exit criteria are always identical"
          ],
          "Entry là điều kiện bắt đầu, exit là điều kiện hoàn tất."
        ),
      (e, i) => {
        const a = 4 + e;
        const m = a + 3;
        const b = m + 9;
        const estimate = Math.round((a + 4 * m + b) / 6);
        return makeQuestion(
          e,
          5,
          i,
          "FL-5.1.4",
          "K3",
          `Using three-point estimation, optimistic=${a}h, most likely=${m}h, pessimistic=${b}h. What is E?`,
          `${estimate}h`,
          [`${m}h`, `${b}h`, `${Math.round((a + m + b) / 3)}h`],
          "Three-point estimate theo CTFL: E = (a + 4*m + b) / 6."
        );
      },
      (e, i) =>
        makeQuestion(
          e,
          5,
          i,
          "FL-5.1.5",
          "K3",
          "TC1 covers requirements A and B. TC2 covers B and C. TC3 covers D. If TC1 is selected first, which test should normally be next using additional coverage prioritization?",
          "TC2 or TC3 may be selected based on a tie-breaker because each adds one new requirement",
          [
            "TC2 must be selected because it covers two requirements in total",
            "TC1 should be repeated because it had the highest initial coverage",
            "No more tests are needed"
          ],
          "Sau TC1, A/B đã cover. TC2 chỉ thêm C, TC3 chỉ thêm D, nên cần tie-breaker."
        ),
      (e, i) =>
        makeQuestion(
          e,
          5,
          i,
          "FL-5.1.6",
          "K1",
          "Which statement best describes the test pyramid?",
          "It helps discuss test automation and effort allocation across tests of different granularity",
          [
            "It recommends that most automated tests should be slow end-to-end UI tests",
            "It applies only to manual acceptance testing",
            "It removes the need for exploratory testing"
          ],
          "Test pyramid giúp cân bằng nhiều test nhỏ nhanh ở dưới và ít test end-to-end chậm ở trên."
        ),
      (e, i) =>
        makeQuestion(
          e,
          5,
          i,
          "FL-5.2.2",
          "K2",
          `Which is a product risk for the ${pick(ctx.product, e)}?`,
          `${pick(ctx.riskArea, e)} may produce incorrect results`,
          [
            "A key tester may leave the project",
            "The test environment may be delivered late",
            "A supplier may miss a contractual delivery date"
          ],
          "Product risk ảnh hưởng chất lượng sản phẩm. Resource, environment, supplier delay là project risks."
        ),
      (e, i) =>
        makeQuestion(
          e,
          5,
          i,
          "FL-5.3.3",
          "K2",
          "Monitoring shows that only 40% of high-risk tests have run and the defect fix rate is slow. Which test control action is most appropriate?",
          "Reprioritize testing, add support for high-risk areas, and escalate the fix-rate issue",
          [
            "Continue exactly as planned regardless of risk",
            "Close all open defects to meet the schedule",
            "Stop communicating test status until all tests pass"
          ],
          "Test control là hành động điều chỉnh dựa trên thông tin monitoring."
        ),
      (e, i) =>
        makeQuestion(
          e,
          5,
          i,
          "FL-5.5.1",
          "K3",
          "Which information is most important in a defect report to support reproduction and resolution?",
          "Environment, steps, expected result, actual result, logs or screenshots, severity, priority, and references",
          [
            "Only the tester's opinion that the defect is annoying",
            "Only the defect priority without any context",
            "Only the project name and release date"
          ],
          "Defect report cần đủ thông tin để reproduce, triage, resolve và track quality."
        )
    ],
    6: [
      (e, i) =>
        makeQuestion(
          e,
          6,
          i,
          "FL-6.1.1",
          "K2",
          "Which statement about test tools is correct?",
          "A spreadsheet can be a test tool if it supports testing activities in context",
          [
            "Only commercial UI automation products are test tools",
            "Test tools are used only for test execution",
            "A tool is useful regardless of process, skills, or context"
          ],
          "Tool được định nghĩa theo việc nó hỗ trợ testing, không theo độ phức tạp hay giá tiền."
        ),
      (e, i) =>
        makeQuestion(
          e,
          6,
          i,
          "FL-6.2.1",
          "K1",
          "Which is a realistic risk of test automation?",
          "Underestimating the effort to introduce and maintain the tool and test scripts",
          [
            "Faster feedback from automated checks",
            "More objective measurement of coverage",
            "Reduced repetitive manual work"
          ],
          "Các lựa chọn còn lại là benefits. Rủi ro lớn là kỳ vọng sai và đánh giá thấp chi phí duy trì."
        )
    ]
  };

  function createExam(examIndex) {
    const questions = [];
    [1, 2, 3, 4, 5, 6].forEach((chapter) => {
      templates[chapter].forEach((template, localIndex) => {
        questions.push(template(examIndex, localIndex));
      });
    });
    return {
      id: `mock-${examIndex + 1}`,
      title: `Mock Exam ${examIndex + 1}`,
      description: "40 original CTFL-style questions. Pass mark: 26/40. Questions and options are in English; explanations are in Vietnamese.",
      passMark: 26,
      duration: 60,
      questions
    };
  }

  window.ISTQB_MOCK_EXAMS = Array.from({ length: 10 }, (_, index) => createExam(index));

  if (Array.isArray(window.ISTQB_CHAPTERS)) {
    window.ISTQB_CHAPTERS = window.ISTQB_CHAPTERS.map((chapter) => ({
      ...chapter,
      exercises: window.ISTQB_MOCK_EXAMS.flatMap((exam) =>
        exam.questions
          .filter((question) => question.chapter === chapter.id)
          .map((question) => ({
            ...question,
            practiceSet: exam.id,
            practiceTitle: exam.title
          }))
      )
    }));
  }
})();
