# Kanban Task Manager

A task management application built with React. It allows users to organize tasks across different stages of a workflow using a Kanban board.

---

## 🌐 Live Demo

```
https://
```

---

## ✨ Features

* Add new tasks
* Edit existing tasks
* Delete tasks
* Move tasks between workflow stages
* Drag and drop tasks between columns
* Organize tasks into:
  To Do
  In Progress
  Completed
* Search tasks
* Filter tasks by status
* Persist tasks using localStorage
* Responsive layout
* Empty-state messages for each column

---

## 📖 What I Learned

This project was built to strengthen my understanding of React application architecture, state management, and component optimization.

### React Fundamentals

- Component-based architecture
- Props
- `useState`
- `useReducer`
- Context API
- CRUD operations
- Conditional rendering
- Array methods such as `map()` and `filter()`

### State Management

- Designing reducer actions and state transitions
- Managing shared state with Context API
- Synchronizing application state with `localStorage`

### Drag and Drop

- Implemented drag-and-drop interactions using `@dnd-kit`
- Moving tasks between different Kanban columns

### React Optimization

- Practiced `useMemo` for memoizing derived values
- Practiced `useCallback` for memoizing functions passed between components

> `useMemo` and `useCallback` were included primarily as learning exercises to understand React's memoization and optimization patterns. They were not strictly necessary for the scale of this application.

---

## 🛠️ Tech Stack

- React
- JavaScript
- Vite
- CSS
- `@dnd-kit` for drag-and-drop interactions
- Context API
- `useReducer`
- Browser `localStorage`
- `useMomo`
- `useCallBack`
---

## 📸 Screenshots

### Desktop

<img width="1342" height="634" alt="Cuplikan layar 2026-08-13 103150" src="https://github.com/user-attachments/assets/8c617665-253e-4d72-9d7b-3668fe65240c" />


### Mobile

<img width="475" height="477" alt="Cuplikan layar 2026-08-13 103320" src="https://github.com/user-attachments/assets/e5228a81-5f4f-4567-a4e3-fa552db9d201" />



## 📁 Project Structure

```
src/
├── components/
│   ├── Board.jsx
│   ├── Column.jsx
│   ├── TaskCard.jsx
│   ├── TaskForm.jsx
│   └── ...
│
├── context/
│   └── ...
│
├── reducer/
│   └── ...
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🚀 Getting Started

Installation

Clone the repository and install the dependencies:

```
npm install

```
Run Development Server
```
npm run dev
```

Open the local development URL shown in the terminal.

Build

To create a production build:
```
npm run build
```
Clone the repository

---

Data Structure

Each task is represented as an object containing information such as:

{

  id,
  title,
  status,
  priority,
  date
}


