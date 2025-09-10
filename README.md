# 📌 Todo App (Frontend + Backend)

** Todo 애플리케이션**입니다.  
프론트엔드는 React + Redux, 백엔드는 Express + REST API + MongoDB 로 구현되었습니다.

---

## 🚀 Features

-   **Express**: Node.js 기반 백엔드 서버 구현
-   **REST API**: CRUD(Create, Read, Update, Delete) 기능 제공
-   **MongoDB**: Mongoose ODM으로 데이터 영속성 관리
-   **Redux**: 전역 상태 관리로 UI와 서버 데이터 동기화

---

## 📂 Project Structure

```bash
server/
 ┣ src/
 ┃ ┣ controllers/   # API 로직 (todos.controller.js)
 ┃ ┣ models/        # Mongoose Schema (todos.model.js)
 ┃ ┣ routes/        # Express Router
 ┃ ┗ app.js       # 서버 진입점
client/
 ┣ src/
 ┃ ┣ components/    # TodoInput, TodoList, TodoItem
 ┃ ┣ store/         # Redux slices & async thunk
 ┃ ┗ App.jsx
```

---

## ⚙️ API Endpoints

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/todos`     | 전체 Todo 조회   |
| POST   | `/todos`     | 새로운 Todo 추가 |
| PUT    | `/todos/:id` | 특정 Todo 수정   |
| DELETE | `/todos/:id` | 특정 Todo 삭제   |

---

## 🛠 Tech Stack

-   **Frontend**: React, Redux Toolkit
-   **Backend**: Express, REST API
-   **Database**: MongoDB (Mongoose)
-   **Tools**: Node.js, npm

---

## 💡 How to Run

```bash
# backend 실행
cd server
npm install
yarn dev

# frontend 실행
cd client
npm install
npm run dev
```

## 🖼 Preview

<img src='img/record.gif' alt='' >
