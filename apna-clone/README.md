# 🚀 Apna.co Job Details Page Clone

A pixel-perfect clone of the [Apna.co](https://apna.co) job portal built with **React.js**, **React Router DOM**, and **custom CSS**. Fully responsive across Desktop, Tablet, and Mobile.

---

## ✨ Features

- 🏠 **Job Listing Page** with search/filter by title & location
- 📋 **Job Details Page** with full job info, highlights, skills, perks
- 🏢 **Company Information Sidebar** with about, size, industry
- 📌 **Sticky Apply Bar** that appears on scroll
- 🔗 **Related Jobs Section** at the bottom
- 📱 **Fully Responsive** — Desktop, Tablet, Mobile
- ⚡ **Dynamic Data** from mock JSON (easy to swap with a real API)
- 🔄 **Navigation** between multiple job pages

---

## 📁 Project Structure

```
apna-clone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Sticky navigation header
│   │   ├── Header.css
│   │   ├── Footer.jsx       # Site footer with links
│   │   ├── Footer.css
│   │   ├── JobCard.jsx      # Reusable job card component
│   │   └── JobCard.css
│   ├── pages/
│   │   ├── JobListingPage.jsx   # Home page with job listings
│   │   ├── JobListingPage.css
│   │   ├── JobDetailsPage.jsx   # Full job detail view
│   │   └── JobDetailsPage.css
│   ├── data/
│   │   └── jobs.js          # Mock JSON job data
│   ├── App.js               # Routes setup
│   ├── index.js             # React entry point
│   └── index.css            # Global styles
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

| Technology       | Purpose                  |
|-----------------|--------------------------|
| React.js 18     | UI framework             |
| React Router DOM v6 | Client-side routing   |
| Custom CSS      | Styling & responsiveness |
| Flexbox & Grid  | Layout system            |

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 16+ installed → [Download here](https://nodejs.org)
- Git installed → [Download here](https://git-scm.com)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/apna-clone.git

# 2. Navigate into the folder
cd apna-clone

# 3. Install dependencies
npm install

# 4. Start development server
npm start
```

The app will open at **http://localhost:3000**

---

## 🌐 Deploy to GitHub Pages (Step-by-Step)

### Step 1 — Create GitHub Repository

1. Go to [https://github.com](https://github.com) → Log in
2. Click the **+** button (top right) → **New repository**
3. Name it: `apna-clone`
4. Set visibility: **Public**
5. Click **Create repository**

---

### Step 2 — Push Your Code to GitHub

Open terminal in your project folder:

```bash
# Initialize git (if not done already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Apna.co clone"

# Add your GitHub repo as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/apna-clone.git

# Push to GitHub
git push -u origin main
```

---

### Step 3 — Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

---

### Step 4 — Update package.json

Open `package.json` and add these two things:

**Add at the top level (replace YOUR_USERNAME):**
```json
"homepage": "https://YOUR_USERNAME.github.io/apna-clone",
```

**Add inside `"scripts"`:**
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Your `scripts` section should look like:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

---

### Step 5 — Deploy!

```bash
npm run deploy
```

This will:
1. Build your React app for production
2. Push the `build/` folder to a `gh-pages` branch on GitHub

---

### Step 6 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select branch: `gh-pages`
5. Click **Save**

---

### Step 7 — Access Your Live Website 🎉

Wait 1-2 minutes, then visit:
```
https://YOUR_USERNAME.github.io/apna-clone
```

---

## 🔄 Updating the Live Site

Whenever you make changes:

```bash
git add .
git commit -m "Update: describe your changes"
git push
npm run deploy
```

---

## 📱 Responsive Breakpoints

| Screen | Width       | Layout              |
|--------|-------------|---------------------|
| Desktop | > 900px    | 2-column grid       |
| Tablet  | 600-900px  | Single column       |
| Mobile  | < 600px    | Stacked, full-width |

---

## 🎨 Color Palette

| Color      | Hex       | Usage              |
|------------|-----------|--------------------|
| Purple     | `#5b2d8e` | Primary / Brand    |
| Orange     | `#ff6b35` | CTA / Accent       |
| Dark       | `#1a1a2e` | Text / Background  |
| Light Gray | `#f4f6f9` | Page background    |

---

## 👨‍💻 Author

Built as part of OriginEdge Technologies internship task.

---

## 📄 License

This project is for educational purposes only. Apna.co is a trademark of Apna Time Sahi Hai Pvt. Ltd.
