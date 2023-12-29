import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import useLocalStorage from '../../hooks/useLocalStore';

function NavBar() {
  const [authorization] = useLocalStorage('authorization', '');

  return (
    <nav className={ style.navbar }>
      <div className={ style.logo }>
        <h2>Logo</h2>
      </div>
      <div className={ style.links }>
        <NavLink to="/">Home</NavLink>
        {authorization && (
          <NavLink to="/addproduct">Adicionar Produto</NavLink>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
