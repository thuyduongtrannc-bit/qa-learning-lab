# QA Learning Lab

Static web học QA/tester gồm ISTQB CTFL v4.0.1, API Testing và SQL for Testers.

- Login gate với 2 account mặc định: `admin / 123456A@` và `user / 123456A@`
- ISTQB theory và question/options bằng tiếng Anh
- Ví dụ, đáp án và giải thích bằng tiếng Việt
- Có nút dịch theory sang tiếng Việt theo từng course/module
- Learning Objectives được đặt trực tiếp dưới từng section, ví dụ `1.1 What is testing?` kèm `FL-1.1.1`, `FL-1.1.2`
- Chapter Practice có 10 practice set theo từng chapter
- ISTQB có 10 mock exams, mỗi đề 40 câu, pass mark 26/40
- API và SQL có Theory, Practice, Quiz; mỗi course có 6 modules và 5 quiz sets

## Mo local

Mo truc tiep `index.html` trong browser, hoac chay static server:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Sau do mo:

```text
http://127.0.0.1:8765/
```

## Public bang Netlify

1. Vao Netlify Dashboard.
2. Chon **Add new site** -> **Deploy manually**.
3. Keo tha folder `istqb-learning-web` hoac file zip deploy.
4. Netlify se tao URL public.

## Public bang Vercel

1. Vao Vercel Dashboard.
2. Tao project moi tu folder/repository nay.
3. Framework preset: **Other**.
4. Build command: de trong.
5. Output directory: `.`.

## Public bang GitHub Pages

1. Dua cac file trong folder nay len mot GitHub repository.
2. Vao **Settings** -> **Pages**.
3. Source: branch `main`, folder `/root`.
4. GitHub Pages se tao URL public.

## Files

- `index.html`: khung UI
- `styles.css`: giao dien
- `syllabus-data.js`: noi dung syllabus tieng Viet
- `english-content.js`: lop noi dung theory tieng Anh
- `mock-exams.js`: 10 de thi thu CTFL-style
- `api-sql-content.js`: noi dung API Testing va SQL for Testers
- `app.js`: logic tab, quiz, tien do hoc
