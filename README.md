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
├── assets/         # Imagens, fontes e arquivos estáticos
├── components/     # Componentes reutilizáveis
├── pages/          # Páginas principais da aplicação
├── routes/         # Definição de rotas e navegação
├── services/       # Lógicas de integração com APIs, serviços externos
│   ├── api/        # Instâncias e configurações globais do Axios
│   └── endpoint/   # Endpoints específicos organizados por domínio
├── utils/          # Funções utilitárias e helpers
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
