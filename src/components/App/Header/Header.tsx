import './Header.scss';
import { NavLink } from 'react-router-dom';
import useAppStore from '../../../store/Store';

export default function Header() {
  const { email, updateDarkTheme, darkTheme } = useAppStore();
  return (
    <header>
      <h2>Section Header</h2>
      <button type="button" onClick={() => updateDarkTheme(!darkTheme)}>
        Dark Mode
      </button>
      <ul>
        <li>
          <NavLink to="/">Page d&apos;accueil</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Page de contact</NavLink>
        </li>
      </ul>
      <span>Valeur de l&apos;email : {email}</span>
    </header>
  );
}
