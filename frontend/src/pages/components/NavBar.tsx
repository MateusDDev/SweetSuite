import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={ style.navbar }>
      <div className={ style.logo }>
        <h2>Logo</h2>
      </div>
      <div className={ style.links }>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/addproduct">Adicionar Produto</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
