import { NavLink, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { useContext } from 'react';
import style from './NavBar.module.css';
import useLocalStorage from '../../hooks/useLocalStore';
import { LoginContext } from '../../context/LoginContext';

function NavBar() {
  const { isAuthenticated } = useContext(LoginContext);
  const [, , removeToken] = useLocalStorage('token', '');
  const navigate = useNavigate();

  const handleLogOut = () => {
    removeToken();
    navigate('/moderator');
    window.location.reload();
  };

  return (
    <nav className={ style.navbar }>
      <div className={ style.logo }>
        <h2>Logo</h2>
      </div>
      <div className={ style.links }>
        <NavLink to="/">Home</NavLink>
        {isAuthenticated && (
          <>
            <NavLink to="/addproduct">Adicionar Produto</NavLink>
            <FiLogOut className={ style.logOut } onClick={ handleLogOut } />
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
