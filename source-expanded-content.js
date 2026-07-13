(function () {
  const apiSourceLinks = [
    {
      label: "Anh Tester - API Testing with Postman",
      url: "https://anhtester.com/blog/category/api-testing-with-postman"
    },
    {
      label: "Anh Tester YouTube",
      url: "https://www.youtube.com/@AnhTester"
    },
    {
      label: "Postman Learning Center",
      url: "https://learning.postman.com"
    },
    {
      label: "Restful Booker API Docs",
      url: "https://restful-booker.herokuapp.com/apidoc/index.html"
    }
  ];

  const sqlSourceLinks = [
    {
      label: "W3Schools SQL Tutorial",
      url: "https://www.w3schools.com/sql/default.asp"
    },
    {
      label: "VietTuts SQL",
      url: "https://viettuts.vn/sql"
    },
    {
      label: "SQLZoo SQL Tutorial",
      url: "https://sqlzoo.net/wiki/SQL_Tutorial"
    }
  ];

  function mergeCourse(courseId, links, patches, footerNote) {
    const course = window.EXTRA_COURSES && window.EXTRA_COURSES[courseId];
    if (!course) return;

    course.sourceLinks = links;
    course.footerNote = footerNote;
    course.modules.forEach((module) => {
      const patch = patches.find((item) => String(item.id) === String(module.id));
      if (patch) Object.assign(module, patch);
    });
  }

  const apiPatches = [
    {
      id: 1,
      sourceNote:
        "Expanded from Anh Tester's API/Postman learning path, Postman Learning Center fundamentals, and real endpoint vocabulary from Restful Booker.",
      viSourceNote:
        "Nội dung được tổng hợp từ lộ trình API/Postman của Anh Tester, Postman Learning Center và cách gọi API thực tế trong Restful Booker.",
      sections: [
        {
          code: "API-1.1",
          heading: "What an API is",
          body:
            "An API is an interface that lets one software component request data or actions from another component without knowing the internal implementation.",
          bullets: [
            "A mobile app, web UI, scheduled job, or another backend service can act as the API client.",
            "The API provider exposes agreed operations through URLs, request rules, and response rules.",
            "For testers, the important idea is contract behavior: given this request, the system should return this result."
          ],
          exam: "Do not treat API testing as only checking status codes. The business contract matters just as much."
        },
        {
          code: "API-1.2",
          heading: "Why testers test APIs",
          body:
            "API testing finds defects earlier than UI-only testing because many business rules, data validations, and integrations live behind the screen.",
          bullets: [
            "A failed API rule can break multiple screens and integrations at the same time.",
            "API tests can cover negative data, missing fields, and authorization cases that are hard to reproduce through the UI.",
            "API evidence is precise because it includes the exact request and response."
          ],
          exam: "When a UI defect appears, checking the API helps separate frontend display bugs from backend behavior bugs."
        },
        {
          code: "API-1.3",
          heading: "Client, server, and request-response flow",
          body:
            "Most tester-facing API work follows a request-response model: the client sends a request, the server processes it, and the server returns a response.",
          bullets: [
            "The request carries method, URL, headers, parameters, and sometimes a body.",
            "The response carries status code, headers, body, and timing information.",
            "Logs, correlation ids, and timestamps help connect a request to backend processing."
          ],
          exam: "A reproducible API bug needs enough request-response detail for another person to run the same call."
        },
        {
          code: "API-1.4",
          heading: "REST resources and endpoints",
          body:
            "REST-style APIs usually model business objects as resources, such as bookings, users, products, or orders, and expose them through endpoint paths.",
          bullets: [
            "A base URL identifies the service host, such as a test environment.",
            "An endpoint path identifies the resource or operation, such as /booking or /booking/{id}.",
            "Path parameters usually identify a specific resource, while query parameters filter or change the list result."
          ],
          exam: "When designing tests, name the resource, the operation, and the expected state after the call."
        },
        {
          code: "API-1.5",
          heading: "API testing versus UI testing",
          body:
            "UI testing verifies what the user sees and does, while API testing verifies the service behavior directly. A complete tester uses both views.",
          bullets: [
            "API tests are usually faster and more focused for data validation and business rules.",
            "UI tests are still needed for layout, navigation, accessibility, and user workflow confidence.",
            "A strong test strategy avoids duplicating every UI case at API level; it places checks where they are most valuable."
          ],
          exam: "Use API tests for broad rule coverage and UI tests for critical end-to-end user confidence."
        },
        {
          code: "API-1.6",
          heading: "Minimum API test evidence",
          body:
            "Good API evidence lets a developer, tester, or future you reproduce the same behavior without guessing.",
          bullets: [
            "Capture environment, method, full URL, headers, request body, expected result, actual result, status code, and response body.",
            "Include sample IDs only from test data, never from production customer data.",
            "Attach Postman collection, curl command, or raw request-response text when possible."
          ],
          exam: "A bug title like POST /auth returns 200 without token is more useful than API login broken."
        }
      ],
      viSections: [
        {
          code: "API-1.1",
          heading: "API là gì",
          body:
            "API là giao diện để một phần mềm yêu cầu dữ liệu hoặc hành động từ phần mềm khác mà không cần biết bên trong nó code như thế nào.",
          bullets: [
            "Client có thể là mobile app, web UI, job chạy định kỳ hoặc một backend service khác.",
            "Bên cung cấp API đưa ra URL, rule của request và rule của response.",
            "Với tester, điểm quan trọng là contract: gửi request này thì hệ thống phải trả kết quả này."
          ],
          exam: "Đừng test API chỉ bằng status code. Business contract cũng quan trọng ngang status."
        },
        {
          code: "API-1.2",
          heading: "Vì sao tester cần test API",
          body:
            "API testing giúp bắt lỗi sớm hơn test UI đơn thuần vì nhiều business rule, validation và tích hợp nằm ở phía sau màn hình.",
          bullets: [
            "Một lỗi API có thể làm hỏng nhiều màn hình hoặc nhiều hệ thống tích hợp cùng lúc.",
            "API dễ test negative data, thiếu field, sai quyền hơn thao tác qua UI.",
            "Evidence API rõ vì có request và response cụ thể."
          ],
          exam: "Khi thấy lỗi UI, kiểm tra API giúp tách lỗi frontend khỏi lỗi backend."
        },
        {
          code: "API-1.3",
          heading: "Luồng client, server và request-response",
          body:
            "Phần lớn công việc API của tester đi theo mô hình request-response: client gửi request, server xử lý, rồi server trả response.",
          bullets: [
            "Request có method, URL, header, parameter và đôi khi có body.",
            "Response có status code, header, body và thời gian phản hồi.",
            "Log, correlation id và timestamp giúp nối request với xử lý backend."
          ],
          exam: "Bug API muốn reproduce được thì phải đủ chi tiết request-response."
        },
        {
          code: "API-1.4",
          heading: "REST resource và endpoint",
          body:
            "API kiểu REST thường mô hình hóa business object thành resource như booking, user, product, order và expose qua endpoint path.",
          bullets: [
            "Base URL xác định service host, ví dụ môi trường test.",
            "Endpoint path xác định resource hoặc operation, ví dụ /booking hoặc /booking/{id}.",
            "Path parameter thường định danh một resource; query parameter thường dùng để filter hoặc điều khiển list result."
          ],
          exam: "Khi thiết kế test, hãy ghi rõ resource, operation và state mong đợi sau khi gọi API."
        },
        {
          code: "API-1.5",
          heading: "API testing khác UI testing như thế nào",
          body:
            "UI testing kiểm tra thứ user nhìn thấy và thao tác, còn API testing kiểm tra trực tiếp hành vi service. Tester tốt dùng cả hai góc nhìn.",
          bullets: [
            "API test thường nhanh và tập trung hơn cho data validation và business rule.",
            "UI test vẫn cần cho layout, navigation, accessibility và confidence của workflow người dùng.",
            "Test strategy tốt không duplicate mọi case UI xuống API; nó đặt check ở tầng có giá trị nhất."
          ],
          exam: "Dùng API test để cover rule rộng, dùng UI test cho luồng end-to-end quan trọng."
        },
        {
          code: "API-1.6",
          heading: "Evidence tối thiểu khi test API",
          body:
            "Evidence API tốt giúp developer, tester khác hoặc chính bạn sau này chạy lại hành vi mà không phải đoán.",
          bullets: [
            "Ghi environment, method, full URL, header, request body, expected, actual, status code và response body.",
            "Chỉ dùng ID từ test data, không dùng dữ liệu khách hàng production.",
            "Nếu có thể, đính kèm Postman collection, curl command hoặc raw request-response."
          ],
          exam: "Bug title như POST /auth returns 200 without token hữu ích hơn API login broken."
        }
      ],
      terms: [
        ["API", "A defined interface for software-to-software communication."],
        ["Client", "The caller that sends a request to an API."],
        ["Server", "The service that processes the request and returns a response."],
        ["Endpoint", "A URL path that exposes a resource or operation."],
        ["Contract", "The expected request and response behavior agreed by API users and providers."]
      ],
      viTerms: [
        ["API", "Giao diện được định nghĩa để phần mềm giao tiếp với phần mềm khác."],
        ["Client", "Bên gửi request tới API."],
        ["Server", "Service xử lý request và trả response."],
        ["Endpoint", "Đường dẫn URL đại diện cho resource hoặc operation."],
        ["Contract", "Hành vi request và response được thống nhất giữa bên dùng và bên cung cấp API."]
      ]
    },
    {
      id: 2,
      sourceNote:
        "Expanded from HTTP method/status-code practice in API testing tutorials, Postman request concepts, and Restful Booker CRUD endpoints.",
      viSourceNote:
        "Nội dung mở rộng từ cách dùng HTTP method/status code, khái niệm request trong Postman và các endpoint CRUD của Restful Booker.",
      sections: [
        {
          code: "API-2.1",
          heading: "GET, POST, PUT, PATCH, and DELETE",
          body:
            "HTTP methods communicate the intended action. The method is part of the contract and should match the business operation being tested.",
          bullets: [
            "GET retrieves data and should not change server state.",
            "POST commonly creates a resource or triggers an action.",
            "PUT usually replaces a full resource, while PATCH changes selected fields.",
            "DELETE removes, cancels, or deactivates a resource depending on the business rule."
          ],
          exam: "If an API creates data with GET, that is unusual and must be explicitly documented."
        },
        {
          code: "API-2.2",
          heading: "Safe and idempotent behavior",
          body:
            "A safe method should not change data, and an idempotent method should have the same effect when repeated with the same input.",
          bullets: [
            "GET should be safe: repeated reads should not create orders or update counters that matter to business state.",
            "PUT and DELETE are commonly designed to be idempotent, but testers should confirm the actual contract.",
            "POST is often not idempotent unless the API uses an idempotency key or equivalent rule."
          ],
          exam: "Repeated requests are useful tests for duplicate creation, double payment, and retry behavior."
        },
        {
          code: "API-2.3",
          heading: "Success status codes",
          body:
            "2xx status codes indicate transport-level success, but each code has a different meaning that affects expected test assertions.",
          bullets: [
            "200 OK is common for successful reads and updates that return a body.",
            "201 Created is common when a resource is created.",
            "204 No Content is common when an action succeeds but no body is returned.",
            "A successful status still needs body, data, and side-effect verification."
          ],
          exam: "Passing because status is 200 without checking returned data is a weak API test."
        },
        {
          code: "API-2.4",
          heading: "Client error status codes",
          body:
            "4xx status codes usually mean the request, authentication, authorization, or target resource is wrong from the API's point of view.",
          bullets: [
            "400 Bad Request usually means invalid syntax, missing fields, or failed validation.",
            "401 Unauthorized usually means the caller is not authenticated.",
            "403 Forbidden usually means the caller is authenticated but not allowed.",
            "404 Not Found means the target route or resource cannot be found."
          ],
          exam: "A negative test can pass when the expected 4xx response and error body are returned."
        },
        {
          code: "API-2.5",
          heading: "Conflict and validation errors",
          body:
            "Some APIs use more specific error codes when the request is structurally valid but cannot be accepted by business rules.",
          bullets: [
            "409 Conflict is often used for duplicate resources, version conflicts, or invalid state transitions.",
            "422 Unprocessable Entity is often used when the JSON is valid but business validation fails.",
            "The project contract decides the exact code; testers should verify consistency, not personal preference."
          ],
          exam: "The most important point is predictable, documented error behavior across similar endpoints."
        },
        {
          code: "API-2.6",
          heading: "Server errors and defect triage",
          body:
            "5xx responses indicate that the server or upstream dependency failed to process a request it should have handled safely.",
          bullets: [
            "500 errors for normal negative input often indicate weak validation or poor error handling.",
            "502, 503, and 504 can appear when gateway, dependency, or timeout issues happen.",
            "When logging a 5xx defect, include timestamp, correlation id, environment, and minimal request data."
          ],
          exam: "Invalid user input should normally be rejected as a controlled 4xx, not explode into an unhandled 5xx."
        }
      ],
      viSections: [
        {
          code: "API-2.1",
          heading: "GET, POST, PUT, PATCH và DELETE",
          body:
            "HTTP method cho biết hành động muốn thực hiện. Method là một phần của contract và phải khớp với nghiệp vụ đang test.",
          bullets: [
            "GET dùng để lấy dữ liệu và không nên làm đổi state server.",
            "POST thường dùng để tạo resource hoặc kích hoạt action.",
            "PUT thường thay thế toàn bộ resource, PATCH chỉ sửa một số field.",
            "DELETE có thể xóa, hủy hoặc deactivate resource tùy business rule."
          ],
          exam: "Nếu API tạo dữ liệu bằng GET thì rất bất thường và phải được document rõ."
        },
        {
          code: "API-2.2",
          heading: "Safe và idempotent",
          body:
            "Safe method không nên thay đổi dữ liệu; idempotent method khi gọi lặp lại cùng input thì effect vẫn như gọi một lần.",
          bullets: [
            "GET nên safe: đọc lại nhiều lần không được tạo order hoặc cập nhật state nghiệp vụ.",
            "PUT và DELETE thường được thiết kế idempotent, nhưng tester vẫn phải theo contract dự án.",
            "POST thường không idempotent nếu không có idempotency key hoặc rule tương đương."
          ],
          exam: "Gọi lặp request rất hữu ích để bắt lỗi tạo trùng, thanh toán trùng và retry."
        },
        {
          code: "API-2.3",
          heading: "Success status code",
          body:
            "Nhóm 2xx thể hiện request thành công ở tầng giao thức, nhưng mỗi code có ý nghĩa riêng và ảnh hưởng đến expected assertion.",
          bullets: [
            "200 OK thường gặp khi đọc hoặc update có trả body.",
            "201 Created thường gặp khi tạo resource.",
            "204 No Content thường gặp khi action thành công nhưng không trả body.",
            "Status success vẫn cần verify body, data và side effect."
          ],
          exam: "Pass test chỉ vì status 200 mà không check data là API test yếu."
        },
        {
          code: "API-2.4",
          heading: "Client error status code",
          body:
            "Nhóm 4xx thường nghĩa là request, xác thực, phân quyền hoặc resource đích có vấn đề từ góc nhìn API.",
          bullets: [
            "400 Bad Request thường do sai format, thiếu field hoặc fail validation.",
            "401 Unauthorized thường do caller chưa được xác thực.",
            "403 Forbidden thường do caller đã login nhưng không có quyền.",
            "404 Not Found nghĩa là route hoặc resource không tìm thấy."
          ],
          exam: "Negative test có thể pass khi API trả đúng 4xx và error body như expected."
        },
        {
          code: "API-2.5",
          heading: "Conflict và validation error",
          body:
            "Một số API dùng error code cụ thể hơn khi request hợp lệ về cấu trúc nhưng không được chấp nhận theo business rule.",
          bullets: [
            "409 Conflict thường dùng cho duplicate resource, version conflict hoặc state transition không hợp lệ.",
            "422 Unprocessable Entity thường dùng khi JSON hợp lệ nhưng fail business validation.",
            "Contract dự án quyết định code chính xác; tester cần verify tính nhất quán thay vì sở thích cá nhân."
          ],
          exam: "Điểm quan trọng nhất là error behavior dự đoán được và nhất quán giữa các endpoint tương tự."
        },
        {
          code: "API-2.6",
          heading: "Server error và triage defect",
          body:
            "Nhóm 5xx cho thấy server hoặc dependency không xử lý được request mà lẽ ra phải xử lý an toàn.",
          bullets: [
            "500 khi gửi input negative bình thường thường là dấu hiệu validation yếu hoặc error handling kém.",
            "502, 503, 504 có thể xuất hiện khi gateway, dependency hoặc timeout có vấn đề.",
            "Khi log bug 5xx, hãy kèm timestamp, correlation id, environment và request data tối thiểu."
          ],
          exam: "Input sai của user thường nên bị reject bằng 4xx có kiểm soát, không nên nổ thành 5xx."
        }
      ],
      terms: [
        ["Safe method", "A method expected not to change server state."],
        ["Idempotent", "A request behavior where repeating the same call has the same effect as one call."],
        ["2xx", "Status-code class for successful HTTP processing."],
        ["4xx", "Status-code class for request, authentication, authorization, or resource problems."],
        ["5xx", "Status-code class for server-side processing failure."]
      ],
      viTerms: [
        ["Safe method", "Method được kỳ vọng không làm thay đổi state server."],
        ["Idempotent", "Gọi lặp cùng request có effect giống gọi một lần."],
        ["2xx", "Nhóm status code cho xử lý HTTP thành công."],
        ["4xx", "Nhóm status code cho lỗi request, authentication, authorization hoặc resource."],
        ["5xx", "Nhóm status code cho lỗi xử lý phía server."]
      ]
    },
    {
      id: 3,
      sourceNote:
        "Expanded from Postman request-building concepts and API validation patterns commonly practiced in tester-focused Postman courses.",
      viSourceNote:
        "Nội dung mở rộng từ cách build request trong Postman và các pattern validation API thường dùng trong khóa học Postman cho tester.",
      sections: [
        {
          code: "API-3.1",
          heading: "Path parameters and query parameters",
          body:
            "Parameters control what resource is targeted and how a result set is filtered, sorted, searched, or paginated.",
          bullets: [
            "Path parameters usually identify a single resource, such as /booking/123.",
            "Query parameters usually modify a collection result, such as status=paid or page=2.",
            "Test missing, invalid, unsupported, duplicated, and combined parameter values."
          ],
          exam: "For list endpoints, combine filter, sort, and pagination because many defects appear only in combinations."
        },
        {
          code: "API-3.2",
          heading: "Headers and content negotiation",
          body:
            "Headers carry metadata such as content type, accepted response format, authorization, tracing, caching, and idempotency information.",
          bullets: [
            "Content-Type tells the server how to parse the request body.",
            "Accept tells the server what response format the client expects.",
            "Authorization often carries tokens or credentials for protected endpoints.",
            "Correlation and request ids help trace one call through logs."
          ],
          exam: "A wrong or missing Content-Type can produce validation failures even when the JSON body looks correct."
        },
        {
          code: "API-3.3",
          heading: "JSON body design",
          body:
            "The request body should be tested as structured data, not as a random text blob. Each field can have type, format, allowed value, and relationship rules.",
          bullets: [
            "Check required versus optional fields.",
            "Check string length, number range, date format, boolean values, arrays, and nested objects.",
            "Check cross-field rules, such as checkout date being after checkin date."
          ],
          exam: "A field can be present and still be wrong because its value violates a business rule."
        },
        {
          code: "API-3.4",
          heading: "Response schema validation",
          body:
            "Schema validation verifies that a response has the expected structure and data types before deeper business assertions are applied.",
          bullets: [
            "Validate field presence, type, nullability, arrays, nested objects, and enum values.",
            "Make schema rules strict enough to catch breaking changes but not so brittle that harmless optional additions fail tests.",
            "Store reusable schema checks when multiple endpoints return the same object shape."
          ],
          exam: "Schema validation protects clients from unexpected structural changes."
        },
        {
          code: "API-3.5",
          heading: "Data validation beyond schema",
          body:
            "Passing schema does not prove the response is correct. Testers also verify values, calculations, ownership, and state transitions.",
          bullets: [
            "Verify ids, names, totals, currency, timestamps, status, and user ownership.",
            "Compare API response values with database records or another trusted service when appropriate.",
            "Check that create, update, and delete operations actually change state as expected."
          ],
          exam: "A response can pass schema and still return another user's data."
        },
        {
          code: "API-3.6",
          heading: "Boundary and equivalence for API fields",
          body:
            "Classic test design techniques still apply to APIs. Boundaries and equivalence partitions help avoid random input selection.",
          bullets: [
            "For a field with 1 to 999, test 0, 1, 2, 998, 999, and 1000.",
            "For enums, test each allowed value and at least one unsupported value.",
            "For optional fields, test omitted, null, empty, and valid values if the contract distinguishes them."
          ],
          exam: "Boundary values are often more defect-revealing than several middle values."
        },
        {
          code: "API-3.7",
          heading: "Postman collections and environments",
          body:
            "Postman helps testers organize requests into collections and move between environments using variables instead of hard-coded values.",
          bullets: [
            "Collections group related requests, examples, documentation, and tests.",
            "Environment variables store values such as baseUrl, token, userId, or bookingId.",
            "Pre-request scripts and tests can prepare data, save response values, and assert behavior."
          ],
          exam: "Using variables reduces mistakes when switching from dev to test or staging environments."
        }
      ],
      viSections: [
        {
          code: "API-3.1",
          heading: "Path parameter và query parameter",
          body:
            "Parameter quyết định resource nào được gọi và list result được filter, sort, search hoặc phân trang như thế nào.",
          bullets: [
            "Path parameter thường định danh một resource cụ thể, ví dụ /booking/123.",
            "Query parameter thường điều khiển collection result, ví dụ status=paid hoặc page=2.",
            "Hãy test parameter bị thiếu, sai, không support, bị lặp và các combination."
          ],
          exam: "Với endpoint dạng list, hãy kết hợp filter, sort và pagination vì nhiều lỗi chỉ xuất hiện khi kết hợp."
        },
        {
          code: "API-3.2",
          heading: "Header và content negotiation",
          body:
            "Header mang metadata như content type, format response mong muốn, authorization, tracing, caching và idempotency.",
          bullets: [
            "Content-Type cho server biết cách parse request body.",
            "Accept cho server biết client muốn response format nào.",
            "Authorization thường mang token hoặc credential cho endpoint cần bảo vệ.",
            "Correlation id hoặc request id giúp trace một call qua log."
          ],
          exam: "Content-Type sai hoặc thiếu có thể làm fail validation dù JSON body nhìn có vẻ đúng."
        },
        {
          code: "API-3.3",
          heading: "Thiết kế JSON body",
          body:
            "Request body cần được test như dữ liệu có cấu trúc, không phải một khối text ngẫu nhiên. Mỗi field có thể có rule về type, format, allowed value và quan hệ với field khác.",
          bullets: [
            "Kiểm tra field required và optional.",
            "Kiểm tra độ dài string, range của number, date format, boolean, array và nested object.",
            "Kiểm tra rule phụ thuộc giữa field, ví dụ checkout date phải sau checkin date."
          ],
          exam: "Field có thể tồn tại nhưng vẫn sai vì value vi phạm business rule."
        },
        {
          code: "API-3.4",
          heading: "Response schema validation",
          body:
            "Schema validation kiểm tra response có đúng cấu trúc và kiểu dữ liệu trước khi đi vào assertion nghiệp vụ sâu hơn.",
          bullets: [
            "Validate field presence, type, nullability, array, nested object và enum.",
            "Rule schema nên đủ chặt để bắt breaking change nhưng không quá giòn khiến field optional mới cũng fail.",
            "Nên tái sử dụng schema check khi nhiều endpoint trả cùng object shape."
          ],
          exam: "Schema validation bảo vệ client khỏi thay đổi cấu trúc bất ngờ."
        },
        {
          code: "API-3.5",
          heading: "Data validation ngoài schema",
          body:
            "Pass schema chưa chứng minh response đúng. Tester còn phải verify value, phép tính, ownership và state transition.",
          bullets: [
            "Verify id, name, total, currency, timestamp, status và user ownership.",
            "Khi phù hợp, so sánh response API với database hoặc trusted service khác.",
            "Kiểm tra create, update, delete có thật sự đổi state như expected không."
          ],
          exam: "Response có thể pass schema nhưng vẫn trả dữ liệu của user khác."
        },
        {
          code: "API-3.6",
          heading: "Boundary và equivalence cho field API",
          body:
            "Kỹ thuật thiết kế test cổ điển vẫn áp dụng tốt cho API. Boundary và equivalence partition giúp tránh chọn input ngẫu nhiên.",
          bullets: [
            "Field nhận 1 đến 999 thì test 0, 1, 2, 998, 999 và 1000.",
            "Với enum, test từng allowed value và ít nhất một unsupported value.",
            "Với optional field, test omitted, null, empty và valid nếu contract phân biệt các trường hợp này."
          ],
          exam: "Boundary value thường dễ lộ bug hơn nhiều giá trị nằm giữa."
        },
        {
          code: "API-3.7",
          heading: "Postman collection và environment",
          body:
            "Postman giúp tester gom request vào collection và chuyển môi trường bằng biến thay vì hard-code value.",
          bullets: [
            "Collection gom request liên quan, example, documentation và test.",
            "Environment variable lưu baseUrl, token, userId hoặc bookingId.",
            "Pre-request script và test script có thể chuẩn bị data, lưu value từ response và assert behavior."
          ],
          exam: "Dùng variable giảm lỗi khi chuyển từ dev sang test hoặc staging."
        }
      ],
      terms: [
        ["Path parameter", "A value inside the URL path, often identifying one resource."],
        ["Query parameter", "A URL parameter after ? that filters or changes the result set."],
        ["Header", "Request or response metadata."],
        ["JSON schema", "A structural expectation for fields, types, and nested objects."],
        ["Environment variable", "A reusable value that changes by environment."]
      ],
      viTerms: [
        ["Path parameter", "Giá trị nằm trong URL path, thường định danh một resource."],
        ["Query parameter", "Parameter sau dấu ? dùng để filter hoặc điều chỉnh result set."],
        ["Header", "Metadata của request hoặc response."],
        ["JSON schema", "Kỳ vọng cấu trúc về field, type và nested object."],
        ["Environment variable", "Giá trị tái sử dụng và thay đổi theo môi trường."]
      ]
    },
    {
      id: 4,
      sourceNote:
        "Expanded from Postman authorization concepts, tester security checks, and Restful Booker token-based update/delete flows.",
      viSourceNote:
        "Nội dung mở rộng từ authorization trong Postman, các security check cho tester và flow token khi update/delete của Restful Booker.",
      sections: [
        {
          code: "API-4.1",
          heading: "Authentication versus authorization",
          body:
            "Authentication verifies who the caller is. Authorization verifies what that caller is allowed to do after identity is known.",
          bullets: [
            "No valid identity usually leads to 401.",
            "Valid identity without permission usually leads to 403.",
            "A user being able to update another user's private data is an authorization defect."
          ],
          exam: "Login success is not proof that all access-control rules are correct."
        },
        {
          code: "API-4.2",
          heading: "Common API auth mechanisms",
          body:
            "Tester projects commonly use bearer tokens, basic auth, API keys, session cookies, or OAuth-style flows.",
          bullets: [
            "Bearer tokens are often sent in the Authorization header.",
            "API keys may be sent in headers or query parameters depending on the API contract.",
            "Cookies can be used when API calls are tied to a browser session.",
            "Never expose real secrets in shared screenshots, public repos, or public collections."
          ],
          exam: "Evidence should prove the auth scenario without leaking sensitive tokens."
        },
        {
          code: "API-4.3",
          heading: "Token lifecycle tests",
          body:
            "Token tests should cover valid tokens, missing tokens, expired tokens, malformed tokens, revoked tokens, and role changes.",
          bullets: [
            "A missing token should be rejected consistently.",
            "Expired or revoked tokens should not continue to access protected resources.",
            "Role changes should take effect according to the project's expected timing."
          ],
          exam: "A protected endpoint accepting an expired token is usually a serious defect."
        },
        {
          code: "API-4.4",
          heading: "Role and ownership boundaries",
          body:
            "Authorization testing needs role boundaries and ownership boundaries, not just one happy-path admin request.",
          bullets: [
            "Test user A reading or updating user B's private resource in a safe test environment.",
            "Test lower roles attempting admin-only actions.",
            "Test horizontal access and vertical privilege escalation separately."
          ],
          exam: "Horizontal access means same role, wrong owner; vertical access means wrong privilege level."
        },
        {
          code: "API-4.5",
          heading: "Sensitive data exposure",
          body:
            "APIs should return only the data needed by the caller and the feature. Extra fields can become privacy or security issues.",
          bullets: [
            "Watch for passwordHash, resetToken, accessToken, internal flags, cost fields, or unnecessary personal data.",
            "List endpoints are especially risky because one response can leak many records.",
            "Mask or omit secrets in logs, bug screenshots, and shared examples."
          ],
          exam: "Correct status code does not make a response safe if it leaks sensitive fields."
        },
        {
          code: "API-4.6",
          heading: "Negative and abuse-oriented testing",
          body:
            "Tester-level security work includes safe negative checks for invalid input, large payloads, repeated calls, unexpected content types, and unsupported methods.",
          bullets: [
            "Check that invalid JSON returns a controlled error.",
            "Check that unsupported methods are rejected consistently.",
            "Check that repeated create or payment-like calls do not cause unintended duplicates.",
            "Coordinate load, rate-limit, or abuse testing with the team before running high-volume calls."
          ],
          exam: "Security-minded negative tests must be safe, scoped, and approved."
        },
        {
          code: "API-4.7",
          heading: "Practical Restful Booker auth flow",
          body:
            "Restful Booker gives testers a simple public flow: create a token through /auth, then use that token for update or delete operations.",
          bullets: [
            "Use /auth with valid credentials to obtain a token for protected operations.",
            "Use create/read booking endpoints for functional setup and verification.",
            "Use invalid or missing token scenarios to practice 401/403-style reasoning based on the documented behavior."
          ],
          exam: "Training APIs are useful, but do not assume every project uses the exact same auth status codes."
        }
      ],
      viSections: [
        {
          code: "API-4.1",
          heading: "Authentication khác authorization",
          body:
            "Authentication xác minh caller là ai. Authorization xác minh caller đó được phép làm gì sau khi đã biết danh tính.",
          bullets: [
            "Không có identity hợp lệ thường dẫn tới 401.",
            "Có identity hợp lệ nhưng không có quyền thường dẫn tới 403.",
            "User update được dữ liệu riêng của user khác là lỗi authorization."
          ],
          exam: "Login thành công không chứng minh mọi access-control rule đều đúng."
        },
        {
          code: "API-4.2",
          heading: "Các cơ chế auth API thường gặp",
          body:
            "Dự án tester thường gặp bearer token, basic auth, API key, session cookie hoặc flow kiểu OAuth.",
          bullets: [
            "Bearer token thường gửi trong Authorization header.",
            "API key có thể gửi trong header hoặc query parameter tùy contract.",
            "Cookie có thể dùng khi API gắn với browser session.",
            "Không để lộ secret thật trong screenshot, public repo hoặc collection chia sẻ."
          ],
          exam: "Evidence phải chứng minh auth scenario nhưng không làm lộ token nhạy cảm."
        },
        {
          code: "API-4.3",
          heading: "Test vòng đời token",
          body:
            "Token test nên cover token hợp lệ, thiếu token, token hết hạn, token sai format, token bị revoke và thay đổi role.",
          bullets: [
            "Thiếu token phải bị reject nhất quán.",
            "Token hết hạn hoặc bị revoke không được tiếp tục truy cập resource bảo vệ.",
            "Role change phải có hiệu lực theo timing dự án quy định."
          ],
          exam: "Protected endpoint vẫn nhận expired token thường là defect nghiêm trọng."
        },
        {
          code: "API-4.4",
          heading: "Ranh giới role và ownership",
          body:
            "Authorization testing cần ranh giới role và ownership, không chỉ một happy path bằng admin.",
          bullets: [
            "Test user A đọc hoặc update private resource của user B trong môi trường test an toàn.",
            "Test role thấp gọi action chỉ dành cho admin.",
            "Tách horizontal access và vertical privilege escalation để test rõ hơn."
          ],
          exam: "Horizontal access là cùng role nhưng sai owner; vertical access là sai mức quyền."
        },
        {
          code: "API-4.5",
          heading: "Lộ dữ liệu nhạy cảm",
          body:
            "API chỉ nên trả dữ liệu cần cho caller và feature. Field dư có thể thành vấn đề privacy hoặc security.",
          bullets: [
            "Chú ý passwordHash, resetToken, accessToken, internal flag, cost field hoặc dữ liệu cá nhân không cần thiết.",
            "List endpoint đặc biệt rủi ro vì một response có thể leak nhiều record.",
            "Mask hoặc bỏ secret trong log, screenshot bug và example chia sẻ."
          ],
          exam: "Status code đúng không làm response an toàn nếu nó leak field nhạy cảm."
        },
        {
          code: "API-4.6",
          heading: "Negative và abuse-oriented testing",
          body:
            "Security ở mức tester gồm các negative check an toàn cho input sai, payload lớn, call lặp, content type lạ và method không support.",
          bullets: [
            "Kiểm tra invalid JSON trả controlled error.",
            "Kiểm tra method không support bị reject nhất quán.",
            "Kiểm tra create hoặc payment-like call lặp không tạo duplicate ngoài ý muốn.",
            "Load, rate-limit hoặc abuse test cần được team đồng ý trước khi chạy volume cao."
          ],
          exam: "Negative test hướng security phải an toàn, có scope và được approve."
        },
        {
          code: "API-4.7",
          heading: "Auth flow thực hành với Restful Booker",
          body:
            "Restful Booker cho tester một flow public đơn giản: tạo token qua /auth, rồi dùng token đó cho update hoặc delete.",
          bullets: [
            "Dùng /auth với credential hợp lệ để lấy token cho protected operation.",
            "Dùng create/read booking endpoint để setup và verify chức năng.",
            "Dùng token thiếu hoặc sai để luyện tư duy 401/403 dựa trên document."
          ],
          exam: "API luyện tập hữu ích, nhưng không được mặc định mọi project dùng status code giống hệt."
        }
      ],
      terms: [
        ["Authentication", "Verifying the identity of the caller."],
        ["Authorization", "Verifying what the caller is allowed to do."],
        ["Bearer token", "A token commonly sent in the Authorization header."],
        ["Horizontal access", "Accessing another owner's data at the same privilege level."],
        ["Vertical access", "Using a lower role to perform a higher-privilege action."]
      ],
      viTerms: [
        ["Authentication", "Xác minh danh tính của caller."],
        ["Authorization", "Xác minh caller được phép làm gì."],
        ["Bearer token", "Token thường được gửi trong Authorization header."],
        ["Horizontal access", "Truy cập dữ liệu của owner khác ở cùng mức quyền."],
        ["Vertical access", "Role thấp thực hiện action của role cao hơn."]
      ]
    },
    {
      id: 5,
      sourceNote:
        "Expanded from API documentation, contract thinking, Postman collections, and Restful Booker CRUD workflows.",
      viSourceNote:
        "Nội dung mở rộng từ API documentation, tư duy contract, Postman collection và flow CRUD của Restful Booker.",
      sections: [
        {
          code: "API-5.1",
          heading: "API documentation as a test oracle",
          body:
            "API documentation is a key source for expected behavior, but testers should still clarify gaps and contradictions with the team.",
          bullets: [
            "Use docs to identify endpoints, methods, parameters, headers, request body, response body, and error rules.",
            "Treat missing or ambiguous documentation as a test risk.",
            "Record assumptions when the behavior is not explicitly documented."
          ],
          exam: "A documented contract gives testers a stronger basis than guessing expected behavior."
        },
        {
          code: "API-5.2",
          heading: "Backward-compatible versus breaking changes",
          body:
            "Contract changes affect clients. Testers should distinguish safe additions from changes that can break existing users.",
          bullets: [
            "Adding an optional response field is often backward-compatible.",
            "Removing a field, renaming a field, changing a type, or changing enum values is usually breaking.",
            "Changing error code or auth requirements can also break integrations."
          ],
          exam: "A small JSON field-type change can be a major regression for API clients."
        },
        {
          code: "API-5.3",
          heading: "CRUD flows and state verification",
          body:
            "Many real APIs follow create, read, update, delete, or deactivate flows. Testing one call is useful; testing the state transition is stronger.",
          bullets: [
            "Create a resource and verify it can be read back with the same critical fields.",
            "Update the resource and verify old values changed and unrelated values did not change unexpectedly.",
            "Delete or deactivate the resource and verify follow-up read behavior."
          ],
          exam: "API tests should verify side effects, not only the immediate response body."
        },
        {
          code: "API-5.4",
          heading: "Integration points and dependencies",
          body:
            "APIs often depend on databases, queues, third-party services, identity providers, and other internal services.",
          bullets: [
            "A failure can come from the API itself or from a downstream dependency.",
            "Use controlled test data and logs to narrow where the failure occurs.",
            "When dependencies are unstable, mocks or stubs can support focused testing."
          ],
          exam: "Integration failures need evidence that shows which boundary failed."
        },
        {
          code: "API-5.5",
          heading: "Mocks, stubs, and controlled responses",
          body:
            "Mocks and stubs let teams simulate a dependency or an API response when the real system is unavailable, costly, or hard to control.",
          bullets: [
            "Use mocks for predictable positive, negative, and timeout responses.",
            "Do not let mock tests replace all real integration tests.",
            "Keep mock behavior aligned with the latest contract."
          ],
          exam: "Mocks increase control but reduce real-system confidence if used alone."
        },
        {
          code: "API-5.6",
          heading: "Test data setup and cleanup",
          body:
            "Stable API testing depends on data that can be created, identified, reused when safe, and cleaned up when needed.",
          bullets: [
            "Prefer API-created test data over manual database edits when the API supports it.",
            "Use naming conventions, tags, or prefixes to identify automated or training data.",
            "Clean up created data or design tests that are safe to repeat."
          ],
          exam: "Flaky API tests often come from uncontrolled data, not from assertions."
        },
        {
          code: "API-5.7",
          heading: "Postman runners and workflow collections",
          body:
            "A collection runner can execute multiple API requests in sequence, making it useful for smoke tests and simple regression flows.",
          bullets: [
            "Use variables to pass created ids or tokens from one request to the next.",
            "Keep smoke collections small and fast.",
            "Separate exploratory collections from stable regression collections."
          ],
          exam: "A reliable smoke collection should fail only for meaningful product or environment problems."
        }
      ],
      viSections: [
        {
          code: "API-5.1",
          heading: "API document là oracle cho test",
          body:
            "API document là nguồn quan trọng để biết expected behavior, nhưng tester vẫn cần clarify phần thiếu hoặc mâu thuẫn với team.",
          bullets: [
            "Dùng document để xác định endpoint, method, parameter, header, request body, response body và error rule.",
            "Document thiếu hoặc mơ hồ là test risk.",
            "Ghi assumption khi behavior không được document rõ."
          ],
          exam: "Contract được document giúp tester có cơ sở expected behavior chắc hơn đoán."
        },
        {
          code: "API-5.2",
          heading: "Backward-compatible và breaking change",
          body:
            "Thay đổi contract ảnh hưởng client. Tester cần phân biệt addition an toàn với thay đổi có thể làm hỏng người dùng hiện tại.",
          bullets: [
            "Thêm optional response field thường backward-compatible.",
            "Xóa field, đổi tên field, đổi type hoặc đổi enum value thường là breaking.",
            "Đổi error code hoặc auth requirement cũng có thể làm hỏng integration."
          ],
          exam: "Một thay đổi nhỏ về type trong JSON có thể là regression lớn với API client."
        },
        {
          code: "API-5.3",
          heading: "CRUD flow và verify state",
          body:
            "Nhiều API thật đi theo luồng create, read, update, delete hoặc deactivate. Test một call thì hữu ích; test state transition còn mạnh hơn.",
          bullets: [
            "Tạo resource rồi verify đọc lại được với các field quan trọng.",
            "Update resource rồi verify value cũ đổi và value không liên quan không bị đổi ngoài ý muốn.",
            "Delete hoặc deactivate resource rồi verify behavior khi read lại."
          ],
          exam: "API test nên verify side effect, không chỉ immediate response body."
        },
        {
          code: "API-5.4",
          heading: "Điểm tích hợp và dependency",
          body:
            "API thường phụ thuộc database, queue, third-party service, identity provider và service nội bộ khác.",
          bullets: [
            "Failure có thể đến từ chính API hoặc từ dependency phía sau.",
            "Dùng test data có kiểm soát và log để khoanh vùng lỗi.",
            "Khi dependency không ổn định, mock hoặc stub giúp test tập trung hơn."
          ],
          exam: "Integration failure cần evidence cho thấy boundary nào fail."
        },
        {
          code: "API-5.5",
          heading: "Mock, stub và response có kiểm soát",
          body:
            "Mock và stub giúp team giả lập dependency hoặc API response khi hệ thật chưa sẵn sàng, tốn phí hoặc khó kiểm soát.",
          bullets: [
            "Dùng mock cho response positive, negative và timeout có thể dự đoán.",
            "Không để mock test thay thế toàn bộ real integration test.",
            "Giữ behavior của mock khớp contract mới nhất."
          ],
          exam: "Mock tăng khả năng kiểm soát nhưng giảm confidence với hệ thật nếu dùng một mình."
        },
        {
          code: "API-5.6",
          heading: "Setup và cleanup test data",
          body:
            "API testing ổn định phụ thuộc vào data có thể tạo, định danh, tái sử dụng khi an toàn và cleanup khi cần.",
          bullets: [
            "Ưu tiên tạo test data qua API thay vì sửa database thủ công nếu API support.",
            "Dùng naming convention, tag hoặc prefix để nhận biết data tự động hoặc data training.",
            "Cleanup data đã tạo hoặc thiết kế test chạy lặp an toàn."
          ],
          exam: "API test flaky thường do data không kiểm soát, không phải do assertion."
        },
        {
          code: "API-5.7",
          heading: "Postman runner và workflow collection",
          body:
            "Collection runner có thể chạy nhiều request API theo thứ tự, hữu ích cho smoke test và regression flow đơn giản.",
          bullets: [
            "Dùng variable để truyền id hoặc token từ request này sang request sau.",
            "Smoke collection nên nhỏ và chạy nhanh.",
            "Tách collection exploratory khỏi collection regression ổn định."
          ],
          exam: "Smoke collection đáng tin nên chỉ fail khi có vấn đề product hoặc environment có ý nghĩa."
        }
      ],
      terms: [
        ["Contract", "The documented request and response expectation."],
        ["Breaking change", "A change likely to break existing clients."],
        ["Mock", "A simulated component or response used for controlled testing."],
        ["Stub", "A simplified replacement for a dependency."],
        ["Smoke collection", "A small set of high-value checks run to detect major problems quickly."]
      ],
      viTerms: [
        ["Contract", "Kỳ vọng request và response được document."],
        ["Breaking change", "Thay đổi có khả năng làm hỏng client hiện tại."],
        ["Mock", "Component hoặc response giả lập dùng để test có kiểm soát."],
        ["Stub", "Thành phần đơn giản thay thế dependency."],
        ["Smoke collection", "Bộ check nhỏ, giá trị cao để phát hiện vấn đề lớn nhanh."]
      ]
    },
    {
      id: 6,
      sourceNote:
        "Expanded from practical tester reporting habits, Postman test scripts, and API regression workflow guidance.",
      viSourceNote:
        "Nội dung mở rộng từ cách report bug API thực tế, test script trong Postman và workflow regression API cho tester.",
      sections: [
        {
          code: "API-6.1",
          heading: "API test case structure",
          body:
            "A useful API test case is specific enough to run and review, but not so verbose that the purpose becomes hidden.",
          bullets: [
            "Include objective, preconditions, method, endpoint, headers, body, expected status, expected body, and cleanup.",
            "Separate positive, negative, boundary, auth, and integration cases.",
            "Use stable test data references or setup steps."
          ],
          exam: "A reviewer should understand what business risk the test case covers."
        },
        {
          code: "API-6.2",
          heading: "Writing strong API bug reports",
          body:
            "API bug reports should show the exact request, exact response, expected behavior, actual behavior, and business impact.",
          bullets: [
            "Use a clear title with method, endpoint, and symptom.",
            "Include environment, timestamp, correlation id, test data id, and reproducible steps.",
            "Attach sanitized request and response examples."
          ],
          exam: "API defects are easier to fix when the developer can replay the call."
        },
        {
          code: "API-6.3",
          heading: "Choosing severity and priority",
          body:
            "Severity describes product impact. Priority describes how soon the team should fix it. They are related but not identical.",
          bullets: [
            "A 500 on checkout is usually high severity and high priority.",
            "A typo in an error message may be low severity but still worth fixing.",
            "A security or data exposure issue can be severe even when the UI looks normal."
          ],
          exam: "Status code alone does not determine severity; business impact does."
        },
        {
          code: "API-6.4",
          heading: "Basic Postman test scripts",
          body:
            "Postman test scripts let testers add repeatable assertions after a request runs, even before a full automation framework exists.",
          bullets: [
            "Assert status code, response time, required fields, values, and saved variables.",
            "Save token or created id into a variable for later requests in the collection.",
            "Keep scripts readable and focused on the purpose of the request."
          ],
          exam: "Small assertions in Postman can turn a manual collection into a useful smoke suite."
        },
        {
          code: "API-6.5",
          heading: "Automation candidate selection",
          body:
            "Not every API idea should be automated. Good candidates are stable, valuable, repeatable, and maintainable.",
          bullets: [
            "Automate critical regression checks, contract checks, and stable business rules.",
            "Keep exploratory, unstable, or one-time investigation ideas as manual notes until they stabilize.",
            "Design data setup so tests can run repeatedly without polluting the environment."
          ],
          exam: "Automating a flaky API check usually creates noise, not confidence."
        },
        {
          code: "API-6.6",
          heading: "Regression pack maintenance",
          body:
            "API regression packs need ownership. Without cleanup, collections become outdated, duplicate, and hard to trust.",
          bullets: [
            "Review failed tests to separate product bugs from test maintenance issues.",
            "Remove duplicate checks when one contract assertion covers the same risk.",
            "Update collections when API versions, auth rules, or environments change."
          ],
          exam: "A small trusted regression pack is better than a large pack nobody believes."
        }
      ],
      viSections: [
        {
          code: "API-6.1",
          heading: "Cấu trúc test case API",
          body:
            "Test case API hữu ích phải đủ cụ thể để chạy và review, nhưng không dài tới mức che mất mục tiêu.",
          bullets: [
            "Có objective, precondition, method, endpoint, header, body, expected status, expected body và cleanup.",
            "Tách case positive, negative, boundary, auth và integration.",
            "Dùng test data ổn định hoặc step setup rõ ràng."
          ],
          exam: "Reviewer phải hiểu test case đang cover business risk nào."
        },
        {
          code: "API-6.2",
          heading: "Viết bug report API tốt",
          body:
            "Bug report API nên thể hiện request chính xác, response chính xác, expected, actual và impact nghiệp vụ.",
          bullets: [
            "Title rõ gồm method, endpoint và symptom.",
            "Có environment, timestamp, correlation id, test data id và step reproduce.",
            "Đính kèm request và response đã che dữ liệu nhạy cảm."
          ],
          exam: "Defect API dễ fix hơn khi developer replay được call."
        },
        {
          code: "API-6.3",
          heading: "Chọn severity và priority",
          body:
            "Severity mô tả impact sản phẩm. Priority mô tả team nên fix sớm đến đâu. Hai khái niệm liên quan nhưng không giống nhau.",
          bullets: [
            "500 ở checkout thường high severity và high priority.",
            "Typo trong error message có thể low severity nhưng vẫn nên fix.",
            "Lỗi security hoặc lộ data có thể nghiêm trọng dù UI nhìn bình thường."
          ],
          exam: "Status code không tự quyết định severity; business impact mới quyết định."
        },
        {
          code: "API-6.4",
          heading: "Postman test script cơ bản",
          body:
            "Postman test script giúp tester thêm assertion lặp lại sau khi request chạy, kể cả khi chưa có automation framework đầy đủ.",
          bullets: [
            "Assert status code, response time, required field, value và saved variable.",
            "Lưu token hoặc created id vào variable cho request sau trong collection.",
            "Script nên dễ đọc và tập trung vào mục tiêu của request."
          ],
          exam: "Assertion nhỏ trong Postman có thể biến collection manual thành smoke suite hữu ích."
        },
        {
          code: "API-6.5",
          heading: "Chọn case nên automation",
          body:
            "Không phải mọi ý tưởng API đều nên automate. Candidate tốt phải ổn định, có giá trị, chạy lặp được và maintain được.",
          bullets: [
            "Automate critical regression check, contract check và business rule ổn định.",
            "Ý tưởng exploratory, chưa ổn định hoặc điều tra một lần nên để manual note tới khi rõ hơn.",
            "Thiết kế data setup để test chạy lặp mà không làm bẩn environment."
          ],
          exam: "Automate check flaky thường tạo noise chứ không tạo confidence."
        },
        {
          code: "API-6.6",
          heading: "Maintain regression pack",
          body:
            "API regression pack cần có ownership. Nếu không dọn, collection sẽ cũ, trùng lặp và khó tin.",
          bullets: [
            "Review test fail để tách product bug khỏi vấn đề maintenance test.",
            "Xóa duplicate check khi một contract assertion đã cover cùng risk.",
            "Update collection khi API version, auth rule hoặc environment đổi."
          ],
          exam: "Regression pack nhỏ nhưng đáng tin tốt hơn pack lớn mà không ai tin."
        }
      ],
      terms: [
        ["Assertion", "A check that compares actual behavior with expected behavior."],
        ["Correlation id", "An identifier used to trace one request through logs."],
        ["Regression pack", "A set of repeatable checks used to detect unintended changes."],
        ["Severity", "How serious the product impact is."],
        ["Priority", "How soon the team should address the issue."]
      ],
      viTerms: [
        ["Assertion", "Check so sánh actual behavior với expected behavior."],
        ["Correlation id", "Mã định danh để trace một request qua log."],
        ["Regression pack", "Bộ check lặp lại để phát hiện thay đổi ngoài ý muốn."],
        ["Severity", "Mức độ nghiêm trọng của impact sản phẩm."],
        ["Priority", "Mức độ cần xử lý sớm của issue."]
      ]
    }
  ];

  const sqlPatches = [
    {
      id: 1,
      sourceNote:
        "Expanded from W3Schools SQL basics, VietTuts Vietnamese SQL explanations, and SQLZoo's interactive learning order.",
      viSourceNote:
        "Nội dung được tổng hợp từ SQL basics của W3Schools, giải thích tiếng Việt của VietTuts và thứ tự luyện tập tương tác của SQLZoo.",
      sections: [
        {
          code: "SQL-1.1",
          heading: "Why testers learn SQL",
          body:
            "SQL helps testers verify data directly, investigate defects, check reports, and validate API or UI behavior against stored records.",
          bullets: [
            "Use SQL to confirm whether a defect is display-only or data-related.",
            "Use SQL to inspect setup data, test data, and migration results.",
            "Use SQL evidence in bug reports when the database state explains the issue."
          ],
          exam: "Tester SQL should be accurate and safe, not clever for its own sake."
        },
        {
          code: "SQL-1.2",
          heading: "Tables, rows, and columns",
          body:
            "Relational databases store data in tables. A row represents one record, and a column represents one attribute of that record.",
          bullets: [
            "A customers table may have customer_id, name, email, and status columns.",
            "An orders table may have order_id, customer_id, order_date, and status columns.",
            "Knowing what one row represents helps avoid wrong counts and wrong joins."
          ],
          exam: "Before writing a query, identify the grain: what does one row mean?"
        },
        {
          code: "SQL-1.3",
          heading: "Primary keys and foreign keys",
          body:
            "Keys connect tables and protect meaning. A primary key uniquely identifies a row; a foreign key references a row in another table.",
          bullets: [
            "customers.customer_id can be the primary key of customers.",
            "orders.customer_id can be a foreign key that points to customers.customer_id.",
            "Missing or wrong key relationships cause orphan records, duplicate results, and report errors."
          ],
          exam: "Most JOIN bugs start with misunderstanding the key relationship."
        },
        {
          code: "SQL-1.4",
          heading: "Read-only safety for testers",
          body:
            "In shared environments, testers should default to read-only queries unless the team explicitly approves data-changing operations.",
          bullets: [
            "SELECT reads data and is the safest default for investigation.",
            "INSERT, UPDATE, DELETE, TRUNCATE, and DROP change data or schema and need clear permission.",
            "If you must change test data, use approved scripts, transactions, or isolated environments."
          ],
          exam: "A useful tester query should not damage the environment."
        },
        {
          code: "SQL-1.5",
          heading: "A practical ecommerce schema",
          body:
            "A simple ecommerce schema is enough for many tester exercises: customers, orders, order_items, products, and payments.",
          bullets: [
            "customers connects to orders through customer_id.",
            "orders connects to order_items through order_id.",
            "order_items connects to products through product_id.",
            "payments may connect to orders and represent payment attempts or completed payments."
          ],
          exam: "Sketching table relationships before querying reduces trial-and-error joins."
        },
        {
          code: "SQL-1.6",
          heading: "From requirement to data check",
          body:
            "A good SQL check starts with a requirement, then identifies the table, filter, calculation, and expected result.",
          bullets: [
            "Requirement: report shows paid revenue only.",
            "Tables: orders and order_items.",
            "Filter: orders.status = 'PAID'.",
            "Calculation: SUM(quantity * unit_price)."
          ],
          exam: "If the requirement is vague, the SQL result may be technically correct but still not useful."
        }
      ],
      viSections: [
        {
          code: "SQL-1.1",
          heading: "Vì sao tester học SQL",
          body:
            "SQL giúp tester verify dữ liệu trực tiếp, điều tra defect, kiểm tra report và đối chiếu hành vi API/UI với dữ liệu lưu trong database.",
          bullets: [
            "Dùng SQL để xác nhận lỗi chỉ ở display hay liên quan data.",
            "Dùng SQL để xem setup data, test data và kết quả migration.",
            "Dùng SQL evidence trong bug report khi trạng thái database giải thích issue."
          ],
          exam: "SQL cho tester cần chính xác và an toàn, không cần phức tạp cho đẹp."
        },
        {
          code: "SQL-1.2",
          heading: "Table, row và column",
          body:
            "Relational database lưu dữ liệu trong table. Một row là một record, một column là một thuộc tính của record đó.",
          bullets: [
            "Table customers có thể có customer_id, name, email và status.",
            "Table orders có thể có order_id, customer_id, order_date và status.",
            "Hiểu một row đại diện cho gì giúp tránh count sai và join sai."
          ],
          exam: "Trước khi viết query, hãy xác định grain: một row nghĩa là gì?"
        },
        {
          code: "SQL-1.3",
          heading: "Primary key và foreign key",
          body:
            "Key kết nối table và bảo vệ ý nghĩa dữ liệu. Primary key định danh duy nhất một row; foreign key tham chiếu row ở table khác.",
          bullets: [
            "customers.customer_id có thể là primary key của customers.",
            "orders.customer_id có thể là foreign key trỏ tới customers.customer_id.",
            "Quan hệ key thiếu hoặc sai gây orphan record, duplicate result và lỗi report."
          ],
          exam: "Phần lớn JOIN bug bắt đầu từ việc hiểu sai quan hệ key."
        },
        {
          code: "SQL-1.4",
          heading: "An toàn read-only cho tester",
          body:
            "Trong môi trường dùng chung, tester nên mặc định dùng query read-only trừ khi team cho phép rõ ràng thao tác đổi dữ liệu.",
          bullets: [
            "SELECT đọc dữ liệu và là mặc định an toàn nhất khi điều tra.",
            "INSERT, UPDATE, DELETE, TRUNCATE và DROP đổi dữ liệu hoặc schema, cần permission rõ.",
            "Nếu phải đổi test data, hãy dùng script approved, transaction hoặc môi trường isolated."
          ],
          exam: "Query của tester hữu ích không được làm hỏng environment."
        },
        {
          code: "SQL-1.5",
          heading: "Schema ecommerce thực tế",
          body:
            "Một schema ecommerce đơn giản đủ cho nhiều bài luyện của tester: customers, orders, order_items, products và payments.",
          bullets: [
            "customers nối với orders qua customer_id.",
            "orders nối với order_items qua order_id.",
            "order_items nối với products qua product_id.",
            "payments có thể nối với orders và đại diện cho payment attempt hoặc completed payment."
          ],
          exam: "Phác thảo quan hệ table trước khi query giúp giảm join thử-sai."
        },
        {
          code: "SQL-1.6",
          heading: "Từ requirement đến data check",
          body:
            "Một SQL check tốt bắt đầu từ requirement, rồi xác định table, filter, calculation và expected result.",
          bullets: [
            "Requirement: report chỉ hiển thị paid revenue.",
            "Tables: orders và order_items.",
            "Filter: orders.status = 'PAID'.",
            "Calculation: SUM(quantity * unit_price)."
          ],
          exam: "Nếu requirement mơ hồ, SQL result có thể đúng kỹ thuật nhưng vẫn không hữu ích."
        }
      ],
      terms: [
        ["Table", "A database object that stores records in rows and columns."],
        ["Row", "One record in a table."],
        ["Column", "One attribute of records in a table."],
        ["Primary key", "A column or set of columns that uniquely identifies a row."],
        ["Foreign key", "A column that references a key in another table."],
        ["Grain", "What one row in a result represents."]
      ],
      viTerms: [
        ["Table", "Đối tượng database lưu record theo row và column."],
        ["Row", "Một record trong table."],
        ["Column", "Một thuộc tính của record trong table."],
        ["Primary key", "Column hoặc nhóm column định danh duy nhất một row."],
        ["Foreign key", "Column tham chiếu key ở table khác."],
        ["Grain", "Một row trong kết quả đại diện cho điều gì."]
      ]
    },
    {
      id: 2,
      sourceNote:
        "Expanded from SQL SELECT, WHERE, ORDER BY, LIKE, IN, BETWEEN, and NULL lessons across the provided SQL tutorials.",
      viSourceNote:
        "Nội dung mở rộng từ các bài SELECT, WHERE, ORDER BY, LIKE, IN, BETWEEN và NULL trong các nguồn SQL đã đưa.",
      sections: [
        {
          code: "SQL-2.1",
          heading: "SELECT the columns you need",
          body:
            "SELECT chooses which columns appear in the result. Testers should select enough data for evidence while avoiding noisy, unreadable output.",
          bullets: [
            "Use explicit columns instead of SELECT * when writing evidence for a bug.",
            "Alias calculated columns with names that explain the meaning.",
            "Keep identifiers such as order_id or customer_id in the result so rows can be traced."
          ],
          exam: "Clear result columns make a defect easier to review."
        },
        {
          code: "SQL-2.2",
          heading: "WHERE filters rows",
          body:
            "WHERE filters rows before grouping and aggregation. A small filter mistake can change the entire meaning of a test result.",
          bullets: [
            "Use equality for exact status or id checks.",
            "Use comparison operators for dates, amounts, and numeric boundaries.",
            "Use parentheses when combining AND and OR to avoid ambiguous logic."
          ],
          exam: "Wrong WHERE logic is a common cause of false SQL evidence."
        },
        {
          code: "SQL-2.3",
          heading: "LIKE, IN, and BETWEEN",
          body:
            "These predicates make filters more expressive, especially for search, allowed lists, and ranges.",
          bullets: [
            "LIKE supports pattern matching such as email ending or name search.",
            "IN checks whether a value is part of a defined set.",
            "BETWEEN checks an inclusive range in many SQL dialects, but testers should confirm date/time behavior carefully."
          ],
          exam: "Date ranges often fail at the end boundary when time is included."
        },
        {
          code: "SQL-2.4",
          heading: "NULL is not an ordinary value",
          body:
            "NULL means missing or unknown, so it must be tested with IS NULL or IS NOT NULL rather than = NULL.",
          bullets: [
            "A blank string and NULL may be different values depending on the database and application.",
            "Filters can accidentally exclude NULL rows if the requirement expects them.",
            "COALESCE can display a fallback value when reporting NULLs."
          ],
          exam: "Many data defects hide in NULL handling."
        },
        {
          code: "SQL-2.5",
          heading: "ORDER BY for deterministic evidence",
          body:
            "ORDER BY sorts the result so that screenshots, exports, and repeated checks are easier to compare.",
          bullets: [
            "Sort by business meaning, such as order_date DESC or amount DESC.",
            "Add a tie-breaker column, such as order_id, when multiple rows can share the same value.",
            "Do not rely on database default row order."
          ],
          exam: "A query without ORDER BY may return rows in a different order later."
        },
        {
          code: "SQL-2.6",
          heading: "DISTINCT and duplicate investigation",
          body:
            "DISTINCT removes duplicate rows from the displayed result, but testers must be careful not to hide a real duplicate defect.",
          bullets: [
            "Use DISTINCT to understand unique values, such as all statuses currently used.",
            "Do not use DISTINCT to make a failing report look correct.",
            "When investigating duplicates, use GROUP BY and COUNT instead."
          ],
          exam: "DISTINCT is useful for exploration, but it can hide evidence."
        },
        {
          code: "SQL-2.7",
          heading: "Tester-friendly query formatting",
          body:
            "Formatting matters because SQL evidence is often reviewed by developers, BAs, and other testers.",
          bullets: [
            "Put SELECT, FROM, WHERE, GROUP BY, HAVING, and ORDER BY on separate lines.",
            "Use table aliases consistently.",
            "Name calculated columns with meaningful aliases."
          ],
          exam: "Readable SQL reduces review time and prevents misunderstanding."
        }
      ],
      viSections: [
        {
          code: "SQL-2.1",
          heading: "SELECT đúng column cần dùng",
          body:
            "SELECT chọn column xuất hiện trong result. Tester nên chọn đủ data cho evidence nhưng tránh output rối và khó đọc.",
          bullets: [
            "Dùng column cụ thể thay vì SELECT * khi viết evidence cho bug.",
            "Alias column tính toán bằng tên giải thích ý nghĩa.",
            "Giữ identifier như order_id hoặc customer_id trong result để trace row."
          ],
          exam: "Column rõ giúp defect dễ review hơn."
        },
        {
          code: "SQL-2.2",
          heading: "WHERE lọc row",
          body:
            "WHERE lọc row trước grouping và aggregation. Một lỗi filter nhỏ có thể đổi toàn bộ ý nghĩa kết quả test.",
          bullets: [
            "Dùng equality để check chính xác status hoặc id.",
            "Dùng comparison operator cho date, amount và numeric boundary.",
            "Dùng ngoặc khi kết hợp AND và OR để tránh logic mơ hồ."
          ],
          exam: "WHERE logic sai là nguyên nhân phổ biến của evidence SQL sai."
        },
        {
          code: "SQL-2.3",
          heading: "LIKE, IN và BETWEEN",
          body:
            "Các predicate này giúp filter linh hoạt hơn, đặc biệt cho search, danh sách allowed value và range.",
          bullets: [
            "LIKE dùng cho pattern matching như email ending hoặc name search.",
            "IN kiểm tra value có nằm trong tập xác định không.",
            "BETWEEN thường inclusive ở nhiều SQL dialect, nhưng tester cần cẩn thận với date/time."
          ],
          exam: "Date range hay fail ở biên cuối khi dữ liệu có cả time."
        },
        {
          code: "SQL-2.4",
          heading: "NULL không phải value bình thường",
          body:
            "NULL nghĩa là thiếu hoặc chưa biết, nên phải test bằng IS NULL hoặc IS NOT NULL thay vì = NULL.",
          bullets: [
            "Blank string và NULL có thể là hai value khác nhau tùy database và app.",
            "Filter có thể vô tình loại NULL row dù requirement cần chúng.",
            "COALESCE có thể hiển thị fallback value khi report NULL."
          ],
          exam: "Nhiều defect data nằm ở cách xử lý NULL."
        },
        {
          code: "SQL-2.5",
          heading: "ORDER BY để evidence ổn định",
          body:
            "ORDER BY sắp xếp result để screenshot, export và check lặp dễ so sánh hơn.",
          bullets: [
            "Sort theo ý nghĩa nghiệp vụ, ví dụ order_date DESC hoặc amount DESC.",
            "Thêm tie-breaker như order_id khi nhiều row có thể cùng value.",
            "Không dựa vào thứ tự mặc định của database."
          ],
          exam: "Query không ORDER BY có thể trả row theo thứ tự khác ở lần sau."
        },
        {
          code: "SQL-2.6",
          heading: "DISTINCT và điều tra duplicate",
          body:
            "DISTINCT loại row trùng khỏi result hiển thị, nhưng tester cần cẩn thận để không che mất defect duplicate thật.",
          bullets: [
            "Dùng DISTINCT để hiểu unique value, ví dụ tất cả status đang dùng.",
            "Không dùng DISTINCT để làm report fail trông có vẻ đúng.",
            "Khi điều tra duplicate, dùng GROUP BY và COUNT."
          ],
          exam: "DISTINCT hữu ích khi khám phá, nhưng có thể che evidence."
        },
        {
          code: "SQL-2.7",
          heading: "Format query thân thiện với tester",
          body:
            "Format quan trọng vì SQL evidence thường được developer, BA và tester khác review.",
          bullets: [
            "Tách SELECT, FROM, WHERE, GROUP BY, HAVING và ORDER BY ra từng dòng.",
            "Dùng table alias nhất quán.",
            "Đặt alias có ý nghĩa cho column tính toán."
          ],
          exam: "SQL dễ đọc giảm thời gian review và tránh hiểu nhầm."
        }
      ],
      terms: [
        ["SELECT", "Chooses columns or expressions for the result."],
        ["WHERE", "Filters rows before grouping."],
        ["LIKE", "Filters by a text pattern."],
        ["IN", "Filters values that belong to a list."],
        ["BETWEEN", "Filters values inside a range."],
        ["NULL", "A missing or unknown value."]
      ],
      viTerms: [
        ["SELECT", "Chọn column hoặc expression cho result."],
        ["WHERE", "Lọc row trước grouping."],
        ["LIKE", "Lọc theo pattern text."],
        ["IN", "Lọc value thuộc một danh sách."],
        ["BETWEEN", "Lọc value nằm trong range."],
        ["NULL", "Giá trị thiếu hoặc chưa biết."]
      ]
    },
    {
      id: 3,
      sourceNote:
        "Expanded from JOIN lessons and interactive SQL practice patterns in W3Schools, VietTuts, and SQLZoo.",
      viSourceNote:
        "Nội dung mở rộng từ bài JOIN và pattern luyện SQL tương tác trong W3Schools, VietTuts và SQLZoo.",
      sections: [
        {
          code: "SQL-3.1",
          heading: "Why JOINs matter for testers",
          body:
            "Most real checks need data from more than one table. JOINs let testers verify workflows, reports, and API responses that combine related records.",
          bullets: [
            "Order screens often combine customers, orders, order_items, and products.",
            "A report total may be wrong because the join multiplies rows.",
            "API response verification often needs both entity data and related lookup data."
          ],
          exam: "A correct JOIN starts with a correct understanding of table relationships."
        },
        {
          code: "SQL-3.2",
          heading: "INNER JOIN",
          body:
            "INNER JOIN returns rows only when matching records exist on both sides of the join condition.",
          bullets: [
            "Use INNER JOIN when the requirement expects only complete matching data.",
            "It can hide missing child or parent records because unmatched rows disappear.",
            "It is useful for verifying records that must have required relationships."
          ],
          exam: "INNER JOIN can accidentally hide data integrity problems."
        },
        {
          code: "SQL-3.3",
          heading: "LEFT JOIN",
          body:
            "LEFT JOIN keeps every row from the left table and adds matching data from the right table when available.",
          bullets: [
            "Use LEFT JOIN when the requirement includes records with no related rows.",
            "It is useful for finding missing payments, missing order items, or customers without orders.",
            "Filter right-table NULL values carefully to avoid turning the LEFT JOIN into an INNER JOIN."
          ],
          exam: "LEFT JOIN plus IS NULL is a common orphan or missing-related-data check."
        },
        {
          code: "SQL-3.4",
          heading: "Join keys and duplicate rows",
          body:
            "A join condition should use the real relationship key. Wrong keys can duplicate rows, inflate totals, or match unrelated records.",
          bullets: [
            "Join orders to customers by customer_id, not customer name.",
            "Join order_items to products by product_id, not product title.",
            "Check row counts before and after joining to detect unexpected multiplication."
          ],
          exam: "Inflated report totals often come from one-to-many joins handled incorrectly."
        },
        {
          code: "SQL-3.5",
          heading: "One-to-many relationships",
          body:
            "One customer can have many orders, and one order can have many items. This changes the grain of the result.",
          bullets: [
            "After joining orders to order_items, one row may represent one item, not one order.",
            "Counting orders after joining items may require COUNT(DISTINCT order_id).",
            "Aggregations should match the grain required by the report."
          ],
          exam: "Always ask whether the result is one row per customer, order, item, or group."
        },
        {
          code: "SQL-3.6",
          heading: "JOINs for UI and API verification",
          body:
            "JOINs help compare what the user sees or what an API returns with the underlying relational data.",
          bullets: [
            "Verify an order detail API by joining orders, order_items, and products.",
            "Verify a UI customer summary by joining customers and orders.",
            "Verify a dropdown value by joining an entity table to a lookup table."
          ],
          exam: "The UI may show a friendly name, while the database stores a foreign key."
        }
      ],
      viSections: [
        {
          code: "SQL-3.1",
          heading: "Vì sao JOIN quan trọng với tester",
          body:
            "Phần lớn check thực tế cần dữ liệu từ nhiều table. JOIN giúp tester verify workflow, report và API response kết hợp nhiều record liên quan.",
          bullets: [
            "Màn hình order thường kết hợp customers, orders, order_items và products.",
            "Report total có thể sai vì join làm nhân row.",
            "Verify API response thường cần cả entity data và lookup data liên quan."
          ],
          exam: "JOIN đúng bắt đầu từ hiểu đúng quan hệ table."
        },
        {
          code: "SQL-3.2",
          heading: "INNER JOIN",
          body:
            "INNER JOIN trả row khi có record match ở cả hai phía của join condition.",
          bullets: [
            "Dùng INNER JOIN khi requirement chỉ cần dữ liệu match đầy đủ.",
            "Nó có thể che parent hoặc child bị thiếu vì row không match biến mất.",
            "Hữu ích để verify record bắt buộc phải có quan hệ."
          ],
          exam: "INNER JOIN có thể vô tình che vấn đề data integrity."
        },
        {
          code: "SQL-3.3",
          heading: "LEFT JOIN",
          body:
            "LEFT JOIN giữ toàn bộ row từ table bên trái và thêm data match từ table bên phải nếu có.",
          bullets: [
            "Dùng LEFT JOIN khi requirement bao gồm record không có row liên quan.",
            "Hữu ích để tìm payment thiếu, order item thiếu hoặc customer chưa có order.",
            "Cẩn thận khi filter NULL ở table bên phải để không biến LEFT JOIN thành INNER JOIN."
          ],
          exam: "LEFT JOIN kết hợp IS NULL là pattern phổ biến để tìm orphan hoặc missing related data."
        },
        {
          code: "SQL-3.4",
          heading: "Join key và duplicate row",
          body:
            "Join condition nên dùng key quan hệ thật. Key sai có thể duplicate row, làm phồng total hoặc match record không liên quan.",
          bullets: [
            "Join orders với customers bằng customer_id, không bằng customer name.",
            "Join order_items với products bằng product_id, không bằng product title.",
            "Check row count trước và sau join để phát hiện nhân row bất thường."
          ],
          exam: "Report total bị phồng thường đến từ one-to-many join xử lý sai."
        },
        {
          code: "SQL-3.5",
          heading: "Quan hệ one-to-many",
          body:
            "Một customer có thể có nhiều order, một order có thể có nhiều item. Điều này thay đổi grain của result.",
          bullets: [
            "Sau khi join orders với order_items, một row có thể đại diện cho một item, không phải một order.",
            "Count order sau khi join item có thể cần COUNT(DISTINCT order_id).",
            "Aggregation phải khớp grain mà report yêu cầu."
          ],
          exam: "Luôn hỏi result đang là một row per customer, order, item hay group."
        },
        {
          code: "SQL-3.6",
          heading: "JOIN để verify UI và API",
          body:
            "JOIN giúp so sánh thứ user thấy hoặc API trả với dữ liệu quan hệ bên dưới.",
          bullets: [
            "Verify API order detail bằng cách join orders, order_items và products.",
            "Verify UI customer summary bằng cách join customers và orders.",
            "Verify dropdown value bằng cách join entity table với lookup table."
          ],
          exam: "UI có thể hiển thị friendly name, còn database lưu foreign key."
        }
      ],
      terms: [
        ["INNER JOIN", "Returns only matching rows from both tables."],
        ["LEFT JOIN", "Keeps all left-table rows and matching right-table rows."],
        ["Join key", "The column or columns used to connect tables."],
        ["One-to-many", "A relationship where one row can match many related rows."],
        ["COUNT DISTINCT", "Counts unique values instead of all joined rows."]
      ],
      viTerms: [
        ["INNER JOIN", "Trả các row match ở cả hai table."],
        ["LEFT JOIN", "Giữ toàn bộ row bên trái và row bên phải nếu match."],
        ["Join key", "Column dùng để kết nối table."],
        ["One-to-many", "Quan hệ một row có thể match nhiều row liên quan."],
        ["COUNT DISTINCT", "Đếm giá trị duy nhất thay vì toàn bộ row sau join."]
      ]
    },
    {
      id: 4,
      sourceNote:
        "Expanded from aggregate functions, GROUP BY, HAVING, and reporting examples in the provided SQL tutorials.",
      viSourceNote:
        "Nội dung mở rộng từ aggregate function, GROUP BY, HAVING và ví dụ report trong các nguồn SQL đã đưa.",
      sections: [
        {
          code: "SQL-4.1",
          heading: "Aggregate functions",
          body:
            "Aggregate functions summarize multiple rows into a result such as a count, total, average, minimum, or maximum.",
          bullets: [
            "COUNT counts rows or non-null values.",
            "SUM totals numeric values such as revenue or quantity.",
            "AVG, MIN, and MAX support average and boundary checks.",
            "Aggregates are common in dashboard and report testing."
          ],
          exam: "Know whether the report counts rows, orders, customers, items, or distinct entities."
        },
        {
          code: "SQL-4.2",
          heading: "GROUP BY and report grain",
          body:
            "GROUP BY defines one result row per group. The grouped columns should match the report grain.",
          bullets: [
            "One row per product category means GROUP BY category.",
            "One row per customer per month means GROUP BY customer and month.",
            "Selecting non-grouped columns without aggregation can produce invalid or misleading results."
          ],
          exam: "Report grain should drive GROUP BY design."
        },
        {
          code: "SQL-4.3",
          heading: "HAVING filters groups",
          body:
            "HAVING filters grouped results after aggregation, while WHERE filters rows before aggregation.",
          bullets: [
            "Use WHERE status = 'PAID' before summing paid revenue.",
            "Use HAVING SUM(total) > 1000 to filter groups after summing.",
            "Using HAVING for row-level filters can make queries slower or harder to read."
          ],
          exam: "WHERE happens before GROUP BY; HAVING happens after GROUP BY."
        },
        {
          code: "SQL-4.4",
          heading: "Revenue and total calculations",
          body:
            "Report defects often come from calculation logic, status filters, quantity handling, tax, discount, refund, or currency rules.",
          bullets: [
            "Revenue may be SUM(quantity * unit_price), but requirements may include discount or tax.",
            "Cancelled and refunded orders should be included or excluded according to business rules.",
            "Rounding rules can make SQL totals differ from UI totals."
          ],
          exam: "Never assume revenue formula; tie it back to the requirement."
        },
        {
          code: "SQL-4.5",
          heading: "COUNT pitfalls",
          body:
            "COUNT looks simple, but join multiplication, NULL values, and duplicate entities can make it wrong.",
          bullets: [
            "COUNT(*) counts rows.",
            "COUNT(column) counts non-null values in that column.",
            "COUNT(DISTINCT id) counts unique ids, useful after one-to-many joins."
          ],
          exam: "Counting joined rows can be different from counting business entities."
        },
        {
          code: "SQL-4.6",
          heading: "Comparing UI reports with SQL",
          body:
            "When verifying a report, testers should align SQL filters, time zones, user permissions, rounding, and refresh timing with the UI.",
          bullets: [
            "A dashboard may show cached data while SQL reads current data.",
            "UI date filters may use local time while database timestamps are UTC.",
            "Permissions may hide some data from the UI but not from a direct database query."
          ],
          exam: "A SQL mismatch is a lead, not automatically a product bug."
        },
        {
          code: "SQL-4.7",
          heading: "Evidence for report bugs",
          body:
            "Report bug evidence should include the requirement, UI value, SQL query, SQL result, filter settings, and data timestamp.",
          bullets: [
            "Attach a focused query, not a giant exploratory script.",
            "Show the exact filter values used in the UI.",
            "Mention whether the data can change between UI capture and SQL execution."
          ],
          exam: "Good report evidence explains both the number and how it was produced."
        }
      ],
      viSections: [
        {
          code: "SQL-4.1",
          heading: "Aggregate function",
          body:
            "Aggregate function tóm tắt nhiều row thành một kết quả như count, total, average, minimum hoặc maximum.",
          bullets: [
            "COUNT đếm row hoặc non-null value.",
            "SUM tính tổng numeric value như revenue hoặc quantity.",
            "AVG, MIN và MAX hỗ trợ check average và boundary.",
            "Aggregate rất thường gặp khi test dashboard và report."
          ],
          exam: "Cần biết report đang count row, order, customer, item hay distinct entity."
        },
        {
          code: "SQL-4.2",
          heading: "GROUP BY và report grain",
          body:
            "GROUP BY định nghĩa một result row cho mỗi group. Column group phải khớp grain của report.",
          bullets: [
            "Một row per product category nghĩa là GROUP BY category.",
            "Một row per customer per month nghĩa là GROUP BY customer và month.",
            "Select column không group và không aggregate có thể invalid hoặc gây hiểu nhầm."
          ],
          exam: "Report grain nên điều khiển cách viết GROUP BY."
        },
        {
          code: "SQL-4.3",
          heading: "HAVING lọc group",
          body:
            "HAVING lọc grouped result sau aggregation, còn WHERE lọc row trước aggregation.",
          bullets: [
            "Dùng WHERE status = 'PAID' trước khi sum paid revenue.",
            "Dùng HAVING SUM(total) > 1000 để lọc group sau khi sum.",
            "Dùng HAVING cho row-level filter có thể làm query chậm hoặc khó đọc."
          ],
          exam: "WHERE xảy ra trước GROUP BY; HAVING xảy ra sau GROUP BY."
        },
        {
          code: "SQL-4.4",
          heading: "Revenue và total calculation",
          body:
            "Defect report thường đến từ calculation logic, status filter, quantity, tax, discount, refund hoặc currency rule.",
          bullets: [
            "Revenue có thể là SUM(quantity * unit_price), nhưng requirement có thể gồm discount hoặc tax.",
            "Order cancelled/refunded được tính hay loại phụ thuộc business rule.",
            "Rounding rule có thể làm SQL total khác UI total."
          ],
          exam: "Đừng tự giả định công thức revenue; hãy bám requirement."
        },
        {
          code: "SQL-4.5",
          heading: "Bẫy khi dùng COUNT",
          body:
            "COUNT nhìn đơn giản, nhưng join multiplication, NULL và duplicate entity có thể làm kết quả sai.",
          bullets: [
            "COUNT(*) đếm row.",
            "COUNT(column) đếm non-null value trong column đó.",
            "COUNT(DISTINCT id) đếm id duy nhất, hữu ích sau one-to-many join."
          ],
          exam: "Đếm joined row có thể khác đếm business entity."
        },
        {
          code: "SQL-4.6",
          heading: "So sánh UI report với SQL",
          body:
            "Khi verify report, tester cần align SQL filter, timezone, permission, rounding và refresh timing với UI.",
          bullets: [
            "Dashboard có thể hiển thị cached data trong khi SQL đọc current data.",
            "UI date filter có thể dùng local time còn database timestamp là UTC.",
            "Permission có thể ẩn data ở UI nhưng query DB trực tiếp vẫn thấy."
          ],
          exam: "SQL mismatch là manh mối, không tự động là product bug."
        },
        {
          code: "SQL-4.7",
          heading: "Evidence cho bug report",
          body:
            "Evidence bug report nên gồm requirement, UI value, SQL query, SQL result, filter setting và data timestamp.",
          bullets: [
            "Đính kèm query tập trung, không phải script exploratory khổng lồ.",
            "Hiển thị đúng filter value đã dùng trên UI.",
            "Nêu rõ data có thể đổi giữa lúc chụp UI và lúc chạy SQL không."
          ],
          exam: "Evidence report tốt giải thích cả con số và cách tạo ra con số đó."
        }
      ],
      terms: [
        ["COUNT", "Counts rows or non-null values."],
        ["SUM", "Totals numeric values."],
        ["GROUP BY", "Creates groups for aggregation."],
        ["HAVING", "Filters groups after aggregation."],
        ["Report grain", "The business meaning of one report row."]
      ],
      viTerms: [
        ["COUNT", "Đếm row hoặc non-null value."],
        ["SUM", "Tính tổng numeric value."],
        ["GROUP BY", "Tạo group để aggregate."],
        ["HAVING", "Lọc group sau aggregation."],
        ["Report grain", "Ý nghĩa nghiệp vụ của một row trong report."]
      ]
    },
    {
      id: 5,
      sourceNote:
        "Expanded from practical tester data checks using SQL constraints, duplicate detection, orphan checks, and migration comparisons.",
      viSourceNote:
        "Nội dung mở rộng từ các data check thực tế cho tester: constraint, duplicate, orphan và so sánh migration.",
      sections: [
        {
          code: "SQL-5.1",
          heading: "Data integrity mindset",
          body:
            "Data integrity means the stored data remains accurate, consistent, and meaningful across related tables and business rules.",
          bullets: [
            "Integrity defects can exist even when the UI loads successfully.",
            "A report can look complete while using duplicated, orphaned, or invalid records.",
            "Tester SQL checks should target business risk, not only technical constraints."
          ],
          exam: "Good data checks connect database symptoms to user or business impact."
        },
        {
          code: "SQL-5.2",
          heading: "Orphan record checks",
          body:
            "An orphan record is a child record whose expected parent is missing. LEFT JOIN plus IS NULL is a common way to find it.",
          bullets: [
            "Order items without an order can break order detail pages.",
            "Orders without a customer can break invoices or customer reports.",
            "Unexpected orphan records often indicate migration, deletion, or integration issues."
          ],
          exam: "Orphans are especially important after imports and migrations."
        },
        {
          code: "SQL-5.3",
          heading: "Duplicate business keys",
          body:
            "Technical ids may be unique while business keys are duplicated. Testers should know which fields must be unique in the product.",
          bullets: [
            "Email, username, booking reference, invoice number, or SKU may need uniqueness.",
            "Use GROUP BY business_key HAVING COUNT(*) > 1 to find duplicates.",
            "Check whether duplicate rules are case-sensitive or ignore spaces."
          ],
          exam: "Duplicate business data can create login, payment, report, and notification bugs."
        },
        {
          code: "SQL-5.4",
          heading: "Invalid status and state transitions",
          body:
            "Many systems use status values and state transitions. SQL can reveal impossible or unsupported states.",
          bullets: [
            "Find statuses outside the allowed list.",
            "Find paid orders with no payment record if the rule requires one.",
            "Find cancelled orders that still appear in paid revenue."
          ],
          exam: "A status value is only meaningful when it follows the business state model."
        },
        {
          code: "SQL-5.5",
          heading: "Impossible dates and numeric values",
          body:
            "Boundary and consistency checks can find impossible values that the UI may not expose clearly.",
          bullets: [
            "Check checkout date before checkin date.",
            "Check negative quantity, negative price, or total less than zero when not allowed.",
            "Check created_at after updated_at if the system should prevent it."
          ],
          exam: "Date and amount defects often come from missing validation at API or import level."
        },
        {
          code: "SQL-5.6",
          heading: "Migration and import verification",
          body:
            "Migration testing compares source and target data to confirm records, totals, transformations, and relationships survived the move.",
          bullets: [
            "Compare source and target row counts by table or business category.",
            "Compare totals such as revenue, quantity, and balance.",
            "Sample transformed fields, date conversions, trimmed strings, and mapped statuses.",
            "Check missing records and duplicate records after import."
          ],
          exam: "Counts alone are not enough; totals and sampled transformed values matter."
        },
        {
          code: "SQL-5.7",
          heading: "Building a reusable data checklist",
          body:
            "A tester can keep a reusable checklist of SQL integrity checks and adapt it for each feature or release.",
          bullets: [
            "Required fields missing.",
            "Unexpected NULLs or blanks.",
            "Duplicate business keys.",
            "Orphan child records.",
            "Invalid statuses, impossible dates, and wrong totals."
          ],
          exam: "A checklist reduces missed data risks during regression."
        }
      ],
      viSections: [
        {
          code: "SQL-5.1",
          heading: "Tư duy data integrity",
          body:
            "Data integrity nghĩa là dữ liệu lưu trữ vẫn chính xác, nhất quán và có ý nghĩa giữa các table liên quan và business rule.",
          bullets: [
            "Defect integrity có thể tồn tại dù UI load thành công.",
            "Report có thể trông đầy đủ nhưng dùng record duplicate, orphan hoặc invalid.",
            "SQL check của tester nên nhắm vào business risk, không chỉ technical constraint."
          ],
          exam: "Data check tốt nối triệu chứng database với impact user hoặc business."
        },
        {
          code: "SQL-5.2",
          heading: "Check orphan record",
          body:
            "Orphan record là child record thiếu parent mong đợi. LEFT JOIN cộng IS NULL là cách phổ biến để tìm.",
          bullets: [
            "Order item không có order có thể làm hỏng order detail page.",
            "Order không có customer có thể làm hỏng invoice hoặc customer report.",
            "Orphan bất thường thường liên quan migration, delete hoặc integration."
          ],
          exam: "Orphan đặc biệt quan trọng sau import và migration."
        },
        {
          code: "SQL-5.3",
          heading: "Duplicate business key",
          body:
            "Technical id có thể unique nhưng business key vẫn duplicate. Tester cần biết field nào phải unique trong product.",
          bullets: [
            "Email, username, booking reference, invoice number hoặc SKU có thể cần unique.",
            "Dùng GROUP BY business_key HAVING COUNT(*) > 1 để tìm duplicate.",
            "Kiểm tra rule duplicate có phân biệt hoa thường hoặc bỏ qua space không."
          ],
          exam: "Duplicate business data có thể gây lỗi login, payment, report và notification."
        },
        {
          code: "SQL-5.4",
          heading: "Status và state transition sai",
          body:
            "Nhiều hệ thống dùng status và state transition. SQL có thể phát hiện state bất khả thi hoặc không support.",
          bullets: [
            "Tìm status nằm ngoài allowed list.",
            "Tìm paid order không có payment record nếu rule yêu cầu.",
            "Tìm cancelled order vẫn xuất hiện trong paid revenue."
          ],
          exam: "Status chỉ có ý nghĩa khi tuân theo business state model."
        },
        {
          code: "SQL-5.5",
          heading: "Date và numeric value bất khả thi",
          body:
            "Boundary và consistency check có thể tìm value bất khả thi mà UI không thể hiện rõ.",
          bullets: [
            "Check checkout date trước checkin date.",
            "Check quantity âm, price âm hoặc total nhỏ hơn 0 khi không cho phép.",
            "Check created_at sau updated_at nếu hệ thống phải ngăn điều đó."
          ],
          exam: "Defect date và amount thường đến từ thiếu validation ở API hoặc import."
        },
        {
          code: "SQL-5.6",
          heading: "Verify migration và import",
          body:
            "Migration testing so sánh source và target data để xác nhận record, total, transformation và relationship sống sót sau khi chuyển.",
          bullets: [
            "So sánh row count source/target theo table hoặc business category.",
            "So sánh total như revenue, quantity và balance.",
            "Sample field transform, date conversion, string trim và mapped status.",
            "Check missing record và duplicate record sau import."
          ],
          exam: "Count thôi chưa đủ; total và sample transformed value cũng quan trọng."
        },
        {
          code: "SQL-5.7",
          heading: "Tạo data checklist tái sử dụng",
          body:
            "Tester có thể giữ checklist integrity SQL và điều chỉnh cho từng feature hoặc release.",
          bullets: [
            "Required field bị thiếu.",
            "NULL hoặc blank ngoài expected.",
            "Duplicate business key.",
            "Orphan child record.",
            "Status sai, date bất khả thi và total sai."
          ],
          exam: "Checklist giúp giảm rủi ro bỏ sót data trong regression."
        }
      ],
      terms: [
        ["Orphan record", "A child row whose expected parent row is missing."],
        ["Business key", "A real-world identifier such as email, SKU, or invoice number."],
        ["Migration", "Moving data from one system or structure to another."],
        ["Data integrity", "Accuracy and consistency of stored data."],
        ["State transition", "A change from one business status to another."]
      ],
      viTerms: [
        ["Orphan record", "Row con thiếu row cha mong đợi."],
        ["Business key", "Định danh nghiệp vụ như email, SKU hoặc invoice number."],
        ["Migration", "Chuyển dữ liệu từ hệ thống hoặc cấu trúc này sang cấu trúc khác."],
        ["Data integrity", "Tính chính xác và nhất quán của dữ liệu lưu trữ."],
        ["State transition", "Sự chuyển từ trạng thái nghiệp vụ này sang trạng thái khác."]
      ]
    },
    {
      id: 6,
      sourceNote:
        "Expanded from intermediate SQL practice themes: subqueries, CASE, COALESCE, CTEs, and window functions adapted for tester evidence.",
      viSourceNote:
        "Nội dung mở rộng từ các chủ đề SQL trung cấp: subquery, CASE, COALESCE, CTE và window function, được điều chỉnh cho evidence của tester.",
      sections: [
        {
          code: "SQL-6.1",
          heading: "Subqueries for focused checks",
          body:
            "A subquery is a query inside another query. It can help testers isolate a group of records before applying a final check.",
          bullets: [
            "Find orders whose customer is in a filtered customer set.",
            "Find products that never appear in order_items.",
            "Keep subqueries readable; if it gets complex, consider a CTE."
          ],
          exam: "A subquery should make the logic clearer, not more mysterious."
        },
        {
          code: "SQL-6.2",
          heading: "CASE for business labels",
          body:
            "CASE creates conditional values in the query result, which helps map raw data into business-friendly labels.",
          bullets: [
            "Classify orders as paid, pending, cancelled, or unknown.",
            "Mark pass/fail evidence columns for report checks.",
            "Translate numeric flags into readable result labels."
          ],
          exam: "CASE is useful when the database stores codes but the evidence needs meaning."
        },
        {
          code: "SQL-6.3",
          heading: "COALESCE for NULL handling",
          body:
            "COALESCE returns the first non-null value. Testers use it to display fallback values or compare expected defaults.",
          bullets: [
            "Show zero when no paid total exists, if the requirement says empty should display as 0.",
            "Avoid confusing NULL with a real zero when the business meaning differs.",
            "Use COALESCE carefully in WHERE clauses because it can change filter semantics."
          ],
          exam: "Replacing NULL with 0 is correct only when the requirement says so."
        },
        {
          code: "SQL-6.4",
          heading: "CTEs for readable evidence",
          body:
            "A common table expression names an intermediate result. It is excellent for multi-step tester evidence because each step can express intent.",
          bullets: [
            "Step 1: calculate paid order totals.",
            "Step 2: group totals by customer.",
            "Step 3: compare with UI report values.",
            "Use CTE names that describe the business meaning."
          ],
          exam: "Readable CTEs are easier to review than one huge nested query."
        },
        {
          code: "SQL-6.5",
          heading: "Window functions for ranking and latest records",
          body:
            "Window functions calculate values across related rows while keeping row-level detail, which is useful for rankings and latest-record checks.",
          bullets: [
            "ROW_NUMBER can identify the latest order per customer.",
            "DENSE_RANK can rank customers by paid spending.",
            "SUM(...) OVER can show row detail plus group total in the same result."
          ],
          exam: "GROUP BY collapses rows; window functions can keep the detail."
        },
        {
          code: "SQL-6.6",
          heading: "Tester evidence queries",
          body:
            "Advanced SQL should still serve a tester purpose: prove a mismatch, isolate a defect, or validate a high-risk rule.",
          bullets: [
            "Start with the smallest query that proves the point.",
            "Add columns that explain the mismatch, such as id, status, amount, date, and calculated value.",
            "Avoid changing data while preparing evidence."
          ],
          exam: "A concise query with clear business meaning beats a clever query nobody trusts."
        },
        {
          code: "SQL-6.7",
          heading: "From SQL learning sites to project use",
          body:
            "Tutorial sites teach syntax in small examples. Project SQL adds messy data, permissions, naming conventions, and changing requirements.",
          bullets: [
            "Use tutorial exercises to build syntax confidence.",
            "Use project schema diagrams and requirements to write meaningful checks.",
            "Ask for read-only access, data dictionary, and safe environment rules before investigating real systems."
          ],
          exam: "Syntax knowledge becomes tester skill only when connected to product risk."
        }
      ],
      viSections: [
        {
          code: "SQL-6.1",
          heading: "Subquery cho check tập trung",
          body:
            "Subquery là query nằm trong query khác. Nó giúp tester tách một nhóm record trước khi áp dụng check cuối.",
          bullets: [
            "Tìm order của nhóm customer đã filter.",
            "Tìm product chưa từng xuất hiện trong order_items.",
            "Giữ subquery dễ đọc; nếu quá phức tạp, cân nhắc CTE."
          ],
          exam: "Subquery nên làm logic rõ hơn, không làm bí hiểm hơn."
        },
        {
          code: "SQL-6.2",
          heading: "CASE cho nhãn nghiệp vụ",
          body:
            "CASE tạo value có điều kiện trong query result, giúp map raw data thành label dễ hiểu với business.",
          bullets: [
            "Phân loại order thành paid, pending, cancelled hoặc unknown.",
            "Đánh dấu pass/fail evidence column cho report check.",
            "Dịch numeric flag thành result label dễ đọc."
          ],
          exam: "CASE hữu ích khi database lưu code nhưng evidence cần ý nghĩa."
        },
        {
          code: "SQL-6.3",
          heading: "COALESCE để xử lý NULL",
          body:
            "COALESCE trả value non-null đầu tiên. Tester dùng nó để hiển thị fallback hoặc so sánh default expected.",
          bullets: [
            "Hiển thị zero khi không có paid total nếu requirement nói empty phải hiển thị 0.",
            "Không nhầm NULL với zero thật khi ý nghĩa nghiệp vụ khác nhau.",
            "Cẩn thận khi dùng COALESCE trong WHERE vì nó có thể đổi semantics filter."
          ],
          exam: "Thay NULL bằng 0 chỉ đúng khi requirement nói vậy."
        },
        {
          code: "SQL-6.4",
          heading: "CTE cho evidence dễ đọc",
          body:
            "Common table expression đặt tên cho kết quả trung gian. Nó rất hợp với evidence nhiều bước vì từng bước thể hiện intent.",
          bullets: [
            "Bước 1: tính paid order total.",
            "Bước 2: group total theo customer.",
            "Bước 3: so sánh với UI report value.",
            "Tên CTE nên mô tả ý nghĩa nghiệp vụ."
          ],
          exam: "CTE dễ đọc dễ review hơn một query nested khổng lồ."
        },
        {
          code: "SQL-6.5",
          heading: "Window function để rank và lấy record mới nhất",
          body:
            "Window function tính giá trị trên các row liên quan nhưng vẫn giữ row-level detail, hữu ích cho ranking và latest-record check.",
          bullets: [
            "ROW_NUMBER giúp xác định order mới nhất của mỗi customer.",
            "DENSE_RANK giúp rank customer theo paid spending.",
            "SUM(...) OVER có thể hiển thị row detail cùng group total trong một result."
          ],
          exam: "GROUP BY gom row; window function có thể giữ detail."
        },
        {
          code: "SQL-6.6",
          heading: "Query evidence cho tester",
          body:
            "SQL nâng cao vẫn phải phục vụ mục tiêu tester: chứng minh mismatch, khoanh defect hoặc validate rule rủi ro cao.",
          bullets: [
            "Bắt đầu bằng query nhỏ nhất đủ chứng minh vấn đề.",
            "Thêm column giải thích mismatch như id, status, amount, date và calculated value.",
            "Tránh đổi dữ liệu khi chuẩn bị evidence."
          ],
          exam: "Query ngắn gọn có ý nghĩa nghiệp vụ rõ tốt hơn query clever mà không ai tin."
        },
        {
          code: "SQL-6.7",
          heading: "Từ trang học SQL đến dự án thật",
          body:
            "Trang tutorial dạy syntax bằng ví dụ nhỏ. SQL dự án có data lộn xộn, permission, naming convention và requirement thay đổi.",
          bullets: [
            "Dùng bài tutorial để chắc syntax.",
            "Dùng schema diagram và requirement dự án để viết check có ý nghĩa.",
            "Xin read-only access, data dictionary và rule môi trường an toàn trước khi điều tra hệ thật."
          ],
          exam: "Kiến thức syntax chỉ thành kỹ năng tester khi nối với product risk."
        }
      ],
      terms: [
        ["Subquery", "A query nested inside another query."],
        ["CASE", "Conditional logic inside a SQL expression."],
        ["COALESCE", "Returns the first non-null value."],
        ["CTE", "A named temporary result within one SQL statement."],
        ["Window function", "Calculates across related rows while keeping row detail."],
        ["ROW_NUMBER", "Assigns a sequence number within a window."]
      ],
      viTerms: [
        ["Subquery", "Query lồng bên trong query khác."],
        ["CASE", "Logic điều kiện trong SQL expression."],
        ["COALESCE", "Trả value non-null đầu tiên."],
        ["CTE", "Kết quả tạm có tên trong một SQL statement."],
        ["Window function", "Tính trên các row liên quan nhưng giữ row detail."],
        ["ROW_NUMBER", "Đánh số thứ tự trong một window."]
      ]
    }
  ];

  mergeCourse(
    "api",
    apiSourceLinks,
    apiPatches,
    "API content is synthesized from Anh Tester, Postman Learning Center, and Restful Booker, then rewritten for tester-ready project practice."
  );

  mergeCourse(
    "sql",
    sqlSourceLinks,
    sqlPatches,
    "SQL content is synthesized from W3Schools, VietTuts, and SQLZoo, then organized for tester data verification and bug evidence."
  );
})();
