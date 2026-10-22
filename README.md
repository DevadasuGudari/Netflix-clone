# 🎬 Netflix Clone: React Movie Streaming UI

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/React_Router-6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router">
  <img src="https://img.shields.io/badge/Axios-HTTP-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

<p align="center">
  <strong>A responsive Netflix-style movie browsing app built with React and the OMDb API.</strong>
</p>

<p align="center">
  🎞️ Intro Animation &nbsp;•&nbsp;
  🏠 Home &nbsp;•&nbsp;
  🎥 Movies &nbsp;•&nbsp;
  📺 Shows &nbsp;•&nbsp;
  🔍 Search &nbsp;•&nbsp;
  📄 Details Page
</p>

---

## 🍿 About Netflix Clone

**Netflix Clone** is a front-end web application developed using **React** and **Vite**. It copies the look and feel of Netflix and gets real movie data from the **OMDb API**.

Users can:

- 🎞️ Watch a short intro animation when the app opens
- 🧭 Move between Home, Movies, and Shows pages
- 🔍 Search for any movie or show by title
- 📄 Click a title to see a banner and full details
- 📱 Use the app on mobile, tablet, and desktop

This project shows how **React components, hooks, routing, and API integration** work together in one real application.

---

## 🎯 Project Highlights

| Feature | Description |
|---|---|
| 🎞️ Intro Animation | About 5 seconds animation before the main UI |
| 🧭 Navigation | Header with Home, Movies, and Shows |
| 🔍 Search | Search movies and shows by title |
| 🏠 Home Page | Shows all titles |
| 🎥 Movies / 📺 Shows | Separate pages using `filter()` |
| 📄 Details Page | Banner, poster, plot, rating and more |
| 🌐 API | Live data from OMDb API using Axios |
| 🦶 Footer | Netflix-style footer |
| 📱 Responsive | Works on all screen sizes |

---

# ✨ Features

## 👤 User Features

- Intro animation on app start
- Header with Home, Movies, and Shows links
- Search bar to find titles
- Home page showing all titles
- Movies page and Shows page
- Click any title to open its details page
- Banner and full information on the details page
- Footer section
- Responsive user interface

## ⚛️ React Features Used

- Functional components (each in its own file)
- `useState` to store data
- `useEffect` to call the API when a page loads
- `map()` to display lists of movies
- `filter()` to separate Movies and Shows
- `react-router-dom` for page navigation
- Axios for API requests

---

# 🛠️ Technologies Used

## 🎨 Frontend

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

## 🔧 Tools and Libraries

<p>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
  <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</p>

## 🌐 Data Source

- [OMDb API](https://www.omdbapi.com/) for movie and show information

---

# 🏗️ Project Architecture

Netflix Clone follows React's **component-based architecture**. Each part of the screen is a separate component.

```text
                    👤 USER
                      │
                      ▼
                 🚀 main.jsx
                      │
                      ▼
                  ⚛️ App.jsx
              (Routes + Layout)
                      │
      ┌───────────────┼────────────────┐
      ▼               ▼                ▼
  🎞️ Intro        🧭 Header        🦶 Footer
                      │
                 🔍 SearchBar
                      │
      ┌───────────────┼────────────────┐
      ▼               ▼                ▼
   🏠 Home         🎥 Movies         📺 Shows
      └───────────────┼────────────────┘
                      ▼
                📄 Details Page
                      │
                      ▼
              🌐 OMDb API (Axios)
```

## 🧩 Components

Each component has one job:

- **Intro**: shows the opening animation
- **Header**: logo and navigation links
- **SearchBar**: takes the title typed by the user
- **Home**: shows all titles
- **Movies**: shows only movies
- **Shows**: shows only shows
- **Details**: shows the banner and full information
- **Footer**: shows the bottom section

---

# 📂 Project Structure

```text
netflix-clone/
│
├── public/
│
├── screenshots/
│
├── src/
│   ├── components/
│   │   ├── Intro.jsx
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Home.jsx
│   │   ├── Movies.jsx
│   │   ├── Shows.jsx
│   │   ├── Details.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

> Update the file names to match your project.

---

# 🔑 API Configuration

This project uses the [OMDb API](https://www.omdbapi.com/) to get movie data.

**Base URL:**

```text
https://www.omdbapi.com/?apikey=61e576a4&t=
```

**Example request (search by title):**

```text
https://www.omdbapi.com/?apikey=61e576a4&t=batman
```

**Example in code:**

```javascript
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://www.omdbapi.com/?apikey=61e576a4&t=";

function Home() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(API_URL + "batman")
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <h2>{movie.Title}</h2>;
}
```

> This is a free OMDb key (1,000 requests per day). You can also get your own key from [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) and replace it in your code.

---

# 🚀 Installation & Setup

Follow these steps to run the project on your computer.

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/netflix-clone.git
```

