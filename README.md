# Frontend React Template

A clean starter template for React projects that use **npm** and **Vite**. It gives you a ready-to-run dev server, production builds, ESLint with React-aware rules, Vitest with React Testing Library, React Router for client-side routing, and a minimal `src/` structure.

This template is intentionally lightweight: no TypeScript, Sass, or Prettier by default. Add those pieces only when a project actually needs them.

## Getting Started

This repository is marked as a GitHub template, click **Use this template** and create a new repository from it.

Try it in the browser with [StackBlitz](https://stackblitz.com/github/soikat27/frontend-react-template).

Or start locally with a clean copy (no commit history from this template):

```bash
npx tiged soikat27/frontend-react-template <my-app>
cd my-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Available Scripts

- `npm run dev` starts the local Vite development server.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally so you can check it before deploying.
- `npm run lint` checks project files with ESLint.
- `npm test` runs Vitest. It stays in watch mode until you stop it.

## Linting

This template uses **ESLint** for linting. Configuration lives in the project so every clone uses the same rules:

- `eslint.config.js` — ESLint rules and ignored paths (`dist/` is ignored)

Run checks from the terminal:

```bash
npm run lint
```

For editor support, install the ESLint extension if available in your code editor (available in VS Code). The extension should detect the package and config file in this repo. Use the project setup as the source of truth rather than relying only on global editor settings.

## Testing

This template uses **Vitest** to run tests, **React Testing Library** to render components, and **jest-dom** for DOM matchers such as `toBeInTheDocument`. Tests run in **jsdom**, and **user-event** is included when you need to simulate clicks and typing. 

Configuration lives in the `test` block of `vite.config.js`: jsdom as the environment, and `src/tests/setup.js` as the setup file. That setup file loads the jest-dom matchers and unmounts rendered components after each test.

Put test files in `src/tests/` (for example `Something.test.jsx`). `src/tests/App.test.jsx` is a small working example. Copy its import when you add new tests:

```js
import { describe, it, expect } from "vitest";
```

## Routing

This template uses **React Router** (`react-router`) for client-side routing. Route definitions live in `src/routes.jsx`. Add a route object with a `path` and an `element` for each page:

```js
const routes = [
  {
    path: "/",
    element: <App />,
  },
];
```

`src/main.jsx` creates the browser router from that list and renders it with `RouterProvider`. Navigate between pages with React Router’s `<Link to="...">`, not a plain `<a href>`.

## Vite Config

`vite.config.js` enables the React plugin and opens the browser automatically when you run the development server. The same file sets the Vitest environment to jsdom and points at `src/tests/setup.js`.

## Customizing the Template

After creating a new project from this template:

- Update the document title in `index.html`
- Build your UI in `src/components/App.jsx`
- Adjust styles in `src/styles/App.css` and `src/styles/index.css`
- Add routes in `src/routes.jsx`
- Add tests in `src/tests/`
- Put static files (favicons, images served as-is) in `public/`
- Update package metadata in `package.json`
- Remove scripts or dependencies you do not need

## Author

- **Soikat Saha**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
