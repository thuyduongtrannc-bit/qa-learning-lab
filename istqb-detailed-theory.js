(function () {
  const detailedTheory = {
    1: {
      sections: {
        "1.1": {
          body:
            "Testing is broader than running test cases. It includes analysis, design, implementation, execution, reporting, and static activities that evaluate software work products and product quality.",
          bullets: [
            "A test object can be code, a requirement, a user story, a design, an API contract, a test case, data, or any work product that can be evaluated.",
            "Testing can be static or dynamic, and it can support both verification and validation.",
            "Testing provides information about quality and risk; it does not prove that the product has no defects."
          ],
          subsections: [
            {
              code: "1.1.1",
              heading: "Test objectives",
              body:
                "Test objectives describe why testing is performed in a specific context. Different projects may emphasize different objectives.",
              bullets: [
                "Common objectives are to evaluate work products, trigger failures, find defects, reduce quality risk, and build confidence in the test object.",
                "Testing also supports decisions by providing information about coverage, residual risk, product quality, and release readiness.",
                "Some testing is required to satisfy contractual, legal, regulatory, safety, or compliance needs.",
                "In validation, testing checks whether the product meets stakeholder needs in its intended operational context."
              ]
            },
            {
              code: "1.1.2",
              heading: "Testing and debugging",
              body:
                "Testing and debugging are related but different activities. Testing can reveal a failure or directly identify a defect; debugging is mainly a development activity used to find and fix the cause.",
              bullets: [
                "A tester may execute a checkout scenario and observe that the total price is wrong. That is a failure found by testing.",
                "A developer then reproduces the failure, investigates the rounding logic, changes the code, and verifies the fix. That is debugging.",
                "After debugging, confirmation testing checks whether the fix resolved the original failure, and regression testing checks whether the fix caused side effects.",
                "Exam trap: testing does not replace debugging, and debugging does not remove the need for testing."
              ]
            }
          ]
        },
        "1.2": {
          body:
            "Testing is necessary because people make mistakes, work products can contain defects, and failures can damage users, business outcomes, safety, compliance, and reputation.",
          bullets: [
            "Testing helps detect defects early, when they are usually cheaper to fix.",
            "Testing gives stakeholders evidence about quality instead of relying only on assumptions.",
            "Testing is useful even when no failures are found because it can increase confidence and reveal residual risk."
          ],
          subsections: [
            {
              code: "1.2.1",
              heading: "Testing's contributions to success",
              body:
                "Testing contributes to project and product success by finding problems, providing feedback, and reducing uncertainty.",
              bullets: [
                "Static testing can find requirement defects before code is written, reducing rework.",
                "Dynamic testing can reveal failures that affect users, integrations, data, security, or business rules.",
                "Test reports support go/no-go decisions, risk acceptance, release planning, and process improvement.",
                "Well-designed tests help ensure that important user workflows and quality characteristics have been considered."
              ]
            },
            {
              code: "1.2.2",
              heading: "Testing and quality assurance",
              body:
                "Quality assurance and testing both support quality, but they focus on different things.",
              bullets: [
                "Quality assurance is process-oriented and preventive. It improves how work is performed so defects are less likely to be introduced.",
                "Testing is product-oriented and corrective. It evaluates work products and software to discover defects and provide quality information.",
                "Testing results can feed QA activities by showing where the process is weak, such as unclear requirements or repeated coding mistakes.",
                "Exam trap: testing is not the same as QA, even though both contribute to quality."
              ]
            },
            {
              code: "1.2.3",
              heading: "Errors, defects, failures, and root causes",
              body:
                "ISTQB distinguishes the human action, the problem in a work product, the observed incorrect behavior, and the deeper reason behind the problem.",
              bullets: [
                "An error is a human mistake, such as misunderstanding a tax rule.",
                "A defect is an imperfection in a work product, such as a wrong requirement, wrong code, or wrong test case.",
                "A failure is an externally visible deviation when a defect is executed or activated, such as an invoice showing the wrong amount.",
                "A root cause is the underlying reason for the defect or failure. Removing root causes helps prevent similar future problems."
              ]
            }
          ]
        },
        "1.3": {
          body:
            "The seven testing principles explain important limits and good practices for testing. They help testers choose realistic strategies.",
          bullets: [
            "They are principles, not strict process steps.",
            "They apply differently depending on risk, domain, lifecycle, and constraints.",
            "They often appear in exam questions as short scenarios."
          ],
          subsections: [
            {
              code: "1.3.1",
              heading: "Seven testing principles",
              body:
                "Each principle captures a practical testing lesson that prevents unrealistic expectations.",
              bullets: [
                "Testing shows the presence of defects, not their absence. Passing tests reduce uncertainty but do not prove perfection.",
                "Exhaustive testing is impossible except in trivial cases, so testers prioritize using risk, coverage, techniques, and constraints.",
                "Early testing saves time and money because requirement and design defects are cheaper to fix before implementation.",
                "Defects cluster together, so areas with many defects, complexity, frequent changes, or high risk deserve more attention.",
                "Tests wear out. Repeating the same tests without review can miss new defects, so tests need maintenance and variation.",
                "Testing is context dependent. A medical device, ecommerce site, and internal report need different test approaches.",
                "Absence of defects is a fallacy if the product does not meet user needs or business goals."
              ]
            }
          ]
        },
        "1.4": {
          body:
            "The test process contains related activities that may be sequential, overlapping, iterative, or continuous depending on the project context.",
          bullets: [
            "Activities create testware, such as plans, conditions, cases, data, scripts, logs, reports, and defect reports.",
            "Traceability connects these work products to requirements, risks, results, and defects.",
            "Testing responsibilities may be split between management roles and hands-on testing roles."
          ],
          subsections: [
            {
              code: "1.4.1",
              heading: "Test activities and tasks",
              body:
                "The main test activities explain what testers and test managers do across the lifecycle.",
              bullets: [
                "Test planning defines objectives, scope, approach, resources, schedule, risks, entry criteria, and exit criteria.",
                "Test monitoring checks progress and quality information; test control adjusts the work when reality differs from the plan.",
                "Test analysis identifies what to test by studying the test basis and defining test conditions.",
                "Test design defines how to test by deriving test cases, expected results, coverage items, and required data.",
                "Test implementation prepares executable testware: procedures, suites, automated scripts, data, environments, and schedules.",
                "Test execution runs tests, compares actual and expected results, records outcomes, and reports anomalies.",
                "Test completion closes the activity by archiving testware, reporting results, capturing lessons learned, and handing over useful assets."
              ]
            },
            {
              code: "1.4.2",
              heading: "Test process in context",
              body:
                "A single fixed test process does not fit all projects. Context determines how formal, automated, documented, independent, and risk-based the process should be.",
              bullets: [
                "Important factors include SDLC model, product risk, safety criticality, regulatory pressure, team skills, tools, budget, time, domain, and stakeholder expectations.",
                "A startup web feature may use lightweight documentation and fast feedback, while a regulated medical product needs stronger evidence and auditability.",
                "The same activity can happen at different times; for example, test analysis can start during requirement review before executable software exists."
              ]
            },
            {
              code: "1.4.3",
              heading: "Testware",
              body:
                "Testware is the set of work products created during testing. It supports planning, preparation, execution, reporting, and reuse.",
              bullets: [
                "Examples include test plans, charters, risk lists, test conditions, test cases, procedures, automated scripts, test data, environment notes, logs, reports, and defect reports.",
                "Good testware is understandable, maintainable, versioned, traceable, and suitable for the project's level of formality.",
                "Testware should be updated when requirements, risks, code, data, or environments change."
              ]
            },
            {
              code: "1.4.4",
              heading: "Traceability between the test basis and testware",
              body:
                "Traceability links related artifacts so the team can see what has been tested, what has failed, and what may be affected by change.",
              bullets: [
                "Forward traceability links requirements or risks to test conditions, test cases, and results.",
                "Backward traceability shows why a test exists and which test basis item it covers.",
                "Traceability supports coverage analysis, impact analysis, audit evidence, change control, reporting, and defect investigation.",
                "For example, if requirement REQ-12 changes, traceability helps identify all related tests and defects."
              ]
            },
            {
              code: "1.4.5",
              heading: "Roles in testing",
              body:
                "ISTQB separates responsibilities conceptually, although one person may perform multiple roles in a real project.",
              bullets: [
                "The test management role focuses on planning, monitoring, control, completion, reporting, risk management, resources, and stakeholder communication.",
                "The testing role focuses on analysis, design, implementation, execution, defect reporting, and providing objective information.",
                "In Agile teams, these responsibilities may be shared across testers, developers, product owners, business analysts, and operations specialists."
              ]
            }
          ]
        },
        "1.5": {
          body:
            "Effective testing depends not only on techniques but also on skills, collaboration, and the right level of independence.",
          bullets: [
            "Good testers combine curiosity, communication, analysis, domain knowledge, and technical awareness.",
            "Quality improves when the whole team participates in testing and quality discussions.",
            "Independence can improve defect detection but can also create distance if applied poorly."
          ],
          subsections: [
            {
              code: "1.5.1",
              heading: "Generic skills required for testing",
              body:
                "Testing is an analytical and communicative activity, so testers need more than tool knowledge.",
              bullets: [
                "Testing knowledge helps select techniques, coverage, test data, and evidence appropriate to risk.",
                "Analytical thinking and attention to detail help identify gaps, contradictions, edge cases, and suspicious behavior.",
                "Communication and active listening help testers discuss defects constructively and understand stakeholder expectations.",
                "Domain and technical knowledge help testers design realistic scenarios and investigate failures efficiently."
              ]
            },
            {
              code: "1.5.2",
              heading: "Whole team approach",
              body:
                "The whole team approach means everyone on the team shares responsibility for quality, not only the tester.",
              bullets: [
                "Developers, testers, product owners, business people, UX, operations, and support can all contribute quality information.",
                "The approach improves shared understanding, faster feedback, better testability, and earlier discovery of requirement problems.",
                "It does not mean everyone performs the same tasks; it means quality is a team goal."
              ]
            },
            {
              code: "1.5.3",
              heading: "Independence of testing",
              body:
                "Independent testing can reveal defects that authors miss because independent testers bring different perspectives and fewer author biases.",
              bullets: [
                "Independence can range from the author testing their own work to testers outside the team or organization.",
                "Benefits include objective evaluation, different assumptions, and higher chance of finding defects missed by creators.",
                "Drawbacks include isolation, slower feedback, communication gaps, adversarial relationships, and reduced developer ownership of quality.",
                "A balanced approach uses independence where it adds value without breaking collaboration."
              ]
            }
          ]
        }
      },
      viSections: {
        "1.1": {
          body:
            "Testing không chỉ là chạy test case. Nó bao gồm phân tích, thiết kế, chuẩn bị, thực thi, báo cáo và cả hoạt động static để đánh giá work product và chất lượng sản phẩm.",
          bullets: [
            "Test object có thể là code, requirement, user story, design, API contract, test case, data hoặc bất kỳ work product nào cần được đánh giá.",
            "Testing có thể là static hoặc dynamic, và hỗ trợ cả verification lẫn validation.",
            "Testing cung cấp thông tin về chất lượng và rủi ro; nó không chứng minh phần mềm hoàn toàn không có lỗi."
          ],
          subsections: [
            {
              code: "1.1.1",
              heading: "Mục tiêu kiểm thử",
              body:
                "Test objectives trả lời câu hỏi vì sao ta cần kiểm thử trong bối cảnh cụ thể. Mỗi dự án có thể ưu tiên mục tiêu khác nhau.",
              bullets: [
                "Mục tiêu phổ biến là đánh giá work product, kích hoạt failure, tìm defect, giảm quality risk và tăng confidence vào test object.",
                "Testing hỗ trợ quyết định bằng thông tin về coverage, residual risk, chất lượng sản phẩm và mức sẵn sàng release.",
                "Một số testing cần thiết để đáp ứng hợp đồng, luật, quy định, an toàn hoặc compliance.",
                "Trong validation, testing kiểm tra sản phẩm có đáp ứng nhu cầu stakeholder trong bối cảnh sử dụng thật hay không."
              ]
            },
            {
              code: "1.1.2",
              heading: "Testing và debugging",
              body:
                "Testing và debugging có liên quan nhưng không giống nhau. Testing có thể làm lộ failure hoặc tìm defect; debugging chủ yếu là hoạt động phân tích nguyên nhân và sửa lỗi.",
              bullets: [
                "Tester chạy checkout và thấy tổng tiền sai. Đó là failure được phát hiện bằng testing.",
                "Developer reproduce lỗi, kiểm tra logic làm tròn, sửa code và kiểm tra lại. Đó là debugging.",
                "Sau debugging, confirmation testing kiểm tra lỗi cũ đã được fix chưa, regression testing kiểm tra fix có gây lỗi phụ không.",
                "Bẫy thi: testing không thay thế debugging, và debugging không làm mất nhu cầu testing."
              ]
            }
          ]
        },
        "1.2": {
          body:
            "Testing cần thiết vì con người có thể mắc lỗi, work product có thể chứa defect, và failure có thể ảnh hưởng người dùng, kinh doanh, an toàn, compliance và uy tín.",
          bullets: [
            "Testing giúp phát hiện defect sớm, thường rẻ hơn nhiều so với sửa lỗi muộn.",
            "Testing cung cấp bằng chứng về chất lượng thay vì chỉ dựa vào cảm tính.",
            "Ngay cả khi không tìm thấy failure, testing vẫn có giá trị vì tăng confidence và chỉ ra residual risk."
          ],
          subsections: [
            {
              code: "1.2.1",
              heading: "Testing đóng góp vào thành công",
              body:
                "Testing giúp dự án và sản phẩm thành công bằng cách tìm vấn đề, đưa feedback và giảm sự không chắc chắn.",
              bullets: [
                "Static testing có thể tìm defect trong requirement trước khi code được viết, nhờ đó giảm rework.",
                "Dynamic testing có thể phát hiện failure ảnh hưởng người dùng, tích hợp, dữ liệu, bảo mật hoặc business rule.",
                "Test report hỗ trợ quyết định go/no-go, chấp nhận rủi ro, lập kế hoạch release và cải tiến process.",
                "Test được thiết kế tốt giúp đảm bảo workflow quan trọng và quality characteristics đã được xem xét."
              ]
            },
            {
              code: "1.2.2",
              heading: "Testing và quality assurance",
              body:
                "Quality assurance và testing đều hỗ trợ chất lượng, nhưng trọng tâm khác nhau.",
              bullets: [
                "Quality assurance hướng vào process và mang tính phòng ngừa. Nó cải thiện cách làm việc để giảm khả năng tạo defect.",
                "Testing hướng vào sản phẩm và mang tính phát hiện/sửa chữa. Nó đánh giá work product và phần mềm để tìm defect và cung cấp thông tin chất lượng.",
                "Kết quả testing có thể giúp QA thấy process yếu ở đâu, ví dụ requirement mơ hồ hoặc lỗi code lặp lại.",
                "Bẫy thi: testing không đồng nghĩa với QA, dù cả hai đều đóng góp vào chất lượng."
              ]
            },
            {
              code: "1.2.3",
              heading: "Error, defect, failure và root cause",
              body:
                "ISTQB phân biệt hành động sai của con người, lỗi trong work product, hành vi sai quan sát được và nguyên nhân sâu xa.",
              bullets: [
                "Error là sai sót của con người, ví dụ hiểu sai rule tính thuế.",
                "Defect là vấn đề trong work product, ví dụ requirement sai, code sai hoặc test case sai.",
                "Failure là biểu hiện sai khi defect được kích hoạt, ví dụ hóa đơn hiển thị sai số tiền.",
                "Root cause là nguyên nhân gốc. Xử lý root cause giúp giảm lỗi tương tự trong tương lai."
              ]
            }
          ]
        },
        "1.3": {
          body:
            "Bảy nguyên lý kiểm thử giải thích giới hạn và thực hành tốt của testing. Chúng giúp tester chọn chiến lược thực tế hơn.",
          bullets: [
            "Đây là nguyên lý định hướng, không phải các bước process cứng.",
            "Cách áp dụng phụ thuộc risk, domain, lifecycle và constraint của dự án.",
            "Trong đề thi, các nguyên lý thường xuất hiện dưới dạng scenario ngắn."
          ],
          subsections: [
            {
              code: "1.3.1",
              heading: "Bảy nguyên lý kiểm thử",
              body:
                "Mỗi nguyên lý là một bài học thực tế giúp tránh kỳ vọng sai về testing.",
              bullets: [
                "Testing cho thấy sự tồn tại của defect, không chứng minh defect không tồn tại.",
                "Exhaustive testing là bất khả thi trừ trường hợp rất đơn giản, nên tester phải ưu tiên theo risk, coverage, technique và constraint.",
                "Early testing tiết kiệm thời gian và chi phí vì defect trong requirement/design thường rẻ hơn khi sửa sớm.",
                "Defect thường tập trung theo cụm, nên vùng phức tạp, thay đổi nhiều, nhiều lỗi hoặc risk cao cần test kỹ hơn.",
                "Test bị hao mòn. Lặp lại cùng bộ test mà không review có thể bỏ sót defect mới.",
                "Testing phụ thuộc context. Medical device, ecommerce và internal report cần approach khác nhau.",
                "Không có defect là ngộ nhận nếu sản phẩm không đáp ứng nhu cầu user hoặc mục tiêu business."
              ]
            }
          ]
        },
        "1.4": {
          body:
            "Test process gồm nhiều hoạt động liên quan nhau; chúng có thể tuần tự, song song, lặp lại hoặc liên tục tùy bối cảnh dự án.",
          bullets: [
            "Các hoạt động tạo ra testware như plan, condition, case, data, script, log, report và defect report.",
            "Traceability kết nối các work product này với requirement, risk, result và defect.",
            "Trách nhiệm testing có thể chia giữa vai trò quản lý test và vai trò thực hiện test."
          ],
          subsections: [
            {
              code: "1.4.1",
              heading: "Hoạt động và task kiểm thử",
              body:
                "Các hoạt động chính mô tả tester và test manager làm gì trong suốt lifecycle.",
              bullets: [
                "Test planning xác định objective, scope, approach, resource, schedule, risk, entry criteria và exit criteria.",
                "Test monitoring theo dõi tiến độ và thông tin chất lượng; test control điều chỉnh khi thực tế lệch khỏi kế hoạch.",
                "Test analysis trả lời 'test cái gì' bằng cách phân tích test basis và xác định test condition.",
                "Test design trả lời 'test như thế nào' bằng cách tạo test case, expected result, coverage item và data cần thiết.",
                "Test implementation chuẩn bị testware có thể chạy: procedure, suite, automation script, data, environment và schedule.",
                "Test execution chạy test, so sánh actual/expected, ghi nhận kết quả và báo cáo anomaly.",
                "Test completion đóng hoạt động bằng cách lưu testware, báo cáo kết quả, rút lessons learned và bàn giao asset hữu ích."
              ]
            },
            {
              code: "1.4.2",
              heading: "Test process trong bối cảnh",
              body:
                "Không có một test process cố định phù hợp mọi dự án. Context quyết định mức formal, automation, documentation, independence và risk-based.",
              bullets: [
                "Yếu tố quan trọng gồm SDLC, product risk, safety, regulatory pressure, kỹ năng team, tool, budget, time, domain và expectation của stakeholder.",
                "Một web feature ở startup có thể cần documentation nhẹ và feedback nhanh, trong khi sản phẩm regulated cần evidence và auditability mạnh hơn.",
                "Cùng một hoạt động có thể diễn ra ở thời điểm khác nhau; test analysis có thể bắt đầu khi review requirement, trước khi có phần mềm chạy được."
              ]
            },
            {
              code: "1.4.3",
              heading: "Testware",
              body:
                "Testware là các work product được tạo trong testing, phục vụ planning, preparation, execution, reporting và reuse.",
              bullets: [
                "Ví dụ: test plan, charter, risk list, test condition, test case, procedure, automated script, test data, environment note, log, report và defect report.",
                "Testware tốt cần dễ hiểu, dễ bảo trì, có version, traceable và phù hợp mức formal của dự án.",
                "Testware cần cập nhật khi requirement, risk, code, data hoặc environment thay đổi."
              ]
            },
            {
              code: "1.4.4",
              heading: "Traceability giữa test basis và testware",
              body:
                "Traceability liên kết các artifact để team biết cái gì đã được test, cái gì fail và change có thể ảnh hưởng đâu.",
              bullets: [
                "Forward traceability nối requirement/risk tới test condition, test case và result.",
                "Backward traceability cho biết vì sao test tồn tại và nó cover phần nào của test basis.",
                "Traceability hỗ trợ coverage analysis, impact analysis, audit evidence, change control, reporting và defect investigation.",
                "Ví dụ requirement REQ-12 thay đổi, traceability giúp tìm mọi test và defect liên quan."
              ]
            },
            {
              code: "1.4.5",
              heading: "Vai trò trong testing",
              body:
                "ISTQB tách trách nhiệm theo khái niệm, dù trong dự án thật một người có thể kiêm nhiều vai trò.",
              bullets: [
                "Test management tập trung vào planning, monitoring, control, completion, reporting, risk, resource và giao tiếp stakeholder.",
                "Testing role tập trung vào analysis, design, implementation, execution, defect reporting và cung cấp thông tin khách quan.",
                "Trong Agile, trách nhiệm này có thể được chia giữa tester, developer, product owner, BA và operation specialist."
              ]
            }
          ]
        },
        "1.5": {
          body:
            "Testing hiệu quả không chỉ dựa vào technique mà còn phụ thuộc kỹ năng, cộng tác và mức independence phù hợp.",
          bullets: [
            "Tester tốt kết hợp curiosity, communication, analysis, domain knowledge và technical awareness.",
            "Chất lượng tốt hơn khi cả team cùng tham gia thảo luận và chịu trách nhiệm về quality.",
            "Independence giúp phát hiện defect tốt hơn nhưng nếu áp dụng cứng nhắc có thể tạo khoảng cách."
          ],
          subsections: [
            {
              code: "1.5.1",
              heading: "Kỹ năng chung cần cho testing",
              body:
                "Testing là hoạt động phân tích và giao tiếp, vì vậy tester cần nhiều hơn kiến thức tool.",
              bullets: [
                "Kiến thức testing giúp chọn technique, coverage, test data và evidence phù hợp risk.",
                "Analytical thinking và attention to detail giúp tìm gap, mâu thuẫn, edge case và hành vi đáng nghi.",
                "Communication và active listening giúp trao đổi defect mang tính xây dựng và hiểu kỳ vọng stakeholder.",
                "Domain và technical knowledge giúp thiết kế scenario thực tế và điều tra failure hiệu quả."
              ]
            },
            {
              code: "1.5.2",
              heading: "Whole team approach",
              body:
                "Whole team approach nghĩa là mọi người trong team cùng chịu trách nhiệm về chất lượng, không chỉ riêng tester.",
              bullets: [
                "Developer, tester, product owner, business, UX, operation và support đều có thể đóng góp thông tin chất lượng.",
                "Cách tiếp cận này cải thiện shared understanding, feedback nhanh hơn, testability tốt hơn và phát hiện sớm vấn đề requirement.",
                "Nó không có nghĩa mọi người làm cùng một task; nó nghĩa là quality là mục tiêu chung."
              ]
            },
            {
              code: "1.5.3",
              heading: "Independence of testing",
              body:
                "Independent testing có thể tìm defect mà tác giả bỏ sót vì người độc lập có góc nhìn khác và ít bị thiên kiến của người tạo ra sản phẩm.",
              bullets: [
                "Independence có thể từ tác giả tự test, tester trong team, tester ngoài team, đến tổ chức bên ngoài.",
                "Lợi ích gồm đánh giá khách quan, giả định khác và khả năng tìm defect bị creator bỏ sót.",
                "Hạn chế gồm isolation, feedback chậm, gap giao tiếp, quan hệ đối đầu và giảm ownership chất lượng của developer.",
                "Cách tốt là dùng independence ở nơi có giá trị nhưng vẫn giữ collaboration."
              ]
            }
          ]
        }
      }
    },
    2: {
      sections: {
        "2.1": {
          body:
            "Testing must fit the selected SDLC. The lifecycle affects when testing starts, how much documentation is produced, which levels are used, and how fast feedback reaches the team.",
          bullets: [
            "Sequential lifecycles often separate phases more clearly; iterative and Agile lifecycles repeat analysis, design, build, and test in smaller cycles.",
            "Good testing practices apply in every lifecycle, but their formality and timing differ.",
            "Modern delivery often combines test-first work, DevOps, shift-left testing, automation, and retrospectives."
          ],
          subsections: [
            {
              code: "2.1.1",
              heading: "Impact of the SDLC on testing",
              body:
                "The chosen SDLC influences test scope, timing, documentation, roles, automation, and the amount of regression testing needed.",
              bullets: [
                "In sequential models, testers can review requirements early but may wait longer for executable software.",
                "In iterative models, each increment can include static testing, dynamic testing, regression testing, and stakeholder feedback.",
                "In Agile, lightweight documentation, continuous collaboration, and automation are usually important because change is frequent.",
                "The test approach should reflect delivery rhythm, risk, release frequency, and team responsibility."
              ]
            },
            {
              code: "2.1.2",
              heading: "SDLC and good testing practices",
              body:
                "Some testing practices are valuable regardless of lifecycle.",
              bullets: [
                "Every development activity should have a corresponding test activity, such as requirement review, design review, component testing, or acceptance testing.",
                "Test levels should have distinct objectives so the team does not duplicate effort blindly.",
                "Test analysis and design should start early, before code is ready, so ambiguities are found sooner.",
                "Testers should review draft work products because defects in test basis can create many downstream defects."
              ]
            },
            {
              code: "2.1.3",
              heading: "Testing as a driver for software development",
              body:
                "Test-first approaches use tests or examples to guide development before code is written.",
              bullets: [
                "TDD starts with a failing low-level test, then code is written to pass it, followed by refactoring.",
                "ATDD defines acceptance tests with business, development, and testing before implementation.",
                "BDD uses shared language and examples, often in Given/When/Then form, to clarify behavior.",
                "These approaches improve testability, shared understanding, and fast feedback, but they do not replace other testing."
              ]
            },
            {
              code: "2.1.4",
              heading: "DevOps and testing",
              body:
                "DevOps emphasizes collaboration between development and operations, supported by automation and fast feedback.",
              bullets: [
                "Testing in DevOps often relies on CI/CD pipelines, automated regression, environment provisioning, monitoring, and deployment checks.",
                "Testers may contribute to pipeline quality gates, observability, test data, service virtualization, and production feedback analysis.",
                "DevOps can shorten feedback loops, but it also requires reliable automation and careful management of flaky tests.",
                "Manual exploratory testing and user-focused evaluation are still valuable."
              ]
            },
            {
              code: "2.1.5",
              heading: "Shift-left approach",
              body:
                "Shift left means moving testing activities earlier in the SDLC to find and prevent defects sooner.",
              bullets: [
                "Examples include reviewing requirements early, writing acceptance criteria before coding, static analysis in developer workflows, and early API tests.",
                "Shift left does not mean eliminating later system, acceptance, regression, or production-related testing.",
                "The goal is earlier feedback, lower rework cost, better testability, and fewer late surprises."
              ]
            },
            {
              code: "2.1.6",
              heading: "Retrospectives and process improvement",
              body:
                "Retrospectives help the team inspect how work was done and decide concrete improvements.",
              bullets: [
                "Testing topics can include defect leakage, flaky automation, unclear acceptance criteria, test data issues, environment instability, and reporting gaps.",
                "A good retrospective identifies what to keep, what to improve, and who will own the improvement action.",
                "Retrospectives support continuous improvement of test process, testware, collaboration, and test basis quality."
              ]
            }
          ]
        },
        "2.2": {
          body:
            "Test levels organize testing by target and responsibility; test types organize testing by objective or quality characteristic.",
          bullets: [
            "A test level can include several test types.",
            "A test type can be performed at several test levels.",
            "Confirmation and regression testing are change-related activities that may happen at any level."
          ],
          subsections: [
            {
              code: "2.2.1",
              heading: "Test levels",
              body:
                "Test levels are groups of test activities that are organized and managed together.",
              bullets: [
                "Component testing focuses on individual components or units, often with mocks, stubs, or drivers.",
                "Component integration testing focuses on interfaces and interactions between integrated components.",
                "System testing evaluates the complete system against functional and non-functional requirements.",
                "System integration testing focuses on interfaces between the system and external systems, services, or infrastructure.",
                "Acceptance testing evaluates whether the system is ready for use, deployment, or acceptance by users, business, contract, regulation, or operations."
              ]
            },
            {
              code: "2.2.2",
              heading: "Test types",
              body:
                "Test types are groups of test activities focused on specific objectives.",
              bullets: [
                "Functional testing checks what the system does, such as business rules, calculations, workflows, and data processing.",
                "Non-functional testing checks how well the system behaves, such as performance, security, usability, reliability, compatibility, maintainability, portability, or safety.",
                "Black-box testing derives tests from external behavior and specifications.",
                "White-box testing derives tests from internal structure, code, architecture, or processing.",
                "Test types can be combined; for example, an API security test may be non-functional and black-box."
              ]
            },
            {
              code: "2.2.3",
              heading: "Confirmation testing and regression testing",
              body:
                "Both activities are related to change, but they answer different questions.",
              bullets: [
                "Confirmation testing asks: did the fix solve the original defect?",
                "Regression testing asks: did the change break something that previously worked?",
                "Confirmation testing is usually narrower and focused on the changed defect.",
                "Regression testing may be broad and risk-based, especially after large or risky changes."
              ]
            }
          ]
        },
        "2.3": {
          body:
            "Maintenance testing is performed on an existing operational system when the system, its environment, or its lifecycle status changes.",
          bullets: [
            "It can be triggered by modification, migration, retirement, environment change, data conversion, or operational incidents.",
            "It requires impact analysis so the team understands what to test and how much regression testing is needed.",
            "It often involves both changed areas and unchanged areas that may be affected."
          ],
          subsections: [
            {
              code: "2.3.1",
              heading: "Maintenance testing and triggers",
              body:
                "Maintenance testing checks that changes to an operational system work correctly and do not cause unacceptable side effects.",
              bullets: [
                "Modification triggers include fixes, enhancements, configuration changes, infrastructure upgrades, and platform changes.",
                "Migration triggers include moving data, replacing technology, changing databases, or switching environments.",
                "Retirement triggers include archive, restore, retrieval, data retention, and decommissioning procedures.",
                "Impact analysis identifies affected components, interfaces, data, tests, risks, and environments."
              ]
            }
          ]
        }
      },
      viSections: {
        "2.1": {
          body:
            "Testing phải phù hợp với SDLC được chọn. Lifecycle ảnh hưởng thời điểm bắt đầu test, mức tài liệu, test level và tốc độ feedback về team.",
          bullets: [
            "Sequential lifecycle thường tách phase rõ hơn; iterative và Agile lặp lại analysis, design, build, test trong các vòng nhỏ.",
            "Good testing practices áp dụng cho mọi lifecycle, nhưng mức formal và timing khác nhau.",
            "Delivery hiện đại thường kết hợp test-first, DevOps, shift-left, automation và retrospective."
          ],
          subsections: [
            {
              code: "2.1.1",
              heading: "Ảnh hưởng của SDLC tới testing",
              body:
                "SDLC ảnh hưởng scope, timing, documentation, role, automation và lượng regression testing cần thiết.",
              bullets: [
                "Trong sequential model, tester có thể review requirement sớm nhưng phải chờ lâu hơn để có phần mềm chạy được.",
                "Trong iterative model, mỗi increment có thể có static testing, dynamic testing, regression testing và feedback stakeholder.",
                "Trong Agile, documentation nhẹ, collaboration liên tục và automation thường quan trọng vì change diễn ra thường xuyên.",
                "Test approach cần phản ánh nhịp delivery, risk, release frequency và trách nhiệm của team."
              ]
            },
            {
              code: "2.1.2",
              heading: "SDLC và good testing practices",
              body:
                "Một số thực hành testing có giá trị trong mọi lifecycle.",
              bullets: [
                "Mỗi hoạt động development nên có hoạt động testing tương ứng, như requirement review, design review, component testing hoặc acceptance testing.",
                "Test level nên có objective riêng để team không duplicate effort một cách mù quáng.",
                "Test analysis và design nên bắt đầu sớm trước khi code sẵn sàng để tìm ambiguity sớm hơn.",
                "Tester nên review draft work product vì defect trong test basis có thể tạo nhiều defect downstream."
              ]
            },
            {
              code: "2.1.3",
              heading: "Testing dẫn dắt phát triển phần mềm",
              body:
                "Test-first approach dùng test hoặc example để dẫn dắt development trước khi code được viết.",
              bullets: [
                "TDD bắt đầu bằng low-level test đang fail, sau đó viết code để pass và refactor.",
                "ATDD định nghĩa acceptance test với business, development và testing trước implementation.",
                "BDD dùng ngôn ngữ chung và ví dụ, thường theo Given/When/Then, để làm rõ behavior.",
                "Các approach này cải thiện testability, shared understanding và feedback nhanh, nhưng không thay thế các loại testing khác."
              ]
            },
            {
              code: "2.1.4",
              heading: "DevOps và testing",
              body:
                "DevOps nhấn mạnh collaboration giữa development và operations, được hỗ trợ bởi automation và feedback nhanh.",
              bullets: [
                "Testing trong DevOps thường dựa vào CI/CD pipeline, automated regression, environment provisioning, monitoring và deployment check.",
                "Tester có thể đóng góp quality gate, observability, test data, service virtualization và phân tích feedback production.",
                "DevOps rút ngắn feedback loop nhưng cần automation đáng tin cậy và kiểm soát flaky test.",
                "Manual exploratory testing và đánh giá từ góc nhìn user vẫn có giá trị."
              ]
            },
            {
              code: "2.1.5",
              heading: "Shift-left approach",
              body:
                "Shift left nghĩa là đưa hoạt động testing sớm hơn trong SDLC để tìm và ngăn defect sớm hơn.",
              bullets: [
                "Ví dụ: review requirement sớm, viết acceptance criteria trước coding, static analysis trong workflow developer và API test sớm.",
                "Shift left không có nghĩa bỏ system testing, acceptance testing, regression testing hoặc production-related testing về sau.",
                "Mục tiêu là feedback sớm, giảm rework cost, tăng testability và giảm bất ngờ ở cuối dự án."
              ]
            },
            {
              code: "2.1.6",
              heading: "Retrospective và process improvement",
              body:
                "Retrospective giúp team xem lại cách làm việc và quyết định improvement cụ thể.",
              bullets: [
                "Chủ đề testing có thể gồm defect leakage, flaky automation, acceptance criteria chưa rõ, vấn đề test data, environment unstable và reporting gap.",
                "Retrospective tốt xác định điều nên giữ, điều cần cải thiện và ai chịu trách nhiệm action.",
                "Retrospective hỗ trợ cải tiến liên tục test process, testware, collaboration và chất lượng test basis."
              ]
            }
          ]
        },
        "2.2": {
          body:
            "Test level tổ chức testing theo target và trách nhiệm; test type tổ chức testing theo objective hoặc quality characteristic.",
          bullets: [
            "Một test level có thể chứa nhiều test type.",
            "Một test type có thể được thực hiện ở nhiều test level.",
            "Confirmation và regression testing là hoạt động liên quan tới change, có thể xảy ra ở bất kỳ level nào."
          ],
          subsections: [
            {
              code: "2.2.1",
              heading: "Test levels",
              body:
                "Test level là nhóm hoạt động testing được tổ chức và quản lý cùng nhau.",
              bullets: [
                "Component testing tập trung vào component/unit riêng lẻ, thường dùng mock, stub hoặc driver.",
                "Component integration testing tập trung vào interface và interaction giữa các component đã tích hợp.",
                "System testing đánh giá hệ thống hoàn chỉnh theo functional và non-functional requirements.",
                "System integration testing tập trung vào interface giữa system và hệ thống/service/infrastructure bên ngoài.",
                "Acceptance testing đánh giá hệ thống đã sẵn sàng để dùng, deploy hoặc được chấp nhận bởi user, business, hợp đồng, quy định hoặc operations."
              ]
            },
            {
              code: "2.2.2",
              heading: "Test types",
              body:
                "Test type là nhóm hoạt động testing tập trung vào objective cụ thể.",
              bullets: [
                "Functional testing kiểm tra hệ thống làm gì, như business rule, calculation, workflow và data processing.",
                "Non-functional testing kiểm tra hệ thống hoạt động tốt đến mức nào, như performance, security, usability, reliability, compatibility, maintainability, portability hoặc safety.",
                "Black-box testing tạo test từ behavior bên ngoài và specification.",
                "White-box testing tạo test từ cấu trúc nội bộ, code, architecture hoặc processing.",
                "Các test type có thể kết hợp; ví dụ API security test vừa là non-functional vừa có thể là black-box."
              ]
            },
            {
              code: "2.2.3",
              heading: "Confirmation testing và regression testing",
              body:
                "Cả hai đều liên quan tới change, nhưng trả lời câu hỏi khác nhau.",
              bullets: [
                "Confirmation testing hỏi: fix đã giải quyết defect ban đầu chưa?",
                "Regression testing hỏi: change có làm hỏng thứ trước đây chạy đúng không?",
                "Confirmation testing thường hẹp hơn và tập trung vào defect đã sửa.",
                "Regression testing có thể rộng và risk-based, đặc biệt sau change lớn hoặc rủi ro cao."
              ]
            }
          ]
        },
        "2.3": {
          body:
            "Maintenance testing được thực hiện trên hệ thống đang vận hành khi hệ thống, môi trường hoặc trạng thái lifecycle thay đổi.",
          bullets: [
            "Trigger có thể là modification, migration, retirement, environment change, data conversion hoặc incident vận hành.",
            "Cần impact analysis để biết test gì và regression testing cần sâu tới đâu.",
            "Thường phải test cả phần thay đổi và phần không thay đổi nhưng có thể bị ảnh hưởng."
          ],
          subsections: [
            {
              code: "2.3.1",
              heading: "Maintenance testing và trigger",
              body:
                "Maintenance testing kiểm tra change trên hệ thống đang vận hành hoạt động đúng và không gây side effect không chấp nhận được.",
              bullets: [
                "Modification trigger gồm fix, enhancement, configuration change, infrastructure upgrade và platform change.",
                "Migration trigger gồm chuyển data, thay technology, đổi database hoặc đổi environment.",
                "Retirement trigger gồm archive, restore, retrieval, data retention và decommissioning procedure.",
                "Impact analysis xác định component, interface, data, test, risk và environment bị ảnh hưởng."
              ]
            }
          ]
        }
      }
    },
    3: {
      sections: {
        "3.1": {
          body:
            "Static testing evaluates work products without executing the software. It can be manual, such as reviews, or tool-supported, such as static analysis.",
          bullets: [
            "Static testing is valuable before executable code exists.",
            "It can find defects that dynamic testing may miss or find late.",
            "It improves quality by checking clarity, completeness, consistency, correctness, testability, and maintainability."
          ],
          subsections: [
            {
              code: "3.1.1",
              heading: "Work products examined by static testing",
              body:
                "Many work products can be examined statically if they can be read, reviewed, modeled, or analyzed.",
              bullets: [
                "Reviewable work products include requirements, user stories, acceptance criteria, designs, models, code, test plans, test cases, checklists, contracts, and user documentation.",
                "Static analysis usually needs a structured artifact, such as source code, configuration files, interface definitions, or models with formal syntax.",
                "The goal is to find anomalies early, not only to inspect code."
              ]
            },
            {
              code: "3.1.2",
              heading: "Value of static testing",
              body:
                "Static testing gives early feedback and can prevent expensive downstream defects.",
              bullets: [
                "It can detect missing, inconsistent, ambiguous, duplicated, infeasible, or untestable requirements.",
                "It can identify code defects such as unreachable code, security weaknesses, standard violations, or maintainability issues.",
                "It reduces rework because defects are often cheaper to fix before implementation or execution.",
                "It also spreads knowledge among reviewers and improves shared understanding."
              ]
            },
            {
              code: "3.1.3",
              heading: "Static testing vs dynamic testing",
              body:
                "Static and dynamic testing complement each other because they find different kinds of problems.",
              bullets: [
                "Static testing finds defects directly in work products without execution.",
                "Dynamic testing executes software and observes failures caused by defects.",
                "Static testing can be used before code is executable; dynamic testing needs executable software.",
                "Dynamic testing is better for runtime behavior such as performance, timing, data flow, and integration behavior."
              ]
            }
          ]
        },
        "3.2": {
          body:
            "Reviews are a major form of static testing. They provide feedback, detect anomalies, and improve understanding among stakeholders.",
          bullets: [
            "Reviews can be informal or formal depending on objective, risk, and context.",
            "A review process includes planning, initiation, individual review, communication, fixing, and reporting.",
            "The success of a review depends strongly on culture, preparation, scope, and clear objectives."
          ],
          subsections: [
            {
              code: "3.2.1",
              heading: "Early and frequent stakeholder feedback",
              body:
                "Early feedback reduces the chance that the team builds the wrong product or misunderstands important needs.",
              bullets: [
                "Stakeholders can identify missing rules, ambiguous wording, incorrect assumptions, and unrealistic acceptance criteria.",
                "Frequent feedback reduces rework and missed deadlines because problems are found before they spread.",
                "Feedback improves shared ownership and can reveal conflicts between business, user, technical, and regulatory expectations."
              ]
            },
            {
              code: "3.2.2",
              heading: "Review process activities",
              body:
                "A structured review process helps the team find and handle anomalies consistently.",
              bullets: [
                "Planning defines scope, objectives, participants, roles, entry criteria, exit criteria, schedule, and review type.",
                "Review initiation distributes the work product, explains objectives, and ensures reviewers understand what to do.",
                "Individual review is where reviewers inspect the work product and record potential anomalies.",
                "Communication and analysis discusses findings, decides whether they are defects, and records decisions.",
                "Fixing and reporting tracks corrections, review outcomes, metrics, and follow-up actions."
              ]
            },
            {
              code: "3.2.3",
              heading: "Roles and responsibilities in reviews",
              body:
                "Review roles clarify who prepares, facilitates, records, reviews, fixes, and manages the review.",
              bullets: [
                "The author creates the work product and usually fixes confirmed defects.",
                "The moderator facilitates the review meeting and keeps the discussion focused.",
                "The scribe records anomalies, decisions, and action items.",
                "Reviewers examine the work product from relevant perspectives.",
                "The review leader organizes the review, and management provides resources and support."
              ]
            },
            {
              code: "3.2.4",
              heading: "Review types",
              body:
                "Review types differ by formality, objective, roles, documentation, and metric collection.",
              bullets: [
                "Informal reviews are lightweight and useful for quick feedback or anomaly detection.",
                "Walkthroughs are often led by the author and can educate participants, build consensus, and find anomalies.",
                "Technical reviews are usually led by a moderator and performed by technically qualified reviewers.",
                "Inspections are the most formal review type, follow a defined process, and may collect metrics for improvement."
              ]
            },
            {
              code: "3.2.5",
              heading: "Success factors for reviews",
              body:
                "A review succeeds when it is prepared, focused, constructive, and supported by the organization.",
              bullets: [
                "Use clear objectives, an appropriate review type, small review chunks, sufficient preparation time, and useful checklists.",
                "Create a safe culture where the work product is criticized, not the author.",
                "Train participants and use facilitation to avoid side discussions and personal conflict.",
                "Track findings and follow-up actions so the review produces real improvement."
              ]
            }
          ]
        }
      },
      viSections: {
        "3.1": {
          body:
            "Static testing đánh giá work product mà không execute phần mềm. Nó có thể manual như review, hoặc được tool hỗ trợ như static analysis.",
          bullets: [
            "Static testing có giá trị ngay cả trước khi có code chạy được.",
            "Nó có thể tìm defect mà dynamic testing có thể bỏ sót hoặc tìm quá muộn.",
            "Nó cải thiện quality bằng cách kiểm tra clarity, completeness, consistency, correctness, testability và maintainability."
          ],
          subsections: [
            {
              code: "3.1.1",
              heading: "Work product có thể static test",
              body:
                "Nhiều work product có thể được kiểm tra statically nếu có thể đọc, review, model hoặc analyze.",
              bullets: [
                "Work product có thể review gồm requirement, user story, acceptance criteria, design, model, code, test plan, test case, checklist, contract và user documentation.",
                "Static analysis thường cần artifact có cấu trúc như source code, configuration file, interface definition hoặc model có formal syntax.",
                "Mục tiêu là tìm anomaly sớm, không chỉ kiểm tra code."
              ]
            },
            {
              code: "3.1.2",
              heading: "Giá trị của static testing",
              body:
                "Static testing đưa feedback sớm và có thể ngăn defect tốn kém về sau.",
              bullets: [
                "Nó có thể phát hiện requirement thiếu, mâu thuẫn, mơ hồ, trùng lặp, không khả thi hoặc khó test.",
                "Nó có thể phát hiện code defect như unreachable code, điểm yếu bảo mật, vi phạm standard hoặc vấn đề maintainability.",
                "Nó giảm rework vì defect thường rẻ hơn khi sửa trước implementation hoặc execution.",
                "Nó cũng giúp reviewer chia sẻ kiến thức và tăng shared understanding."
              ]
            },
            {
              code: "3.1.3",
              heading: "Static testing và dynamic testing",
              body:
                "Static và dynamic testing bổ sung cho nhau vì tìm các loại vấn đề khác nhau.",
              bullets: [
                "Static testing tìm defect trực tiếp trong work product mà không execute.",
                "Dynamic testing execute phần mềm và quan sát failure do defect gây ra.",
                "Static testing có thể dùng trước khi code chạy được; dynamic testing cần phần mềm executable.",
                "Dynamic testing phù hợp hơn cho runtime behavior như performance, timing, data flow và integration behavior."
              ]
            }
          ]
        },
        "3.2": {
          body:
            "Review là một dạng static testing quan trọng. Review cung cấp feedback, tìm anomaly và cải thiện understanding giữa stakeholder.",
          bullets: [
            "Review có thể informal hoặc formal tùy objective, risk và context.",
            "Review process gồm planning, initiation, individual review, communication, fixing và reporting.",
            "Review thành công phụ thuộc nhiều vào culture, preparation, scope và objective rõ ràng."
          ],
          subsections: [
            {
              code: "3.2.1",
              heading: "Feedback sớm và thường xuyên từ stakeholder",
              body:
                "Feedback sớm giảm khả năng team xây sai sản phẩm hoặc hiểu sai nhu cầu quan trọng.",
              bullets: [
                "Stakeholder có thể phát hiện rule thiếu, wording mơ hồ, assumption sai và acceptance criteria không thực tế.",
                "Feedback thường xuyên giảm rework và trễ deadline vì vấn đề được tìm trước khi lan rộng.",
                "Feedback cải thiện ownership chung và làm lộ conflict giữa business, user, technical và regulatory expectation."
              ]
            },
            {
              code: "3.2.2",
              heading: "Hoạt động của review process",
              body:
                "Review process có cấu trúc giúp team tìm và xử lý anomaly nhất quán.",
              bullets: [
                "Planning xác định scope, objective, participant, role, entry criteria, exit criteria, schedule và review type.",
                "Review initiation phân phối work product, giải thích objective và đảm bảo reviewer hiểu việc cần làm.",
                "Individual review là lúc reviewer kiểm tra work product và ghi nhận anomaly tiềm năng.",
                "Communication and analysis thảo luận finding, quyết định có phải defect không và ghi quyết định.",
                "Fixing and reporting theo dõi correction, outcome, metric và follow-up action."
              ]
            },
            {
              code: "3.2.3",
              heading: "Vai trò và trách nhiệm trong review",
              body:
                "Review role làm rõ ai chuẩn bị, điều phối, ghi nhận, review, sửa lỗi và quản lý review.",
              bullets: [
                "Author tạo work product và thường sửa defect đã xác nhận.",
                "Moderator điều phối meeting và giữ discussion đúng trọng tâm.",
                "Scribe ghi anomaly, decision và action item.",
                "Reviewer kiểm tra work product từ các góc nhìn phù hợp.",
                "Review leader tổ chức review, management cung cấp resource và support."
              ]
            },
            {
              code: "3.2.4",
              heading: "Các loại review",
              body:
                "Review type khác nhau về mức formal, objective, role, documentation và metric collection.",
              bullets: [
                "Informal review nhẹ, hữu ích cho feedback nhanh hoặc anomaly detection.",
                "Walkthrough thường do author dẫn dắt, có thể training participant, tạo consensus và tìm anomaly.",
                "Technical review thường do moderator dẫn dắt và được reviewer có chuyên môn kỹ thuật thực hiện.",
                "Inspection là review formal nhất, theo process rõ và có thể thu thập metric để cải tiến."
              ]
            },
            {
              code: "3.2.5",
              heading: "Yếu tố giúp review thành công",
              body:
                "Review thành công khi được chuẩn bị tốt, có trọng tâm, mang tính xây dựng và được tổ chức hỗ trợ.",
              bullets: [
                "Cần objective rõ, review type phù hợp, phạm vi nhỏ, đủ thời gian chuẩn bị và checklist hữu ích.",
                "Tạo văn hóa an toàn: phê bình work product, không công kích author.",
                "Training participant và facilitation giúp tránh lan man hoặc conflict cá nhân.",
                "Theo dõi finding và follow-up action để review tạo cải tiến thật."
              ]
            }
          ]
        }
      }
    },
    4: {
      sections: {
        "4.1": {
          body:
            "Test techniques help testers derive a smaller but effective set of tests from requirements, structure, experience, and collaboration.",
          bullets: [
            "Black-box techniques use external behavior and specifications.",
            "White-box techniques use internal structure or implementation.",
            "Experience-based techniques use tester skill, defect knowledge, and learning during testing."
          ],
          subsections: [
            {
              code: "4.1.1",
              heading: "Categories of test techniques",
              body:
                "Technique categories help testers choose an approach that fits the available information.",
              bullets: [
                "Use black-box techniques when requirements, rules, data ranges, states, or workflows are available.",
                "Use white-box techniques when code, architecture, control flow, or internal structure is available.",
                "Use experience-based techniques when time is limited, specifications are weak, or tester knowledge can reveal likely defects.",
                "Techniques are complementary; a strong test design often combines more than one category."
              ]
            }
          ]
        },
        "4.2": {
          body:
            "Black-box techniques derive tests from specified behavior without looking at the internal implementation.",
          bullets: [
            "They are useful for requirements, API contracts, business rules, workflows, and input/output behavior.",
            "They support systematic coverage rather than purely intuitive test selection.",
            "The CTFL techniques here are equivalence partitioning, boundary value analysis, decision table testing, and state transition testing."
          ],
          subsections: [
            {
              code: "4.2.1",
              heading: "Equivalence partitioning",
              body:
                "Equivalence partitioning divides data into partitions expected to be processed in the same way.",
              bullets: [
                "Partitions must be non-empty and non-overlapping.",
                "Valid partitions contain values the system should accept; invalid partitions contain values the system should reject or handle as errors.",
                "At least one representative value should be tested from each partition.",
                "Coverage is calculated using covered partitions divided by identified partitions."
              ]
            },
            {
              code: "4.2.2",
              heading: "Boundary value analysis",
              body:
                "Boundary value analysis focuses on values at and near the edges of ordered partitions because defects often occur around boundaries.",
              bullets: [
                "BVA applies only when partitions are ordered, such as numeric ranges, dates, counts, or lengths.",
                "2-value BVA uses the boundary value and the closest value in the adjacent partition.",
                "3-value BVA uses the boundary value plus both closest neighbors around the boundary.",
                "Do not use BVA for unordered categories such as color names or payment methods."
              ]
            },
            {
              code: "4.2.3",
              heading: "Decision table testing",
              body:
                "Decision table testing is useful when combinations of conditions determine actions.",
              bullets: [
                "A decision table lists conditions, possible condition combinations, and expected actions.",
                "Each feasible column represents a decision rule and can be a coverage item.",
                "Infeasible combinations should be removed or marked as impossible.",
                "This technique is strong for business rules such as discounts, eligibility, approvals, and fees."
              ]
            },
            {
              code: "4.2.4",
              heading: "State transition testing",
              body:
                "State transition testing models behavior that depends on current state, events, guard conditions, and transitions.",
              bullets: [
                "A state represents a condition of the test object, such as Cart Empty, Cart Has Items, Paid, or Cancelled.",
                "An event can trigger a transition; a guard condition may need to be true for the transition to happen.",
                "Actions can occur during transitions, such as sending an email or updating order status.",
                "Coverage can target all states, valid transitions, all transitions, or selected transition sequences."
              ]
            }
          ]
        },
        "4.3": {
          body:
            "White-box techniques derive tests from internal structure, such as code statements, branches, architecture, or data flow.",
          bullets: [
            "CTFL focuses on statement testing and branch testing.",
            "Coverage measurement shows how much of the selected structure was exercised.",
            "White-box testing complements black-box testing because specifications may be incomplete or outdated."
          ],
          subsections: [
            {
              code: "4.3.1",
              heading: "Statement testing and statement coverage",
              body:
                "Statement testing designs tests to execute executable statements in the code.",
              bullets: [
                "Statement coverage is the number of executed statements divided by total executable statements.",
                "100% statement coverage means every executable statement was run at least once.",
                "It does not guarantee every decision outcome or branch has been tested.",
                "A test suite can have high statement coverage while still missing important logic paths."
              ]
            },
            {
              code: "4.3.2",
              heading: "Branch testing and branch coverage",
              body:
                "Branch testing designs tests to exercise branches from decisions in the code.",
              bullets: [
                "Branch coverage is the number of exercised branches divided by total branches.",
                "It checks outcomes such as true and false paths of decisions.",
                "100% branch coverage implies 100% statement coverage, but 100% statement coverage does not imply 100% branch coverage.",
                "Branch testing is stronger than statement testing for decision logic."
              ]
            },
            {
              code: "4.3.3",
              heading: "Value of white-box testing",
              body:
                "White-box testing reveals gaps that may not be visible from requirements alone.",
              bullets: [
                "It can find missing tests for internal paths, error handling, exception flows, and unreachable code.",
                "It is useful when requirements are incomplete but code or architecture is available.",
                "It supports objective coverage measurement and can guide additional test design.",
                "It should not replace black-box testing because users care about external behavior."
              ]
            }
          ]
        },
        "4.4": {
          body:
            "Experience-based techniques rely on knowledge, skill, defect history, domain understanding, and learning during test execution.",
          bullets: [
            "They are especially useful when documentation is incomplete or time is limited.",
            "They complement systematic techniques rather than replacing them.",
            "They should still produce useful notes, evidence, and findings."
          ],
          subsections: [
            {
              code: "4.4.1",
              heading: "Error guessing",
              body:
                "Error guessing anticipates likely errors, defects, and failures based on experience.",
              bullets: [
                "Sources include past defects, known weak areas, common programming mistakes, production incidents, and tester intuition.",
                "Examples include empty values, duplicated records, expired tokens, timezone changes, rounding, concurrency, and permission gaps.",
                "It is fast and practical, but its effectiveness depends heavily on tester experience."
              ]
            },
            {
              code: "4.4.2",
              heading: "Exploratory testing",
              body:
                "Exploratory testing combines test design, execution, learning, and evaluation at the same time.",
              bullets: [
                "Testers use charters to guide a session while adapting based on observations.",
                "Session-based exploratory testing adds time boxes, notes, and debriefing to make the work manageable.",
                "It is not random clicking; it is structured investigation and learning.",
                "It is strong when requirements are unclear, risk is changing, or new information appears during testing."
              ]
            },
            {
              code: "4.4.3",
              heading: "Checklist-based testing",
              body:
                "Checklist-based testing uses a checklist of conditions, rules, or quality concerns to guide testing.",
              bullets: [
                "Checklists can come from standards, defect history, heuristics, team experience, or domain rules.",
                "They help ensure important areas are not forgotten while leaving room for tester judgment.",
                "Checklists should be reviewed and updated because outdated checklists lose value.",
                "A checklist item is not necessarily a full test case; it may need interpretation in context."
              ]
            }
          ]
        },
        "4.5": {
          body:
            "Collaboration-based approaches improve testability and shared understanding by involving business, development, and testing together.",
          bullets: [
            "They reduce misunderstanding before implementation.",
            "They make acceptance expectations clearer.",
            "They are common in Agile and iterative delivery."
          ],
          subsections: [
            {
              code: "4.5.1",
              heading: "Collaborative user story writing",
              body:
                "User stories are refined collaboratively so they express value and can be tested.",
              bullets: [
                "The 3 Cs are Card, Conversation, and Confirmation.",
                "Card is the short story statement; Conversation is the discussion that clarifies details; Confirmation is the acceptance criteria.",
                "Good user stories follow INVEST: Independent, Negotiable, Valuable, Estimable, Small, and Testable.",
                "Tester involvement helps reveal missing examples, edge cases, and non-functional expectations."
              ]
            },
            {
              code: "4.5.2",
              heading: "Acceptance criteria",
              body:
                "Acceptance criteria define the conditions that must be satisfied for a user story to be accepted.",
              bullets: [
                "Scenario-oriented criteria often use Given/When/Then examples.",
                "Rule-oriented criteria may use bullet lists, tables, formulas, or business rules.",
                "Good criteria are clear, testable, valuable, and understandable by business and technical people.",
                "They are a basis for acceptance tests, but they may not cover all necessary tests."
              ]
            },
            {
              code: "4.5.3",
              heading: "Acceptance test-driven development",
              body:
                "ATDD defines acceptance tests before implementation so the team shares a concrete target.",
              bullets: [
                "Business, development, and testing collaborate to write examples and expected outcomes.",
                "Acceptance tests may become executable tests and living documentation.",
                "ATDD helps prevent misunderstandings and supports testability.",
                "It does not remove the need for lower-level tests, exploratory testing, or non-functional testing."
              ]
            }
          ]
        }
      },
      viSections: {
        "4.1": {
          body:
            "Test technique giúp tester tạo một tập test nhỏ hơn nhưng hiệu quả từ requirement, structure, experience và collaboration.",
          bullets: [
            "Black-box technique dùng behavior bên ngoài và specification.",
            "White-box technique dùng cấu trúc nội bộ hoặc implementation.",
            "Experience-based technique dùng kỹ năng tester, defect knowledge và việc học trong lúc test."
          ],
          subsections: [
            {
              code: "4.1.1",
              heading: "Nhóm test techniques",
              body:
                "Các nhóm technique giúp tester chọn approach phù hợp với thông tin đang có.",
              bullets: [
                "Dùng black-box khi có requirement, rule, data range, state hoặc workflow.",
                "Dùng white-box khi có code, architecture, control flow hoặc cấu trúc nội bộ.",
                "Dùng experience-based khi thời gian ít, specification yếu hoặc kinh nghiệm tester có thể tìm lỗi dễ xảy ra.",
                "Các technique bổ sung cho nhau; test design tốt thường kết hợp nhiều nhóm."
              ]
            }
          ]
        },
        "4.2": {
          body:
            "Black-box technique tạo test từ behavior được specification mô tả mà không xét implementation bên trong.",
          bullets: [
            "Hữu ích cho requirement, API contract, business rule, workflow và input/output behavior.",
            "Hỗ trợ coverage có hệ thống thay vì chọn test hoàn toàn theo cảm tính.",
            "Các technique trong CTFL gồm equivalence partitioning, boundary value analysis, decision table testing và state transition testing."
          ],
          subsections: [
            {
              code: "4.2.1",
              heading: "Equivalence partitioning",
              body:
                "Equivalence partitioning chia dữ liệu thành các partition được kỳ vọng xử lý giống nhau.",
              bullets: [
                "Partition phải không rỗng và không overlap.",
                "Valid partition chứa giá trị hệ thống nên accept; invalid partition chứa giá trị hệ thống nên reject hoặc xử lý lỗi.",
                "Nên test ít nhất một representative value từ mỗi partition.",
                "Coverage = số partition đã cover / số partition đã xác định."
              ]
            },
            {
              code: "4.2.2",
              heading: "Boundary value analysis",
              body:
                "Boundary value analysis tập trung vào giá trị tại và gần ranh giới của ordered partition vì defect hay xảy ra quanh boundary.",
              bullets: [
                "BVA chỉ áp dụng khi partition có thứ tự như range số, ngày, số lượng hoặc độ dài.",
                "2-value BVA dùng boundary value và giá trị gần nhất ở partition liền kề.",
                "3-value BVA dùng boundary value cộng hai giá trị gần nhất hai bên boundary.",
                "Không dùng BVA cho category không có thứ tự như màu sắc hoặc phương thức thanh toán."
              ]
            },
            {
              code: "4.2.3",
              heading: "Decision table testing",
              body:
                "Decision table testing hữu ích khi tổ hợp condition quyết định action.",
              bullets: [
                "Decision table liệt kê condition, tổ hợp condition và action mong đợi.",
                "Mỗi column khả thi là một decision rule và có thể là coverage item.",
                "Tổ hợp không khả thi nên loại bỏ hoặc đánh dấu impossible.",
                "Technique này mạnh cho business rule như discount, eligibility, approval và fee."
              ]
            },
            {
              code: "4.2.4",
              heading: "State transition testing",
              body:
                "State transition testing mô hình hóa behavior phụ thuộc current state, event, guard condition và transition.",
              bullets: [
                "State là tình trạng của test object, ví dụ Cart Empty, Cart Has Items, Paid hoặc Cancelled.",
                "Event có thể kích hoạt transition; guard condition cần đúng để transition xảy ra.",
                "Action có thể xảy ra trong transition, như gửi email hoặc update order status.",
                "Coverage có thể nhắm all states, valid transitions, all transitions hoặc transition sequence được chọn."
              ]
            }
          ]
        },
        "4.3": {
          body:
            "White-box technique tạo test từ cấu trúc nội bộ như statement, branch, architecture hoặc data flow.",
          bullets: [
            "CTFL tập trung vào statement testing và branch testing.",
            "Coverage measurement cho biết phần cấu trúc được chọn đã được exercise bao nhiêu.",
            "White-box bổ sung cho black-box vì specification có thể thiếu hoặc lỗi thời."
          ],
          subsections: [
            {
              code: "4.3.1",
              heading: "Statement testing và statement coverage",
              body:
                "Statement testing thiết kế test để execute các executable statement trong code.",
              bullets: [
                "Statement coverage = số statement đã execute / tổng executable statement.",
                "100% statement coverage nghĩa là mọi executable statement đã chạy ít nhất một lần.",
                "Nó không đảm bảo mọi outcome của decision hoặc branch đã được test.",
                "Một test suite có thể statement coverage cao nhưng vẫn bỏ sót logic path quan trọng."
              ]
            },
            {
              code: "4.3.2",
              heading: "Branch testing và branch coverage",
              body:
                "Branch testing thiết kế test để exercise các branch từ decision trong code.",
              bullets: [
                "Branch coverage = số branch đã exercise / tổng branch.",
                "Nó kiểm tra outcome như true và false path của decision.",
                "100% branch coverage kéo theo 100% statement coverage, nhưng 100% statement coverage không kéo theo 100% branch coverage.",
                "Branch testing mạnh hơn statement testing với decision logic."
              ]
            },
            {
              code: "4.3.3",
              heading: "Giá trị của white-box testing",
              body:
                "White-box testing làm lộ gap mà requirement bên ngoài có thể không cho thấy.",
              bullets: [
                "Nó có thể tìm test thiếu cho internal path, error handling, exception flow và unreachable code.",
                "Hữu ích khi requirement chưa đủ nhưng có code hoặc architecture.",
                "Hỗ trợ coverage measurement khách quan và gợi ý cần thiết kế thêm test.",
                "Không nên thay thế black-box vì user quan tâm behavior bên ngoài."
              ]
            }
          ]
        },
        "4.4": {
          body:
            "Experience-based technique dựa vào kiến thức, kỹ năng, defect history, domain understanding và việc học trong khi execute test.",
          bullets: [
            "Đặc biệt hữu ích khi documentation chưa đủ hoặc thời gian hạn chế.",
            "Bổ sung cho technique có hệ thống, không thay thế hoàn toàn.",
            "Vẫn nên tạo note, evidence và finding hữu ích."
          ],
          subsections: [
            {
              code: "4.4.1",
              heading: "Error guessing",
              body:
                "Error guessing dự đoán error, defect và failure có khả năng xảy ra dựa trên kinh nghiệm.",
              bullets: [
                "Nguồn có thể là defect cũ, vùng yếu, lỗi lập trình phổ biến, incident production và trực giác tester.",
                "Ví dụ: empty value, duplicate record, expired token, timezone, rounding, concurrency và permission gap.",
                "Nhanh và thực tế, nhưng hiệu quả phụ thuộc nhiều vào kinh nghiệm tester."
              ]
            },
            {
              code: "4.4.2",
              heading: "Exploratory testing",
              body:
                "Exploratory testing kết hợp test design, execution, learning và evaluation cùng lúc.",
              bullets: [
                "Tester dùng charter để định hướng session và điều chỉnh theo quan sát mới.",
                "Session-based exploratory testing thêm time box, note và debriefing để quản lý công việc.",
                "Đây không phải click ngẫu nhiên; đây là investigation và learning có cấu trúc.",
                "Mạnh khi requirement chưa rõ, risk thay đổi hoặc có thông tin mới trong lúc test."
              ]
            },
            {
              code: "4.4.3",
              heading: "Checklist-based testing",
              body:
                "Checklist-based testing dùng checklist condition, rule hoặc quality concern để dẫn dắt testing.",
              bullets: [
                "Checklist có thể đến từ standard, defect history, heuristic, kinh nghiệm team hoặc domain rule.",
                "Giúp không quên vùng quan trọng nhưng vẫn để tester phán đoán theo context.",
                "Checklist nên được review và update vì checklist cũ sẽ mất giá trị.",
                "Một checklist item không nhất thiết là test case đầy đủ; nó có thể cần diễn giải theo context."
              ]
            }
          ]
        },
        "4.5": {
          body:
            "Collaboration-based approach cải thiện testability và shared understanding bằng cách để business, development và testing cùng tham gia.",
          bullets: [
            "Giảm misunderstanding trước implementation.",
            "Làm rõ expectation để acceptance.",
            "Phổ biến trong Agile và iterative delivery."
          ],
          subsections: [
            {
              code: "4.5.1",
              heading: "Collaborative user story writing",
              body:
                "User story được refine cùng nhau để thể hiện value và có thể test được.",
              bullets: [
                "3 Cs là Card, Conversation và Confirmation.",
                "Card là statement ngắn; Conversation là trao đổi để làm rõ; Confirmation là acceptance criteria.",
                "User story tốt theo INVEST: Independent, Negotiable, Valuable, Estimable, Small và Testable.",
                "Tester tham gia giúp phát hiện example thiếu, edge case và non-functional expectation."
              ]
            },
            {
              code: "4.5.2",
              heading: "Acceptance criteria",
              body:
                "Acceptance criteria định nghĩa điều kiện cần thỏa mãn để user story được accept.",
              bullets: [
                "Scenario-oriented criteria thường dùng Given/When/Then.",
                "Rule-oriented criteria có thể dùng bullet list, table, formula hoặc business rule.",
                "Criteria tốt cần rõ, testable, có value và business/technical đều hiểu.",
                "Đây là basis cho acceptance test, nhưng không nhất thiết cover mọi test cần thiết."
              ]
            },
            {
              code: "4.5.3",
              heading: "Acceptance test-driven development",
              body:
                "ATDD định nghĩa acceptance test trước implementation để team có mục tiêu cụ thể chung.",
              bullets: [
                "Business, development và testing cùng viết example và expected outcome.",
                "Acceptance test có thể trở thành executable test và living documentation.",
                "ATDD giúp tránh misunderstanding và hỗ trợ testability.",
                "Không thay thế lower-level test, exploratory testing hoặc non-functional testing."
              ]
            }
          ]
        }
      }
    },
    5: {
      sections: {
        "5.1": {
          body:
            "Test planning defines how testing will meet objectives within constraints. It covers scope, approach, resources, schedule, risks, communication, and completion criteria.",
          bullets: [
            "Planning is not only a document; it is a thinking and alignment activity.",
            "Planning happens at release, iteration, and sometimes daily levels.",
            "Planning must adapt when risk, scope, schedule, or quality information changes."
          ],
          subsections: [
            {
              code: "5.1.1",
              heading: "Purpose and content of a test plan",
              body:
                "A test plan communicates what will be tested, how, by whom, when, and under which constraints.",
              bullets: [
                "Typical content includes test objectives, scope, test items, features to test, features not to test, risks, approach, levels, types, techniques, entry and exit criteria.",
                "It can also include resources, roles, environment, tools, test data, schedule, communication, defect management, configuration management, and reporting.",
                "The plan helps stakeholders understand trade-offs and make informed decisions."
              ]
            },
            {
              code: "5.1.2",
              heading: "Tester contribution to iteration and release planning",
              body:
                "Testers add value to planning by bringing risk, testability, data, environment, and quality perspectives.",
              bullets: [
                "In release planning, testers help analyze product risks, estimate test effort, plan test levels, and define acceptance or release criteria.",
                "In iteration planning, testers clarify acceptance criteria, split testing tasks, identify test data, and highlight dependencies.",
                "Tester input can prevent stories from entering development before they are understandable and testable."
              ]
            },
            {
              code: "5.1.3",
              heading: "Entry criteria and exit criteria",
              body:
                "Entry and exit criteria help the team control when a test activity should start or finish.",
              bullets: [
                "Entry criteria are preconditions for starting, such as stable build, available environment, approved test basis, or prepared test data.",
                "Exit criteria define completion, such as required coverage achieved, critical defects closed, residual risks accepted, or reports delivered.",
                "Criteria should be realistic and measurable enough to support decisions.",
                "If criteria are not met, the team may delay, change scope, add controls, or explicitly accept risk."
              ]
            },
            {
              code: "5.1.4",
              heading: "Estimation techniques",
              body:
                "Test effort estimation predicts the work needed for testing using data, expert judgment, and assumptions.",
              bullets: [
                "Ratio-based estimation uses known ratios, such as testing effort as a percentage of development effort.",
                "Extrapolation uses historical data from similar past work.",
                "Wideband Delphi and Planning Poker use expert consensus.",
                "Three-point estimation uses optimistic, most likely, and pessimistic estimates, often with a weighted average.",
                "Estimates should be revised when scope, risk, defects, or constraints change."
              ]
            },
            {
              code: "5.1.5",
              heading: "Test case prioritization",
              body:
                "Prioritization orders tests so the most valuable information is obtained earlier.",
              bullets: [
                "Risk-based prioritization runs tests for high-risk items first.",
                "Coverage-based prioritization tries to cover important requirements, features, or code areas early.",
                "Additional-coverage prioritization selects the next test that adds the most new coverage.",
                "Requirements-based prioritization follows stakeholder priority, business value, legal need, or contractual importance.",
                "Dependencies, data, environment availability, and automation stability may affect the final order."
              ]
            },
            {
              code: "5.1.6",
              heading: "Test pyramid",
              body:
                "The test pyramid is a model for discussing automation effort across different granularities.",
              bullets: [
                "The bottom usually contains many fast, low-level tests such as unit or component tests.",
                "The middle contains service, API, integration, or component integration tests.",
                "The top contains fewer end-to-end UI tests because they are usually slower, more expensive, and more fragile.",
                "It is a guide, not a universal rule; product architecture and risk matter."
              ]
            },
            {
              code: "5.1.7",
              heading: "Testing quadrants",
              body:
                "Testing quadrants help teams discuss different testing purposes in Agile contexts.",
              bullets: [
                "They separate business-facing from technology-facing tests and tests that support the team from tests that critique the product.",
                "Examples include unit tests, component tests, acceptance tests, exploratory tests, usability tests, performance tests, and security tests.",
                "Quadrants help reveal missing test perspectives, not prescribe a strict sequence."
              ]
            }
          ]
        },
        "5.2": {
          body:
            "Risk management in testing identifies, assesses, mitigates, and monitors uncertainty that can affect product quality or project success.",
          bullets: [
            "Risk level depends on likelihood and impact.",
            "Product risks affect product quality; project risks affect the delivery effort.",
            "Risk-based testing uses risk information to choose scope, priority, depth, and technique."
          ],
          subsections: [
            {
              code: "5.2.1",
              heading: "Risk level, likelihood, and impact",
              body:
                "Risk is a possible event with negative consequences. Risk level combines how likely it is and how severe its impact would be.",
              bullets: [
                "A highly likely issue with low impact may be less urgent than a rare issue with catastrophic impact.",
                "Risk can be assessed qualitatively, quantitatively, or with a simple matrix.",
                "Risk assessment should be revisited when new information appears."
              ]
            },
            {
              code: "5.2.2",
              heading: "Project risks and product risks",
              body:
                "Project risks threaten project objectives; product risks threaten product quality.",
              bullets: [
                "Project risk examples include lack of people, unstable environment, supplier delay, tool problems, schedule pressure, and unclear responsibilities.",
                "Product risk examples include wrong calculation, data loss, security vulnerability, poor performance, unusable workflow, or unsafe behavior.",
                "Exam shortcut: if it can make the product bad, it is product risk; if it can make the project fail, it is project risk."
              ]
            },
            {
              code: "5.2.3",
              heading: "Product risk analysis",
              body:
                "Product risk analysis identifies and assesses product risks so testing can focus where failure would matter most.",
              bullets: [
                "Risk identification collects possible quality risks from requirements, architecture, defect history, user impact, domain knowledge, and stakeholder input.",
                "Risk assessment estimates likelihood, impact, detectability, exposure, or priority depending on the method.",
                "Risk analysis influences test levels, test types, techniques, coverage, test data, environments, and effort allocation."
              ]
            },
            {
              code: "5.2.4",
              heading: "Product risk control",
              body:
                "Risk control decides and monitors actions in response to analyzed product risks.",
              bullets: [
                "Testing can mitigate risk by finding defects and providing evidence.",
                "Other responses include avoiding risk, transferring risk, accepting risk, adding reviews, improving requirements, using prototypes, or adding monitoring.",
                "Residual risk should be communicated so stakeholders understand what remains after testing."
              ]
            }
          ]
        },
        "5.3": {
          body:
            "Test monitoring gathers information; test control uses it to guide action; test completion consolidates results and lessons learned.",
          bullets: [
            "Monitoring answers: where are we now?",
            "Control answers: what should we change?",
            "Completion answers: what did we learn and what remains?"
          ],
          subsections: [
            {
              code: "5.3.1",
              heading: "Metrics used in testing",
              body:
                "Metrics help stakeholders understand progress, quality, risk, and remaining work.",
              bullets: [
                "Progress metrics include planned vs executed tests, passed/failed/blocked tests, and completion of testing tasks.",
                "Quality metrics include defect density, failure trends, severity distribution, escaped defects, and product risk status.",
                "Coverage metrics include requirement coverage, risk coverage, code coverage, or model coverage.",
                "Cost and effort metrics include actual vs estimated effort and environment or automation maintenance effort."
              ]
            },
            {
              code: "5.3.2",
              heading: "Purpose, content, and audience of test reports",
              body:
                "Test reports communicate testing information to the right audience at the right level of detail.",
              bullets: [
                "Progress reports support ongoing control and may include period, progress, deviations, blockers, metrics, risks, and next steps.",
                "Completion reports summarize what was tested, what was not tested, quality evaluation, unresolved defects, residual risks, deviations, and lessons learned.",
                "Audience matters: executives need decision-focused summaries, while delivery teams need actionable detail."
              ]
            },
            {
              code: "5.3.3",
              heading: "Communicating test status",
              body:
                "Test status should be communicated clearly, honestly, and in a way stakeholders can act on.",
              bullets: [
                "Communication channels include dashboards, verbal updates, emails, chat, documentation, and formal reports.",
                "Good status communication highlights risk, confidence, blockers, trend, and decision needs instead of only listing test counts.",
                "Visual indicators can help, but they must not hide important context such as blocked tests or high-severity defects."
              ]
            }
          ]
        },
        "5.4": {
          body:
            "Configuration management keeps test items and testware identified, versioned, controlled, and traceable.",
          bullets: [
            "It supports reproducibility because the team can identify exactly what was tested.",
            "It supports traceability because related artifacts can be connected.",
            "It reduces confusion caused by changing builds, data, tests, tools, and environments."
          ],
          subsections: [
            {
              code: "5.4.1",
              heading: "Configuration management in testing",
              body:
                "Configuration management allows testers to relate results to the correct versions of software, testware, and environments.",
              bullets: [
                "Configuration items can include test basis, builds, test cases, automated scripts, test data, environment configuration, defects, logs, and reports.",
                "A baseline is an approved version that can be changed only through controlled change management.",
                "CM helps answer questions such as which build was tested, which data was used, which test version failed, and whether a result can be reproduced."
              ]
            }
          ]
        },
        "5.5": {
          body:
            "Defect management handles anomalies from discovery to closure and provides information for resolution, tracking, and process improvement.",
          bullets: [
            "Not every anomaly is a defect; it may be a false positive, duplicate, environment issue, or change request.",
            "Clear defect reports save time and reduce misunderstanding.",
            "Severity and priority are different and should not be confused."
          ],
          subsections: [
            {
              code: "5.5.1",
              heading: "Defect reports",
              body:
                "A defect report should contain enough information to reproduce, analyze, prioritize, fix, retest, and track the issue.",
              bullets: [
                "Useful fields include id, title, reporter, date, test object, version/build, environment, preconditions, steps, input data, expected result, actual result, logs, screenshots, severity, priority, status, and references.",
                "Expected and actual results should be specific, not vague statements like 'not working'.",
                "Severity describes impact; priority describes urgency or fixing order.",
                "A good report is objective, concise, reproducible, and linked to relevant requirements, tests, and evidence."
              ]
            }
          ]
        }
      },
      viSections: {
        "5.1": {
          body:
            "Test planning xác định testing sẽ đạt objective như thế nào trong các constraint. Nó bao gồm scope, approach, resource, schedule, risk, communication và completion criteria.",
          bullets: [
            "Planning không chỉ là tài liệu; nó là hoạt động suy nghĩ và thống nhất.",
            "Planning diễn ra ở mức release, iteration và đôi khi là daily.",
            "Planning phải thích nghi khi risk, scope, schedule hoặc thông tin quality thay đổi."
          ],
          subsections: [
            {
              code: "5.1.1",
              heading: "Mục đích và nội dung test plan",
              body:
                "Test plan truyền đạt test cái gì, test như thế nào, ai làm, khi nào và trong constraint nào.",
              bullets: [
                "Nội dung thường gồm test objective, scope, test item, feature test, feature không test, risk, approach, level, type, technique, entry và exit criteria.",
                "Cũng có thể gồm resource, role, environment, tool, test data, schedule, communication, defect management, configuration management và reporting.",
                "Plan giúp stakeholder hiểu trade-off và đưa quyết định có thông tin."
              ]
            },
            {
              code: "5.1.2",
              heading: "Tester đóng góp vào iteration và release planning",
              body:
                "Tester tạo giá trị trong planning bằng góc nhìn risk, testability, data, environment và quality.",
              bullets: [
                "Trong release planning, tester giúp phân tích product risk, estimate test effort, lập kế hoạch test level và định nghĩa acceptance/release criteria.",
                "Trong iteration planning, tester làm rõ acceptance criteria, tách testing task, xác định test data và nêu dependency.",
                "Input của tester giúp tránh việc story đi vào development khi chưa rõ hoặc chưa testable."
              ]
            },
            {
              code: "5.1.3",
              heading: "Entry criteria và exit criteria",
              body:
                "Entry và exit criteria giúp team kiểm soát khi nào test activity nên bắt đầu hoặc kết thúc.",
              bullets: [
                "Entry criteria là điều kiện để bắt đầu, như build ổn định, environment sẵn sàng, test basis được duyệt hoặc test data đã chuẩn bị.",
                "Exit criteria định nghĩa hoàn thành, như đạt coverage yêu cầu, critical defect đã đóng, residual risk được chấp nhận hoặc report đã giao.",
                "Criteria nên thực tế và đủ đo được để hỗ trợ decision.",
                "Nếu criteria không đạt, team có thể delay, đổi scope, thêm control hoặc chấp nhận risk rõ ràng."
              ]
            },
            {
              code: "5.1.4",
              heading: "Estimation techniques",
              body:
                "Test effort estimation dự đoán effort cần cho testing bằng data, expert judgment và assumption.",
              bullets: [
                "Ratio-based estimation dùng tỷ lệ đã biết, ví dụ effort testing là phần trăm của effort development.",
                "Extrapolation dùng historical data từ công việc tương tự.",
                "Wideband Delphi và Planning Poker dùng consensus của expert.",
                "Three-point estimation dùng optimistic, most likely và pessimistic estimate, thường với weighted average.",
                "Estimate nên được cập nhật khi scope, risk, defect hoặc constraint thay đổi."
              ]
            },
            {
              code: "5.1.5",
              heading: "Test case prioritization",
              body:
                "Prioritization sắp xếp test để lấy thông tin giá trị nhất sớm hơn.",
              bullets: [
                "Risk-based prioritization chạy test cho item risk cao trước.",
                "Coverage-based prioritization cố cover requirement, feature hoặc code area quan trọng sớm.",
                "Additional-coverage prioritization chọn test tiếp theo thêm được nhiều coverage mới nhất.",
                "Requirements-based prioritization theo stakeholder priority, business value, legal need hoặc contractual importance.",
                "Dependency, data, environment availability và automation stability có thể ảnh hưởng thứ tự cuối."
              ]
            },
            {
              code: "5.1.6",
              heading: "Test pyramid",
              body:
                "Test pyramid là model để thảo luận automation effort ở các mức độ chi tiết khác nhau.",
              bullets: [
                "Đáy thường có nhiều test nhanh, low-level như unit hoặc component test.",
                "Tầng giữa có service, API, integration hoặc component integration test.",
                "Đỉnh có ít end-to-end UI test hơn vì chúng thường chậm, tốn kém và fragile.",
                "Đây là guideline, không phải rule tuyệt đối; architecture và risk của product rất quan trọng."
              ]
            },
            {
              code: "5.1.7",
              heading: "Testing quadrants",
              body:
                "Testing quadrants giúp team thảo luận các mục đích testing khác nhau trong Agile.",
              bullets: [
                "Phân biệt business-facing với technology-facing, và test hỗ trợ team với test critique product.",
                "Ví dụ gồm unit test, component test, acceptance test, exploratory test, usability test, performance test và security test.",
                "Quadrants giúp lộ perspective còn thiếu, không quy định thứ tự cứng."
              ]
            }
          ]
        },
        "5.2": {
          body:
            "Risk management trong testing xác định, đánh giá, giảm thiểu và theo dõi uncertainty có thể ảnh hưởng product quality hoặc project success.",
          bullets: [
            "Risk level phụ thuộc likelihood và impact.",
            "Product risk ảnh hưởng chất lượng sản phẩm; project risk ảnh hưởng delivery effort.",
            "Risk-based testing dùng thông tin risk để chọn scope, priority, depth và technique."
          ],
          subsections: [
            {
              code: "5.2.1",
              heading: "Risk level, likelihood và impact",
              body:
                "Risk là sự kiện có thể xảy ra với hậu quả tiêu cực. Risk level kết hợp khả năng xảy ra và mức impact.",
              bullets: [
                "Một vấn đề rất dễ xảy ra nhưng impact thấp có thể ít khẩn cấp hơn vấn đề hiếm nhưng impact nghiêm trọng.",
                "Risk có thể đánh giá qualitative, quantitative hoặc bằng matrix đơn giản.",
                "Risk assessment nên được xem lại khi có thông tin mới."
              ]
            },
            {
              code: "5.2.2",
              heading: "Project risks và product risks",
              body:
                "Project risk đe dọa objective của dự án; product risk đe dọa quality của sản phẩm.",
              bullets: [
                "Project risk ví dụ: thiếu người, environment không ổn định, supplier delay, tool problem, schedule pressure và trách nhiệm không rõ.",
                "Product risk ví dụ: tính toán sai, mất data, lỗ hổng security, performance kém, workflow khó dùng hoặc hành vi không an toàn.",
                "Mẹo thi: nếu làm sản phẩm tệ đi là product risk; nếu làm dự án fail là project risk."
              ]
            },
            {
              code: "5.2.3",
              heading: "Product risk analysis",
              body:
                "Product risk analysis xác định và đánh giá product risk để testing tập trung nơi failure có hậu quả lớn.",
              bullets: [
                "Risk identification thu thập quality risk từ requirement, architecture, defect history, user impact, domain knowledge và stakeholder input.",
                "Risk assessment ước lượng likelihood, impact, detectability, exposure hoặc priority tùy method.",
                "Risk analysis ảnh hưởng test level, test type, technique, coverage, test data, environment và effort allocation."
              ]
            },
            {
              code: "5.2.4",
              heading: "Product risk control",
              body:
                "Risk control quyết định và theo dõi action để phản hồi product risk đã phân tích.",
              bullets: [
                "Testing có thể mitigate risk bằng cách tìm defect và cung cấp evidence.",
                "Response khác gồm avoid risk, transfer risk, accept risk, thêm review, cải thiện requirement, dùng prototype hoặc thêm monitoring.",
                "Residual risk cần được truyền đạt để stakeholder hiểu còn gì sau testing."
              ]
            }
          ]
        },
        "5.3": {
          body:
            "Test monitoring thu thập thông tin; test control dùng thông tin đó để điều chỉnh; test completion tổng hợp result và lessons learned.",
          bullets: [
            "Monitoring trả lời: hiện tại chúng ta đang ở đâu?",
            "Control trả lời: cần thay đổi gì?",
            "Completion trả lời: đã học được gì và còn gì tồn đọng?"
          ],
          subsections: [
            {
              code: "5.3.1",
              heading: "Metrics dùng trong testing",
              body:
                "Metric giúp stakeholder hiểu progress, quality, risk và work còn lại.",
              bullets: [
                "Progress metric gồm planned vs executed tests, passed/failed/blocked tests và completion của testing task.",
                "Quality metric gồm defect density, failure trend, severity distribution, escaped defect và product risk status.",
                "Coverage metric gồm requirement coverage, risk coverage, code coverage hoặc model coverage.",
                "Cost/effort metric gồm actual vs estimated effort và effort bảo trì environment hoặc automation."
              ]
            },
            {
              code: "5.3.2",
              heading: "Mục đích, nội dung và audience của test report",
              body:
                "Test report truyền đạt thông tin testing cho đúng audience với mức chi tiết phù hợp.",
              bullets: [
                "Progress report hỗ trợ control liên tục và có thể gồm period, progress, deviation, blocker, metric, risk và next step.",
                "Completion report tóm tắt đã test gì, chưa test gì, đánh giá quality, unresolved defect, residual risk, deviation và lessons learned.",
                "Audience quan trọng: executive cần summary để quyết định, delivery team cần detail có thể action."
              ]
            },
            {
              code: "5.3.3",
              heading: "Giao tiếp test status",
              body:
                "Test status cần được truyền đạt rõ ràng, trung thực và giúp stakeholder hành động.",
              bullets: [
                "Kênh giao tiếp gồm dashboard, verbal update, email, chat, documentation và formal report.",
                "Status tốt nhấn mạnh risk, confidence, blocker, trend và decision need thay vì chỉ liệt kê số test.",
                "Visual indicator hữu ích nhưng không được che context quan trọng như blocked tests hoặc high-severity defects."
              ]
            }
          ]
        },
        "5.4": {
          body:
            "Configuration management giữ test item và testware được định danh, versioned, controlled và traceable.",
          bullets: [
            "Hỗ trợ reproducibility vì team biết chính xác cái gì đã được test.",
            "Hỗ trợ traceability vì artifact liên quan có thể được nối với nhau.",
            "Giảm nhầm lẫn do build, data, test, tool và environment thay đổi."
          ],
          subsections: [
            {
              code: "5.4.1",
              heading: "Configuration management trong testing",
              body:
                "Configuration management cho phép tester liên kết result với đúng version của software, testware và environment.",
              bullets: [
                "Configuration item có thể gồm test basis, build, test case, automated script, test data, environment config, defect, log và report.",
                "Baseline là version đã được duyệt và chỉ thay đổi qua change management có kiểm soát.",
                "CM giúp trả lời build nào đã test, data nào đã dùng, version test nào fail và result có reproduce được không."
              ]
            }
          ]
        },
        "5.5": {
          body:
            "Defect management xử lý anomaly từ lúc phát hiện tới closure và cung cấp thông tin cho resolution, tracking và process improvement.",
          bullets: [
            "Không phải anomaly nào cũng là defect; có thể là false positive, duplicate, environment issue hoặc change request.",
            "Defect report rõ ràng giúp tiết kiệm thời gian và giảm hiểu nhầm.",
            "Severity và priority khác nhau, không nên nhầm."
          ],
          subsections: [
            {
              code: "5.5.1",
              heading: "Defect reports",
              body:
                "Defect report cần đủ thông tin để reproduce, analyze, prioritize, fix, retest và track issue.",
              bullets: [
                "Field hữu ích gồm id, title, reporter, date, test object, version/build, environment, precondition, step, input data, expected result, actual result, log, screenshot, severity, priority, status và reference.",
                "Expected và actual result cần cụ thể, không viết mơ hồ kiểu 'not working'.",
                "Severity mô tả impact; priority mô tả độ khẩn cấp hoặc thứ tự fix.",
                "Report tốt khách quan, ngắn gọn, reproduce được và link với requirement, test, evidence liên quan."
              ]
            }
          ]
        }
      }
    },
    6: {
      sections: {
        "6.1": {
          body:
            "Test tools support testing activities, but a tool is valuable only when it solves a real testing problem in the project context.",
          bullets: [
            "Tools can support management, static testing, design, implementation, execution, coverage, reporting, collaboration, and non-functional testing.",
            "A spreadsheet can be a test tool if it supports testing work.",
            "Tool selection should consider skills, maintenance, integration, data, environment, and long-term ownership."
          ],
          subsections: [
            {
              code: "6.1.1",
              heading: "How tools support testing",
              body:
                "Different tool categories support different parts of the test process.",
              bullets: [
                "Test management tools help manage requirements, tests, defects, configuration, reporting, and traceability.",
                "Static testing tools support reviews, static analysis, coding standard checks, security checks, or model checks.",
                "Test design and implementation tools can generate test cases, test data, procedures, or scripts.",
                "Test execution and coverage tools run tests, compare results, log outcomes, and measure coverage.",
                "Non-functional testing tools support performance, security, usability, accessibility, reliability, compatibility, or portability checks.",
                "DevOps and collaboration tools support CI/CD, environment provisioning, monitoring, communication, and deployment standardization."
              ]
            }
          ]
        },
        "6.2": {
          body:
            "Test automation can provide major benefits, but it also introduces cost, maintenance, technical, and organizational risks.",
          bullets: [
            "Automation is not only UI scripting; it can automate many testing activities.",
            "Automation success depends on realistic expectations, suitable tools, maintainable design, training, and stable environments.",
            "Human judgment remains necessary for analysis, exploratory testing, risk decisions, and interpreting results."
          ],
          subsections: [
            {
              code: "6.2.1",
              heading: "Benefits and risks of test automation",
              body:
                "Automation should be introduced with a clear business and testing purpose.",
              bullets: [
                "Benefits include repeatability, consistency, faster feedback, reduced repetitive manual work, broader regression checks, objective measures, and easier reporting.",
                "Automation can free testers to spend more time on analysis, exploration, risk, and complex scenarios.",
                "Risks include unrealistic expectations, underestimated implementation and maintenance effort, unsuitable tools, flaky tests, skill gaps, and over-reliance on automation.",
                "Other risks include vendor lock-in, unsupported open-source tools, integration issues, platform incompatibility, and regulatory mismatch.",
                "Automation may cost more at first; return on investment usually appears when tests are valuable, stable, maintainable, and run often."
              ]
            }
          ]
        }
      },
      viSections: {
        "6.1": {
          body:
            "Test tool hỗ trợ hoạt động testing, nhưng tool chỉ có giá trị khi giải quyết vấn đề testing thật trong context dự án.",
          bullets: [
            "Tool có thể hỗ trợ management, static testing, design, implementation, execution, coverage, reporting, collaboration và non-functional testing.",
            "Spreadsheet cũng có thể là test tool nếu nó hỗ trợ công việc testing.",
            "Chọn tool cần xét skill, maintenance, integration, data, environment và ownership dài hạn."
          ],
          subsections: [
            {
              code: "6.1.1",
              heading: "Tool hỗ trợ testing như thế nào",
              body:
                "Các nhóm tool khác nhau hỗ trợ các phần khác nhau của test process.",
              bullets: [
                "Test management tool giúp quản lý requirement, test, defect, configuration, reporting và traceability.",
                "Static testing tool hỗ trợ review, static analysis, coding standard check, security check hoặc model check.",
                "Test design và implementation tool có thể generate test case, test data, procedure hoặc script.",
                "Test execution và coverage tool chạy test, so sánh result, ghi log outcome và đo coverage.",
                "Non-functional testing tool hỗ trợ performance, security, usability, accessibility, reliability, compatibility hoặc portability check.",
                "DevOps và collaboration tool hỗ trợ CI/CD, environment provisioning, monitoring, communication và deployment standardization."
              ]
            }
          ]
        },
        "6.2": {
          body:
            "Test automation có thể mang lại lợi ích lớn, nhưng cũng tạo cost, maintenance, technical risk và organizational risk.",
          bullets: [
            "Automation không chỉ là UI scripting; nó có thể tự động hóa nhiều hoạt động testing.",
            "Thành công của automation phụ thuộc expectation thực tế, tool phù hợp, design dễ bảo trì, training và environment ổn định.",
            "Human judgment vẫn cần cho analysis, exploratory testing, risk decision và diễn giải result."
          ],
          subsections: [
            {
              code: "6.2.1",
              heading: "Lợi ích và rủi ro của test automation",
              body:
                "Automation nên được đưa vào với mục đích business và testing rõ ràng.",
              bullets: [
                "Lợi ích gồm repeatability, consistency, feedback nhanh, giảm việc manual lặp lại, regression rộng hơn, đo lường khách quan và reporting dễ hơn.",
                "Automation giúp tester dành nhiều thời gian hơn cho analysis, exploration, risk và scenario phức tạp.",
                "Rủi ro gồm expectation không thực tế, đánh giá thấp effort implementation/maintenance, tool không phù hợp, flaky test, thiếu skill và phụ thuộc quá mức vào automation.",
                "Rủi ro khác gồm vendor lock-in, open-source tool không còn support, integration issue, platform incompatibility và regulatory mismatch.",
                "Automation ban đầu có thể tốn hơn; ROI thường xuất hiện khi test có giá trị, ổn định, dễ bảo trì và chạy thường xuyên."
              ]
            }
          ]
        }
      }
    }
  };

  function mergeSections(baseSections, sectionPatches) {
    if (!Array.isArray(baseSections) || !sectionPatches) return baseSections || [];
    return baseSections.map((section) => {
      const patch = sectionPatches[section.code];
      return patch ? { ...section, ...patch } : section;
    });
  }

  if (!Array.isArray(window.ISTQB_CHAPTERS)) return;

  window.ISTQB_CHAPTERS = window.ISTQB_CHAPTERS.map((chapter) => {
    const patch = detailedTheory[chapter.id];
    if (!patch) return chapter;

    return {
      ...chapter,
      sections: mergeSections(chapter.sections, patch.sections),
      viSections: mergeSections(chapter.viSections, patch.viSections)
    };
  });
})();
