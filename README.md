# Projeto React com Vite + TypeScript

This project was bootstrapped with [Vite](https://vitejs.dev/) and uses React + TypeScript. It is configured with ESLint, Prettier, and a structured folder architecture for scalability and maintainability.

## 🚀 Tecnologias e Ferramentas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [PostCSS](https://postcss.org/) — CSS processor
- [Autoprefixer](https://github.com/postcss/autoprefixer) — CSS compatibility for different browsers
- [shadcn/ui](https://ui.shadcn.com/) — Beautifully designed, accessible, and customizable components for React, built on Radix UI and Tailwind CSS
- [Headless UI](https://headlessui.com/) - Componentes acessíveis e sem estilo, integrados ao Tailwind CSS
- [Phosphor Icons](https://phosphoricons.com/) — Flexible, lightweight, and customizable icon set
- [ESLint](https://eslint.org/) — Code linting and standardization
- [Prettier](https://prettier.io/) — Automatic code formatter
- [react-hook-form](https://react-hook-form.com/) — Form handling library
- [yup](https://github.com/jquense/yup) + [@hookform/resolvers](https://react-hook-form.com/get-started#SchemaValidation) — Form validation
- [axios](https://axios-http.com/) — HTTP requests
- [dayjs](https://day.js.org/) — Date manipulation
- [react-router-dom](https://reactrouter.com/) — Routing and navigation
- [@tanstack/react-query](https://tanstack.com/query/latest) — Data fetching and caching
- [react-toastify](https://fkhadra.github.io/react-toastify/)— Toast notifications
- `@` alias for importing files from the `src` directory

## 📁 Estrutura de Pastas

```
src/
├── assets/             # Images, fonts, and static assets
├── components/         # Reusable React components
│   └── common/         # Shared UI components (e.g., Button, Modal)
│   └── styles/         # Styles for the shared UI components
├── pages/              # Route-specific page components
├── routes/             # Route definitions and navigation logic
├── services/           # API and external service integrations
│   ├── api/            # Axios instance and configuration
│   └── endpoints/      # API endpoints organized by domain
├── utils/              # Utility functions and helpers
│   ├── helpers/        # General-purpose utilities
│   ├── types/          # TypeScript type definitions
│   ├── constants/      # Constant values used across the application
│   ├── enums/          # Enum definitions for TypeScript
│   └── hooks/          # Custom React hooks
├── styles/             # CSS files (e.g., Tailwind CSS entry point)
│   └── global.css/     # Global application styles
│   └── index.css/      # Main entry point for styles
│   └── variables.css/  # CSS variables for themes and colors
├── mocks/              # Mock data for development (optional)
├── config/             # Configuration files (e.g., environment variables)

```

## ▶️ How to Run the Project

```bash
# Install dependencies
npm install

# Run the project in development mode
npm run dev
```

## ✅ Available Scripts

```bash
npm run dev       # Starts the development server
npm run build     # Builds the production version
npm run preview   # Previews the production build
npm run lint      # Runs ESLint for code linting
npm run format    # Runs Prettier to format the code
```

## 💡 Requirements

Node.js 16 or higher

NPM 7 or higher (or Yarn, if preferred)

---

Keep this README updated as the project evolves! ✨
