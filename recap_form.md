# Formulaires et récupération des valeurs

Il y a de nombreuses façons de récupérer des valeurs dans un formulaire en React :

- contrôler les champs
- non contrôler : d'utiliser le event.currentTarget dans votre handler et ensuite d'accéder aux champs du form (récupérer chaque valeur de chaque champs du form)

## Contrôler des champs

On va utiliser le useState().

```jsx
const [id, setId] = useState('');
<input
  type="text"
  placeholder="123456789"
  value={id}
  onChange={(e) => setId(e.currentTarget.value)}
/>;
```

Il faut pas oublier le value et le onChange si on veut que tout fonctionne.
