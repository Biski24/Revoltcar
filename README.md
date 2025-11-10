# Revoltcar WebApp

Site vitrine moderne pour Revoltcar, plateforme française de mobilité durable entre assureurs et garages.

## Stack
- React 18 + TypeScript
- Vite 5
- Tailwind CSS
- Framer Motion
- React Router DOM
- ESLint + Prettier

## Scripts
- `npm run dev` — lance le serveur de développement
- `npm run build` — construit l’application pour la production
- `npm run preview` — prévisualise la build de production
- `npm run lint` — exécute ESLint sur les fichiers TS/TSX

## Structure
Le projet suit l’architecture suivante :
```
src/
 ├─ assets/
 ├─ components/
 ├─ pages/
 ├─ styles/
 ├─ App.tsx
 └─ main.tsx
```

Les styles globaux sont gérés via Tailwind CSS et `src/styles/global.css`.
