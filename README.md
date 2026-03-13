# 📚 BookShelf - Book Management System

> A full-stack web application to manage a book library — built with **Angular** and **ASP.NET Core C#**

---

## 🌟 Overview

BookShelf is a full-stack CRUD web application that allows users to manage a personal book library. Users can add, view, update, and delete books through a clean and modern interface powered by Angular on the frontend and ASP.NET Core on the backend.

---

## ✨ Features

- 📖 View all books in a responsive card grid
- ➕ Add new books with a validated form
- ✏️ Edit existing book details inline
- 🗑️ Delete books with a confirmation dialog
- 🔍 Search and filter books by title, author, or ISBN

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Angular 17, TypeScript, HTML5, CSS3 |
| Backend | ASP.NET Core 8, C# |
| API Style | RESTful API |
| Data Storage | In-memory List |
| API Docs | Swagger / OpenAPI |

---

## 📁 Project Structure

```
book-management-system/
├── backend/
│   └── BookApi/
│       ├── Controllers/
│       │   └── BooksController.cs      # CRUD API endpoints
│       ├── Models/
│       │   └── Book.cs                 # Book data model
│       ├── Program.cs                  # App entry point + CORS config
│       ├── appsettings.json
│       └── BookApi.csproj
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── book-form/           # Add / Edit form component
    │   │   │   └── book-list/           # Books grid + search + delete
    │   │   ├── models/
    │   │   │   └── book.model.ts        # TypeScript Book interface
    │   │   ├── services/
    │   │   │   └── book.service.ts      # HTTP API service
    │   │   ├── app.component.*          # Root component
    │   │   └── app.module.ts
    │   ├── environments/
    │   │   └── environment.ts           # API base URL config
    │   ├── index.html
    │   └── styles.css
    ├── angular.json
    ├── package.json
    └── tsconfig.json
```

---

## ✅ Prerequisites

Make sure the following tools are installed before running the project:

- [Node.js](https://nodejs.org) `v18+`
- [Angular CLI](https://angular.io/cli) `v17+` — install with `npm install -g @angular/cli`
- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [VS Code](https://code.visualstudio.com) *(recommended)*

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/kethu2001/book-management-system.git
cd book-management-system
```

---

### 2️⃣ Run the Backend (ASP.NET Core)

Open a terminal and navigate to the backend folder:

```bash
cd backend/BookApi
```

Restore packages:

```bash
dotnet restore
```

Start the API server:

```bash
dotnet run
```

The backend will start at:

```
http://localhost:5000
```

> 💡 Test the API using Swagger UI at `http://localhost:5000/swagger`

---

### 3️⃣ Run the Frontend (Angular)

Open a **second terminal** and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
ng serve
```

Open the app in your browser:

```
http://localhost:4200
```

---

## 📌 API Endpoints

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/books` | Get all books |
| `GET` | `/books/{id}` | Get a single book by ID |
| `POST` | `/books` | Create a new book |
| `PUT` | `/books/{id}` | Update an existing book |
| `DELETE` | `/books/{id}` | Delete a book |

---

## 📦 Book Model

```json
{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "978-0743273565",
  "publicationDate": "1925-04-10T00:00:00"
}
```

---

## 📝 Notes

- Data is stored **in-memory** — it will reset when the backend server restarts
- CORS is configured to allow requests from `http://localhost:4200`

---

## 👨‍💻 Author

Built as part of the **Enhanzer Trainee / Associate Software Engineer Assignment**

