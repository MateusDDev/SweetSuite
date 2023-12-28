import { useEffect, useState } from 'react';
import useUsers from '../hooks/useUsers';

function SignIn() {
  const { getUsers } = useUsers();
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetch = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h1>Login</h1>
      {/* <LoginForm submitName="Entrar" /> */}
    </main>
  );
}

export default SignIn;
