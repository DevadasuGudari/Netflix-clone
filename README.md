<div align="center">

# 🎬 Netflix Clone

A responsive Netflix-style movie browsing app built with **React**, **Vite**, and the **OMDb API**.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-HTTP-5A29E4?logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

[Live Demo](https://your-demo-link.com) · [Report Bug](https://github.com/your-username/netflix-clone/issues) · [Request Feature](https://github.com/your-username/netflix-clone/issues)

</div>

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [API Configuration](#-api-configuration)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 📖 About the Project

This project is a front-end clone of the Netflix interface. It starts with an intro animation, then loads a movie browsing experience where users can search for titles, explore Movies and Shows, and open a details page for any title.

All movie data comes from the [OMDb API](https://www.omdbapi.com/). The project was built to practice core React concepts such as component-based design, hooks, routing, and API integration.

---

## ✨ Features

- 🎞️ Intro animation (about 5 seconds) before the main app loads
- 🧭 Header navigation with **Home**, **Movies**, and **Shows** pages
- 🔍 Search bar to find movies and shows by title
- 🏠 Home page that displays all titles
- 🎥 Separate Movies and Shows pages using filtered data
- 📄 Details page with a banner, poster, plot, cast, rating, and more
- 🦶 Footer section
- 📱 Responsive design for desktop, tablet, and mobile
- ⚡ Fast development and build with Vite

---

## 📸 Screenshots

| Intro Animation | Home Page |
|---|---|
| ![Intro](screenshots/intro.png) | ![Home](screenshots/home.png) |

| Search Results | Details Page |
|---|---|
| ![Search](screenshots/search.png) | ![Details](screenshots/details.png) |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Library | React |
| Build Tool | Vite |
| Routing | react-router-dom |
| HTTP Client | Axios |
| Data Source | OMDb API |
| Styling | CSS |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/your-username/netflix-clone.git
```

2. **Go to the project folder**
```bash
   cd netflix-clone
```

3. **Install dependencies**
```bash
   npm install
```

4. **Start the development server**
```bash
   npm run dev
```

5. Open `http://localhost:5173` in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build locally |

---

## 🔑 API Configuration

This project uses the [OMDb API](https://www.omdbapi.com/) to get movie data.

**Base URL:**

```
https://www.omdbapi.com/?apikey=61e576a4&t=
```

**Example request (search by title):**

```
https://www.omdbapi.com/?apikey=61e576a4&t=batman
```

**Example in code:**

```javascript
import axios from "axios";

const API_URL = "https://www.omdbapi.com/?apikey=61e576a4&t=";

axios
  .get(API_URL + "batman")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
```

> This is a free OMDb key (1,000 requests per day). You can also get your own key from [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) and replace it in your code.

---

## 📂 Project Structure

```
netflix-clone/
├── public/
├── screenshots/
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
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ How It Works

1. The app opens with an intro animation, then shows the main layout.
2. `useEffect` runs when a page loads and gets movie data from the OMDb API using **Axios** (`?apikey=61e576a4&t=title`).
3. The response is saved using `useState`.
4. The list of titles is shown using `map()`.
5. `filter()` separates Movies and Shows.
6. Clicking a title opens the details page using **react-router-dom**.

---

## 🔮 Future Improvements

- [ ] Add user login and signup
- [ ] Add a "My List" (favourites) feature
- [ ] Add movie trailers
- [ ] Add pagination or infinite scroll
- [ ] Add loading skeletons and better error messages
- [ ] Add dark and light theme toggle

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the project
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Bhanusri Manukonda**

- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-linkedin)
- Email: your-email@example.com

---

## 🙏 Acknowledgements

- [OMDb API](https://www.omdbapi.com/) for the movie data
- [Netflix](https://www.netflix.com/) for the design inspiration (this project is for learning only and is not affiliated with Netflix)

<div align="center">

⭐ If you like this project, please give it a star!

</div>
