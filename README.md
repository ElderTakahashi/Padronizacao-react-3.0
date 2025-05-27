# Projeto React com Vite + TypeScript

Este projeto foi iniciado com [Vite](https://vitejs.dev/) e utiliza React + TypeScript. Está configurado com ESLint, Prettier e uma estrutura de pastas organizada para facilitar a escalabilidade e manutenção.

## 🚀 Tecnologias e Ferramentas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) - Framework utilitário para estilização
- [PostCSS](https://postcss.org/) - Processador de CSS
- [Autoprefixer](https://github.com/postcss/autoprefixer) - Compatibilidade de CSS com diferentes navegadores
- [Headless UI](https://headlessui.com/) - Componentes acessíveis e sem estilo, integrados ao Tailwind CSS
- [Phosphor Icons](https://phosphoricons.com/) - Conjunto de ícones flexível, leve e personalizável
- [ESLint](https://eslint.org/) — Linter para padronização de código
- [Prettier](https://prettier.io/) — Formatador de código automático
- [react-hook-form](https://react-hook-form.com/) — Manipulação de formulários
- [yup](https://github.com/jquense/yup) + [@hookform/resolvers](https://react-hook-form.com/get-started#SchemaValidation) — Validação de formulários
- [axios](https://axios-http.com/) — Requisições HTTP
- [dayjs](https://day.js.org/) — Manipulação de datas
- [react-router-dom](https://reactrouter.com/) — Roteamento
- [@tanstack/react-query](https://tanstack.com/query/latest) — Gerenciamento de cache de dados
- [react-toastify](https://fkhadra.github.io/react-toastify/) — Notificações/toasts
- Alias `@` para importar arquivos da pasta `src`

## 📁 Estrutura de Pastas

```
src/
├── assets/             # Images, fonts, and static assets
├── components/         # Reusable React components
│   └── common/         # Shared UI components (e.g., Button, Modal)
│   └── styles/         # Styles for the shared UI components (e.g., Button, Modal)
├── pages/              # Page components for routes
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

## ▶️ Como rodar o projeto

```bash
# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev
```

## ✅ Scripts disponíveis

```bash
npm run dev       # Inicia o servidor de desenvolvimento
npm run build     # Gera build de produção
npm run preview   # Pré-visualiza a build
npm run lint      # Roda o ESLint
npm run format    # Roda o Prettier para formatar o código
```

## 💡 Requisitos

- Node.js 16 ou superior
- NPM 7 ou superior (ou Yarn, se preferir)

---

Mantenha este README atualizado conforme o projeto for evoluindo! ✨
