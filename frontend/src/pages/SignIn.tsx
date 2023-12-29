import { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import MainContext from '../context/MainContext';
import style from './styles/SignIn.module.css';

function SignIn() {
  const { authorization } = useContext(MainContext);
  const { user } = authorization;

  if (user) {
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
