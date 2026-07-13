window.ISTQB_CHAPTERS = [
  {
    id: 1,
    title: "Nền tảng kiểm thử",
    official: "Fundamentals of Testing",
    weight: 8,
    minutes: 180,
    accent: "#0f766e",
    summary:
      "Bám Chapter 1 của CTFL v4.0.1: testing là hoạt động đánh giá chất lượng work product, giảm rủi ro và cung cấp thông tin ra quyết định, không chỉ là chạy test.",
    sourceNote: "Diễn giải từ ISTQB CTFL Syllabus v4.0.1, Chapter 1, các mục 1.1 đến 1.5.",
    keywords: [
      "coverage",
      "debugging",
      "defect",
      "error",
      "failure",
      "quality",
      "quality assurance",
      "root cause",
      "test analysis",
      "test basis",
      "test case",
      "test completion",
      "test condition",
      "test control",
      "test data",
      "test design",
      "test execution",
      "test implementation",
      "test monitoring",
      "test object",
      "test objective",
      "test planning",
      "test procedure",
      "test process",
      "test result",
      "testing",
      "testware",
      "traceability",
      "validation",
      "verification"
    ],
    learningObjectives: [
      { code: "FL-1.1.1", k: "K1", text: "Nhận diện các mục tiêu kiểm thử điển hình." },
      { code: "FL-1.1.2", k: "K2", text: "Phân biệt testing với debugging." },
      { code: "FL-1.2.1", k: "K2", text: "Nêu ví dụ vì sao testing là cần thiết." },
      { code: "FL-1.2.2", k: "K1", text: "Nhớ mối quan hệ giữa testing và quality assurance." },
      { code: "FL-1.2.3", k: "K2", text: "Phân biệt root cause, error, defect và failure." },
      { code: "FL-1.3.1", k: "K2", text: "Giải thích bảy nguyên lý kiểm thử." },
      { code: "FL-1.4.1", k: "K2", text: "Giải thích các hoạt động test và task liên quan." },
      { code: "FL-1.4.2", k: "K2", text: "Giải thích ngữ cảnh ảnh hưởng thế nào tới test process." },
      { code: "FL-1.4.3", k: "K2", text: "Phân biệt testware hỗ trợ từng hoạt động test." },
      { code: "FL-1.4.4", k: "K2", text: "Giải thích giá trị của việc duy trì traceability." },
      { code: "FL-1.4.5", k: "K2", text: "So sánh các vai trò chính trong testing." },
      { code: "FL-1.5.1", k: "K2", text: "Đưa ví dụ về kỹ năng chung cần cho tester." },
      { code: "FL-1.5.2", k: "K1", text: "Nhớ lợi ích của whole team approach." },
      { code: "FL-1.5.3", k: "K2", text: "Phân biệt lợi ích và hạn chế của test independence." }
    ],
    sections: [
      {
        code: "1.1",
        heading: "Testing là gì?",
        los: ["FL-1.1.1", "FL-1.1.2"],
        body:
          "Syllabus nhấn mạnh testing là tập hợp hoạt động để phát hiện defect và đánh giá chất lượng software work product. Test object có thể là requirement, user story, design, code, tài liệu hoặc phần mềm chạy được.",
        bullets: [
          "Testing gồm cả dynamic testing và static testing. Dynamic testing chạy phần mềm; static testing không chạy phần mềm mà dùng review hoặc static analysis.",
          "Testing có cả verification và validation. Verification kiểm tra đúng đặc tả; validation kiểm tra đúng nhu cầu người dùng và stakeholder trong môi trường vận hành.",
          "Mục tiêu test có thể là đánh giá work product, gây failure để tìm defect, đạt coverage, giảm rủi ro chất lượng, đáp ứng yêu cầu pháp lý/hợp đồng, cung cấp thông tin quyết định và xây dựng niềm tin.",
          "Debugging không phải testing. Khi dynamic testing thấy failure, debugging tái hiện failure, chẩn đoán defect và sửa defect. Sau đó confirmation testing kiểm tra fix, regression testing kiểm tra side effect."
        ],
        exam:
          "Đề thường bẫy bằng câu 'testing chỉ là chạy test case' hoặc 'testing chứng minh phần mềm đúng'. Cả hai đều sai."
      },
      {
        code: "1.2",
        heading: "Vì sao testing cần thiết?",
        los: ["FL-1.2.1", "FL-1.2.2", "FL-1.2.3"],
        body:
          "Testing là một dạng quality control giúp đạt mục tiêu trong ràng buộc scope, time, quality và budget. Nó tìm defect một cách cost-effective và cung cấp số liệu cho quản lý dự án.",
        bullets: [
          "Testing đóng góp vào thành công bằng cách phát hiện defect để debug, đánh giá chất lượng ở nhiều pha SDLC và đại diện gián tiếp cho nhu cầu người dùng khi người dùng thật không thể tham gia liên tục.",
          "Testing là product-oriented và corrective. QA là process-oriented và preventive. QA cải tiến quy trình; testing đánh giá sản phẩm/work product.",
          "Error là sai sót của con người. Error có thể tạo defect trong tài liệu, code, build file hoặc test script. Khi defect được thực thi, nó có thể gây failure.",
          "Failure không chỉ do error/defect, cũng có thể do môi trường. Root cause là nguyên nhân gốc dẫn tới vấn đề và được xử lý để giảm lỗi tương tự."
        ],
        exam:
          "Cần thuộc chuỗi root cause -> error -> defect -> failure và không đồng nhất QA với testing."
      },
      {
        code: "1.3",
        heading: "Bảy nguyên lý kiểm thử",
        los: ["FL-1.3.1"],
        body:
          "Bảy nguyên lý là nền tư duy xuyên suốt syllabus, giúp quyết định phạm vi, thời điểm, cách ưu tiên và cách cập nhật test.",
        bullets: [
          "Testing cho thấy sự hiện diện của defect, không chứng minh được sự vắng mặt của defect.",
          "Exhaustive testing gần như không khả thi, trừ trường hợp rất đơn giản. Cần dùng test techniques, prioritization và risk-based testing.",
          "Early testing tiết kiệm thời gian và tiền vì defect được loại bỏ sớm không kéo theo defect ở work product sau.",
          "Defect có xu hướng cluster ở một số component hoặc khu vực, là input quan trọng cho risk-based testing.",
          "Tests wear out: bộ test lặp lại nhiều lần sẽ kém hiệu quả trong việc tìm defect mới, dù vẫn có ích cho regression automation.",
          "Testing phụ thuộc ngữ cảnh. Cách test safety-critical system khác với e-commerce hoặc internal tool.",
          "Absence-of-defects fallacy: phần mềm ít defect nhưng không đáp ứng nhu cầu business vẫn thất bại."
        ],
        exam:
          "Khi câu hỏi mô tả một tình huống, hãy ghép với nguyên lý đúng thay vì chọn định nghĩa nghe hay nhất."
      },
      {
        code: "1.4",
        heading: "Test activities, testware và roles",
        los: ["FL-1.4.1", "FL-1.4.2", "FL-1.4.3", "FL-1.4.4", "FL-1.4.5"],
        body:
          "Test process có các nhóm hoạt động phổ biến nhưng không nhất thiết tuần tự cứng. Trong dự án thật, chúng thường lặp lại hoặc chạy song song tùy ngữ cảnh.",
        bullets: [
          "Test planning xác định objectives và approach trong ràng buộc ngữ cảnh. Test monitoring so sánh tiến độ thực tế với plan. Test control đưa hành động điều chỉnh.",
          "Test analysis trả lời 'test cái gì?' bằng cách phân tích test basis, xác định testable features và prioritized test conditions.",
          "Test design trả lời 'test như thế nào?' bằng cách chuyển test conditions thành test cases, charters, coverage items, test data và environment requirements.",
          "Test implementation tạo/acquire testware để execution: test procedures, scripts, test suites, data, schedule và environment.",
          "Test execution chạy test theo schedule, so sánh actual với expected, log result và phân tích anomaly để báo defect.",
          "Test completion diễn ra ở milestone, archive/handover testware, ghi lessons learned, tạo change requests và test completion report.",
          "Context như stakeholder, kỹ năng team, business domain, risk, technology, constraint, organization, SDLC và tool ảnh hưởng strategy, technique, automation, coverage, testware detail và reporting.",
          "Traceability giữa test basis, testware, results và defects hỗ trợ coverage evaluation, impact analysis, audit, governance và report dễ hiểu.",
          "Test management role tập trung planning, monitoring, control, completion. Testing role tập trung analysis, design, implementation, execution."
        ],
        exam:
          "Hỏi 'what to test' là test analysis; hỏi 'how to test' là test design. Hỏi coverage/impact/audit thường là traceability."
      },
      {
        code: "1.5",
        heading: "Kỹ năng tester, whole team và independence",
        los: ["FL-1.5.1", "FL-1.5.2", "FL-1.5.3"],
        body:
          "Syllabus xem testing là hoạt động trí tuệ cần kiến thức, phân tích, critical thinking, system thinking và giao tiếp tốt.",
        bullets: [
          "Kỹ năng quan trọng: testing knowledge, cẩn thận, tò mò, chú ý chi tiết, methodical, communication, active listening, teamwork, analytical/critical thinking, creativity, technical knowledge và domain knowledge.",
          "Tester thường là người mang 'tin xấu', nên cần giao tiếp defect/failure theo hướng xây dựng, tránh làm người nhận thấy bị công kích.",
          "Whole team approach nghĩa là mọi thành viên có trách nhiệm với quality; ai có knowledge/skill phù hợp có thể hỗ trợ task cần thiết.",
          "Whole team giúp communication, collaboration, synergy và chuyển giao testing knowledge cho developer/business.",
          "Independence giúp tìm loại defect khác vì giảm cognitive bias, nhưng quá tách biệt có thể tạo bottleneck, blame, giảm collaboration và làm developer mất ownership về quality."
        ],
        exam:
          "Đáp án đúng về independence thường cân bằng: có lợi cho defect detection nhưng không thay thế familiarity và collaboration."
      }
    ],
    terms: [
      ["Test object", "Work product hoặc software item đang được kiểm thử hoặc review."],
      ["Test basis", "Nguồn kiến thức để phân tích và thiết kế test như requirement, story, risk, contract, standard."],
      ["Test condition", "Khía cạnh của test basis có thể được kiểm chứng bằng testing."],
      ["Testware", "Work product tạo ra trong test process: plan, case, script, data, environment, log, report, defect report."],
      ["Traceability", "Liên kết giữa test basis, testware, result và defect."],
      ["Root cause", "Nguyên nhân gốc dẫn tới error/defect/failure và cần xử lý để giảm lặp lại."]
    ],
    examples: [
      {
        lo: "FL-1.1.1",
        label: "Release giỏ hàng",
        title: "Testing rộng hơn execution",
        text:
          "Team review user story, phân tích rủi ro discount, thiết kế test, chuẩn bị test data, chạy regression, log defect và báo cáo residual risk trước release.",
        steps: [
          "Test object ở static testing có thể là user story.",
          "Test object ở dynamic testing có thể là API checkout.",
          "Kết quả cuối cùng giúp stakeholder quyết định release."
        ],
        takeaway: "Nếu chỉ gọi bước execute là testing thì bỏ sót phần lớn test process."
      },
      {
        lo: "FL-1.2.3",
        label: "Invoice",
        title: "Root cause đến failure",
        text:
          "BA thiếu training về tax rule, hiểu sai requirement, developer implement theo requirement sai và customer thấy invoice sai.",
        steps: ["Thiếu training là root cause.", "Hiểu sai là error.", "Requirement/code sai là defect.", "Invoice sai là failure."],
        takeaway: "Đề rất thích hỏi chuỗi thuật ngữ này."
      },
      {
        lo: "FL-1.4.4",
        label: "Audit",
        title: "Traceability khi requirement đổi",
        text:
          "Requirement free shipping đổi từ 50 USD sang 75 USD. Traceability chỉ ra test condition, test case, test data, result và defect nào bị ảnh hưởng.",
        takeaway: "Traceability giúp coverage, impact analysis, audit và reporting."
      }
    ],
    exercises: [
      {
        id: "c1q1",
        lo: "FL-1.1.1",
        k: "K1",
        question: "Mục tiêu testing nào đúng theo syllabus?",
        options: [
          "Chứng minh test object không còn defect",
          "Đánh giá work product, tìm defect, giảm rủi ro và cung cấp thông tin cho stakeholder",
          "Thay thế debugging bằng automation",
          "Đảm bảo mọi requirement tương lai không thay đổi"
        ],
        answer: 1,
        explanation: "Testing đánh giá chất lượng và rủi ro, hỗ trợ quyết định, nhưng không chứng minh vắng mặt defect."
      },
      {
        id: "c1q2",
        lo: "FL-1.1.2",
        k: "K2",
        question: "Dynamic test làm lộ failure. Developer tái hiện, tìm defect và sửa. Hoạt động của developer là gì?",
        options: ["Test analysis", "Debugging", "Test completion", "Quality assurance"],
        answer: 1,
        explanation: "Debugging gồm reproduction, diagnosis và fixing defect."
      },
      {
        id: "c1q3",
        lo: "FL-1.2.2",
        k: "K1",
        question: "Mô tả nào đúng về testing và QA?",
        options: [
          "Testing và QA là hai tên của cùng một hoạt động",
          "Testing là product-oriented quality control; QA là process-oriented và preventive",
          "QA chỉ thực hiện sau test completion",
          "Testing luôn process-oriented và preventive"
        ],
        answer: 1,
        explanation: "Testing là một dạng QC, còn QA tập trung vào cải tiến quy trình."
      },
      {
        id: "c1q4",
        lo: "FL-1.3.1",
        k: "K2",
        question: "Bộ regression không đổi qua nhiều release và ngày càng ít tìm defect mới. Nguyên lý nào phù hợp?",
        options: ["Tests wear out", "Testing is context dependent", "Exhaustive testing is impossible", "Absence-of-defects fallacy"],
        answer: 0,
        explanation: "Test lặp lại nhiều lần có thể kém hiệu quả trong việc tìm defect mới nếu không được cập nhật."
      },
      {
        id: "c1q5",
        lo: "FL-1.4.1",
        k: "K2",
        question: "Hoạt động nào trả lời câu hỏi 'what to test?' theo syllabus?",
        options: ["Test design", "Test analysis", "Test implementation", "Test execution"],
        answer: 1,
        explanation: "Test analysis phân tích test basis để xác định test conditions và coverage cần đo."
      },
      {
        id: "c1q6",
        lo: "FL-1.5.3",
        k: "K2",
        question: "Nhận định nào cân bằng nhất về independence of testing?",
        options: [
          "Independence càng cao luôn càng tốt và không có rủi ro",
          "Independent testers có thể tìm defect khác, nhưng có thể bị cô lập hoặc thành bottleneck",
          "Chỉ external tester mới test hiệu quả",
          "Independence loại bỏ nhu cầu developer component testing"
        ],
        answer: 1,
        explanation: "Syllabus nêu cả benefit và drawback của independence."
      }
    ]
  },
  {
    id: 2,
    title: "Kiểm thử trong SDLC",
    official: "Testing Throughout the Software Development Lifecycle",
    weight: 6,
    minutes: 130,
    accent: "#4338ca",
    summary:
      "Bám Chapter 2: testing phải thích ứng với SDLC, test levels/types, confirmation/regression và maintenance testing.",
    sourceNote: "Diễn giải từ ISTQB CTFL Syllabus v4.0.1, Chapter 2, các mục 2.1 đến 2.3.",
    keywords: [
      "acceptance testing",
      "black-box testing",
      "component integration testing",
      "component testing",
      "confirmation testing",
      "functional testing",
      "integration testing",
      "maintenance testing",
      "non-functional testing",
      "regression testing",
      "shift left",
      "system integration testing",
      "system testing",
      "test level",
      "test object",
      "test type",
      "white-box testing"
    ],
    learningObjectives: [
      { code: "FL-2.1.1", k: "K2", text: "Giải thích SDLC được chọn ảnh hưởng thế nào đến testing." },
      { code: "FL-2.1.2", k: "K1", text: "Nhớ các good testing practices áp dụng cho mọi SDLC." },
      { code: "FL-2.1.3", k: "K1", text: "Nhớ ví dụ về test-first approaches." },
      { code: "FL-2.1.4", k: "K2", text: "Tóm tắt DevOps có thể tác động thế nào tới testing." },
      { code: "FL-2.1.5", k: "K2", text: "Giải thích shift left." },
      { code: "FL-2.1.6", k: "K2", text: "Giải thích retrospective dùng để cải tiến process thế nào." },
      { code: "FL-2.2.1", k: "K2", text: "Phân biệt các test levels." },
      { code: "FL-2.2.2", k: "K2", text: "Phân biệt các test types." },
      { code: "FL-2.2.3", k: "K2", text: "Phân biệt confirmation testing và regression testing." },
      { code: "FL-2.3.1", k: "K2", text: "Tóm tắt maintenance testing và các trigger." }
    ],
    sections: [
      {
        code: "2.1",
        heading: "Testing trong ngữ cảnh SDLC",
        los: ["FL-2.1.1", "FL-2.1.2", "FL-2.1.3", "FL-2.1.4", "FL-2.1.5", "FL-2.1.6"],
        body:
          "SDLC model là mô hình mức cao mô tả các pha/hoạt động phát triển liên hệ logic và thời gian như thế nào. Testing phải được điều chỉnh theo mô hình đó.",
        bullets: [
          "SDLC ảnh hưởng scope/timing của test activities, mức chi tiết documentation, technique/approach, automation, role và responsibility của tester.",
          "Sequential model thường có review, analysis, design sớm nhưng dynamic testing muộn vì executable code xuất hiện sau.",
          "Iterative/incremental model tạo increment/prototype qua mỗi iteration, nên static và dynamic testing có thể lặp lại ở nhiều levels.",
          "Agile ưu tiên documentation nhẹ, automation nhiều cho regression và manual testing thường dùng experience-based technique.",
          "Good practices: mỗi development activity có test activity tương ứng, mỗi test level có objective riêng, analysis/design bắt đầu trong pha development tương ứng, tester review draft work product sớm.",
          "TDD, ATDD và BDD đều là test-first: test hoặc example được định nghĩa trước code, hỗ trợ early testing và shift left.",
          "DevOps tạo fast feedback, integrated toolchain, CI/CD, stable test environments, visibility của non-functional quality và giảm repetitive manual testing qua pipeline.",
          "Shift left là làm testing sớm hơn, ví dụ review specification, viết test trước code, dùng CI/CD, static analysis trước dynamic testing, đưa non-functional testing xuống component level khi phù hợp.",
          "Retrospective thảo luận điều gì thành công, điều gì cần cải thiện và cách giữ/cài tiến trong tương lai. Kết quả thường là input cho test completion report."
        ],
        exam:
          "Shift left không có nghĩa bỏ testing cuối SDLC. DevOps không loại bỏ manual testing, đặc biệt testing từ góc nhìn user."
      },
      {
        code: "2.2",
        heading: "Test levels và test types",
        los: ["FL-2.2.1", "FL-2.2.2", "FL-2.2.3"],
        body:
          "Test level là nhóm hoạt động test được tổ chức/quản lý cùng nhau theo pha/objective. Test type là nhóm test theo quality characteristic hoặc mục tiêu test.",
        bullets: [
          "Component testing test component/unit cô lập, thường do developer làm với unit framework, stubs hoặc drivers.",
          "Component integration testing test interface và interaction giữa các component, phụ thuộc integration strategy như bottom-up, top-down hoặc big-bang.",
          "System testing test behavior/capability của toàn bộ system hoặc product, gồm functional end-to-end và non-functional characteristics.",
          "System integration testing test interface giữa system under test và system/external service khác, cần môi trường gần operational.",
          "Acceptance testing tập trung validation và readiness for deployment. Các dạng chính: UAT, operational, contractual, regulatory, alpha, beta.",
          "Functional testing kiểm tra 'what' system làm. Non-functional testing kiểm tra 'how well', gồm performance efficiency, compatibility, usability, reliability, security, maintainability, portability, safety.",
          "Black-box testing dựa trên specification, không dựa internal structure. White-box testing dựa trên implementation/internal structure.",
          "Confirmation testing xác nhận defect gốc đã fix. Regression testing xác nhận change không gây adverse consequences ở cùng component, component khác, connected system hoặc environment."
        ],
        exam:
          "Đề hay nhầm system testing với system integration testing, và confirmation với regression."
      },
      {
        code: "2.3",
        heading: "Maintenance testing",
        los: ["FL-2.3.1"],
        body:
          "Maintenance testing xảy ra với operational system khi có planned/unplanned release, hot fix, migration, upgrade hoặc retirement. Scope thường phụ thuộc risk, size system và size change.",
        bullets: [
          "Maintenance có thể corrective, adaptive theo environment, hoặc cải thiện performance/maintainability.",
          "Impact analysis có thể thực hiện trước change để quyết định có nên change và vùng nào bị ảnh hưởng.",
          "Testing change gồm kiểm tra implementation của change và regression ở phần system không đổi.",
          "Triggers: modifications như enhancement, corrective changes, hot fixes; upgrade/migration platform hoặc data conversion; retirement, data archiving, restore/retrieval procedures."
        ],
        exam:
          "Gặp existing operational system cộng với change/migration/retirement thì nghĩ maintenance testing và impact analysis."
      }
    ],
    terms: [
      ["Test level", "Nhóm test activities được quản lý cùng nhau ở một pha/objective."],
      ["Test type", "Nhóm test activities theo mục tiêu hoặc quality characteristic."],
      ["Shift left", "Thực hiện testing sớm hơn trong SDLC nhưng không bỏ testing muộn."],
      ["Confirmation testing", "Kiểm tra fix đã giải quyết defect gốc."],
      ["Regression testing", "Kiểm tra change không gây side effect không mong muốn."]
    ],
    examples: [
      {
        lo: "FL-2.1.5",
        label: "Refinement",
        title: "Shift left bằng review story",
        text:
          "Trước khi code search feature, tester hỏi 'fast' là bao nhiêu giây, với bao nhiêu concurrent users, trên loại dữ liệu nào.",
        takeaway: "Defect ambiguity được xử lý trước implementation."
      },
      {
        lo: "FL-2.2.1",
        label: "Payment",
        title: "Phân biệt level",
        text:
          "Test class tính tax là component testing. Test cart gọi tax component là component integration. Test toàn checkout flow là system testing. Test kết nối payment gateway là system integration.",
        takeaway: "Xác định test object và interface để chọn level."
      },
      {
        lo: "FL-2.3.1",
        label: "Migration",
        title: "Maintenance testing khi đổi platform",
        text:
          "Ứng dụng chuyển database engine. Impact analysis chỉ ra cần test query, report, data conversion, backup/restore và performance.",
        takeaway: "Maintenance testing không chỉ test feature mới."
      }
    ],
    exercises: [
      {
        id: "c2q1",
        lo: "FL-2.1.1",
        k: "K2",
        question: "Điều nào chịu ảnh hưởng bởi SDLC được chọn?",
        options: [
          "Scope/timing của test activities và mức automation",
          "Mã màu logo của team",
          "Việc defect có thể tồn tại hay không",
          "Sự cần thiết của validation bị loại bỏ"
        ],
        answer: 0,
        explanation: "SDLC ảnh hưởng scope/timing, documentation, techniques, automation và role/responsibility."
      },
      {
        id: "c2q2",
        lo: "FL-2.1.3",
        k: "K1",
        question: "Approach nào thường dùng Given/When/Then?",
        options: ["TDD", "BDD", "Big-bang integration", "Maintenance testing"],
        answer: 1,
        explanation: "BDD diễn đạt behavior bằng ngôn ngữ tự nhiên, thường dùng Given/When/Then."
      },
      {
        id: "c2q3",
        lo: "FL-2.2.1",
        k: "K2",
        question: "Test interface giữa app và third-party payment gateway là level nào?",
        options: ["Component testing", "Component integration testing", "System integration testing", "Alpha testing"],
        answer: 2,
        explanation: "System integration testing test interface giữa system under test và system/external service khác."
      },
      {
        id: "c2q4",
        lo: "FL-2.2.2",
        k: "K2",
        question: "Performance efficiency, usability, security thuộc nhóm nào?",
        options: ["Functional testing", "Non-functional testing", "Confirmation testing", "Component integration only"],
        answer: 1,
        explanation: "Đây là non-functional quality characteristics."
      },
      {
        id: "c2q5",
        lo: "FL-2.2.3",
        k: "K2",
        question: "Sau bug fix, team rerun failed test cũ rồi chạy related checkout tests. Cặp hoạt động đúng là gì?",
        options: [
          "Regression rồi confirmation",
          "Confirmation rồi regression",
          "Acceptance rồi component",
          "Static rồi dynamic"
        ],
        answer: 1,
        explanation: "Rerun failed test để check fix là confirmation; kiểm tra side effect là regression."
      },
      {
        id: "c2q6",
        lo: "FL-2.3.1",
        k: "K2",
        question: "Trigger nào là maintenance testing?",
        options: [
          "Một system operational được migrate sang platform mới",
          "Viết user story lần đầu cho product chưa tồn tại",
          "Chọn font chữ cho slide training",
          "Tạo logo dự án"
        ],
        answer: 0,
        explanation: "Upgrade/migration của operational environment là trigger maintenance testing."
      }
    ]
  },
  {
    id: 3,
    title: "Static testing",
    official: "Static Testing",
    weight: 4,
    minutes: 80,
    accent: "#c2410c",
    summary:
      "Bám Chapter 3: static testing đánh giá work product không cần execute, gồm review và static analysis, cùng review process/roles/types.",
    sourceNote: "Diễn giải từ ISTQB CTFL Syllabus v4.0.1, Chapter 3, các mục 3.1 đến 3.2.",
    keywords: [
      "anomaly",
      "dynamic testing",
      "formal review",
      "informal review",
      "inspection",
      "review",
      "static analysis",
      "static testing",
      "technical review",
      "walkthrough"
    ],
    learningObjectives: [
      { code: "FL-3.1.1", k: "K1", text: "Nhận biết loại work product có thể kiểm tra bằng static testing." },
      { code: "FL-3.1.2", k: "K2", text: "Giải thích giá trị của static testing." },
      { code: "FL-3.1.3", k: "K2", text: "So sánh static testing và dynamic testing." },
      { code: "FL-3.2.1", k: "K1", text: "Nhận diện lợi ích của early/frequent stakeholder feedback." },
      { code: "FL-3.2.2", k: "K2", text: "Tóm tắt các hoạt động trong review process." },
      { code: "FL-3.2.3", k: "K1", text: "Nhớ trách nhiệm của các vai trò chính trong review." },
      { code: "FL-3.2.4", k: "K2", text: "So sánh các review types." },
      { code: "FL-3.2.5", k: "K1", text: "Nhớ các yếu tố giúp review thành công." }
    ],
    sections: [
      {
        code: "3.1",
        heading: "Static testing basics",
        los: ["FL-3.1.1", "FL-3.1.2", "FL-3.1.3"],
        body:
          "Static testing đánh giá work product mà không execute software. Nó có thể là manual examination như review hoặc tool-supported activity như static analysis.",
        bullets: [
          "Mục tiêu gồm cải thiện quality, phát hiện defect, đánh giá readability, completeness, correctness, testability và consistency.",
          "Static testing có thể dùng cho verification và validation, ví dụ review user story để kiểm tra acceptance criteria có testable không.",
          "Gần như mọi work product đọc/hiểu được đều review được: requirement, source code, test plan, test case, backlog item, test charter, project documentation, contract, model.",
          "Static analysis cần work product có structure để check như model, code hoặc text có formal syntax.",
          "Static testing phát hiện defect sớm, tìm defect khó/không thể thấy bằng dynamic testing như unreachable code, requirement ambiguity, missing coverage, interface mismatch.",
          "Static testing tìm defect trực tiếp; dynamic testing gây failure rồi cần analysis để tìm defect. Static áp dụng cho non-executable work product; dynamic chỉ áp dụng cho executable work product.",
          "Static testing đo được quality characteristics không phụ thuộc execution như maintainability; dynamic testing đo được characteristics phụ thuộc execution như performance efficiency."
        ],
        exam:
          "Nếu work product không chạy được nhưng có thể đọc/hiểu, review vẫn áp dụng. Static analysis không phải chỉ cho code, nhưng cần artifact có cấu trúc."
      },
      {
        code: "3.2",
        heading: "Feedback và review process",
        los: ["FL-3.2.1", "FL-3.2.2", "FL-3.2.3", "FL-3.2.4", "FL-3.2.5"],
        body:
          "Stakeholder feedback sớm và thường xuyên giúp tránh hiểu sai requirement, rework, missed deadlines và project failure. Review process cung cấp khung linh hoạt để tìm anomaly và cải thiện quality.",
        bullets: [
          "Review process gồm planning, review initiation, individual review, communication and analysis, fixing and reporting.",
          "Planning xác định scope, purpose, work product, quality characteristics, focus area, exit criteria, supporting info, effort và timeframe.",
          "Individual review để reviewer tìm anomalies, recommendations và questions bằng techniques như checklist-based hoặc scenario-based reviewing.",
          "Communication and analysis phân tích anomaly, quyết định status, owner, required action và quality level của work product.",
          "Manager quyết định review gì và cấp resource. Author tạo/sửa work product. Moderator/facilitator điều phối meeting. Scribe/recorder ghi anomaly/decision. Reviewer thực hiện review. Review leader chịu trách nhiệm tổ chức tổng thể.",
          "Informal review không cần defined process/output formal, mục tiêu chính là detect anomalies.",
          "Walkthrough thường do author dẫn, có thể dùng để educate, gain consensus, evaluate quality, generate ideas và detect anomalies.",
          "Technical review do technically qualified reviewers thực hiện và moderator dẫn, hỗ trợ decision kỹ thuật và anomaly detection.",
          "Inspection formal nhất, theo full process, mục tiêu chính là tìm tối đa anomalies, thu metric để cải thiện SDLC và inspection process.",
          "Review thành công cần objective rõ, exit criteria đo được, review type phù hợp, chunk nhỏ, đủ thời gian chuẩn bị, management support, training, facilitation và văn hóa học hỏi."
        ],
        exam:
          "Scribe ghi anomaly/decision; author sở hữu work product; inspection formal nhất; informal review nhẹ nhất."
      }
    ],
    terms: [
      ["Static testing", "Đánh giá work product mà không execute software."],
      ["Review", "Con người xem xét work product để tìm anomaly và cải thiện chất lượng."],
      ["Static analysis", "Tool hoặc phân tích có hệ thống trên artifact có cấu trúc mà không execute."],
      ["Anomaly", "Điểm bất thường cần phân tích, chưa chắc là defect."],
      ["Inspection", "Review type formal nhất, thường thu metric."]
    ],
    examples: [
      {
        lo: "FL-3.1.1",
        label: "User story",
        title: "Review trước khi có code",
        text:
          "Story nói 'khách có thể hủy order bất kỳ lúc nào', nhưng rule vận hành nói shipped order không được hủy. Tester phát hiện mâu thuẫn trong refinement.",
        takeaway: "Static testing tìm defect trong work product không executable."
      },
      {
        lo: "FL-3.1.3",
        label: "Maintainability",
        title: "Static vs dynamic",
        text:
          "Static analysis báo function quá phức tạp và code unreachable. Performance test đo response time khi chạy system.",
        takeaway: "Maintainability có thể đo không cần execute, performance efficiency cần execute."
      },
      {
        lo: "FL-3.2.4",
        label: "Review type",
        title: "Chọn formal phù hợp",
        text:
          "Peer check nhanh test case trước demo có thể là informal review. Module safety-critical cần audit trail, metric và roles rõ có thể dùng inspection.",
        takeaway: "Review type phụ thuộc objective, risk, maturity, regulation và need for audit trail."
      }
    ],
    exercises: [
      {
        id: "c3q1",
        lo: "FL-3.1.1",
        k: "K1",
        question: "Work product nào có thể được review?",
        options: [
          "Chỉ executable code",
          "Bất kỳ work product nào có thể đọc và hiểu",
          "Chỉ hệ thống đã deploy",
          "Chỉ automated script"
        ],
        answer: 1,
        explanation: "Review áp dụng cho work product đọc/hiểu được như requirement, code, test case, contract, model."
      },
      {
        id: "c3q2",
        lo: "FL-3.1.3",
        k: "K2",
        question: "Mô tả nào đúng?",
        options: [
          "Static testing execute software để gây failure",
          "Dynamic testing áp dụng cho non-executable work products",
          "Static testing tìm defect trực tiếp, dynamic testing gây failure để phân tích defect",
          "Static testing chỉ có sau system testing"
        ],
        answer: 2,
        explanation: "Đây là khác biệt lõi giữa static và dynamic testing."
      },
      {
        id: "c3q3",
        lo: "FL-3.2.2",
        k: "K2",
        question: "Hoạt động nào thuộc generic review process?",
        options: [
          "Planning, review initiation, individual review, communication and analysis, fixing and reporting",
          "Coding, compiling, deploying, monitoring",
          "Purchase, installation, renewal",
          "Design, build, release only"
        ],
        answer: 0,
        explanation: "Đó là các activity của review process trong syllabus."
      },
      {
        id: "c3q4",
        lo: "FL-3.2.3",
        k: "K1",
        question: "Ai thường ghi anomaly và decision trong review meeting?",
        options: ["Author", "Scribe/recorder", "Manager", "Customer only"],
        answer: 1,
        explanation: "Scribe/recorder collates anomalies và records review information."
      },
      {
        id: "c3q5",
        lo: "FL-3.2.4",
        k: "K2",
        question: "Review type nào formal nhất?",
        options: ["Informal review", "Walkthrough", "Technical review", "Inspection"],
        answer: 3,
        explanation: "Inspection theo full generic process và thu metric."
      }
    ]
  },
  {
    id: 4,
    title: "Phân tích và thiết kế test",
    official: "Test Analysis and Design",
    weight: 11,
    minutes: 390,
    accent: "#be123c",
    summary:
      "Bám Chapter 4: nhóm techniques, EP, BVA, decision table, state transition, statement/branch coverage, experience-based và ATDD.",
    sourceNote: "Diễn giải từ ISTQB CTFL Syllabus v4.0.1, Chapter 4, các mục 4.1 đến 4.5.",
    keywords: [
      "acceptance criteria",
      "acceptance test-driven development",
      "black-box test technique",
      "boundary value analysis",
      "branch coverage",
      "checklist-based testing",
      "collaboration-based test approach",
      "coverage",
      "coverage item",
      "decision table testing",
      "equivalence partitioning",
      "error guessing",
      "experience-based test technique",
      "exploratory testing",
      "state transition testing",
      "statement coverage",
      "test technique",
      "white-box test technique"
    ],
    learningObjectives: [
      { code: "FL-4.1.1", k: "K2", text: "Phân biệt black-box, white-box và experience-based techniques." },
      { code: "FL-4.2.1", k: "K3", text: "Dùng equivalence partitioning để derive test cases." },
      { code: "FL-4.2.2", k: "K3", text: "Dùng boundary value analysis để derive test cases." },
      { code: "FL-4.2.3", k: "K3", text: "Dùng decision table testing để derive test cases." },
      { code: "FL-4.2.4", k: "K3", text: "Dùng state transition testing để derive test cases." },
      { code: "FL-4.3.1", k: "K2", text: "Giải thích statement testing." },
      { code: "FL-4.3.2", k: "K2", text: "Giải thích branch testing." },
      { code: "FL-4.3.3", k: "K2", text: "Giải thích giá trị của white-box testing." },
      { code: "FL-4.4.1", k: "K2", text: "Giải thích error guessing." },
      { code: "FL-4.4.2", k: "K2", text: "Giải thích exploratory testing." },
      { code: "FL-4.4.3", k: "K2", text: "Giải thích checklist-based testing." },
      { code: "FL-4.5.1", k: "K2", text: "Giải thích cách viết user story cộng tác với developer và business." },
      { code: "FL-4.5.2", k: "K2", text: "Phân loại các cách viết acceptance criteria." },
      { code: "FL-4.5.3", k: "K3", text: "Dùng ATDD để derive test cases." }
    ],
    sections: [
      {
        code: "4.1",
        heading: "Test techniques overview",
        los: ["FL-4.1.1"],
        body:
          "Test techniques hỗ trợ test analysis và test design để tạo một bộ test nhỏ hơn nhưng đủ, có hệ thống, có coverage item và test data rõ ràng.",
        bullets: [
          "Black-box techniques dựa vào specified behavior, không tham chiếu internal structure. Test case vẫn hữu ích nếu implementation đổi nhưng required behavior giữ nguyên.",
          "White-box techniques dựa vào internal structure/processing nên thường cần design hoặc implementation trước.",
          "Experience-based techniques dùng knowledge và experience của tester, bổ sung cho black-box/white-box vì có thể tìm defect mà hai nhóm kia bỏ sót."
        ],
        exam:
          "Câu phân loại technique là điểm dễ lấy: EP/BVA/decision/state là black-box; statement/branch là white-box; exploratory/checklist/error guessing là experience-based."
      },
      {
        code: "4.2",
        heading: "Black-box test techniques",
        los: ["FL-4.2.1", "FL-4.2.2", "FL-4.2.3", "FL-4.2.4"],
        body:
          "Đây là vùng K3 quan trọng nhất. Bạn phải derive test cases và tính coverage, không chỉ nhớ định nghĩa.",
        bullets: [
          "Equivalence Partitioning chia data thành equivalence partitions. Các partition không overlap, không rỗng, có thể valid/invalid, continuous/discrete, ordered/unordered, finite/infinite.",
          "EP coverage item là equivalence partition. 100% coverage nghĩa là mọi partition được exercise ít nhất một lần. Multiple parameters có thể dùng Each Choice coverage để mỗi partition của mỗi set được exercise ít nhất một lần.",
          "BVA chỉ dùng cho ordered partitions. Boundary values là minimum/maximum của partition. Defect thường nằm ở boundary bị đặt lệch hoặc bị bỏ sót.",
          "2-value BVA với mỗi boundary dùng boundary value và nearest neighbor ở adjacent partition. 3-value BVA dùng boundary value và cả hai neighbor, nghiêm ngặt hơn.",
          "Decision table dùng cho business rule/logic nhiều điều kiện. Conditions và actions là rows, mỗi column là decision rule. Chỉ feasible columns là coverage items.",
          "Decision table có thể full, simplified bằng cách bỏ infeasible columns, hoặc minimized bằng cách gộp columns khi một condition không ảnh hưởng outcome.",
          "State transition testing dùng state diagram/table. Transition do event khởi tạo, có thể có guard condition và action. State table thể hiện rõ invalid transitions bằng ô trống.",
          "State coverage criteria: all states, valid transitions (0-switch), all transitions. All transitions mạnh nhất vì gồm valid và invalid transitions; invalid transition nên test từng cái để tránh defect masking."
        ],
        exam:
          "K3 thường yêu cầu chọn test data tối thiểu, tính coverage hoặc loại bỏ infeasible rule. Đừng áp dụng BVA cho unordered partition."
      },
      {
        code: "4.3",
        heading: "White-box test techniques",
        los: ["FL-4.3.1", "FL-4.3.2", "FL-4.3.3"],
        body:
          "Syllabus tập trung statement testing và branch testing vì phổ biến và đơn giản. Chúng đo coverage của code/internal structure.",
        bullets: [
          "Statement testing có coverage items là executable statements. Coverage = exercised statements / total executable statements.",
          "100% statement coverage đảm bảo mọi executable statement chạy ít nhất một lần, nhưng không đảm bảo mọi decision logic/branch được test.",
          "Branch là transfer of control trong control flow graph, gồm unconditional và conditional branches.",
          "Branch testing có coverage items là branches. Coverage = exercised branches / total branches.",
          "100% branch coverage subsumes statement coverage, nghĩa là kéo theo 100% statement coverage, nhưng 100% statement coverage không kéo theo 100% branch coverage.",
          "White-box testing có giá trị khi specification vague/outdated/incomplete vì implementation vẫn được xem xét. Nhưng nếu requirement bị thiếu hoàn toàn trong implementation, white-box có thể không phát hiện defect of omission."
        ],
        exam:
          "Nhớ chiều subsumption: branch mạnh hơn statement."
      },
      {
        code: "4.4",
        heading: "Experience-based techniques",
        los: ["FL-4.4.1", "FL-4.4.2", "FL-4.4.3"],
        body:
          "Các technique này dựa vào kinh nghiệm, học hỏi trong khi test và checklist có chọn lọc. Chúng rất hữu ích khi spec ít, áp lực thời gian cao hoặc cần bổ sung cho technique formal.",
        bullets: [
          "Error guessing dự đoán error/defect/failure dựa trên lịch sử app, lỗi developer hay mắc, failure ở app tương tự và dữ liệu defect.",
          "Fault attack là cách triển khai error guessing bằng danh sách lỗi/failure có thể xảy ra rồi thiết kế test để expose chúng.",
          "Exploratory testing đồng thời design, execute và evaluate test trong khi tester học về test object. Session-based testing dùng time box, charter, debrief và session sheet.",
          "Checklist-based testing thiết kế/thực thi test để cover test conditions từ checklist. Checklist nên update theo defect analysis nhưng không nên quá dài hoặc quá chung."
        ],
        exam:
          "Exploratory không có nghĩa test lung tung. Nó có charter, objective và ghi nhận discovery."
      },
      {
        code: "4.5",
        heading: "Collaboration-based approaches",
        los: ["FL-4.5.1", "FL-4.5.2", "FL-4.5.3"],
        body:
          "Collaboration-based approaches không chỉ tìm defect mà còn tránh defect bằng communication và shared understanding giữa business, development và testing.",
        bullets: [
          "User story có 3C: Card, Conversation, Confirmation. Format phổ biến là As a [role], I want [goal], so that [business value].",
          "User story tốt theo INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable.",
          "Acceptance criteria là conditions mà implementation phải đáp ứng để stakeholder accept. Chúng định scope, tạo consensus, mô tả positive/negative scenarios, làm basis cho acceptance testing và hỗ trợ planning/estimation.",
          "Hai format acceptance criteria phổ biến: scenario-oriented như Given/When/Then và rule-oriented như bullet verification list hoặc input-output table.",
          "ATDD là test-first. Trong specification workshop, team phân tích user story/acceptance criteria, giải quyết ambiguity/defect rồi tạo test cases như examples trước khi implement.",
          "ATDD test cases thường bắt đầu positive, sau đó negative, rồi non-functional characteristics. Test cases nên dễ hiểu cho stakeholder, cover toàn bộ story nhưng không vượt phạm vi story."
        ],
        exam:
          "K3 của ATDD thường yêu cầu derive example/test case từ acceptance criteria, không phải giải thích khái niệm chung."
      }
    ],
    formulas: [
      ["EP coverage", "exercised partitions / identified partitions * 100%"],
      ["BVA coverage", "exercised boundary items / identified boundary items * 100%"],
      ["Decision table coverage", "exercised feasible rules / feasible rules * 100%"],
      ["State coverage", "exercised states or transitions / total states or transitions * 100%"],
      ["Statement coverage", "exercised statements / executable statements * 100%"],
      ["Branch coverage", "exercised branches / total branches * 100%"]
    ],
    terms: [
      ["Coverage item", "Item cần được exercise để đạt tiêu chí coverage, ví dụ partition, boundary item, rule, state, branch."],
      ["Defect masking", "Một defect ngăn defect khác bị phát hiện, thường gặp khi gom nhiều invalid condition trong một test."],
      ["Decision rule", "Một column khả thi trong decision table."],
      ["Guard condition", "Điều kiện bổ sung để transition được thực hiện."]
    ],
    examples: [
      {
        lo: "FL-4.2.1",
        label: "EP",
        title: "Field tuổi 18-65",
        text:
          "Input tuổi hợp lệ là integer 18 đến 65. Partitions: dưới 18, 18-65, trên 65. Test data EP có thể là 17, 30, 66.",
        takeaway: "Một giá trị đại diện cho mỗi partition đủ cho EP cơ bản."
      },
      {
        lo: "FL-4.2.2",
        label: "BVA",
        title: "2-value và 3-value",
        text:
          "Với valid range 1-99, 2-value BVA có thể chọn 0, 1, 99, 100. 3-value BVA chọn 0, 1, 2, 98, 99, 100.",
        takeaway: "3-value nghiêm ngặt hơn vì lấy cả hai neighbor quanh mỗi boundary."
      },
      {
        lo: "FL-4.2.3",
        label: "Decision table",
        title: "Free shipping",
        text:
          "Premium member và order >= 50 USD thì free shipping. Standard member luôn trả shipping. Bảng quyết định cover premium/non-premium và dưới/tại/trên 50.",
        takeaway: "Mỗi feasible rule cần ít nhất một test để đạt 100% decision table coverage."
      },
      {
        lo: "FL-4.5.3",
        label: "ATDD",
        title: "Specification workshop",
        text:
          "PO, developer và tester cùng viết examples cho refund: full refund trong 30 ngày, partial refund, expired window, order đã shipped.",
        takeaway: "Examples là acceptance tests và có thể trở thành executable requirements."
      }
    ],
    exercises: [
      {
        id: "c4q1",
        lo: "FL-4.1.1",
        k: "K2",
        question: "Phân loại nào đúng?",
        options: [
          "EP là white-box",
          "Statement testing là black-box",
          "Exploratory testing là experience-based",
          "Decision table là experience-based"
        ],
        answer: 2,
        explanation: "Exploratory testing dùng kỹ năng và kinh nghiệm tester nên là experience-based."
      },
      {
        id: "c4q2",
        lo: "FL-4.2.1",
        k: "K3",
        question: "Field nhận integer 1-99 inclusive. Bộ nào đạt Each Choice EP cho một field?",
        options: ["0, 50, 100", "1, 50, 99", "0, 1, 99, 100", "50 only"],
        answer: 0,
        explanation: "Có 3 partition: dưới 1, 1-99, trên 99. 0, 50, 100 cover cả 3."
      },
      {
        id: "c4q3",
        lo: "FL-4.2.2",
        k: "K3",
        question: "Valid partition là integer 10-20 inclusive. Bộ nào là 3-value BVA cho cả hai boundary?",
        options: ["10, 20", "9, 10, 11, 19, 20, 21", "9, 11, 19, 21", "10, 11, 19, 20"],
        answer: 1,
        explanation: "3-value BVA lấy boundary và hai neighbor: 9/10/11 và 19/20/21."
      },
      {
        id: "c4q4",
        lo: "FL-4.2.3",
        k: "K3",
        question: "Decision table có 8 columns, 2 infeasible bị bỏ. Test cover 4 feasible columns. Coverage là?",
        options: ["4/8 = 50%", "4/6 = khoảng 67%", "6/8 = 75%", "4/4 = 100%"],
        answer: 1,
        explanation: "Coverage tính trên feasible rules: 4/6."
      },
      {
        id: "c4q5",
        lo: "FL-4.2.4",
        k: "K3",
        question: "State model có 5 states, 8 valid transitions. Test đi qua đủ 5 states nhưng chỉ exercise 6 valid transitions. Câu nào đúng?",
        options: [
          "All states coverage 100%, valid transitions coverage 75%",
          "All states coverage 75%, valid transitions coverage 100%",
          "All transitions coverage chắc chắn 100%",
          "Branch coverage 75%"
        ],
        answer: 0,
        explanation: "5/5 states = 100%; 6/8 valid transitions = 75%."
      },
      {
        id: "c4q6",
        lo: "FL-4.3.2",
        k: "K2",
        question: "Mệnh đề nào đúng về branch coverage?",
        options: [
          "100% statement coverage luôn kéo theo 100% branch coverage",
          "100% branch coverage kéo theo 100% statement coverage",
          "Branch coverage không xét unconditional branches",
          "Statement coverage mạnh hơn branch coverage"
        ],
        answer: 1,
        explanation: "Branch coverage subsumes statement coverage."
      },
      {
        id: "c4q7",
        lo: "FL-4.5.2",
        k: "K2",
        question: "Acceptance criteria dạng nào là scenario-oriented?",
        options: [
          "System must be fast",
          "Given registered user, When user submits valid login, Then dashboard is shown",
          "All screens should be intuitive",
          "Support business rules"
        ],
        answer: 1,
        explanation: "Given/When/Then là format scenario-oriented phổ biến."
      }
    ]
  },
  {
    id: 5,
    title: "Quản lý hoạt động test",
    official: "Managing the Test Activities",
    weight: 9,
    minutes: 335,
    accent: "#15803d",
    summary:
      "Bám Chapter 5: test planning, estimation, prioritization, risk management, monitoring/control/completion, CM và defect management.",
    sourceNote: "Diễn giải từ ISTQB CTFL Syllabus v4.0.1, Chapter 5, các mục 5.1 đến 5.5.",
    keywords: [
      "defect management",
      "defect report",
      "entry criteria",
      "exit criteria",
      "product risk",
      "project risk",
      "risk",
      "risk analysis",
      "risk assessment",
      "risk control",
      "risk identification",
      "risk level",
      "risk management",
      "risk mitigation",
      "risk monitoring",
      "risk-based testing",
      "test approach",
      "test completion report",
      "test control",
      "test monitoring",
      "test plan",
      "test planning",
      "test progress report",
      "test pyramid",
      "test strategy",
      "testing quadrants"
    ],
    learningObjectives: [
      { code: "FL-5.1.1", k: "K2", text: "Nêu ví dụ purpose và content của test plan." },
      { code: "FL-5.1.2", k: "K1", text: "Nhận biết tester tạo giá trị trong iteration/release planning thế nào." },
      { code: "FL-5.1.3", k: "K2", text: "So sánh entry criteria và exit criteria." },
      { code: "FL-5.1.4", k: "K3", text: "Dùng estimation techniques để tính test effort." },
      { code: "FL-5.1.5", k: "K3", text: "Áp dụng test case prioritization." },
      { code: "FL-5.1.6", k: "K1", text: "Nhớ khái niệm test pyramid." },
      { code: "FL-5.1.7", k: "K2", text: "Tóm tắt testing quadrants và quan hệ với levels/types." },
      { code: "FL-5.2.1", k: "K1", text: "Xác định risk level bằng likelihood và impact." },
      { code: "FL-5.2.2", k: "K2", text: "Phân biệt project risks và product risks." },
      { code: "FL-5.2.3", k: "K2", text: "Giải thích product risk analysis ảnh hưởng scope/thoroughness thế nào." },
      { code: "FL-5.2.4", k: "K2", text: "Giải thích các biện pháp phản hồi với product risks đã phân tích." },
      { code: "FL-5.3.1", k: "K1", text: "Nhớ các metrics dùng trong testing." },
      { code: "FL-5.3.2", k: "K2", text: "Tóm tắt purpose, content, audience của test reports." },
      { code: "FL-5.3.3", k: "K2", text: "Nêu ví dụ cách communicate test status." },
      { code: "FL-5.4.1", k: "K2", text: "Tóm tắt CM hỗ trợ testing thế nào." },
      { code: "FL-5.5.1", k: "K3", text: "Chuẩn bị defect report." }
    ],
    sections: [
      {
        code: "5.1",
        heading: "Test planning",
        los: ["FL-5.1.1", "FL-5.1.2", "FL-5.1.3", "FL-5.1.4", "FL-5.1.5", "FL-5.1.6", "FL-5.1.7"],
        body:
          "Test plan mô tả objectives, resources và processes cho test project. Việc lập plan buộc team nghĩ trước về risk, schedule, people, tools, cost và effort.",
        bullets: [
          "Test plan giúp document means/schedule để đạt objectives, đảm bảo activities đáp ứng criteria, giao tiếp với stakeholders và chứng minh adherence/deviation với test policy/strategy.",
          "Typical content: context, assumptions/constraints, stakeholders, communication, risk register, test approach, budget, schedule.",
          "Release planning nhìn tới release, refine backlog/story, xác định test approach và plan cho nhiều iteration. Tester tham gia viết testable stories/acceptance criteria, risk analysis, effort estimate và release testing plan.",
          "Iteration planning nhìn tới iteration backlog. Tester đánh giá testability, chia story thành testing tasks, estimate effort và làm rõ functional/non-functional aspects.",
          "Entry criteria là preconditions để bắt đầu activity. Exit criteria là điều kiện để tuyên bố hoàn tất. Trong Agile tương ứng Definition of Ready và Definition of Done.",
          "Estimation techniques: ratios, extrapolation, Wideband Delphi/Planning Poker, three-point estimation.",
          "Test case prioritization có thể risk-based, coverage-based, additional coverage, requirements-based, nhưng phải xét dependency và resource availability.",
          "Test pyramid hỗ trợ automation/effort allocation: dưới là nhiều test nhỏ, isolated, nhanh; trên là ít end-to-end test, chậm hơn và ít isolation hơn.",
          "Testing quadrants: Q1 technology/support team, Q2 business/support team, Q3 business/critique product, Q4 technology/critique product."
        ],
        exam:
          "K3 hay hỏi tính three-point estimation và chọn test tiếp theo theo additional coverage."
      },
      {
        code: "5.2",
        heading: "Risk management",
        los: ["FL-5.2.1", "FL-5.2.2", "FL-5.2.3", "FL-5.2.4"],
        body:
          "Risk management giúp tăng khả năng đạt objective, cải thiện product quality và tăng stakeholder confidence. Risk-based testing chọn, ưu tiên và quản lý testing dựa trên risk analysis/control.",
        bullets: [
          "Risk là potential event/hazard/threat/situation gây adverse effect. Risk level dựa trên risk likelihood và risk impact.",
          "Project risks liên quan management/control của dự án: delay delivery, estimate sai, cost cutting, skill thiếu, conflict, communication issue, scope creep, poor tool support, supplier failure.",
          "Product risks liên quan quality characteristics: missing/wrong functionality, wrong calculation, runtime errors, poor architecture, inadequate response time, poor UX, security vulnerability.",
          "Product risk analysis gồm risk identification và risk assessment. Assessment phân loại risk, xác định likelihood/impact/level, prioritize và đề xuất cách xử lý.",
          "Kết quả product risk analysis ảnh hưởng test scope, test levels/types, techniques, coverage, effort estimate, priority và các activity bổ sung ngoài testing.",
          "Product risk control gồm mitigation và monitoring. Response options gồm mitigation by testing, acceptance, transfer hoặc contingency plan.",
          "Mitigate bằng testing có thể chọn tester phù hợp, tăng independence, review/static analysis, technique/coverage phù hợp, test types phù hợp, dynamic/regression testing."
        ],
        exam:
          "Phân biệt product risk với project risk bằng câu hỏi: rủi ro này đe dọa chất lượng sản phẩm hay đe dọa kế hoạch dự án?"
      },
      {
        code: "5.3",
        heading: "Monitoring, control và completion",
        los: ["FL-5.3.1", "FL-5.3.2", "FL-5.3.3"],
        body:
          "Test monitoring thu thập thông tin. Test control dùng thông tin đó để đưa corrective actions. Test completion tổng hợp data, testware và experience khi đạt milestone.",
        bullets: [
          "Control directives có thể là reprioritize tests khi risk thành issue, re-evaluate entry/exit do rework, chỉnh schedule vì environment delay, thêm resource khi cần.",
          "Metrics gồm project progress, test progress, product quality, defect, risk, coverage và cost metrics.",
          "Test progress report hỗ trợ control đang diễn ra, thường daily/weekly, gồm period, progress/deviation, impediments/workarounds, metrics, new/changed risks, plan cho period tiếp theo.",
          "Test completion report tóm tắt activity đã hoàn tất, gồm summary, quality evaluation so với plan/exit criteria, deviations, impediments/workarounds, metrics, unmitigated risks, defects not fixed, lessons learned.",
          "Communication có thể verbal, dashboards, email/chat, online documentation hoặc formal reports. Cần tailor theo audience và context."
        ],
        exam:
          "Monitoring là quan sát/đo; control là hành động điều chỉnh dựa trên dữ liệu."
      },
      {
        code: "5.4",
        heading: "Configuration management",
        los: ["FL-5.4.1"],
        body:
          "Trong testing, CM nhận diện, kiểm soát và theo dõi work products như test plans, strategies, conditions, cases, scripts, results, logs và reports như configuration items.",
        bullets: [
          "Với configuration item phức tạp như test environment, CM ghi các item thành phần, relationship và version.",
          "Baseline được approve cho testing chỉ thay đổi qua formal change control.",
          "CM giúp revert baseline cũ để reproduce previous test results.",
          "CM đảm bảo test items/testware được uniquely identified, version controlled, tracked for changes và related để duy trì traceability."
        ],
        exam:
          "Nếu câu hỏi nhấn mạnh build/version/environment/test case revision để reproduce result, đáp án thường liên quan CM."
      },
      {
        code: "5.5",
        heading: "Defect management",
        los: ["FL-5.5.1"],
        body:
          "Defect management process xử lý anomaly/defect từ lúc discovery tới closure. Anomaly có thể là real defect, false positive hoặc change request sau khi phân tích.",
        bullets: [
          "Workflow tối thiểu: log anomaly, analyze/classify, decide response như fix/keep, close report.",
          "Objectives của defect report: cung cấp đủ thông tin để resolve, tracking quality của work product, tạo idea cải tiến process.",
          "Defect report dynamic testing thường có unique ID, title, date, author/role, test object, environment, context, failure description, steps/logs/screenshots, expected/actual, severity, priority, status, references.",
          "Severity là impact lên stakeholder interest/requirements. Priority là mức ưu tiên fix."
        ],
        exam:
          "K3 có thể yêu cầu chọn thông tin còn thiếu trong defect report. Luôn cần expected vs actual và enough info to reproduce."
      }
    ],
    formulas: [
      ["Three-point estimate", "E = (a + 4*m + b) / 6"],
      ["Standard deviation", "SD = (b - a) / 6"],
      ["Risk level", "likelihood x impact"],
      ["Progress", "completed or executed items / planned items * 100%"]
    ],
    terms: [
      ["Entry criteria", "Preconditions để bắt đầu activity."],
      ["Exit criteria", "Điều kiện để xem activity hoàn tất."],
      ["Risk-based testing", "Test approach chọn/ưu tiên/quản lý test dựa trên risk analysis và control."],
      ["Baseline", "Configuration item đã approve, chỉ đổi qua change control."],
      ["Defect report", "Báo cáo anomaly/defect đủ thông tin để resolve và track quality."]
    ],
    examples: [
      {
        lo: "FL-5.1.4",
        label: "Estimate",
        title: "Three-point",
        text:
          "Optimistic 6h, most likely 9h, pessimistic 18h. E = (6 + 4*9 + 18)/6 = 10h. SD = (18-6)/6 = 2h.",
        takeaway: "Kết quả có thể diễn đạt 10 +/- 2 person-hours."
      },
      {
        lo: "FL-5.2.2",
        label: "Risk",
        title: "Product vs project risk",
        text:
          "Payment tính sai discount là product risk. Payment sandbox delivery trễ khiến team không test đúng lịch là project risk.",
        takeaway: "Một cái đe dọa chất lượng sản phẩm, một cái đe dọa delivery."
      },
      {
        lo: "FL-5.5.1",
        label: "Defect",
        title: "Severity và priority",
        text:
          "Typo trên homepage severity thấp nhưng priority cao trước demo. Lỗi hiếm gây data corruption severity cao, priority phụ thuộc release timing và likelihood.",
        takeaway: "Severity không đồng nghĩa priority."
      }
    ],
    exercises: [
      {
        id: "c5q1",
        lo: "FL-5.1.1",
        k: "K2",
        question: "Nội dung nào thường thuộc test plan?",
        options: [
          "Scope/objectives, assumptions, stakeholders, risk register, test approach, budget và schedule",
          "Chỉ source code branch",
          "Chỉ defect đã fixed",
          "Chỉ production monitoring log"
        ],
        answer: 0,
        explanation: "Đó là các nội dung điển hình của test plan theo syllabus."
      },
      {
        id: "c5q2",
        lo: "FL-5.1.3",
        k: "K2",
        question: "Entry criteria và exit criteria khác nhau thế nào?",
        options: [
          "Entry là preconditions để bắt đầu; exit là điều kiện để hoàn tất",
          "Entry chỉ dùng trong Waterfall; exit chỉ dùng trong Agile",
          "Entry là severity; exit là priority",
          "Entry và exit luôn giống nhau"
        ],
        answer: 0,
        explanation: "Đây là định nghĩa cốt lõi."
      },
      {
        id: "c5q3",
        lo: "FL-5.1.4",
        k: "K3",
        question: "Three-point: a=4h, m=7h, b=16h. E là?",
        options: ["7h", "8h", "9h", "16h"],
        answer: 1,
        explanation: "E = (4 + 4*7 + 16)/6 = 48/6 = 8h."
      },
      {
        id: "c5q4",
        lo: "FL-5.1.5",
        k: "K3",
        question: "TC1 cover A,B. TC2 cover B,C. TC3 cover D. Đã chọn TC1. Theo additional coverage, TC nào tiếp theo?",
        options: [
          "TC2 vì tổng cover 2 requirements",
          "TC3 vì TC2 và TC3 đều thêm 1 requirement mới nên cần tie-breaker",
          "TC1 lần nữa",
          "Không cần test nữa"
        ],
        answer: 1,
        explanation: "Sau TC1, A/B đã cover. TC2 thêm C, TC3 thêm D. Cả hai thêm 1 coverage item mới."
      },
      {
        id: "c5q5",
        lo: "FL-5.2.2",
        k: "K2",
        question: "Đâu là product risk?",
        options: [
          "Tester chủ chốt nghỉ việc",
          "Test environment giao muộn",
          "Payment feature có thể tính sai discount",
          "Supplier phá sản"
        ],
        answer: 2,
        explanation: "Product risk đe dọa product quality. Các lựa chọn khác là project risks."
      },
      {
        id: "c5q6",
        lo: "FL-5.3.3",
        k: "K2",
        question: "Monitoring cho thấy high-risk tests chạy chậm do environment delay. Control directive hợp lý là gì?",
        options: [
          "Không thay đổi gì",
          "Điều chỉnh schedule, escalate environment issue hoặc bổ sung resource",
          "Đóng mọi defect",
          "Xóa test plan"
        ],
        answer: 1,
        explanation: "Test control dùng monitoring data để đưa corrective action."
      },
      {
        id: "c5q7",
        lo: "FL-5.5.1",
        k: "K3",
        question: "Thông tin nào rất cần trong defect report để reproduce failure?",
        options: [
          "Màu yêu thích của tester",
          "Steps, environment, expected result, actual result, logs/screenshots nếu có",
          "Tên công ty vendor của laptop",
          "Chỉ priority, không cần detail"
        ],
        answer: 1,
        explanation: "Defect report cần đủ thông tin để người xử lý reproduce và resolve."
      }
    ]
  },
  {
    id: 6,
    title: "Công cụ kiểm thử",
    official: "Test Tools",
    weight: 2,
    minutes: 20,
    accent: "#b7791f",
    summary:
      "Bám Chapter 6: tool support cho nhiều test activities và lợi ích/rủi ro của test automation.",
    sourceNote: "Diễn giải từ ISTQB CTFL Syllabus v4.0.1, Chapter 6, các mục 6.1 đến 6.2.",
    keywords: ["test automation"],
    learningObjectives: [
      { code: "FL-6.1.1", k: "K2", text: "Giải thích các loại test tools hỗ trợ testing thế nào." },
      { code: "FL-6.2.1", k: "K1", text: "Nhớ benefits và risks của test automation." }
    ],
    sections: [
      {
        code: "6.1",
        heading: "Tool support for testing",
        los: ["FL-6.1.1"],
        body:
          "Test tools hỗ trợ và tạo thuận lợi cho nhiều test activities, không chỉ automated UI execution.",
        bullets: [
          "Test management tools hỗ trợ quản lý SDLC, requirements, tests, defects và configuration.",
          "Static testing tools hỗ trợ review và static analysis.",
          "Test design/implementation tools hỗ trợ tạo test cases, test data và test procedures.",
          "Test execution/coverage tools hỗ trợ automated execution và coverage measurement.",
          "Non-functional testing tools hỗ trợ các loại test khó hoặc không thể làm thủ công.",
          "DevOps tools hỗ trợ delivery pipeline, workflow tracking, automated build và CI/CD.",
          "Collaboration tools hỗ trợ communication.",
          "Virtual machine/containerization tools hỗ trợ scalability và deployment standardization.",
          "Bất kỳ tool nào hỗ trợ testing đều có thể là test tool, kể cả spreadsheet trong ngữ cảnh phù hợp."
        ],
        exam:
          "Đừng chọn đáp án giới hạn test tool chỉ là automation tool."
      },
      {
        code: "6.2",
        heading: "Benefits và risks của test automation",
        los: ["FL-6.2.1"],
        body:
          "Chỉ mua tool không đảm bảo thành công. Tool cần effort để introduce, maintain và train, đồng thời cần risk analysis/mitigation.",
        bullets: [
          "Benefits: tiết kiệm thời gian cho việc lặp lại, giảm human error nhờ consistency/repeatability, đánh giá khách quan hơn như coverage, dễ lấy thông tin cho management/reporting, giảm execution time để feedback sớm hơn, giúp tester có thời gian thiết kế test sâu hơn.",
          "Risks: kỳ vọng không thực tế, estimate sai effort/cost/time để introduce và maintain, dùng tool khi manual phù hợp hơn, phụ thuộc quá nhiều vào tool và bỏ qua human critical thinking.",
          "Risks khác: vendor ngừng hỗ trợ, open-source bị bỏ rơi hoặc cần update thường xuyên, tool không tương thích platform, tool không đáp ứng regulatory/safety standards."
        ],
        exam:
          "Automation không thay thế toàn bộ manual testing và không tự động giảm cost ngay lập tức."
      }
    ],
    terms: [
      ["Test automation", "Dùng tool để tự động hóa test activities như execution, comparison, data setup, reporting hoặc measurement."],
      ["Test management tool", "Tool hỗ trợ quản lý requirements, tests, defects, configuration và reporting."],
      ["Coverage tool", "Tool đo coverage theo tiêu chí như code coverage hoặc requirement coverage."]
    ],
    examples: [
      {
        lo: "FL-6.1.1",
        label: "Spreadsheet",
        title: "Tool đơn giản vẫn là test tool",
        text:
          "Team nhỏ dùng spreadsheet để quản lý test case, trạng thái execution, defect link và summary.",
        takeaway: "Nếu hỗ trợ testing, nó có thể là test tool trong context đó."
      },
      {
        lo: "FL-6.2.1",
        label: "CI",
        title: "Regression automation",
        text:
          "Pipeline chạy API smoke và regression tests sau mỗi merge, so sánh actual/expected và xuất report trong vài phút.",
        takeaway: "Benefit là feedback sớm, consistency và giảm repetitive manual work."
      },
      {
        lo: "FL-6.2.1",
        label: "Risk",
        title: "Automation maintenance",
        text:
          "UI tests fail thường xuyên do selector đổi, team mất nhiều thời gian sửa script hơn là học về product quality.",
        takeaway: "Maintenance effort bị đánh giá thấp là rủi ro phổ biến."
      }
    ],
    exercises: [
      {
        id: "c6q1",
        lo: "FL-6.1.1",
        k: "K2",
        question: "Nhận định nào đúng về test tools?",
        options: [
          "Chỉ UI automation mới là test tool",
          "Spreadsheet có thể là test tool nếu hỗ trợ testing",
          "Tool luôn thay thế tester",
          "Tool chỉ dùng trong DevOps"
        ],
        answer: 1,
        explanation: "Syllabus nêu mọi tool hỗ trợ testing đều có thể là test tool trong context phù hợp."
      },
      {
        id: "c6q2",
        lo: "FL-6.2.1",
        k: "K1",
        question: "Benefit nào của test automation đúng?",
        options: [
          "Giảm repetitive manual work và tăng consistency",
          "Loại bỏ mọi need for critical thinking",
          "Đảm bảo không còn defect",
          "Không cần maintenance"
        ],
        answer: 0,
        explanation: "Automation hữu ích với tác vụ lặp lại và consistency, nhưng không thay thế tư duy con người."
      },
      {
        id: "c6q3",
        lo: "FL-6.2.1",
        k: "K1",
        question: "Risk nào thực tế khi dùng automation?",
        options: [
          "Estimate thấp effort/cost/time để introduce và maintain tool",
          "Feedback nhanh hơn",
          "Coverage measurement khách quan hơn",
          "Giảm lỗi nhập lặp lại"
        ],
        answer: 0,
        explanation: "Các lựa chọn còn lại là benefits; estimate sai effort/cost/time là risk."
      },
      {
        id: "c6q4",
        lo: "FL-6.1.1",
        k: "K2",
        question: "Tool nào phù hợp nhất để hỗ trợ static analysis?",
        options: [
          "Tool quét code tìm unreachable code và security pattern",
          "Tool tạo invoice PDF",
          "Tool chat nhóm không lưu lịch sử",
          "Manual checklist in giấy"
        ],
        answer: 0,
        explanation: "Static analysis tools kiểm tra artifact có cấu trúc mà không execute."
      }
    ]
  }
];
