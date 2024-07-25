# Récap sur React-Router-DOM

Installation de React-router-Dom.

```sh
pnpm add react-router-dom
```

## Mettre en place un routeur

On créer dans notre arboresence un dossier routes dans src. On y place à l'intérieur un fichier qu'on appelle Router.tsx.

```jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// On va avoir dans cette variable un tableau de routes (objets)

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello world !</h1>,
  },
]);

export default router;
```

## Utiliser le routeur

Il faut diffuser le routeur dans l'application React, pour qu'elle en ait connaissance.
On va le faire dans le main.jsx/tsx.

## On va centraliser le header et le footer (la structure générale)

On va prendre le contenu de notre fichier App.tsx et on va le déplacer dans un fichier routes/Root.tsx (root : racine)