## 2️⃣ Go to the Project Folder

```bash
cd netflix-clone
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Start the Development Server

```bash
npm run dev
```

## 5️⃣ Open in Browser

```text
http://localhost:5173/
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |

> **Requirement:** Node.js 18 or higher.

---

# 🎬 Example User Flow

```text
🚀 Open App
      ↓
🎞️ Intro Animation (about 5 seconds)
      ↓
🏠 Home Page (all titles)
      ↓
🔍 Search / Choose Movies or Shows
      ↓
🎥 Click a Title
      ↓
📄 Details Page (banner + full info)
      ↓
⬅️ Go Back and Browse More
```

---

# 📸 Screenshots

| 🎞️ Intro Animation | 🏠 Home Page |
|---|---|
| ![Intro](./src/assets/images/intro.png) | ![Home](./src/assets/images/Home.png) |

| 🔍 Search Results | 📄 Details Page |
|---|---|
| ![Search](./src/assets/images/search.png) | ![Details](./src/assets/images/details.png) |

---

# 🎯 Project Objectives

The main objectives of this project are:

- Understand React component-based development
- Practice `useState` and `useEffect` hooks
- Fetch data from a real API using Axios
- Display lists using `map()` and `filter()`
- Implement page navigation using React Router
- Build a clean, responsive Netflix-style UI
- Organize code into separate component files
- Gain practical front-end development experience

---

# 💡 What This Project Demonstrates

```text
HTML + CSS
    ↓
JavaScript (ES6)
    ↓
React Components
    ↓
Hooks (useState, useEffect)
    ↓
API Integration (Axios)
    ↓
Routing (react-router-dom)
    ↓
Responsive UI
```

---

# 🔮 Future Enhancements

- [ ] 🔐 User login and signup
- [ ] ❤️ "My List" (favourites) feature
- [ ] 🎬 Movie trailers
- [ ] 📃 Pagination or infinite scroll
- [ ] ⏳ Loading skeletons and better error messages
- [ ] 🌗 Dark and light theme toggle
- [ ] 🗂️ Genre-based categories
- [ ] ☁️ Deploy to Vercel or Netlify

---

# 🌐 Deployment

You can deploy this project for free.

```bash
npm run build
```

Upload the `dist` folder to **Vercel**, **Netlify**, or **GitHub Pages**.

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push the branch: `git push origin feature/new-feature`
5. Open a Pull Request

---

# 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Axios Documentation](https://axios-http.com/)
- [OMDb API Documentation](https://www.omdbapi.com/)

---

# 👩‍💻 Author

## Bhanusri Manukonda

**B.Tech Computer Science & Engineering Student**

🎯 **Aspiring Full Stack Developer**

I enjoy building practical web applications, learning new technologies, and improving my skills through real-world projects.

### 💻 Skills Used

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</p>

- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://www.linkedin.com/in/gudari-devadasu-81141130a/)
- Email: gudaridevadasu@gmail.com

---

# 📄 License

This project is created for **educational and portfolio purposes**. It is not affiliated with Netflix. You are free to modify and improve it for learning.

---

<p align="center">

## ⭐ If you like this project, please give the repository a star!

### 🎬 Netflix Clone: Learn • Build • Improve • Grow 🚀

</p>
