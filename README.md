# 🚀 Sahbaj Khan - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode, and a working contact form.

![Portfolio Preview](public/profile.jpeg)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and professional design
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 📧 **Working Contact Form** - Integrated with Web3Forms API
- 🎯 **Smooth Scrolling** - Navigate sections effortlessly
- 🚀 **Fast Performance** - Built with Vite for optimal speed
- ♿ **Accessible** - ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Form Handling:** Web3Forms API
- **Deployment:** Vercel/Netlify

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/shahbazkhan075/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🔧 Configuration

### Contact Form Setup

To enable the contact form, you need to get a free API key from [Web3Forms](https://web3forms.com):

1. Visit [web3forms.com](https://web3forms.com)
2. Sign up for a free account
3. Get your access key
4. Open `src/Componants/Contact.jsx`
5. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key:

```javascript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'
```

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── profile.jpeg
│   ├── sahbajkhan.pdf
│   └── project images...
├── src/
│   ├── Componants/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Project.jsx
│   │   └── Skills.jsx
│   ├── Context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## 🚀 Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder, ready for deployment.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Personal Information

1. **Profile Image:** Replace `public/profile.jpeg`
2. **Resume:** Replace `public/sahbajkhan.pdf`
3. **Projects:** Edit the `projects` array in `src/Componants/Project.jsx`
4. **Skills:** Edit the skill arrays in `src/Componants/Skills.jsx`
5. **Contact Info:** Update links and details in `src/Componants/Contact.jsx`

### Change Colors

The primary color is blue. To change it, search and replace `blue-600`, `blue-500`, etc. in the component files with your preferred color.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com](https://netlify.com)

## 📧 Contact

- **Email:** sahbajkhan6593@gmail.com
- **LinkedIn:** [Sahbaj Khan](https://www.linkedin.com/in/sahbaj-khan-24138a338/)
- **GitHub:** [@shahbazkhan075](https://github.com/shahbazkhan075)
- **Phone:** +91 6265666859

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Form handling by [Web3Forms](https://web3forms.com)

---

Made with ❤️ by Sahbaj Khan
