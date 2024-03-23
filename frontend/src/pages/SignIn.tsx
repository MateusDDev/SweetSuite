import { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import style from './styles/SignIn.module.css';
import { LoginContext } from '../context/LoginContext';

function SignIn() {
  const { isAuthenticated } = useContext(LoginContext);

  if (isAuthenticated) {
    return (
      <div className={ style.logged }>
        <h1>Login realizado</h1>
      </div>
    );
  }

  return (
    <main className={ style.main }>
      <h1>Login</h1>
      <LoginForm submitName="Entrar" />
    </main>
  );
}

export default SignIn;
