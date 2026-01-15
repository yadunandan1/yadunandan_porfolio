# Adarsh Yadav - Portfolio Website

A modern, premium, and highly interactive personal portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Glassmorphism, soft gradients, and smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dark Mode**: Toggle between light and dark themes with system preference support
- **Interactive Sections**: Hero, About, Skills, Projects, Services, Contact
- **Smooth Animations**: Powered by Framer Motion
- **Form Integration**: Contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Tech Stack

- React.js 18
- Tailwind CSS 3
- Framer Motion
- Vite
- React Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonial.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useDarkMode.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Customization

- Edit content in respective component files
- Modify colors in `tailwind.config.js`
- Update animations in components using Framer Motion

## 📧 Contact Form Setup

The contact form uses FormSubmit. To activate:
1. Replace the form action URL in Contact.jsx
2. Verify your email address

## 📄 License

© 2026 Adarsh Yadav. All Rights Reserved.
