import { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import MainContext from '../context/MainContext';

function SignIn() {
  const { authorization } = useContext(MainContext);
  const { user } = authorization;

  if (user) {
    return (
      <h1>Login realizado</h1>
    );
  }

  return (
    <main>
      <h1>Login</h1>
      <LoginForm submitName="Entrar" />
    </main>
  );
}

export default SignIn;
