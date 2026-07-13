(function () {
  const apiContext = {
    feature: ["product search", "checkout", "login", "booking", "profile update"],
    endpoint: ["/products", "/auth/login", "/bookings/{id}", "/orders?status=paid", "/users/me"],
    status: ["200", "201", "400", "401", "403", "404", "409", "500"],
    header: ["Authorization", "Content-Type", "Accept", "X-Correlation-Id", "Idempotency-Key"]
  };

  const sqlContext = {
    table: ["customers", "orders", "order_items", "products", "payments"],
    report: ["monthly revenue", "paid orders", "top products", "customer spending", "missing references"],
    status: ["PAID", "PENDING", "CANCELLED", "REFUNDED"]
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

  function makeQuestion(course, setIndex, localIndex, module, difficulty, question, correct, distractors, explanation) {
    const rotated = rotateOptions(correct, distractors, setIndex + localIndex + module);
    return {
      id: `${course}-${setIndex + 1}-q${localIndex + 1}`,
      module,
      difficulty,
      question,
      options: rotated.options,
      answer: rotated.answer,
      explanation
    };
  }

  function buildQuizzes(course, title, templates) {
    return Array.from({ length: 5 }, (_, setIndex) => ({
      id: `${course}-quiz-${setIndex + 1}`,
      title: `${title} Quiz ${setIndex + 1}`,
      description: "20 tester-focused questions from basic to advanced. Questions and options are in English; explanations are in Vietnamese.",
      passMark: 13,
      duration: 30,
      questions: templates.map((template, localIndex) => template(setIndex, localIndex))
    }));
  }

  const apiModules = [
    {
      id: 1,
      title: "API Fundamentals",
      official: "HTTP and API Basics",
      summary: "Understand what an API is, how clients and servers communicate, and what a tester must observe in a request/response.",
      weight: 4,
      minutes: 60,
      accent: "#0f766e",
      keywords: ["api", "http", "request", "response", "endpoint", "json"],
      sections: [
        {
          code: "API-1.1",
          heading: "What an API tester verifies",
          body:
            "An API is a contract between a client and a service. Testers verify that requests are accepted or rejected correctly and that responses match business rules, data rules, and integration expectations.",
          bullets: [
            "A request usually includes method, URL, path parameters, query parameters, headers, and an optional body.",
            "A response usually includes status code, headers, body, and response time.",
            "API testing checks functional behavior, data correctness, negative scenarios, error handling, security rules, and performance signals."
          ],
          exam: "Always separate transport success from business success. A 200 response can still contain wrong data."
        },
        {
          code: "API-1.2",
          heading: "Common API test evidence",
          body:
            "Good API evidence is reproducible. A tester should capture the endpoint, method, request data, expected result, actual result, status code, response body, response time, and environment.",
          bullets: [
            "Use Postman, Hoppscotch, curl, browser devtools, or automated API checks depending on the project.",
            "Keep sample requests and responses as evidence when logging API bugs.",
            "Do not send real customer or company data to public training APIs."
          ],
          exam: "A good API bug report needs enough request detail for another person to reproduce the issue."
        }
      ],
      viSections: [
        {
          code: "API-1.1",
          heading: "Tester cần verify gì khi test API",
          body:
            "API là hợp đồng giữa client và service. Tester cần kiểm tra request được chấp nhận/từ chối đúng, response đúng business rule, data rule và kỳ vọng tích hợp.",
          bullets: [
            "Request thường có method, URL, path parameter, query parameter, header và body.",
            "Response thường có status code, header, body và response time.",
            "API testing kiểm tra hành vi chức năng, dữ liệu, negative case, error handling, security rule và tín hiệu performance."
          ],
          exam: "Đừng đồng nhất HTTP 200 với nghiệp vụ đúng. 200 vẫn có thể trả sai dữ liệu."
        },
        {
          code: "API-1.2",
          heading: "Evidence thường dùng khi test API",
          body:
            "Evidence tốt phải giúp người khác reproduce được. Tester nên ghi endpoint, method, request data, expected, actual, status code, response body, response time và environment.",
          bullets: [
            "Có thể dùng Postman, Hoppscotch, curl, devtools hoặc automated API checks.",
            "Nên lưu request/response mẫu khi log bug API.",
            "Không gửi dữ liệu thật của công ty hoặc khách hàng lên API public dùng để học."
          ],
          exam: "Bug report API cần đủ request detail để người khác chạy lại được."
        }
      ],
      terms: [
        ["Endpoint", "A URL path that exposes a service capability."],
        ["Payload", "The request or response body, often JSON."],
        ["Contract", "The expected structure and behavior agreed between client and API."]
      ],
      viTerms: [
        ["Endpoint", "Đường dẫn URL đại diện cho một khả năng của service."],
        ["Payload", "Body của request hoặc response, thường là JSON."],
        ["Contract", "Cấu trúc và hành vi kỳ vọng giữa client và API."]
      ],
      labs: [
        {
          id: "api-lab-1",
          level: "Basic",
          title: "Verify one GET endpoint",
          scenario: "Dùng JSONPlaceholder hoặc API test nội bộ để gọi một endpoint GET trả về một record.",
          tasks: [
            "Gửi GET /posts/1 hoặc endpoint tương đương.",
            "Verify status code = 200.",
            "Verify response có id, title/body hoặc các field bắt buộc của API.",
            "Ghi lại expected, actual và result."
          ],
          expected: ["Status 200", "Record đúng id", "Các field bắt buộc không rỗng"],
          takeaway: "Đây là khung test API cơ bản nhất: method, endpoint, status, schema, data."
        },
        {
          id: "api-lab-2",
          level: "Basic",
          title: "Write a reproducible API test note",
          scenario: "Tạo một test note theo format project thật để người khác có thể chạy lại request.",
          tasks: ["Ghi endpoint, method, headers, request body.", "Ghi expected status/body.", "Ghi actual status/body và screenshot hoặc raw response."],
          expected: ["Một test note có đủ request và response evidence"],
          takeaway: "API bug thường khó reproduce nếu thiếu request body, header hoặc environment."
        }
      ]
    },
    {
      id: 2,
      title: "HTTP Methods and Status Codes",
      official: "Requests, Responses and Errors",
      summary: "Use HTTP methods and status codes correctly when designing positive, negative, and boundary API tests.",
      weight: 5,
      minutes: 70,
      accent: "#4338ca",
      keywords: ["get", "post", "put", "patch", "delete", "status code", "error"],
      sections: [
        {
          code: "API-2.1",
          heading: "HTTP methods",
          body:
            "HTTP methods express the action requested by the client. API tests should verify that each method changes or retrieves data according to the API contract.",
          bullets: [
            "GET retrieves data and should not change server state.",
            "POST usually creates a resource or triggers an action.",
            "PUT usually replaces a resource; PATCH usually partially updates it.",
            "DELETE removes or deactivates a resource according to business rules."
          ],
          exam: "Do not test a create scenario with GET unless the API contract explicitly says so."
        },
        {
          code: "API-2.2",
          heading: "Status codes and error handling",
          body:
            "Status codes help classify the result, but testers still need to inspect the response body and business outcome.",
          bullets: [
            "2xx usually means request success, 3xx redirection, 4xx client/request problem, and 5xx server problem.",
            "400 often means invalid request; 401 unauthenticated; 403 authenticated but not allowed; 404 not found; 409 conflict.",
            "Negative tests should verify clear error messages and no unintended data changes."
          ],
          exam: "A negative test can pass when it receives the expected error status."
        }
      ],
      viSections: [
        {
          code: "API-2.1",
          heading: "HTTP method",
          body:
            "HTTP method thể hiện hành động client muốn làm. Tester cần verify method đó lấy hoặc thay đổi dữ liệu đúng theo API contract.",
          bullets: [
            "GET dùng để lấy dữ liệu và không nên làm đổi state server.",
            "POST thường tạo resource hoặc kích hoạt action.",
            "PUT thường replace resource; PATCH thường update một phần.",
            "DELETE xóa hoặc deactivate resource theo business rule."
          ],
          exam: "Không dùng GET để test create nếu API contract không nói như vậy."
        },
        {
          code: "API-2.2",
          heading: "Status code và error handling",
          body:
            "Status code giúp phân loại kết quả, nhưng tester vẫn phải kiểm tra body và business outcome.",
          bullets: [
            "2xx thường là success, 3xx redirect, 4xx lỗi request/client, 5xx lỗi server.",
            "400 invalid request; 401 chưa xác thực; 403 không có quyền; 404 không tìm thấy; 409 conflict.",
            "Negative test cần verify error message rõ ràng và không làm thay đổi dữ liệu ngoài ý muốn."
          ],
          exam: "Negative test có thể pass khi API trả đúng lỗi kỳ vọng."
        }
      ],
      terms: [
        ["Idempotent", "Repeating the same request has the same effect as sending it once."],
        ["Client error", "A 4xx result caused by request, authentication, authorization, or resource problems."]
      ],
      viTerms: [
        ["Idempotent", "Gửi lặp cùng request có effect giống gửi một lần."],
        ["Client error", "Nhóm 4xx do request, authentication, authorization hoặc resource có vấn đề."]
      ],
      labs: [
        {
          id: "api-lab-3",
          level: "Intermediate",
          title: "Status-code negative test",
          scenario: "Gọi endpoint không tồn tại hoặc dùng id không tồn tại.",
          tasks: ["Gửi GET /resource/999999 hoặc /status/404.", "Verify status code đúng kỳ vọng.", "Verify body không giả vờ trả data hợp lệ."],
          expected: ["Status 404 hoặc error contract tương ứng", "Không có object hợp lệ giả"],
          takeaway: "Expected error không phải bug; bug là trả sai lỗi, lỗi mơ hồ hoặc đổi dữ liệu sai."
        },
        {
          id: "api-lab-4",
          level: "Intermediate",
          title: "Create and verify response body",
          scenario: "Gửi POST tạo resource fake hoặc resource test.",
          tasks: ["Gửi JSON body hợp lệ.", "Verify status 201 hoặc status success theo contract.", "Verify response echo đúng field quan trọng và có id."],
          expected: ["Status success", "Body có id", "Field nghiệp vụ đúng"],
          takeaway: "POST không chỉ verify status; cần verify dữ liệu tạo ra có đúng không."
        }
      ]
    },
    {
      id: 3,
      title: "Request Design and Validation",
      official: "Parameters, Headers, Body and Schema",
      summary: "Design API tests around query parameters, headers, JSON body validation, schema checks, and boundary values.",
      weight: 5,
      minutes: 80,
      accent: "#c2410c",
      keywords: ["query", "header", "json", "schema", "boundary", "validation"],
      sections: [
        {
          code: "API-3.1",
          heading: "Parameters, headers and JSON body",
          body:
            "API defects often appear when parameters, headers, or JSON fields are missing, malformed, duplicated, or combined in unusual ways.",
          bullets: [
            "Query parameters commonly drive filtering, sorting, pagination, search, and field selection.",
            "Headers commonly drive content negotiation, authentication, tracing, caching, and idempotency.",
            "JSON body validation should cover required fields, data type, allowed values, length, range, and cross-field rules."
          ],
          exam: "For each request element, test valid, invalid, missing, boundary, and incompatible combinations."
        },
        {
          code: "API-3.2",
          heading: "Schema and data validation",
          body:
            "Schema validation checks response structure, while data validation checks whether values are correct for the business scenario.",
          bullets: [
            "Schema checks include field presence, type, nullability, arrays, nested objects, and enum values.",
            "Data checks include ids, totals, timestamps, currency, ownership, and state transitions.",
            "A response can pass schema validation but fail business data validation."
          ],
          exam: "Schema is necessary but not sufficient for business correctness."
        }
      ],
      viSections: [
        {
          code: "API-3.1",
          heading: "Parameter, header và JSON body",
          body:
            "API defect thường xuất hiện khi parameter, header hoặc JSON field bị thiếu, sai format, trùng, hoặc kết hợp bất thường.",
          bullets: [
            "Query parameter thường dùng cho filter, sort, pagination, search và select field.",
            "Header thường dùng cho content negotiation, auth, tracing, caching và idempotency.",
            "JSON body validation cần cover required field, data type, allowed value, length, range và rule phụ thuộc giữa field."
          ],
          exam: "Mỗi thành phần request nên có case valid, invalid, missing, boundary và combination không tương thích."
        },
        {
          code: "API-3.2",
          heading: "Schema và data validation",
          body:
            "Schema validation kiểm tra cấu trúc response, còn data validation kiểm tra giá trị có đúng business scenario không.",
          bullets: [
            "Schema check gồm field presence, type, nullability, array, nested object và enum.",
            "Data check gồm id, total, timestamp, currency, ownership và state transition.",
            "Response có thể pass schema nhưng fail business data."
          ],
          exam: "Schema cần thiết nhưng chưa đủ để kết luận nghiệp vụ đúng."
        }
      ],
      terms: [
        ["Schema validation", "Checking response structure and data types."],
        ["Boundary test", "Testing values around minimum and maximum accepted values."]
      ],
      viTerms: [
        ["Schema validation", "Kiểm tra cấu trúc và kiểu dữ liệu của response."],
        ["Boundary test", "Kiểm tra giá trị quanh min/max được chấp nhận."]
      ],
      labs: [
        {
          id: "api-lab-5",
          level: "Intermediate",
          title: "Pagination and selected fields",
          scenario: "Test API danh sách sản phẩm hoặc order có limit, skip/page và select fields.",
          tasks: ["Gửi request limit=5&skip=10.", "Verify số item đúng.", "Verify metadata limit/skip đúng.", "Verify mỗi item chỉ có field cần thiết nếu API support select."],
          expected: ["Item count đúng", "Pagination metadata đúng", "Không thiếu field required"],
          takeaway: "Pagination bugs rất hay xảy ra ở count, offset và filter kết hợp."
        },
        {
          id: "api-lab-6",
          level: "Intermediate",
          title: "Required field and type validation",
          scenario: "Tạo request body thiếu required field hoặc sai data type.",
          tasks: ["Gửi body thiếu title hoặc price.", "Gửi price là string nếu contract yêu cầu number.", "Verify status 400 và message chỉ rõ field lỗi."],
          expected: ["API reject request sai", "Không tạo dữ liệu mới", "Error message đủ rõ"],
          takeaway: "Negative validation tốt phải verify cả response lẫn side effect."
        }
      ]
    },
    {
      id: 4,
      title: "Auth, Security and Negative Testing",
      official: "Authentication, Authorization and Abuse Cases",
      summary: "Cover token-based authentication, authorization boundaries, sensitive data exposure, and safe negative testing.",
      weight: 4,
      minutes: 75,
      accent: "#be123c",
      keywords: ["auth", "token", "authorization", "security", "negative"],
      sections: [
        {
          code: "API-4.1",
          heading: "Authentication and authorization",
          body:
            "Authentication verifies who the caller is. Authorization verifies what the caller is allowed to do.",
          bullets: [
            "Unauthenticated requests should normally return 401.",
            "Authenticated but unauthorized requests should normally return 403.",
            "Test token missing, token expired, token malformed, wrong role, and accessing another user's data."
          ],
          exam: "401 and 403 are different and should not be used randomly."
        },
        {
          code: "API-4.2",
          heading: "Security-minded API checks",
          body:
            "Manual testers can add strong value by checking access control, sensitive data exposure, rate limits, and input validation.",
          bullets: [
            "Responses should not expose passwords, tokens, internal stack traces, or unnecessary personal data.",
            "Destructive actions should require proper authorization and may require idempotency or confirmation rules.",
            "Negative security tests should be done only in approved environments."
          ],
          exam: "A tester does not need to be a security engineer to catch obvious access-control defects."
        }
      ],
      viSections: [
        {
          code: "API-4.1",
          heading: "Authentication và authorization",
          body:
            "Authentication xác minh caller là ai. Authorization xác minh caller được phép làm gì.",
          bullets: [
            "Request chưa login thường nên trả 401.",
            "Đã login nhưng không có quyền thường nên trả 403.",
            "Test thiếu token, token hết hạn, token sai format, sai role và truy cập dữ liệu của user khác."
          ],
          exam: "401 và 403 khác nhau, không nên dùng lẫn lộn."
        },
        {
          code: "API-4.2",
          heading: "Security check dành cho API tester",
          body:
            "Manual tester có thể tạo giá trị lớn khi check access control, lộ dữ liệu nhạy cảm, rate limit và input validation.",
          bullets: [
            "Response không nên lộ password, token, stack trace nội bộ hoặc dữ liệu cá nhân không cần thiết.",
            "Action phá hủy dữ liệu cần authorization phù hợp và có thể cần idempotency hoặc confirmation rule.",
            "Negative security test chỉ nên làm trong môi trường được phép."
          ],
          exam: "Tester không cần là security engineer vẫn có thể bắt bug access control rõ ràng."
        }
      ],
      terms: [
        ["Authentication", "Verifying identity."],
        ["Authorization", "Verifying permissions."],
        ["Sensitive data exposure", "Returning data that should not be visible to the caller."]
      ],
      viTerms: [
        ["Authentication", "Xác minh danh tính."],
        ["Authorization", "Xác minh quyền được làm gì."],
        ["Sensitive data exposure", "API trả dữ liệu mà caller không nên thấy."]
      ],
      labs: [
        {
          id: "api-lab-7",
          level: "Advanced",
          title: "Token flow",
          scenario: "Login để lấy token, sau đó gọi endpoint /me hoặc endpoint cần auth.",
          tasks: ["Gửi login hợp lệ.", "Copy access token vào Authorization header.", "Gọi endpoint cần auth.", "Gọi lại khi thiếu token hoặc token sai."],
          expected: ["Valid token trả data user hiện tại", "Missing/invalid token bị reject"],
          takeaway: "Auth flow cần positive và negative case, không chỉ test login thành công."
        },
        {
          id: "api-lab-8",
          level: "Advanced",
          title: "Access-control boundary",
          scenario: "User A cố truy cập resource thuộc User B trong môi trường test.",
          tasks: ["Login bằng user A.", "Gọi resource id thuộc user B.", "Verify API không trả dữ liệu của user B.", "Log bug nếu trả 200 kèm dữ liệu sai quyền."],
          expected: ["403 hoặc 404 tùy contract", "Không lộ dữ liệu user khác"],
          takeaway: "Đây là nhóm bug API rất nghiêm trọng và manual tester thường phát hiện được."
        }
      ]
    },
    {
      id: 5,
      title: "Contract and Integration Testing",
      official: "API Contracts and Cross-System Behavior",
      summary: "Learn how API contracts, mocks, dependencies, and end-to-end flows affect test design.",
      weight: 4,
      minutes: 70,
      accent: "#15803d",
      keywords: ["contract", "mock", "integration", "dependency", "e2e"],
      sections: [
        {
          code: "API-5.1",
          heading: "API contract thinking",
          body:
            "An API contract defines request and response expectations. Contract changes can break clients even when the backend still works internally.",
          bullets: [
            "Breaking changes include renamed fields, removed fields, type changes, status-code changes, and changed error formats.",
            "Backward-compatible changes are usually safer, such as adding optional response fields.",
            "A tester should compare implementation behavior against API documentation, examples, and client expectations."
          ],
          exam: "A field type changing from number to string can be a real integration bug."
        },
        {
          code: "API-5.2",
          heading: "Dependencies and end-to-end flows",
          body:
            "Many API flows depend on other services, test data, queues, payment providers, email services, or scheduled jobs.",
          bullets: [
            "Use mocks or stubs when a dependency is unavailable or unsafe to call.",
            "End-to-end tests are valuable but slower and more fragile than focused API checks.",
            "When an integration fails, capture correlation ids, timestamps, environment, and dependency responses."
          ],
          exam: "Choose the smallest test scope that gives useful confidence."
        }
      ],
      viSections: [
        {
          code: "API-5.1",
          heading: "Tư duy API contract",
          body:
            "API contract định nghĩa kỳ vọng request/response. Contract thay đổi có thể làm client hỏng dù backend nội bộ vẫn chạy.",
          bullets: [
            "Breaking change gồm đổi tên field, xóa field, đổi type, đổi status code, đổi format lỗi.",
            "Backward-compatible change thường an toàn hơn, ví dụ thêm optional response field.",
            "Tester nên so implementation với document, example và kỳ vọng của client."
          ],
          exam: "Field đổi từ number sang string có thể là bug integration thật."
        },
        {
          code: "API-5.2",
          heading: "Dependency và end-to-end flow",
          body:
            "Nhiều API flow phụ thuộc service khác, test data, queue, payment provider, email service hoặc scheduled job.",
          bullets: [
            "Dùng mock/stub khi dependency chưa sẵn sàng hoặc không an toàn để gọi.",
            "End-to-end test có giá trị nhưng chậm và dễ flaky hơn focused API checks.",
            "Khi integration fail, cần capture correlation id, timestamp, environment và response của dependency."
          ],
          exam: "Chọn phạm vi test nhỏ nhất nhưng vẫn đủ confidence."
        }
      ],
      terms: [
        ["Breaking change", "A contract change that can break existing clients."],
        ["Mock", "A controllable fake dependency used for testing."]
      ],
      viTerms: [
        ["Breaking change", "Thay đổi contract có thể làm client hiện tại hỏng."],
        ["Mock", "Dependency giả có thể kiểm soát để phục vụ test."]
      ],
      labs: [
        {
          id: "api-lab-9",
          level: "Advanced",
          title: "Contract checklist",
          scenario: "Review một API response mới trước release.",
          tasks: ["So field với API document.", "Check type, required/optional, enum, error format.", "Đánh dấu breaking change nếu client cũ có thể hỏng."],
          expected: ["Danh sách field đúng/sai", "Risk nếu breaking change"],
          takeaway: "Contract review là một dạng shift-left rất thực tế cho API tester."
        },
        {
          id: "api-lab-10",
          level: "Advanced",
          title: "Booking CRUD flow",
          scenario: "Test một flow API gồm create, get, update, delete trong môi trường test.",
          tasks: ["Create resource.", "GET lại để verify data.", "Update và verify data mới.", "Delete và verify resource không còn truy cập được."],
          expected: ["Mỗi bước có status/body đúng", "Resource state chuyển đúng"],
          takeaway: "Flow test cần kiểm tra state sau mỗi action, không chỉ status từng request."
        }
      ]
    },
    {
      id: 6,
      title: "API Test Reporting",
      official: "Bugs, Evidence and Project Workflow",
      summary: "Turn API findings into clear defect reports and project-ready test artifacts.",
      weight: 3,
      minutes: 55,
      accent: "#b7791f",
      keywords: ["bug report", "evidence", "severity", "priority", "postman"],
      sections: [
        {
          code: "API-6.1",
          heading: "API defect reports",
          body:
            "An API defect report should make the failure clear, reproducible, and actionable for developers and stakeholders.",
          bullets: [
            "Include method, endpoint, headers, request body, environment, test data, expected result, actual result, and evidence.",
            "Attach response body, logs, screenshots, curl command, correlation id, and timestamp when useful.",
            "Severity describes impact; priority describes urgency."
          ],
          exam: "A vague report saying 'API failed' is not enough."
        },
        {
          code: "API-6.2",
          heading: "Project workflow for API testers",
          body:
            "In real projects, API testers work with user stories, API documentation, acceptance criteria, database evidence, logs, and automation candidates.",
          bullets: [
            "Start with high-risk happy paths, then negative, boundary, role-based, and integration cases.",
            "Keep reusable test data and environment notes.",
            "Promote stable, high-value API checks into automation when the project can maintain them."
          ],
          exam: "Automate checks that are stable and valuable, not every exploratory idea."
        }
      ],
      viSections: [
        {
          code: "API-6.1",
          heading: "Defect report cho API",
          body:
            "Bug API cần làm rõ failure, có thể reproduce và đủ actionable cho developer/stakeholder.",
          bullets: [
            "Ghi method, endpoint, headers, request body, environment, test data, expected, actual và evidence.",
            "Đính kèm response body, log, screenshot, curl, correlation id và timestamp khi hữu ích.",
            "Severity là impact; priority là mức cần xử lý gấp."
          ],
          exam: "Report mơ hồ kiểu 'API failed' là chưa đủ."
        },
        {
          code: "API-6.2",
          heading: "Workflow thực tế cho API tester",
          body:
            "Trong dự án thật, API tester làm với user story, API document, acceptance criteria, database evidence, log và automation candidate.",
          bullets: [
            "Bắt đầu từ happy path rủi ro cao, rồi negative, boundary, role-based và integration case.",
            "Giữ test data và environment note có thể tái sử dụng.",
            "Đưa check ổn định, giá trị cao vào automation khi team có khả năng maintain."
          ],
          exam: "Automation nên ưu tiên check ổn định và có giá trị, không phải mọi ý tưởng exploratory."
        }
      ],
      terms: [
        ["Severity", "Impact of a defect."],
        ["Priority", "Urgency or order of fixing a defect."]
      ],
      viTerms: [
        ["Severity", "Mức ảnh hưởng của defect."],
        ["Priority", "Mức độ cần fix gấp hoặc thứ tự xử lý."]
      ],
      labs: [
        {
          id: "api-lab-11",
          level: "Project",
          title: "Write an API bug report",
          scenario: "Một API login trả 200 nhưng không có accessToken trong response.",
          tasks: ["Viết title rõ.", "Ghi request body, endpoint, method.", "Ghi expected/actual.", "Ghi severity/priority và evidence."],
          expected: ["Bug report đủ reproduce và phân tích impact"],
          takeaway: "Bug tốt giúp developer sửa nhanh và PM hiểu impact."
        },
        {
          id: "api-lab-12",
          level: "Project",
          title: "API mini test suite",
          scenario: "Thiết kế suite 10 test cases cho product search hoặc booking flow.",
          tasks: ["Chọn 3 happy paths.", "Chọn 3 negative cases.", "Chọn 2 boundary cases.", "Chọn 2 auth/integration cases."],
          expected: ["Suite có risk coverage cân bằng"],
          takeaway: "Tester dự án thật cần biết chọn test thông minh, không chỉ chạy request rời rạc."
        }
      ]
    }
  ];

  const sqlModules = [
    {
      id: 1,
      title: "Relational Data for Testers",
      official: "Tables, Keys and Test Evidence",
      summary: "Understand tables, rows, columns, primary keys, foreign keys, and how SQL supports testing evidence.",
      weight: 4,
      minutes: 60,
      accent: "#0f766e",
      keywords: ["table", "row", "column", "primary key", "foreign key", "evidence"],
      sections: [
        {
          code: "SQL-1.1",
          heading: "Why testers use SQL",
          body:
            "SQL helps testers verify data that may not be visible in the UI and provides strong evidence for API, report, workflow, and migration testing.",
          bullets: [
            "Use SQL to verify created records, updated statuses, calculated totals, relationships, and report results.",
            "Understand tables, columns, rows, primary keys, and foreign keys before writing complex queries.",
            "Never update or delete data in shared environments unless the project explicitly allows it."
          ],
          exam: "For manual testers, SELECT queries are the daily foundation."
        },
        {
          code: "SQL-1.2",
          heading: "A small commerce schema",
          body:
            "Practice with customers, products, orders, and order_items. This schema supports common tester checks such as order totals, customer spending, and missing references.",
          bullets: [
            "customers.customer_id identifies a customer.",
            "orders.customer_id links an order to a customer.",
            "order_items links orders and products and stores quantity and unit price."
          ],
          exam: "Always identify the grain of the result: one row per customer, order, item, or product."
        }
      ],
      viSections: [
        {
          code: "SQL-1.1",
          heading: "Vì sao tester dùng SQL",
          body:
            "SQL giúp tester verify dữ liệu không thấy trên UI và tạo evidence mạnh cho API, report, workflow và migration testing.",
          bullets: [
            "Dùng SQL để verify record được tạo, status update, total tính đúng, relationship và report result.",
            "Hiểu table, column, row, primary key, foreign key trước khi viết query phức tạp.",
            "Không UPDATE/DELETE dữ liệu ở môi trường dùng chung nếu project không cho phép."
          ],
          exam: "Với manual tester, SELECT là nền tảng hằng ngày."
        },
        {
          code: "SQL-1.2",
          heading: "Schema thương mại nhỏ",
          body:
            "Thực hành với customers, products, orders và order_items. Schema này đủ để check order total, spending và missing reference.",
          bullets: [
            "customers.customer_id định danh customer.",
            "orders.customer_id nối order với customer.",
            "order_items nối order/product và lưu quantity, unit_price."
          ],
          exam: "Luôn xác định grain của kết quả: mỗi row là customer, order, item hay product."
        }
      ],
      terms: [
        ["Primary key", "A column or columns that uniquely identify a row."],
        ["Foreign key", "A column that references a row in another table."],
        ["Grain", "What one row in the result represents."]
      ],
      viTerms: [
        ["Primary key", "Cột định danh duy nhất một row."],
        ["Foreign key", "Cột tham chiếu row ở table khác."],
        ["Grain", "Một row trong result đang đại diện cho điều gì."]
      ],
      labs: [
        {
          id: "sql-lab-1",
          level: "Setup",
          title: "Create practice tables",
          scenario: "Tạo schema nhỏ trong SQLiteOnline, db<>fiddle hoặc database test nội bộ.",
          tasks: ["Tạo bảng customers, products, orders, order_items.", "Insert vài record mẫu.", "Chạy SELECT * để xác nhận data."],
          expected: ["Có data customer, product, order và order item để query"],
          code:
            "SELECT * FROM customers;\nSELECT * FROM products;\nSELECT * FROM orders;\nSELECT * FROM order_items;",
          takeaway: "Trước khi test report hoặc API bằng SQL, cần biết data đang có gì."
        }
      ]
    },
    {
      id: 2,
      title: "SELECT, WHERE and ORDER BY",
      official: "Basic Data Retrieval",
      summary: "Retrieve exact records with SELECT, filter with WHERE, sort with ORDER BY, and control columns for evidence.",
      weight: 5,
      minutes: 70,
      accent: "#4338ca",
      keywords: ["select", "where", "order by", "between", "like", "in"],
      sections: [
        {
          code: "SQL-2.1",
          heading: "Selecting the right rows",
          body:
            "A tester often needs to find one exact record or a small set of records that prove a scenario passed or failed.",
          bullets: [
            "SELECT controls the columns returned.",
            "WHERE filters rows using equality, ranges, IN, LIKE, IS NULL, and combined conditions.",
            "ORDER BY makes evidence stable and easier to read."
          ],
          exam: "Avoid SELECT * in bug evidence when a focused column list is clearer."
        },
        {
          code: "SQL-2.2",
          heading: "Dates, status and nulls",
          body:
            "Date ranges, status values, and NULL handling are common sources of tester mistakes.",
          bullets: [
            "Use inclusive ranges carefully with dates and timestamps.",
            "Use IS NULL or IS NOT NULL for NULL checks.",
            "Filter by status explicitly when reports should include only PAID, active, completed, or similar states."
          ],
          exam: "Wrong status filter can make a report look correct while including cancelled data."
        }
      ],
      viSections: [
        {
          code: "SQL-2.1",
          heading: "Lấy đúng row cần kiểm tra",
          body:
            "Tester thường cần tìm đúng một record hoặc một nhóm nhỏ record để chứng minh scenario pass/fail.",
          bullets: [
            "SELECT chọn column trả về.",
            "WHERE lọc row bằng equality, range, IN, LIKE, IS NULL và điều kiện kết hợp.",
            "ORDER BY giúp evidence ổn định và dễ đọc."
          ],
          exam: "Bug evidence nên chọn column rõ ràng thay vì SELECT * nếu không cần."
        },
        {
          code: "SQL-2.2",
          heading: "Date, status và NULL",
          body:
            "Date range, status value và NULL là các nguồn lỗi phổ biến khi tester viết query.",
          bullets: [
            "Cẩn thận inclusive range với date/timestamp.",
            "Dùng IS NULL hoặc IS NOT NULL để check NULL.",
            "Filter status rõ khi report chỉ tính PAID, active, completed hoặc trạng thái tương tự."
          ],
          exam: "Sai status filter có thể làm report nhìn có vẻ đúng nhưng tính cả data cancelled."
        }
      ],
      terms: [
        ["WHERE", "Filters rows before grouping."],
        ["ORDER BY", "Sorts the result set."]
      ],
      viTerms: [
        ["WHERE", "Lọc row trước khi grouping."],
        ["ORDER BY", "Sắp xếp result set."]
      ],
      labs: [
        {
          id: "sql-lab-2",
          level: "Basic",
          title: "Find paid orders in a date range",
          scenario: "Verify order list filter theo status và tháng.",
          tasks: ["Query orders có status PAID.", "Filter order_date trong tháng 2026-02.", "Sort theo order_id."],
          expected: ["Chỉ trả order tháng 2026-02 và status PAID"],
          code:
            "SELECT order_id, customer_id, order_date, status\nFROM orders\nWHERE status = 'PAID'\n  AND order_date BETWEEN '2026-02-01' AND '2026-02-28'\nORDER BY order_id;",
          takeaway: "Filter rõ status và date là kỹ năng SQL testing cơ bản."
        }
      ]
    },
    {
      id: 3,
      title: "JOINs for Verification",
      official: "Combining Related Tables",
      summary: "Use INNER JOIN and LEFT JOIN to verify relationships, API responses, UI screens, and missing data.",
      weight: 5,
      minutes: 85,
      accent: "#c2410c",
      keywords: ["join", "inner join", "left join", "relationship", "missing data"],
      sections: [
        {
          code: "SQL-3.1",
          heading: "INNER JOIN and LEFT JOIN",
          body:
            "JOINs combine related tables. INNER JOIN returns matching rows; LEFT JOIN keeps all rows from the left table and adds matches from the right table when present.",
          bullets: [
            "Use INNER JOIN when only valid related records should appear.",
            "Use LEFT JOIN with IS NULL to find missing related data.",
            "Join conditions must use the correct keys, not just columns with similar names."
          ],
          exam: "A wrong join can duplicate rows and inflate totals."
        },
        {
          code: "SQL-3.2",
          heading: "Verifying UI and API data with joins",
          body:
            "A UI card or API response often combines data from multiple tables, so testers need joins to verify the full result.",
          bullets: [
            "Join orders to customers to verify customer name shown on an order screen.",
            "Join order_items to products to verify item names and prices.",
            "Check row counts before trusting joined totals."
          ],
          exam: "If a result combines customer, order, and product fields, expect joins."
        }
      ],
      viSections: [
        {
          code: "SQL-3.1",
          heading: "INNER JOIN và LEFT JOIN",
          body:
            "JOIN dùng để kết hợp table liên quan. INNER JOIN trả row match; LEFT JOIN giữ toàn bộ row bên trái và thêm data bên phải nếu có.",
          bullets: [
            "Dùng INNER JOIN khi chỉ cần record có relationship hợp lệ.",
            "Dùng LEFT JOIN với IS NULL để tìm missing related data.",
            "Join condition phải dùng đúng key, không chỉ vì tên column giống nhau."
          ],
          exam: "Join sai có thể nhân bản row và làm total bị phình."
        },
        {
          code: "SQL-3.2",
          heading: "Verify UI/API bằng joins",
          body:
            "UI card hoặc API response thường kết hợp data nhiều table, nên tester cần JOIN để verify đầy đủ.",
          bullets: [
            "Join orders với customers để verify tên customer trên order screen.",
            "Join order_items với products để verify tên item và giá.",
            "Check row count trước khi tin vào total sau join."
          ],
          exam: "Nếu result chứa customer, order và product field, thường cần join."
        }
      ],
      terms: [
        ["INNER JOIN", "Returns rows with matches in both tables."],
        ["LEFT JOIN", "Returns all rows from the left table and matching rows from the right table."]
      ],
      viTerms: [
        ["INNER JOIN", "Trả row có match ở cả hai table."],
        ["LEFT JOIN", "Trả toàn bộ row bên trái và row match bên phải nếu có."]
      ],
      labs: [
        {
          id: "sql-lab-3",
          level: "Intermediate",
          title: "Verify order list with customer name",
          scenario: "UI order list hiển thị order_id, customer name, date và status.",
          tasks: ["Join orders với customers.", "Verify mỗi order hiển thị đúng customer.", "Sort theo order_id để so với UI."],
          expected: ["Mỗi order map đúng customer"],
          code:
            "SELECT o.order_id, c.name, o.order_date, o.status\nFROM orders o\nJOIN customers c ON c.customer_id = o.customer_id\nORDER BY o.order_id;",
          takeaway: "JOIN là cầu nối giữa database evidence và UI/API expectation."
        },
        {
          id: "sql-lab-4",
          level: "Intermediate",
          title: "Find customers without orders",
          scenario: "Report cần hiển thị cả customer chưa từng mua hàng.",
          tasks: ["LEFT JOIN customers với orders.", "Filter order_id IS NULL.", "Verify customer không có order vẫn không bị mất khỏi report."],
          expected: ["Danh sách customer chưa có order"],
          code:
            "SELECT c.customer_id, c.name\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.customer_id\nWHERE o.order_id IS NULL;",
          takeaway: "LEFT JOIN rất hữu ích cho missing data và data integrity checks."
        }
      ]
    },
    {
      id: 4,
      title: "Aggregation and Reports",
      official: "GROUP BY, HAVING and Calculated Totals",
      summary: "Verify totals, counts, revenue, averages, report filters, and grouped results.",
      weight: 5,
      minutes: 90,
      accent: "#be123c",
      keywords: ["group by", "having", "sum", "count", "average", "report"],
      sections: [
        {
          code: "SQL-4.1",
          heading: "GROUP BY and aggregate functions",
          body:
            "Aggregations summarize many rows into counts, sums, averages, minimums, or maximums. They are essential for report testing.",
          bullets: [
            "COUNT counts rows or non-null values.",
            "SUM is common for totals such as revenue and quantity.",
            "GROUP BY defines the grouping level, such as one row per city, month, customer, or category."
          ],
          exam: "If the expected result is one row per group, identify the group before writing the query."
        },
        {
          code: "SQL-4.2",
          heading: "HAVING and report filters",
          body:
            "WHERE filters rows before grouping. HAVING filters groups after aggregation.",
          bullets: [
            "Use WHERE for status/date filters before calculating totals.",
            "Use HAVING for conditions on aggregate values such as SUM(total) > 200.",
            "Always verify cancelled, pending, refunded, or test records are included or excluded correctly."
          ],
          exam: "A report total bug is often a wrong WHERE filter, wrong join, or wrong grouping level."
        }
      ],
      viSections: [
        {
          code: "SQL-4.1",
          heading: "GROUP BY và aggregate function",
          body:
            "Aggregation tóm tắt nhiều row thành count, sum, average, min hoặc max. Đây là nền tảng để test report.",
          bullets: [
            "COUNT đếm row hoặc non-null value.",
            "SUM dùng nhiều cho revenue, total và quantity.",
            "GROUP BY xác định mức gom nhóm: mỗi row theo city, month, customer hoặc category."
          ],
          exam: "Nếu expected là một row mỗi group, hãy xác định group trước khi viết query."
        },
        {
          code: "SQL-4.2",
          heading: "HAVING và report filter",
          body:
            "WHERE lọc row trước khi group. HAVING lọc group sau khi aggregate.",
          bullets: [
            "Dùng WHERE cho status/date trước khi tính total.",
            "Dùng HAVING cho điều kiện trên aggregate như SUM(total) > 200.",
            "Luôn verify cancelled, pending, refunded hoặc test record được include/exclude đúng."
          ],
          exam: "Bug report total thường do WHERE sai, JOIN sai hoặc GROUP BY sai level."
        }
      ],
      terms: [
        ["GROUP BY", "Groups rows so aggregate functions can summarize them."],
        ["HAVING", "Filters grouped rows after aggregation."]
      ],
      viTerms: [
        ["GROUP BY", "Gom row để aggregate function tính tổng hợp."],
        ["HAVING", "Lọc group sau khi aggregate."]
      ],
      labs: [
        {
          id: "sql-lab-5",
          level: "Intermediate",
          title: "Calculate order total",
          scenario: "API order detail trả total tiền của order.",
          tasks: ["SUM quantity * unit_price theo order_id.", "So expected total với API/UI.", "Kiểm tra order bị CANCELLED có nên tính không theo requirement."],
          expected: ["Mỗi order có total đúng"],
          code:
            "SELECT order_id, SUM(quantity * unit_price) AS order_total\nFROM order_items\nGROUP BY order_id\nORDER BY order_id;",
          takeaway: "Tính total bằng SQL giúp tester verify logic nghiệp vụ độc lập với UI."
        },
        {
          id: "sql-lab-6",
          level: "Advanced",
          title: "Revenue by category",
          scenario: "Dashboard revenue chỉ tính PAID orders và group theo product category.",
          tasks: ["Join orders, order_items, products.", "Filter status PAID.", "SUM quantity * unit_price.", "Group by category."],
          expected: ["Revenue theo category đúng, không tính CANCELLED/PENDING"],
          code:
            "SELECT p.category, SUM(oi.quantity * oi.unit_price) AS revenue\nFROM orders o\nJOIN order_items oi ON oi.order_id = o.order_id\nJOIN products p ON p.product_id = oi.product_id\nWHERE o.status = 'PAID'\nGROUP BY p.category\nORDER BY revenue DESC;",
          takeaway: "Report testing cần kiểm tra filter, join và calculation cùng lúc."
        }
      ]
    },
    {
      id: 5,
      title: "Data Integrity Checks",
      official: "Missing, Duplicate and Inconsistent Data",
      summary: "Use SQL to catch broken relationships, duplicate records, invalid statuses, and data consistency issues.",
      weight: 4,
      minutes: 75,
      accent: "#15803d",
      keywords: ["integrity", "duplicate", "null", "orphan", "consistency"],
      sections: [
        {
          code: "SQL-5.1",
          heading: "Integrity checks testers can run",
          body:
            "Data integrity checks help identify defects that may not be visible through a normal UI scenario.",
          bullets: [
            "Find orphan records with LEFT JOIN and IS NULL.",
            "Find duplicate business keys using GROUP BY and HAVING COUNT(*) > 1.",
            "Find invalid statuses or impossible dates using WHERE conditions."
          ],
          exam: "A database can contain bad data even when the UI looks normal."
        },
        {
          code: "SQL-5.2",
          heading: "Migration and cleanup testing",
          body:
            "Migration testing often relies on SQL to compare source and target counts, totals, missing records, and transformed values.",
          bullets: [
            "Compare counts by status or category before and after migration.",
            "Check sampled records deeply, not only totals.",
            "Document queries as evidence for audit and sign-off."
          ],
          exam: "Count matching is useful but not enough for migration quality."
        }
      ],
      viSections: [
        {
          code: "SQL-5.1",
          heading: "Integrity check tester có thể chạy",
          body:
            "Data integrity check giúp phát hiện defect không thấy qua UI scenario thông thường.",
          bullets: [
            "Tìm orphan record bằng LEFT JOIN và IS NULL.",
            "Tìm duplicate business key bằng GROUP BY và HAVING COUNT(*) > 1.",
            "Tìm status không hợp lệ hoặc date bất khả thi bằng WHERE."
          ],
          exam: "Database có thể chứa bad data dù UI nhìn bình thường."
        },
        {
          code: "SQL-5.2",
          heading: "Migration và cleanup testing",
          body:
            "Migration testing thường dùng SQL để so count, total, missing record và transformed value giữa source/target.",
          bullets: [
            "So count theo status/category trước và sau migration.",
            "Kiểm tra sâu một số sample record, không chỉ total.",
            "Lưu query làm evidence cho audit và sign-off."
          ],
          exam: "Count khớp hữu ích nhưng chưa đủ để kết luận migration tốt."
        }
      ],
      terms: [
        ["Orphan record", "A child row whose parent row is missing."],
        ["Duplicate business key", "Two or more rows representing the same business entity unexpectedly."]
      ],
      viTerms: [
        ["Orphan record", "Row con bị thiếu row cha tương ứng."],
        ["Duplicate business key", "Nhiều row đại diện cùng một business entity ngoài mong muốn."]
      ],
      labs: [
        {
          id: "sql-lab-7",
          level: "Advanced",
          title: "Find orphan order items",
          scenario: "Verify không có order_items trỏ đến product không tồn tại.",
          tasks: ["LEFT JOIN order_items với products.", "Filter product_id IS NULL.", "Result phải rỗng nếu data sạch."],
          expected: ["Không có orphan item"],
          code:
            "SELECT oi.*\nFROM order_items oi\nLEFT JOIN products p ON p.product_id = oi.product_id\nWHERE p.product_id IS NULL;",
          takeaway: "Orphan check là kỹ thuật data integrity rất thực tế."
        },
        {
          id: "sql-lab-8",
          level: "Advanced",
          title: "Find duplicate product names",
          scenario: "Business yêu cầu product_name không duplicate trong cùng category.",
          tasks: ["GROUP BY category, product_name.", "HAVING COUNT(*) > 1.", "Log bug nếu có duplicate ngoài kỳ vọng."],
          expected: ["Không có duplicate hoặc có danh sách duplicate rõ ràng"],
          code:
            "SELECT category, product_name, COUNT(*) AS duplicate_count\nFROM products\nGROUP BY category, product_name\nHAVING COUNT(*) > 1;",
          takeaway: "Duplicate check giúp bắt bug seed data, migration hoặc import."
        }
      ]
    },
    {
      id: 6,
      title: "Advanced Tester SQL",
      official: "CTEs, Window Functions and Bug Evidence",
      summary: "Use CTEs, CASE, COALESCE, window functions, and focused evidence queries for real project work.",
      weight: 3,
      minutes: 80,
      accent: "#b7791f",
      keywords: ["cte", "case", "coalesce", "window", "rank", "evidence"],
      sections: [
        {
          code: "SQL-6.1",
          heading: "Readable advanced queries",
          body:
            "Advanced SQL for testers should remain readable. CTEs can split a difficult check into named steps that are easier to review.",
          bullets: [
            "Use CTEs to calculate order totals before averaging or ranking.",
            "Use CASE to include or exclude values based on status.",
            "Use COALESCE to display zero instead of NULL when that matches the requirement."
          ],
          exam: "Readable evidence is more valuable than clever SQL."
        },
        {
          code: "SQL-6.2",
          heading: "Window functions for ranking and comparison",
          body:
            "Window functions calculate values across related rows without collapsing the result like GROUP BY.",
          bullets: [
            "DENSE_RANK can rank customers by spending.",
            "ROW_NUMBER can help find latest record per entity.",
            "Use window functions when you need row detail plus calculated context."
          ],
          exam: "GROUP BY collapses rows; window functions can keep row-level detail."
        }
      ],
      viSections: [
        {
          code: "SQL-6.1",
          heading: "Advanced query nhưng vẫn dễ đọc",
          body:
            "SQL nâng cao cho tester vẫn nên dễ đọc. CTE giúp tách check khó thành các bước có tên rõ ràng.",
          bullets: [
            "Dùng CTE để tính order total trước khi average hoặc rank.",
            "Dùng CASE để include/exclude theo status.",
            "Dùng COALESCE để hiển thị 0 thay vì NULL nếu requirement yêu cầu."
          ],
          exam: "Evidence dễ hiểu giá trị hơn SQL quá thông minh nhưng khó review."
        },
        {
          code: "SQL-6.2",
          heading: "Window function cho rank và so sánh",
          body:
            "Window function tính giá trị trên các row liên quan mà không collapse result như GROUP BY.",
          bullets: [
            "DENSE_RANK rank customer theo spending.",
            "ROW_NUMBER giúp tìm record mới nhất mỗi entity.",
            "Dùng window function khi cần giữ row detail kèm context tính toán."
          ],
          exam: "GROUP BY gom row; window function có thể giữ detail từng row."
        }
      ],
      terms: [
        ["CTE", "A named temporary result inside a SQL statement."],
        ["Window function", "A function that calculates across a set of related rows while preserving row detail."]
      ],
      viTerms: [
        ["CTE", "Kết quả tạm có tên bên trong một SQL statement."],
        ["Window function", "Function tính trên nhóm row liên quan nhưng vẫn giữ detail từng row."]
      ],
      labs: [
        {
          id: "sql-lab-9",
          level: "Advanced",
          title: "Average paid order total",
          scenario: "Finance report hiển thị average paid order total.",
          tasks: ["Dùng CTE tính total mỗi paid order.", "AVG trên các total đó.", "Verify CANCELLED/PENDING không bị tính."],
          expected: ["Average chỉ tính PAID order"],
          code:
            "WITH order_totals AS (\n  SELECT o.order_id, SUM(oi.quantity * oi.unit_price) AS order_total\n  FROM orders o\n  JOIN order_items oi ON oi.order_id = o.order_id\n  WHERE o.status = 'PAID'\n  GROUP BY o.order_id\n)\nSELECT AVG(order_total) AS average_paid_order_total\nFROM order_totals;",
          takeaway: "CTE làm query evidence dễ review hơn."
        },
        {
          id: "sql-lab-10",
          level: "Project",
          title: "Rank customers by paid spending",
          scenario: "Loyalty report rank customer theo spending đã thanh toán.",
          tasks: ["Join customer, orders, order_items.", "Chỉ tính PAID.", "Dùng DENSE_RANK theo paid_total DESC.", "Verify customer không mua vẫn xuất hiện nếu requirement cần."],
          expected: ["Customer rank đúng theo paid_total"],
          code:
            "SELECT c.name,\n       COALESCE(SUM(CASE WHEN o.status = 'PAID' THEN oi.quantity * oi.unit_price ELSE 0 END), 0) AS paid_total,\n       DENSE_RANK() OVER (\n         ORDER BY COALESCE(SUM(CASE WHEN o.status = 'PAID' THEN oi.quantity * oi.unit_price ELSE 0 END), 0) DESC\n       ) AS rank_no\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.customer_id\nLEFT JOIN order_items oi ON oi.order_id = o.order_id\nGROUP BY c.customer_id, c.name;",
          takeaway: "Đây là dạng SQL đủ dùng cho tester verify report nâng cao trong dự án thật."
        }
      ]
    }
  ];

  const apiTemplates = [
    (s, i) => makeQuestion("api", s, i, 1, "Basic", "Which part of an API request identifies the action to perform?", "HTTP method", ["Response body", "Status code", "Server log"], "Method như GET/POST/PUT/PATCH/DELETE nói API cần làm hành động gì."),
    (s, i) => makeQuestion("api", s, i, 1, "Basic", `A GET ${pick(apiContext.endpoint, s)} response returns 200 but a required field is missing. What should the tester do?`, "Log a defect because transport success does not guarantee business correctness", ["Pass the test because status is 200", "Ignore the missing field if response time is fast", "Change the API documentation without evidence"], "HTTP 200 chỉ nói request xử lý thành công ở tầng giao thức; vẫn phải verify schema/data."),
    (s, i) => makeQuestion("api", s, i, 1, "Basic", "Which evidence is most useful for reproducing an API defect?", "Method, endpoint, headers, request body, expected result, actual result, and environment", ["Only the tester name", "Only a screenshot of the dashboard", "Only the severity value"], "Bug API cần đủ request/response và environment để developer reproduce."),
    (s, i) => makeQuestion("api", s, i, 2, "Basic", "Which HTTP method is normally used to retrieve data without changing server state?", "GET", ["POST", "PATCH", "DELETE"], "GET dùng để lấy dữ liệu và không nên đổi state server."),
    (s, i) => makeQuestion("api", s, i, 2, "Basic", "A request is valid and creates a new resource. Which status code is commonly expected?", "201 Created", ["404 Not Found", "401 Unauthorized", "500 Internal Server Error"], "Create thành công thường dùng 201, dù project có thể định nghĩa khác trong contract."),
    (s, i) => makeQuestion("api", s, i, 2, "Intermediate", "A negative test sends an unknown id and receives 404 as specified. What is the test result?", "Pass, because the expected error was returned", ["Fail, because every API test must return 200", "Blocked, because 404 cannot be verified", "Pass only if a database row is created"], "Negative test pass khi API reject đúng theo expected."),
    (s, i) => makeQuestion("api", s, i, 2, "Intermediate", "Which status code best fits an authenticated user who is not allowed to access a resource?", "403 Forbidden", ["401 Unauthorized", "201 Created", "302 Found"], "Đã xác thực nhưng không có quyền thường là 403."),
    (s, i) => makeQuestion("api", s, i, 3, "Intermediate", `Which request element is most likely used for pagination in ${pick(apiContext.endpoint, s)}?`, "Query parameters such as limit and skip", ["Response status text", "Server CPU usage", "TLS certificate issuer"], "Pagination thường nằm ở query parameter như limit/page/skip."),
    (s, i) => makeQuestion("api", s, i, 3, "Intermediate", "Which test best checks JSON schema validation?", "Verify required fields, data types, arrays, nested objects, and allowed enum values", ["Verify only that status is 200", "Verify only that response time is under 1 second", "Verify only that the endpoint name is short"], "Schema validation tập trung vào cấu trúc và kiểu dữ liệu."),
    (s, i) => makeQuestion("api", s, i, 3, "Intermediate", "A price field accepts 1 to 999. Which set is best for boundary-oriented API checks?", "0, 1, 2, 998, 999, 1000", ["1, 500, 999 only", "100, 200, 300 only", "999, 1000 only"], "Boundary test cần quanh min/max, gồm ngoài biên và trong biên."),
    (s, i) => makeQuestion("api", s, i, 3, "Intermediate", `Which header is commonly used to send a bearer token?`, "Authorization", ["Content-Length", "Accept-Language only", "Cache-Control only"], "Bearer token thường gửi trong Authorization header."),
    (s, i) => makeQuestion("api", s, i, 4, "Intermediate", "A request has no token and the endpoint requires login. Which status code is usually expected?", "401 Unauthorized", ["403 Forbidden", "201 Created", "409 Conflict"], "Chưa xác thực thường là 401."),
    (s, i) => makeQuestion("api", s, i, 4, "Advanced", "Which scenario is a strong authorization test?", "User A tries to access User B's private resource in an approved test environment", ["User A updates their own nickname", "A public endpoint returns documentation", "A tester changes browser zoom level"], "Access-control boundary là một nhóm test API quan trọng."),
    (s, i) => makeQuestion("api", s, i, 4, "Advanced", "Which response is a sensitive data exposure risk?", "A user API returns passwordHash or accessToken in a list response", ["A product API returns product title", "A status API returns 200", "A search API returns total count"], "Response không nên lộ password hash, token hoặc dữ liệu nhạy cảm không cần thiết."),
    (s, i) => makeQuestion("api", s, i, 5, "Advanced", "Which change is most likely a breaking API contract change?", "Changing a response field type from number to string", ["Adding an optional response field", "Improving internal logging", "Adding a dashboard for testers"], "Client có thể hỏng nếu field type đổi."),
    (s, i) => makeQuestion("api", s, i, 5, "Advanced", "When a third-party payment dependency is unavailable, what test double can help focused testing?", "A mock or stub", ["A production customer account", "A random browser bookmark", "A color palette"], "Mock/stub giúp kiểm soát dependency khi test."),
    (s, i) => makeQuestion("api", s, i, 5, "Advanced", "Why are end-to-end API tests often limited in number?", "They are valuable but slower, more fragile, and depend on many systems", ["They never find defects", "They cannot check business rules", "They require no environment"], "E2E hữu ích nhưng dễ chậm/flaky nên cần chọn lọc."),
    (s, i) => makeQuestion("api", s, i, 6, "Project", "Which API defect title is clearest?", "[API] POST /auth/login returns 200 without accessToken for valid credentials", ["API broken", "Login bad", "Please fix server"], "Title tốt nêu endpoint, hành vi sai và điều kiện chính."),
    (s, i) => makeQuestion("api", s, i, 6, "Project", "Which item belongs in an API bug report?", "Correlation id or timestamp when available", ["The tester's favorite theme", "A guess without evidence", "A password from production"], "Correlation id/timestamp giúp trace log và reproduce."),
    (s, i) => makeQuestion("api", s, i, 6, "Project", "Which API checks are best automation candidates?", "Stable, high-value regression checks with maintainable test data", ["One-time exploratory ideas", "Flaky checks nobody can maintain", "Tests depending on private production data"], "Automation nên ưu tiên check ổn định, giá trị cao và maintain được.")
  ];

  const sqlTemplates = [
    (s, i) => makeQuestion("sql", s, i, 1, "Basic", "Which SQL statement is safest for a manual tester verifying data in a shared environment?", "SELECT", ["DELETE", "DROP TABLE", "TRUNCATE"], "Manual tester thường dùng SELECT để verify, tránh thay đổi dữ liệu nếu không được phép."),
    (s, i) => makeQuestion("sql", s, i, 1, "Basic", "What does a primary key do?", "Uniquely identifies a row", ["Sorts rows alphabetically", "Encrypts a table", "Deletes duplicate rows automatically"], "Primary key định danh duy nhất một row."),
    (s, i) => makeQuestion("sql", s, i, 1, "Basic", "What is the grain of a result set?", "What one row represents", ["The database password strength", "The UI color theme", "The physical server size"], "Grain giúp biết mỗi row đang là customer/order/item/report group."),
    (s, i) => makeQuestion("sql", s, i, 2, "Basic", `Which clause filters rows from ${pick(sqlContext.table, s)} before grouping?`, "WHERE", ["ORDER BY", "HAVING only", "SELECT DISTINCT only"], "WHERE lọc row trước khi group."),
    (s, i) => makeQuestion("sql", s, i, 2, "Basic", "Which predicate correctly checks missing values?", "IS NULL", ["= NULL", "LIKE NULL", "BETWEEN NULL"], "NULL phải dùng IS NULL/IS NOT NULL."),
    (s, i) => makeQuestion("sql", s, i, 2, "Basic", "Which clause sorts query results?", "ORDER BY", ["WHERE", "FROM", "JOIN"], "ORDER BY dùng để sort result."),
    (s, i) => makeQuestion("sql", s, i, 2, "Intermediate", "A report should include only paid orders. Which filter is most relevant?", "WHERE status = 'PAID'", ["WHERE status IS NULL", "ORDER BY status", "GROUP BY status only"], "Status filter sai là nguồn bug report phổ biến."),
    (s, i) => makeQuestion("sql", s, i, 3, "Intermediate", "Which JOIN keeps all customers even when they have no orders?", "LEFT JOIN from customers to orders", ["INNER JOIN only", "CROSS JOIN only", "JOIN without ON"], "LEFT JOIN giữ toàn bộ row bên trái."),
    (s, i) => makeQuestion("sql", s, i, 3, "Intermediate", "Which query pattern finds orphan child rows?", "LEFT JOIN parent table and filter parent key IS NULL", ["ORDER BY parent key", "GROUP BY all child columns only", "SELECT without FROM"], "Orphan check dùng LEFT JOIN + IS NULL."),
    (s, i) => makeQuestion("sql", s, i, 3, "Intermediate", "What is a common risk of a wrong JOIN condition?", "Duplicated rows and inflated totals", ["Faster browser rendering", "Automatic bug fixing", "Password reset"], "JOIN sai có thể nhân row và làm sum/count sai."),
    (s, i) => makeQuestion("sql", s, i, 4, "Intermediate", "Which aggregate calculates total revenue?", "SUM(quantity * unit_price)", ["COUNT(status = 'PAID') only", "ORDER BY revenue", "WHERE revenue"], "Revenue thường là SUM của quantity * unit_price."),
    (s, i) => makeQuestion("sql", s, i, 4, "Intermediate", "Which clause filters groups after aggregation?", "HAVING", ["WHERE", "FROM", "ON"], "HAVING lọc sau GROUP BY."),
    (s, i) => makeQuestion("sql", s, i, 4, "Intermediate", "A report needs one row per product category. What should be in GROUP BY?", "The category column", ["The order_id only", "Every row number", "The database name"], "GROUP BY phải khớp level của report."),
    (s, i) => makeQuestion("sql", s, i, 4, "Advanced", "Why should cancelled orders usually be filtered out of revenue reports?", "They should not contribute to paid revenue unless requirements say otherwise", ["They always have no rows", "SQL cannot read cancelled data", "Cancelled means the database is offline"], "Revenue paid thường cần filter status PAID."),
    (s, i) => makeQuestion("sql", s, i, 5, "Advanced", "Which query pattern finds duplicate business keys?", "GROUP BY business key HAVING COUNT(*) > 1", ["ORDER BY business key only", "WHERE business key = NULL", "SELECT TOP 1 only"], "Duplicate check dùng GROUP BY + HAVING COUNT."),
    (s, i) => makeQuestion("sql", s, i, 5, "Advanced", "Which check is useful in migration testing?", "Compare source and target counts, totals, missing records, and sampled transformed values", ["Only check the new UI color", "Only trust a verbal confirmation", "Delete old data first"], "Migration testing cần count, total, missing và sample record."),
    (s, i) => makeQuestion("sql", s, i, 5, "Advanced", "What is an orphan record?", "A child row whose parent row is missing", ["A row with a long name", "A query with ORDER BY", "A report with a title"], "Orphan record là row con thiếu parent tương ứng."),
    (s, i) => makeQuestion("sql", s, i, 6, "Advanced", "Why use a CTE in a tester evidence query?", "To split a complex check into readable named steps", ["To hide wrong results", "To change production data faster", "To avoid all joins"], "CTE giúp query dễ đọc và review."),
    (s, i) => makeQuestion("sql", s, i, 6, "Advanced", "Which function can rank customers by paid spending while keeping row detail?", "DENSE_RANK window function", ["DROP TABLE", "IS NULL", "LIKE"], "Window function có thể tính rank mà vẫn giữ row detail."),
    (s, i) => makeQuestion("sql", s, i, 6, "Project", "What makes SQL evidence useful in a bug report?", "Focused query, expected result, actual result, environment, and clear business meaning", ["A very long query with no explanation", "A screenshot without query", "Changing data before reporting"], "Evidence tốt cần query tập trung và giải thích business meaning.")
  ];

  window.EXTRA_COURSES = {
    api: {
      id: "api",
      title: "API Testing for Testers",
      subtitle: "HTTP, validation, auth, contracts and reporting",
      type: "extra",
      accent: "#0f766e",
      stats: [
        ["Modules", "6"],
        ["Quiz Sets", "5"],
        ["Level", "Basic-Advanced"]
      ],
      footerNote: "API content is built for manual and QA testers who need project-ready API testing skills.",
      modules: apiModules,
      quizExams: buildQuizzes("api", "API Testing", apiTemplates)
    },
    sql: {
      id: "sql",
      title: "SQL for Testers",
      subtitle: "Data verification, reports, joins and evidence",
      type: "extra",
      accent: "#4338ca",
      stats: [
        ["Modules", "6"],
        ["Quiz Sets", "5"],
        ["Level", "Basic-Advanced"]
      ],
      footerNote: "SQL content is focused on practical verification, report testing and bug evidence for testers.",
      modules: sqlModules,
      quizExams: buildQuizzes("sql", "SQL for Testers", sqlTemplates)
    }
  };
})();
