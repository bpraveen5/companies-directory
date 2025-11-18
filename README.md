# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

📘 Companies Directory – Frontend Application

A responsive and fully functional React.js-based Companies Directory where users can browse, search, and filter companies by multiple attributes such as name, location, and industry.
The application consumes APIs (real or mocked) and presents a clean, modern UI with an excellent user experience.

📌 Project Features
✨ Core Features

✔️ Fully responsive UI built with React.js and Material-UI (MUI)

✔️ Displays companies in a clean card or table layout

✔️ Search filter to find companies by name or description

✔️ Location filter

✔️ Industry filter

✔️ Context API used for state management

✔️ Clean component structure & reusable UI components

✔️ API integration (mock or real backend)

🚀 Bonus Features (Optional)

🔄 Pagination

↕️ Sorting (A–Z, Z–A, size, etc.)

♾️ Infinite scroll

🌙 Dark mode toggle

🔍 Detailed company view page

📁 Project Structure
companies-directory/
│── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Filters.jsx
│   │   ├── CompanyCard.jsx
│   │   ├── CompanyList.jsx
│   │   └── Loader.jsx
│   ├── context/
│   │   └── CompaniesContext.jsx
│   ├── data/
│   │   └── companies.json  (if using static JSON)
│   ├── styles/
│   │   ├── Header.css
│   │   └── CompanyCard.css
│   ├── App.js
│   └── index.js
│
└── README.md

🛠️ Technologies Used
Technology	Purpose
React.js	UI framework
Material-UI (MUI)	UI components and styling
Context API	State management
JSON Server / Mockoon	Mock backend APIs
Axios / Fetch	API calls
📡 API Setup Options
Option A — Using Mock API (Recommended for assignment)

Install JSON Server:

npm install -g json-server


Run API:

json-server --watch companies.json --port 5000


Example API endpoint:

GET http://localhost:5000/companies

Option B — Using Static JSON

Place companies.json in src/data/ and import it:

import companies from "../data/companies.json";

Option C — Optional Backend (Node.js + MongoDB)

You may build a small Express API.
Not required, as frontend is the main focus.

▶️ Run the Project
1. Install dependencies
npm install

2. Start React application
npm start

3. Start JSON Server (if using mock API)
json-server --watch companies.json --port 5000

🎨 UI Features

Clean modern layout

Responsive grid

Hover effects

Material-UI components

Search + filter bar

Smooth animations

🧠 State Management (Context API)

Global state handled using:

const { companies, filters, setFilters } = useContext(CompaniesContext);

📸 Screenshots (Add Later)

You can include UI screenshots here.

🙌 Author

Your Name
React.js Developer | Java Full Stack Developer
📧 Email
🔗 LinkedIn
💻 GitHub