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

📁 Project Structure

```
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
```
🛠️ Technologies Used

| Technology                | Purpose                   |
| ------------------------- | ------------------------- |
| **React.js**              | UI framework              |
| **Material-UI (MUI)**     | UI components and styling |
| **Context API**           | State management          |
| **JSON Server / Mockoon** | Mock backend APIs         |
| **Axios / Fetch**         | API calls                 |

📡 API Setup Options
Option A — Using Mock API (Recommended for assignment)

Install JSON Server:
npm install -g json-server
Run API:
json-server --watch companies.json --port 4000
Example API endpoint:
GET http://localhost:5000/companies
Option B — Using Static JSON

Place companies.json in src/data/ and import it:
import companies from "../data/companies.json";
📸 Screenshots
<img width="1868" height="969" alt="image" src="https://github.com/user-attachments/assets/812d46d3-31b2-4913-a999-85c643e5084a" />
<img width="1825" height="934" alt="image" src="https://github.com/user-attachments/assets/31835a97-0b69-4cf3-85c9-8314b4373078" />
<img width="1832" height="942" alt="image" src="https://github.com/user-attachments/assets/1fccf7fb-7e21-4bfc-922b-4e840230d8a3" />
<img width="1805" height="880" alt="image" src="https://github.com/user-attachments/assets/116bd413-ed58-448b-85c7-70ff2195e6e6" />

🙌 Author

B Praveen Kumar

Java Full Stack Developer

📧 bpraveen8040@gmail.com






