# 📝 Filter List

This is a **Filter List project** built with [Next.js](https://nextjs.org) and [TypeScript](https://www.typescriptlang.org).  
It demonstrates how to **filter items from a list** using **Object-Oriented Programming (OOP)**, maintain **Single Responsibility**, and write **unit tests** for logic.  
The UI is built with **Tailwind CSS**.

---

## ✨ Features

- 🔍 Filter list by **exact match** or **prefix match**
- 💻 OOP structure using `class`, `private`, and `public` methods
- 🧩 Single Responsibility: Each class does one job
- 🧪 Unit tests using **Jest**
- 🎨 Simple and clean UI using **Tailwind CSS**
- ✅ Easy to extend and maintain

---

## ✨ Install
- 1. Install dependencies => npm install or yarn install
- 2. Run development server => npm run dev
- 3. Run tests => npm run test

---

## 🧑‍💻 Tech Stack

| Tech              | Description                              |
|-------------------|------------------------------------------|
| **Next.js**       | React framework with SSR support         |
| **TypeScript**    | Strongly typed JavaScript                |
| **Tailwind CSS**  | Utility-first CSS framework for styling  |
| **Jest**          | Unit testing framework                   |

---

## 📂 Project Structure
```bash
filter-list-oop/
│── app/
│   ├── page.tsx          # Main page with input & result
│   └── components/
│       └── CardResult.tsx # Result display component
│
│── utils/
│   ├── FilterSearch.ts   # OOP filter class
│   └── QuerySplit.ts     # Helper class to split query
│
│── tests/
│   └── FilterSearch.test.ts # Unit tests
│
│── package.json
│── tsconfig.json
│── README.md
```
