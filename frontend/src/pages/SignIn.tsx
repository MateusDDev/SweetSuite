import { useContext, useEffect, useState } from 'react';
import useUsers from '../hooks/useUsers';
import MainContext from '../context/MainContext';
import { UserType } from '../types/api';
import LoginForm from '../components/LoginForm';

function SignIn() {
  const { getUser } = useUsers();
  const { api, authorization } = useContext(MainContext);
  const { user, setUser } = api;
  const [formData, setFormData] = useState<UserType>();

  const verifyLogin = () => {
    if (!user) return false;

    return !(formData?.username !== user.username
      || formData?.password !== user.password);
  };

  authorization.setIsAuthorized(verifyLogin());

  useEffect(() => {
    const fetch = async () => {
      const data = await getUser();
      setUser(data);
    };

    fetch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getForm = (data: UserType) => setFormData(data);

  return (
    <main>
      <h1>Login</h1>
      <LoginForm submitName="Entrar" getForm={ getForm } />
    </main>
  );
}

export default SignIn;
