# Récap sur les states

## Etapes de mise en place d'un projet React

- Intégration de la maquette (html/css/scss)
- Je découpe ma maquette en composants (si possible réutilisables)
- Je fais en sorte d'avoir un arbre hiérarchique (logique) pour ma structure HTML
  (par exemple : Header, Footer, éléménts du Header, etc.)

## Mise en place d'un état

Comment je dynamise mon application

- Je mets en place un state dans mon composant
- Je respecte la syntaxe (déstructuration en une variable + un setter)

Attention : les variables définies dans les states sont immutables. Je ne peux pas modifier directement le contenu. Je suis obligé de passer par un setter.
Ce que j'ai dans la parenthèse, c'est la valeur de départ du state.

```jsx
export default function Product() {
  // likes : la variable
  // setLikes : le setter
  const [likes, setLikes] = useState(0);
}
```

- Je passer par la variable pour lire la valeur
- Je passer par le setter pour modifier la valeur (souvent suite à une intérraction : au clic d'un bouton, lors de l'envoi d'un form)

## AFFICHAGE CONDITIONNEL

Si la condition de gauche est vrai (valide) alors le composant de droite s'affiche.

```jsx
{
  maCondition && <MonComposant />;
}
```
