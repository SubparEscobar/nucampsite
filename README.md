# 🏕️ Nucamp: A Better Way to Camp

A responsive, modern, and interactive fictional campsite directory app featuring campsite listings, a reservation system, contact/feedback form, weather integration, and more. Built with **Parcel**, **Bootstrap 5**, **Font Awesome**, and **vanilla JavaScript**, this site is production-ready for Firebase Hosting.

## 📸 Live Preview

### Homepage  
![Homepage preview](img/breadcrumb-trail.jpg)

### Featured Campsite  
![React Lake](img/react-lake.jpg)

### Happy Campers  
![Happy Campers](img/happy-campers.jpg)

## 📦 Features

- 🌦️ **Weather Widget** using OpenWeatherMap API (Houston)
- 🎠 **Bootstrap Carousel** with Play/Pause toggle
- 💬 **Contact Form** with validation
- 🛶 **Campsite Reservation Modal** with form submission
- 📊 **Facts & Figures Table**, Community Partner Accordion
- ⚠️ **Custom 404 Page** for Firebase Hosting
- 🧩 **Parcel bundler** with SCSS support and environment variables

## 📁 Folder Structure

```
nucampsite/
├── index.html
├── aboutus.html
├── contactus.html
├── 404.html
├── scripts.js
├── css/
│   └── styles.scss
├── img/
│   ├── *.jpg / *.png (site images)
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── .firebaserc
```

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/your-username/nucampsite.git
cd nucampsite
npm install
```

### 2. Set up Environment Variables

Create a `.env` file in the root directory:

```env
OPEN_WEATHER_API_KEY=your_openweather_api_key
```

> ✅ Already included in your `.env`: `OPEN_WEATHER_API_KEY=1edede0e9d813cf1813853fcaece445c`  
> ⚠️ Do **not** commit this key publicly. It is already ignored via `.gitignore`.

## 💻 Development Commands

### Start Local Dev Server with Parcel

```bash
npm run start
```

### Build Production Files

```bash
npm run build
```

> Output files will be placed in the `dist/` folder (automatically ignored in version control).

## ☁️ Firebase Hosting Setup

If you're deploying this site on Firebase:

### 1. Login & Initialize Firebase

```bash
firebase login
firebase init
```

- Choose **Hosting**.
- Set `public/` or `dist/` as the public directory.
- Choose `404.html` for fallback.
- Don’t overwrite `index.html` if prompted.

### 2. Deploy

```bash
firebase deploy
```

Your project includes a `.firebaserc` and `404.html` that are Firebase-ready.

## ⚙️ Tech Stack

| Tech              | Purpose                     |
|-------------------|-----------------------------|
| HTML5 / SCSS      | Page structure & styling    |
| Bootstrap 5       | Responsive design framework |
| Font Awesome      | Icon library                |
| JavaScript (ES6)  | DOM manipulation, API calls |
| OpenWeatherMap API| Weather widget              |
| Parcel            | Bundling & dev server       |
| Firebase Hosting  | Deployment                  |

## 🙋 Author

Created by **Aaron Escobar**  
🔗 [GitHub Repository](https://github.com/nucamp/webfun-nucampsite-cdn)

## 📄 License

This project is licensed under the ISC License.
