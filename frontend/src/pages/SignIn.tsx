import LoginForm from '../components/LoginForm';
import useLocalStorage from '../hooks/useLocalStore';

function SignIn() {
  const [authorization] = useLocalStorage('authorization', '');

  if (authorization) {
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
