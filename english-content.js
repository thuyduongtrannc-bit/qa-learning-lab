(function () {
  const studyOverrides = {
    1: {
      title: "Fundamentals of Testing",
      summary:
        "Testing evaluates software work products and software quality, reduces risk, and provides information for stakeholder decisions. It is broader than test execution.",
      sourceNote: "Paraphrased from ISTQB CTFL Syllabus v4.0.1, Chapter 1, sections 1.1 to 1.5.",
      learningObjectives: [
        { code: "FL-1.1.1", k: "K1", text: "Identify typical test objectives." },
        { code: "FL-1.1.2", k: "K2", text: "Differentiate testing from debugging." },
        { code: "FL-1.2.1", k: "K2", text: "Exemplify why testing is necessary." },
        { code: "FL-1.2.2", k: "K1", text: "Recall the relation between testing and quality assurance." },
        { code: "FL-1.2.3", k: "K2", text: "Distinguish root cause, error, defect, and failure." },
        { code: "FL-1.3.1", k: "K2", text: "Explain the seven testing principles." },
        { code: "FL-1.4.1", k: "K2", text: "Explain test activities and their related tasks." },
        { code: "FL-1.4.2", k: "K2", text: "Explain the impact of context on the test process." },
        { code: "FL-1.4.3", k: "K2", text: "Differentiate the testware that supports test activities." },
        { code: "FL-1.4.4", k: "K2", text: "Explain the value of maintaining traceability." },
        { code: "FL-1.4.5", k: "K2", text: "Compare the different roles in testing." },
        { code: "FL-1.5.1", k: "K2", text: "Give examples of generic skills required for testing." },
        { code: "FL-1.5.2", k: "K1", text: "Recall the advantages of the whole team approach." },
        { code: "FL-1.5.3", k: "K2", text: "Distinguish benefits and drawbacks of test independence." }
      ],
      sections: [
        {
          code: "1.1",
          heading: "What is testing?",
          los: ["FL-1.1.1", "FL-1.1.2"],
          body:
            "Software testing is a set of activities used to discover defects and evaluate the quality of software work products. The item being tested is the test object, and it may be executable software or a non-executable work product.",
          bullets: [
            "Testing includes static testing and dynamic testing. Dynamic testing executes software; static testing examines work products without execution.",
            "Testing includes verification and validation. Verification checks specified requirements; validation checks stakeholder needs in the operational context.",
            "Typical objectives include evaluating work products, causing failures, finding defects, achieving coverage, reducing quality risk, meeting legal or contractual requirements, informing decisions, building confidence, and validating stakeholder expectations.",
            "Testing and debugging are separate. Testing can reveal failures or directly find defects; debugging reproduces a failure, diagnoses the defect, and fixes it."
          ],
          exam:
            "Reject answers claiming that testing is only execution or that testing proves software is defect-free."
        },
        {
          code: "1.2",
          heading: "Why is testing necessary?",
          los: ["FL-1.2.1", "FL-1.2.2", "FL-1.2.3"],
          body:
            "Testing contributes to success by finding defects cost-effectively, evaluating quality during the SDLC, representing user needs, and supporting contractual, legal, or regulatory obligations.",
          bullets: [
            "Testing is product-oriented and corrective; quality assurance is process-oriented and preventive.",
            "Test results help testing teams fix defects and help QA understand how well development and test processes are performing.",
            "Human errors may introduce defects into documentation, code, test scripts, build files, or other work products.",
            "When a code defect is executed, it may cause a failure. Some failures can also be caused by environmental conditions.",
            "A root cause is the fundamental reason for a problem and can be addressed to reduce similar future defects or failures."
          ],
          exam: "Know the chain root cause -> error -> defect -> failure and the difference between QA and testing."
        },
        {
          code: "1.3",
          heading: "Testing principles",
          los: ["FL-1.3.1"],
          body:
            "The seven testing principles provide general guidance that applies across contexts and explains why testing must be risk-based, early, refreshed, and context-aware.",
          bullets: [
            "Testing shows the presence, not the absence, of defects.",
            "Exhaustive testing is impossible except in trivial cases.",
            "Early testing saves time and money.",
            "Defects cluster together.",
            "Tests wear out and need to be reviewed or refreshed.",
            "Testing is context dependent.",
            "Absence-of-defects is a fallacy if the product does not meet user needs or business goals."
          ],
          exam: "Scenario questions often ask which principle is illustrated, not just which definition sounds correct."
        },
        {
          code: "1.4",
          heading: "Test activities, testware and test roles",
          los: ["FL-1.4.1", "FL-1.4.2", "FL-1.4.3", "FL-1.4.4", "FL-1.4.5"],
          body:
            "A test process is tailored to context. Its activities often appear sequential, but in real projects they may be iterative or parallel.",
          bullets: [
            "Test planning defines objectives and chooses an approach.",
            "Test monitoring checks progress against the plan; test control takes corrective actions.",
            "Test analysis answers 'what to test?' by identifying and prioritizing test conditions.",
            "Test design answers 'how to test?' by elaborating test conditions into test cases and other testware.",
            "Test implementation creates or acquires testware needed for execution, including procedures, scripts, suites, data, schedules, and environments.",
            "Test execution runs tests, compares actual and expected results, logs outcomes, and reports anomalies.",
            "Test completion archives useful testware, reports results, records lessons learned, and communicates completion information.",
            "Traceability links test basis, risks, conditions, cases, results, and defects. It supports coverage, impact analysis, auditability, reporting, and governance.",
            "The test management role focuses on planning, monitoring, control, and completion. The testing role focuses on analysis, design, implementation, and execution."
          ],
          exam:
            "If a question asks 'what to test?', think test analysis. If it asks 'how to test?', think test design."
        },
        {
          code: "1.5",
          heading: "Essential skills and good practices",
          los: ["FL-1.5.1", "FL-1.5.2", "FL-1.5.3"],
          body:
            "Testing is an intellectual activity requiring testing knowledge, analytical skill, critical thinking, communication skill, and domain understanding.",
          bullets: [
            "Useful tester skills include testing knowledge, thoroughness, curiosity, attention to detail, communication, active listening, teamwork, analytical thinking, creativity, technical knowledge, and domain knowledge.",
            "The whole team approach makes quality a shared responsibility and improves collaboration between testers, developers, and business representatives.",
            "Test independence can improve defect detection because independent testers bring different backgrounds and biases.",
            "Too much separation can create isolation, poor communication, an adversarial relationship, bottlenecks, or reduced developer ownership of quality."
          ],
          exam:
            "Balanced answers about independence usually mention both benefits and drawbacks."
        }
      ],
      terms: [
        ["Test object", "The work product or software item being tested."],
        ["Test basis", "The body of knowledge used as the basis for test analysis and design."],
        ["Test condition", "An aspect of the test basis that can be verified by testing."],
        ["Testware", "Work products created during the test process."],
        ["Traceability", "Links between test basis, testware, test results, and defects."],
        ["Root cause", "A fundamental reason for the occurrence of a problem."]
      ]
    },
    2: {
      title: "Testing Throughout the SDLC",
      summary:
        "Testing must be adapted to the selected software development lifecycle, including test timing, documentation, automation, levels, types, maintenance, and feedback loops.",
      sourceNote: "Paraphrased from ISTQB CTFL Syllabus v4.0.1, Chapter 2, sections 2.1 to 2.3.",
      learningObjectives: [
        { code: "FL-2.1.1", k: "K2", text: "Explain the impact of the chosen SDLC on testing." },
        { code: "FL-2.1.2", k: "K1", text: "Recall good testing practices that apply to all SDLCs." },
        { code: "FL-2.1.3", k: "K1", text: "Recall examples of test-first approaches." },
        { code: "FL-2.1.4", k: "K2", text: "Summarize how DevOps might impact testing." },
        { code: "FL-2.1.5", k: "K2", text: "Explain shift left." },
        { code: "FL-2.1.6", k: "K2", text: "Explain how retrospectives support process improvement." },
        { code: "FL-2.2.1", k: "K2", text: "Distinguish the different test levels." },
        { code: "FL-2.2.2", k: "K2", text: "Distinguish the different test types." },
        { code: "FL-2.2.3", k: "K2", text: "Distinguish confirmation testing from regression testing." },
        { code: "FL-2.3.1", k: "K2", text: "Summarize maintenance testing and its triggers." }
      ],
      sections: [
        {
          code: "2.1",
          heading: "Testing in the context of an SDLC",
          los: ["FL-2.1.1", "FL-2.1.2", "FL-2.1.3", "FL-2.1.4", "FL-2.1.5", "FL-2.1.6"],
          body:
            "An SDLC model defines how development phases and activities relate logically and chronologically. Testing must fit that lifecycle to be effective.",
          bullets: [
            "The SDLC affects scope and timing of test activities, documentation detail, techniques, approach, automation, and tester responsibilities.",
            "Sequential models usually delay dynamic testing because executable code arrives later, but testers can review requirements and design tests early.",
            "Iterative and incremental models allow static and dynamic testing in each iteration or increment.",
            "Agile projects often favor lightweight documentation, extensive regression automation, and experience-based manual testing.",
            "Good practices include linking each development activity to a test activity, defining distinct test-level objectives, starting analysis and design early, and reviewing draft work products.",
            "TDD, ATDD, and BDD are test-first approaches because tests or examples are defined before code is written.",
            "DevOps promotes fast feedback, CI/CD, integrated toolchains, stable environments, automated regression, and visibility of non-functional quality.",
            "Shift left means testing earlier in the SDLC, not neglecting later testing.",
            "Retrospectives help teams retain successes, identify improvements, improve testware, improve the test basis, and strengthen cooperation."
          ],
          exam: "DevOps and shift left do not remove the need for manual testing from the user's perspective."
        },
        {
          code: "2.2",
          heading: "Test levels and test types",
          los: ["FL-2.2.1", "FL-2.2.2", "FL-2.2.3"],
          body:
            "Test levels group test activities by development phase or objective. Test types group activities by objective or quality characteristic.",
          bullets: [
            "Component testing focuses on isolated components or units.",
            "Component integration testing focuses on interfaces and interactions between components.",
            "System testing focuses on the behavior and capabilities of a complete system or product.",
            "System integration testing focuses on interfaces between the system under test and other systems or services.",
            "Acceptance testing focuses on validation and readiness for deployment or use.",
            "Functional testing checks what the system should do.",
            "Non-functional testing checks how well the system behaves, including performance, compatibility, usability, reliability, security, maintainability, portability, and safety.",
            "Black-box testing is specification-based; white-box testing is structure-based.",
            "Confirmation testing checks whether a defect fix solved the original problem. Regression testing checks whether a change caused adverse consequences."
          ],
          exam: "Do not confuse system testing with system integration testing, or confirmation testing with regression testing."
        },
        {
          code: "2.3",
          heading: "Maintenance testing",
          los: ["FL-2.3.1"],
          body:
            "Maintenance testing is triggered by changes to an operational system, its environment, or its lifecycle status.",
          bullets: [
            "Maintenance may be corrective, adaptive, or intended to improve performance or maintainability.",
            "Impact analysis helps decide whether a change should be made and what areas may be affected.",
            "Maintenance testing checks both the changed software and possible regressions in unchanged areas.",
            "Triggers include modifications, hot fixes, upgrades, migrations, data conversion, retirement, archiving, restore, and retrieval procedures."
          ],
          exam: "Existing operational system plus change, migration, or retirement points to maintenance testing."
        }
      ],
      terms: [
        ["Test level", "A group of test activities organized and managed together."],
        ["Test type", "A group of test activities focused on specific objectives or quality characteristics."],
        ["Shift left", "Performing testing earlier in the SDLC."],
        ["Confirmation testing", "Testing whether a defect fix resolved the original problem."],
        ["Regression testing", "Testing whether changes caused adverse side effects."]
      ]
    },
    3: {
      title: "Static Testing",
      summary:
        "Static testing evaluates work products without executing software. It includes reviews and static analysis and is especially valuable early in the SDLC.",
      sourceNote: "Paraphrased from ISTQB CTFL Syllabus v4.0.1, Chapter 3, sections 3.1 to 3.2.",
      learningObjectives: [
        { code: "FL-3.1.1", k: "K1", text: "Recognize work products that can be examined by static testing." },
        { code: "FL-3.1.2", k: "K2", text: "Explain the value of static testing." },
        { code: "FL-3.1.3", k: "K2", text: "Compare and contrast static and dynamic testing." },
        { code: "FL-3.2.1", k: "K1", text: "Identify benefits of early and frequent stakeholder feedback." },
        { code: "FL-3.2.2", k: "K2", text: "Summarize the activities of the review process." },
        { code: "FL-3.2.3", k: "K1", text: "Recall responsibilities assigned to principal review roles." },
        { code: "FL-3.2.4", k: "K2", text: "Compare and contrast the different review types." },
        { code: "FL-3.2.5", k: "K1", text: "Recall factors that contribute to a successful review." }
      ],
      sections: [
        {
          code: "3.1",
          heading: "Static testing basics",
          los: ["FL-3.1.1", "FL-3.1.2", "FL-3.1.3"],
          body:
            "Static testing examines work products without executing software. It can be manual, such as reviews, or tool-supported, such as static analysis.",
          bullets: [
            "Static testing can improve quality, detect defects, and assess readability, completeness, correctness, testability, and consistency.",
            "Almost any readable work product can be reviewed, including requirements, code, plans, test cases, backlog items, charters, contracts, and models.",
            "Static analysis requires a structured artifact such as code, a model, or text with formal syntax.",
            "Static testing can find defects earlier and may find defects that dynamic testing cannot easily reveal, such as unreachable code, ambiguous requirements, missing coverage, and interface mismatches.",
            "Static testing finds defects directly; dynamic testing executes software and observes failures from which defects are diagnosed."
          ],
          exam: "Reviews can be applied before executable code exists."
        },
        {
          code: "3.2",
          heading: "Feedback and review process",
          los: ["FL-3.2.1", "FL-3.2.2", "FL-3.2.3", "FL-3.2.4", "FL-3.2.5"],
          body:
            "Early and frequent feedback reduces misunderstandings, rework, missed deadlines, and the risk of building the wrong product.",
          bullets: [
            "The generic review process includes planning, review initiation, individual review, communication and analysis, fixing and reporting.",
            "The manager provides resources. The author creates and fixes the work product. The moderator facilitates. The scribe records. Reviewers examine the work product. The review leader organizes the review.",
            "Informal reviews are lightweight and focus on anomaly detection.",
            "Walkthroughs are usually led by the author and can educate reviewers, build consensus, and find anomalies.",
            "Technical reviews are led by a moderator and performed by technically qualified reviewers.",
            "Inspections are the most formal review type and follow the complete process, often collecting metrics.",
            "Successful reviews need clear objectives, measurable exit criteria, appropriate review type, small review chunks, preparation time, management support, training, facilitation, and a constructive culture."
          ],
          exam: "Scribe records anomalies and decisions; inspection is the most formal review type."
        }
      ],
      terms: [
        ["Static testing", "Testing that does not execute software."],
        ["Review", "Human examination of a work product."],
        ["Static analysis", "Analysis of a structured artifact without execution."],
        ["Anomaly", "Anything that may require investigation; not necessarily a defect."],
        ["Inspection", "The most formal review type."]
      ]
    },
    4: {
      title: "Test Analysis and Design",
      summary:
        "This chapter focuses on applying test techniques: black-box, white-box, experience-based, and collaboration-based approaches.",
      sourceNote: "Paraphrased from ISTQB CTFL Syllabus v4.0.1, Chapter 4, sections 4.1 to 4.5.",
      learningObjectives: [
        { code: "FL-4.1.1", k: "K2", text: "Distinguish black-box, white-box, and experience-based techniques." },
        { code: "FL-4.2.1", k: "K3", text: "Use equivalence partitioning to derive test cases." },
        { code: "FL-4.2.2", k: "K3", text: "Use boundary value analysis to derive test cases." },
        { code: "FL-4.2.3", k: "K3", text: "Use decision table testing to derive test cases." },
        { code: "FL-4.2.4", k: "K3", text: "Use state transition testing to derive test cases." },
        { code: "FL-4.3.1", k: "K2", text: "Explain statement testing." },
        { code: "FL-4.3.2", k: "K2", text: "Explain branch testing." },
        { code: "FL-4.3.3", k: "K2", text: "Explain the value of white-box testing." },
        { code: "FL-4.4.1", k: "K2", text: "Explain error guessing." },
        { code: "FL-4.4.2", k: "K2", text: "Explain exploratory testing." },
        { code: "FL-4.4.3", k: "K2", text: "Explain checklist-based testing." },
        { code: "FL-4.5.1", k: "K2", text: "Explain collaborative user story writing." },
        { code: "FL-4.5.2", k: "K2", text: "Classify options for writing acceptance criteria." },
        { code: "FL-4.5.3", k: "K3", text: "Use ATDD to derive test cases." }
      ],
      sections: [
        {
          code: "4.1",
          heading: "Test techniques overview",
          los: ["FL-4.1.1"],
          body:
            "Test techniques support test analysis and design by helping testers create a relatively small but sufficient set of test cases systematically.",
          bullets: [
            "Black-box techniques derive tests from specified behavior without considering internal structure.",
            "White-box techniques derive tests from internal structure or processing.",
            "Experience-based techniques use tester knowledge and experience and complement black-box and white-box techniques."
          ],
          exam: "Classification questions are common and should be quick wins."
        },
        {
          code: "4.2",
          heading: "Black-box test techniques",
          los: ["FL-4.2.1", "FL-4.2.2", "FL-4.2.3", "FL-4.2.4"],
          body:
            "The main CTFL black-box techniques are equivalence partitioning, boundary value analysis, decision table testing, and state transition testing.",
          bullets: [
            "Equivalence partitioning divides data into non-empty, non-overlapping partitions expected to be processed in the same way.",
            "The EP coverage item is an equivalence partition. Each identified valid and invalid partition should be covered at least once.",
            "Boundary value analysis can only be used for ordered partitions and focuses on minimum and maximum boundary values.",
            "2-value BVA uses the boundary value and the closest neighbor in the adjacent partition. 3-value BVA uses the boundary and both neighbors.",
            "Decision table testing covers feasible combinations of conditions and actions. Feasible columns are the coverage items.",
            "State transition testing models states, events, guard conditions, actions, valid transitions, and invalid transitions.",
            "All states coverage is weaker than valid transitions coverage. All transitions coverage includes valid and invalid transitions."
          ],
          exam: "Do not count infeasible decision-table columns. Do not apply BVA to unordered partitions."
        },
        {
          code: "4.3",
          heading: "White-box test techniques",
          los: ["FL-4.3.1", "FL-4.3.2", "FL-4.3.3"],
          body:
            "CTFL focuses on statement testing and branch testing as common code-related white-box techniques.",
          bullets: [
            "Statement coverage measures executed executable statements divided by total executable statements.",
            "100% statement coverage does not ensure all branches have been tested.",
            "Branch coverage measures exercised branches divided by total branches.",
            "100% branch coverage implies 100% statement coverage, but not vice versa.",
            "White-box testing considers the implementation and can be valuable when specifications are vague, outdated, or incomplete."
          ],
          exam: "Remember the subsumption direction: branch coverage is stronger than statement coverage."
        },
        {
          code: "4.4",
          heading: "Experience-based test techniques",
          los: ["FL-4.4.1", "FL-4.4.2", "FL-4.4.3"],
          body:
            "Experience-based techniques rely on tester knowledge, defect history, product understanding, and learning during testing.",
          bullets: [
            "Error guessing anticipates errors, defects, and failures based on experience and common failure patterns.",
            "Exploratory testing designs, executes, and evaluates tests while the tester learns about the test object.",
            "Session-based exploratory testing uses time boxes, charters, notes, and debriefing.",
            "Checklist-based testing covers conditions from a checklist that should be kept useful, focused, and updated."
          ],
          exam: "Exploratory testing is structured learning, not random clicking."
        },
        {
          code: "4.5",
          heading: "Collaboration-based test approaches",
          los: ["FL-4.5.1", "FL-4.5.2", "FL-4.5.3"],
          body:
            "Collaboration-based approaches reduce defects by improving shared understanding among business, development, and testing.",
          bullets: [
            "User stories include Card, Conversation, and Confirmation.",
            "Good user stories should be Independent, Negotiable, Valuable, Estimable, Small, and Testable.",
            "Acceptance criteria define what a story implementation must satisfy to be accepted.",
            "Acceptance criteria may be scenario-oriented, such as Given/When/Then, or rule-oriented, such as bullet lists or input-output tables.",
            "ATDD is a test-first approach in which acceptance test cases are created before implementation and can become executable requirements."
          ],
          exam: "ATDD K3 questions often ask you to derive examples from acceptance criteria."
        }
      ],
      terms: [
        ["Coverage item", "An item that must be exercised to satisfy a coverage criterion."],
        ["Equivalence partition", "A set of values expected to be processed in the same way."],
        ["Decision rule", "A feasible column in a decision table."],
        ["Guard condition", "A condition that must be true for a transition to occur."],
        ["Defect masking", "A situation where one defect prevents another from being detected."]
      ]
    },
    5: {
      title: "Managing the Test Activities",
      summary:
        "This chapter covers planning, estimation, prioritization, risk management, monitoring, control, completion, configuration management, and defect management.",
      sourceNote: "Paraphrased from ISTQB CTFL Syllabus v4.0.1, Chapter 5, sections 5.1 to 5.5.",
      learningObjectives: [
        { code: "FL-5.1.1", k: "K2", text: "Exemplify the purpose and content of a test plan." },
        { code: "FL-5.1.2", k: "K1", text: "Recognize how testers add value to iteration and release planning." },
        { code: "FL-5.1.3", k: "K2", text: "Compare and contrast entry and exit criteria." },
        { code: "FL-5.1.4", k: "K3", text: "Use estimation techniques to calculate test effort." },
        { code: "FL-5.1.5", k: "K3", text: "Apply test case prioritization." },
        { code: "FL-5.1.6", k: "K1", text: "Recall the concepts of the test pyramid." },
        { code: "FL-5.1.7", k: "K2", text: "Summarize testing quadrants and their relationships to levels and types." },
        { code: "FL-5.2.1", k: "K1", text: "Identify risk level using likelihood and impact." },
        { code: "FL-5.2.2", k: "K2", text: "Distinguish project risks and product risks." },
        { code: "FL-5.2.3", k: "K2", text: "Explain how product risk analysis influences test scope and thoroughness." },
        { code: "FL-5.2.4", k: "K2", text: "Explain measures taken in response to analyzed product risks." },
        { code: "FL-5.3.1", k: "K1", text: "Recall metrics used for testing." },
        { code: "FL-5.3.2", k: "K2", text: "Summarize purposes, content, and audiences for test reports." },
        { code: "FL-5.3.3", k: "K2", text: "Exemplify how to communicate test status." },
        { code: "FL-5.4.1", k: "K2", text: "Summarize how configuration management supports testing." },
        { code: "FL-5.5.1", k: "K3", text: "Prepare a defect report." }
      ],
      sections: [
        {
          code: "5.1",
          heading: "Test planning",
          los: ["FL-5.1.1", "FL-5.1.2", "FL-5.1.3", "FL-5.1.4", "FL-5.1.5", "FL-5.1.6", "FL-5.1.7"],
          body:
            "A test plan describes objectives, resources, and processes for testing and helps the team think ahead about risks, schedules, people, tools, cost, and effort.",
          bullets: [
            "Typical plan content includes context, assumptions, constraints, stakeholders, communication, risk register, test approach, budget, and schedule.",
            "In release planning, testers help refine stories, write testable acceptance criteria, analyze risk, estimate effort, and plan release testing.",
            "In iteration planning, testers assess story testability, identify testing tasks, estimate effort, and clarify functional and non-functional aspects.",
            "Entry criteria define preconditions for starting an activity. Exit criteria define what must be true to complete an activity.",
            "Estimation techniques include ratios, extrapolation, Wideband Delphi or Planning Poker, and three-point estimation.",
            "Test case prioritization may be risk-based, coverage-based, additional-coverage-based, or requirements-based, while considering dependencies and resource availability.",
            "The test pyramid helps discuss automation and effort across different granularities.",
            "Testing quadrants relate business-facing or technology-facing tests to tests that support the team or critique the product."
          ],
          exam: "Three-point estimation and additional-coverage prioritization are common K3 question types."
        },
        {
          code: "5.2",
          heading: "Risk management",
          los: ["FL-5.2.1", "FL-5.2.2", "FL-5.2.3", "FL-5.2.4"],
          body:
            "Risk-based testing selects, prioritizes, and manages testing based on risk analysis and risk control.",
          bullets: [
            "Risk level is determined by likelihood and impact.",
            "Project risks threaten project objectives such as schedule, budget, scope, people, tools, or supplier delivery.",
            "Product risks threaten product quality characteristics such as functionality, performance, security, reliability, usability, or safety.",
            "Product risk analysis includes risk identification and risk assessment.",
            "Risk analysis influences test scope, levels, types, techniques, coverage, effort, priority, and additional activities.",
            "Risk control includes mitigation and monitoring. Possible responses include testing, acceptance, transfer, or contingency planning."
          ],
          exam: "Ask whether the risk harms product quality or project delivery."
        },
        {
          code: "5.3",
          heading: "Test monitoring, control and completion",
          los: ["FL-5.3.1", "FL-5.3.2", "FL-5.3.3"],
          body:
            "Test monitoring gathers information. Test control uses that information to guide corrective action. Test completion consolidates experience, testware, and results.",
          bullets: [
            "Control actions may include reprioritizing tests, re-evaluating entry or exit criteria, adjusting schedules, or adding resources.",
            "Metrics include project progress, test progress, product quality, defect, risk, coverage, and cost metrics.",
            "Progress reports support ongoing control and usually include period, progress, deviations, impediments, metrics, risks, and next planned work.",
            "Completion reports summarize completed testing, quality evaluation, deviations, impediments, metrics, unmitigated risks, unresolved defects, and lessons learned.",
            "Status can be communicated verbally, through dashboards, electronic channels, online documentation, or formal reports."
          ],
          exam: "Monitoring observes and measures; control changes the plan or action."
        },
        {
          code: "5.4",
          heading: "Configuration management",
          los: ["FL-5.4.1"],
          body:
            "Configuration management identifies, controls, versions, tracks, and relates test items and testware so results remain reproducible and traceable.",
          bullets: [
            "Configuration items may include test plans, strategies, conditions, cases, scripts, results, logs, reports, and test environments.",
            "A baseline is an approved configuration that can be changed only through formal change control.",
            "CM helps reproduce previous test results and maintain traceability."
          ],
          exam: "Build, environment, data, and test-case version questions often point to configuration management."
        },
        {
          code: "5.5",
          heading: "Defect management",
          los: ["FL-5.5.1"],
          body:
            "Defect management handles reported anomalies from discovery to closure. An anomaly may become a defect, a false positive, or a change request.",
          bullets: [
            "A defect workflow logs, analyzes, classifies, decides response, and closes reports.",
            "A useful defect report provides enough information to resolve the issue, track quality, and improve processes.",
            "Typical data includes identifier, title, date, author, test object, environment, context, steps, expected and actual results, logs, severity, priority, status, and references.",
            "Severity is the impact. Priority is the urgency or order of fixing."
          ],
          exam: "For K3 defect-report questions, check whether steps, expected result, actual result, and environment are present."
        }
      ],
      terms: [
        ["Entry criteria", "Preconditions for starting an activity."],
        ["Exit criteria", "Conditions for considering an activity complete."],
        ["Product risk", "A risk affecting product quality."],
        ["Project risk", "A risk affecting project success."],
        ["Defect report", "A report that provides information needed to resolve and track an anomaly or defect."]
      ]
    },
    6: {
      title: "Test Tools",
      summary:
        "Test tools support many test activities. Automation can provide strong benefits, but only when tool introduction, maintenance, training, and risks are managed.",
      sourceNote: "Paraphrased from ISTQB CTFL Syllabus v4.0.1, Chapter 6, sections 6.1 to 6.2.",
      learningObjectives: [
        { code: "FL-6.1.1", k: "K2", text: "Explain how different types of test tools support testing." },
        { code: "FL-6.2.1", k: "K1", text: "Recall the benefits and risks of test automation." }
      ],
      sections: [
        {
          code: "6.1",
          heading: "Tool support for testing",
          los: ["FL-6.1.1"],
          body:
            "Tools can support test management, static testing, design, implementation, execution, coverage, non-functional testing, DevOps, collaboration, and deployment standardization.",
          bullets: [
            "Test management tools support requirements, tests, defects, configuration, and reporting.",
            "Static testing tools support reviews and static analysis.",
            "Test design and implementation tools support generation of test cases, test data, and procedures.",
            "Execution and coverage tools support automated execution and measurement.",
            "Non-functional testing tools enable checks that are difficult or impossible manually.",
            "A spreadsheet can be a test tool if it supports testing in context."
          ],
          exam: "Do not restrict the idea of test tools to automated UI execution."
        },
        {
          code: "6.2",
          heading: "Benefits and risks of test automation",
          los: ["FL-6.2.1"],
          body:
            "Acquiring a tool does not guarantee success. Tools require introduction, maintenance, training, analysis, and risk mitigation.",
          bullets: [
            "Benefits include reduced repetitive work, consistency, repeatability, objective measurement, easier reporting, faster feedback, and more time for deeper testing.",
            "Risks include unrealistic expectations, underestimated introduction and maintenance effort, unsuitable tool choice, over-reliance, vendor dependency, abandoned open-source tools, platform incompatibility, and regulatory mismatch.",
            "Automation does not replace human critical thinking or all manual testing."
          ],
          exam: "Automation does not always reduce total cost immediately."
        }
      ],
      terms: [
        ["Test automation", "Using tools to automate test activities."],
        ["Test management tool", "A tool supporting requirements, tests, defects, configuration, and reporting."],
        ["Coverage tool", "A tool measuring coverage against a criterion."]
      ]
    }
  };

  if (!Array.isArray(window.ISTQB_CHAPTERS)) return;

  window.ISTQB_CHAPTERS = window.ISTQB_CHAPTERS.map((chapter) => {
    const override = studyOverrides[chapter.id];
    if (!override) return chapter;
    return {
      ...chapter,
      viTitle: chapter.title,
      viSummary: chapter.summary,
      viSourceNote: chapter.sourceNote,
      viLearningObjectives: chapter.learningObjectives,
      viSections: chapter.sections,
      viTerms: chapter.terms,
      ...override,
      official: override.title,
      examples: chapter.examples
    };
  });
})();
