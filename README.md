
## **📘 Library Management System**
A simple **TypeScript-based Library Management System** that follows **OOP principles** like **Encapsulation, Inheritance, and Polymorphism**.

---

## 📂 **Folder Structure**
```
📦 library-management-system
 ┣ 📂 src
 ┃ ┣ 📂 models       # Core OOP classes (Person, Member, Librarian, Book, Library)
 ┃ ┣ 📂 services     # Business logic (LibraryService)
 ┃ ┣ 📂 utils        # Helper functions (Logger)
 ┃ ┗ 📄 app.ts       # Entry point to test the system
 ┣ 📄 tsconfig.json  # TypeScript config
 ┣ 📄 package.json   # Dependencies
 ┣ 📄 README.md      # Project documentation
 ┗ 📄 .gitignore     # Ignored files
```

---

## 🚀 **Features**
✅ **OOP Principles** (Encapsulation, Inheritance, Polymorphism)  
✅ **Member & Librarian Roles**  
✅ **Book Management** (Add, Remove, Borrow, Return)  
✅ **Library System with Multiple Books & Members**  

---

## 🛠 **Installation & Setup**
1️⃣ **Clone the Repository**
```sh
git clone https://github.com/yourusername/library-management-system.git
cd library-management-system
```

2️⃣ **Install Dependencies**
```sh
npm install
```

3️⃣ **Compile TypeScript**
```sh
tsc
```

4️⃣ **Run the Application**
```sh
node dist/app.js
```

---

## 📜 **Usage**
📌 **Librarian Actions**
```ts
librarian.addBook(library, book1);
librarian.removeBook(library, book2);
```

📌 **Member Actions**
```ts
member.borrowBook(book1);
member.returnBook(book1);
```

📌 **List Available Books**
```ts
library.listBooks();
```

## 📄 **License**
This project is licensed under the **MIT License**.
