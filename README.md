# Personal Portfolio Website

A modern, CS-inspired personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a sharp, minimal design with dark/light mode support and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, CS-inspired aesthetic with sharp UI elements
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth page transitions and micro-interactions
- **Interactive Elements**: Terminal-style interface, easter eggs, and mini-games
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **SEO**: React Helmet
- **Deployment**: GitHub Pages with GitHub Actions

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (theme, etc.)
├── pages/             # Page components
├── App.tsx            # Main app component
└── index.tsx          # Entry point
```

## 🎨 Design System

### Colors
- **Primary**: Orange (#f97316)
- **Accent**: Green (#10b981), Blue (#3b82f6), Purple (#8b5cf6), Red (#ef4444)
- **Dark Theme**: Navy/gray palette inspired by VSCode
- **Light Theme**: Soft blue/white palette

### Typography
- **Monospace**: Fira Code, JetBrains Mono for code elements
- **Sans**: Inter for body text

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-website.git
cd my-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

### Deployment

The site is automatically deployed to GitHub Pages when you push to the main branch. The deployment is handled by GitHub Actions.

## 📄 Pages

### Home
- Animated hero section with typewriter effect
- Quick navigation to other sections
- Social media links
- Code rain background effect

### About
- Professional information and bio
- Interactive experience timeline with skill filtering
- Skills with progress bars
- 5-pointed radar chart for skill distribution
- Profile image placeholder

### Projects
- Filterable project cards
- Technology tags
- GitHub and demo links
- Project descriptions and images

### Fun
- Interactive terminal with commands
- Music and game interests
- Mini-game canvas
- Easter eggs (Konami code)

### Contact
- Contact form
- Social media links
- Contact information
- Availability status

## 🎮 Interactive Features

### Terminal Commands
- `help` - Show available commands
- `about` - Personal information
- `music` - Music preferences
- `games` - Favorite games
- `clear` - Clear terminal
- `konami` - Easter egg hint

### Easter Eggs
- **Konami Code**: ↑↑↓↓←→←→BA triggers celebration animation
- **Hidden Animations**: Various hover and click effects
- **Mini Game**: Clickable color-changing squares

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/pages/Home.tsx` - Hero text and social links
- `src/pages/About.tsx` - Bio, experience, and skills
- `src/pages/Projects.tsx` - Project data
- `src/pages/Contact.tsx` - Contact information
- `src/components/Navbar.tsx` - Name in navbar

### Styling
- Colors: Update `tailwind.config.js` accent colors
- Fonts: Modify font imports in `public/index.html`
- Animations: Customize keyframes in `tailwind.config.js`

### Deployment
1. Update `package.json` homepage URL
2. Push to GitHub main branch
3. Enable GitHub Pages in repository settings
4. Set source to GitHub Actions

## 📱 Responsive Design

The website is built with a mobile-first approach using Tailwind's responsive breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run eject` - Eject from Create React App
- `npm run deploy` - Deploy to GitHub Pages

### Code Style

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS for styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for beautiful icons
- [React Router](https://reactrouter.com/) for routing
- [GitHub Pages](https://pages.github.com/) for hosting

---

Built with ❤️ and lots of ☕ 