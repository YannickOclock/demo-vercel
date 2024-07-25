# Cycle de vie d'un composant React

## Ce qu'on sait

Quand on veut qu'un composant / une application React se mette à jour, il faut définir un state et le changement de la valeur de ce state permet de rendre/re-rendre notre composant/app.

On peut facilement s'en rendre compte en rajoutant un console.log() dans le composant (exemple typique : avec un champs contrôlé dans un formulaire : chaque fois que je tape une lettre dans le champs, mon state change ce qui déclenche un render du composant Form)

On pourra parler un peu plus tard de comment est-ce qu'on fait pour avoir le moins de render possible : l'optimisation d'une application React en utilisant des hooks (UseCallback(), UseMemo(), memo).
PS : même si je ne m'occupe pas de ces optimisations, ça ne m'empêche pas de créer une App React fonctionnelle (cette partie sera généralement traitée en dernier, il faut d'abord s'occuper de mettre en place les states au bons endroits et faire en sorte que l'app se comporte comme on l'attend au départ).

## Intérrogation d'une API

Ce serait pas idéal de mettre le fetch en plein milieu d'un composant, car à chaque rendu d'un composant, les données seraient récupérées au niveau du serveur.

Du coup les concepteurs de React ont imaginés un cycle de vie d'un composant React.

- le montage du composant (mount) : le premier rendu (render)
- les mises à jour d'un composant (update) : lorsqu'un state est modifié (ou une prop est modifiée)
- le démontage (unmount) : lorsque le composant est supprimé

PS : dans l'ancienne version de React (avec les classes), il existait une méthode ComponentDidMount()

Dans la nouvelle version de React, on a pris pour habitude d'utiliser des Hooks (par exemple le useState()).
On a aussi un hook qui s'appelle useEffect()

On peut déclarer au sein d'un composant un useEffect() de deux façons différentes :

```jsx
export default function MonComposant() {
  // Ce useEffect permet d'appliquer un comportement lorsque le composant sera rendu la première fois
  useEffect(() => {
    console.log('Je suis appelé uniquement au premier rendu');
  }, []);
}
```

Si on souhaite que le bout de code soit réexecuté sur la mise à jour d'une prop ou d'un state, il suffit de déclarer cette dépendance à useEffect en argument dans le tableau (deuxième paramètre)

```jsx
export default function MonComposant() {
  const [displayForm, setDisplayForm] = useState(false);

  // Ce useEffect permet d'appliquer un comportement lors du premier rendu ET sur chaque changement du state displayForm
  useEffect(() => {
    console.log(
      'Je suis appelé lors du premier rendu ET lorsque setDisplayForm est appelé'
    );
  }, [displayForm]);
}
```

## Exemple pratique

### Pour la requête GET ALL

J'ai besoin de récupérer de mon backend la liste des users.
Quand est-ce que je vais récupérer la liste ? Lorsque je vais rendre la première fois mon composant.
Nous allons en général stocker cette liste dans un state.

### Lorsque je dois mettre à jour la liste ?

Sur un formulaire d'inscription par exemple
Deux choses à prévoir :

- Mettre à jour le state qui permettra la mise à jour de la liste en local
- En parallèle, on ira faire la requête fetch en POST qui permettra la mise à jour du backend
