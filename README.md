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

## Déploiement sur Vercel
1. Assurez-vous que les dépendances sont installées (`npm install`).
2. Connectez le dépôt à Vercel et sélectionnez le framework **Vite**.
3. Vercel utilisera `npm run build` et déploiera le contenu du dossier `dist` (déclaré dans `vercel.json`).
4. Les routes clientes sont réécrites vers `index.html`, ce qui garantit le fonctionnement de React Router sur toutes les URLs.

Après le premier déploiement, chaque push sur la branche sélectionnée déclenchera automatiquement un nouveau déploiement.
