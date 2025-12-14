React Advanced Dashboard

A professional React-based application dashboard built to demonstrate advanced React concepts such as global state management, API handling, UI libraries, and performance optimization.

This project is developed as part of **Full Stack Development – Week 7 Assignment**.

---
📌 Project Overview

The React Advanced Dashboard showcases how modern React applications are structured using industry-standard tools and best practices. It includes Redux Toolkit for global state management, TanStack Query for API handling, Material UI for professional UI design, and React performance optimization techniques.

🚀 Features Implemented

🔹 Redux Toolkit (Global State Management)
- Redux store configured using Redux Toolkit
- Counter slice implemented
- Actions supported:
  - Increment
  - Decrement
  - Reset
- State accessed using:
  - `useSelector`
  - `useDispatch`

---

🔹 TanStack Query (React Query – API Handling)
- Configured React Query client
- Data fetched from public API:
  - `https://jsonplaceholder.typicode.com/users`
- Features:
  - Loading state
  - Error handling
  - Data display
  - Search/filter users
- Mutation implemented:
  - Add new user (POST request)
  - Automatic refetch after mutation

---

🔹 Material UI (MUI) – UI Development
- Professional dashboard layout
- Components used:
  - AppBar (Navbar)
  - Drawer (Sidebar)
  - Box & Grid for layout
  - Cards for dashboard summary
  - Table/List view for users
- Forms implemented using:
  - TextField
  - Select / Dropdown
  - Button

---

🔹 Performance Optimization
- `React.memo` used to prevent unnecessary re-renders
- `useCallback` used for event handlers
- `useMemo` used for optimized filtering logic
- Code splitting implemented using:
  - `React.lazy`
  - `Suspense`

---

🌙 Bonus Features
- Redux + React Query used together
- Dark / Light theme toggle
- Lazy-loaded pages (Users & Settings)
- Optimized list rendering
- Modular and scalable folder structure

---

🛠 Technologies Used
- React
- Redux Toolkit
- React Redux
- TanStack Query (React Query)
- Material UI (MUI)
- React Router DOM
- Vite

📁 Project Structure
src/
│── app/
│ └── store.js
│
│── components/
│ ├── Navbar.jsx
│ ├── Sidebar.jsx
│ ├── Counter.jsx
│ └── DarkModeToggle.jsx
│
│── features/
│ └── counterSlice.js
│
│── pages/
│ ├── Dashboard.jsx
│ ├── Users.jsx
│ └── Settings.jsx
│
│── main.jsx
│── App.jsx
│── index.css

📸 Screenshots (To Attach)
- Dashboard page
- Redux Counter feature
- Users list fetched via React Query
- DarkModeToggle
- Search filter

---

▶️ How to Run the Project

```bash
npm install
npm run dev
