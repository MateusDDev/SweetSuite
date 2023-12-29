import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../types/api';
import useLocalStorage from '../hooks/useLocalStore';
import MainContext from '../context/MainContext';

type LoginFormProps = {
  submitName: string,
};

function LoginForm({ submitName }: LoginFormProps) {
  const navigate = useNavigate();
  const { api } = useContext(MainContext);
  const { setUser } = api;
  const [, setAuthorization] = useLocalStorage('authorization', false);
  const [, setToken] = useLocalStorage('token', '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const verifyLogin = (formUser: UserType, dbUser: UserType | undefined) => {
    const checkLogin = formUser.username === dbUser?.username
    && formUser.password === dbUser.password;

    setAuthorization(checkLogin);
    if (checkLogin === true) {
      navigate('/');
      window.location.reload();
    }
    return toast.error('Usuário ou senha incorretos');
  };

  const getUser = async (lastToken: string) => {
    try {
      const { data } = await axios.get('http://localhost:5000/users/id', { headers: { Authorization: `Bearer ${lastToken}` } });
      setUser(data);
      return data;
    } catch (error) {
      return error;
    }
  };

  const resolveToken = async (formUser: UserType) => {
    try {
      const { data } = await axios.post('http://localhost:5000/login', formUser);

      if (data.token) {
        setToken(data.token);
        return data.token;
      }
    } catch (error) {
      return error;
    }
  };

  const handleSubmit = (async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      return toast.warning('Preencha todos os dados');
    }

    const formUser: UserType = {
      username,
      password,
    };

    const token = await resolveToken(formUser);
    const user = await getUser(token);

    verifyLogin(formUser, user);
  });

  return (
    <form
      onSubmit={ handleSubmit }
    >
      <input
        type="text"
        placeholder="Nome de Usuário"
        value={ username }
        onChange={ ({ target }) => setUsername(target.value) }
      />
      <input
        type="password"
        placeholder="Senha"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button>{submitName}</button>
    </form>
  );
}

export default LoginForm;
