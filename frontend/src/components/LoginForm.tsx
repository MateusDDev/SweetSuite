import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../types/api';
import useLocalStorage from '../hooks/useLocalStore';
import MainContext from '../context/MainContext';
import style from './styles/LoginForm.module.css';

type LoginFormProps = {
  submitName: string,
};

function LoginForm({ submitName }: LoginFormProps) {
  const navigate = useNavigate();
  const { authorization } = useContext(MainContext);
  const { setUser, getUser } = authorization;
  const [, setToken] = useLocalStorage('token', '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getToken = async (formUser: UserType) => {
    try {
      const { data } = await axios.post('http://localhost:5000/login', formUser);

      if (data.token) {
        setToken(data.token);
        return data.token;
      }
    } catch ({ response }: any) {
      return toast.error(response.data.message);
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

    const newToken = await getToken(formUser);
    const lastUser = await getUser(newToken);
    setUser(lastUser);

    if (newToken && lastUser) {
      navigate('/');
      window.location.reload();
    }
  });

  return (
    <form
      className={ style.form }
      onSubmit={ handleSubmit }
    >
      <div className={ style.inputs }>
        <input
          className={ style.input }
          type="text"
          placeholder="Nome de Usuário"
          value={ username }
          onChange={ ({ target }) => setUsername(target.value) }
        />
        <input
          className={ style.input }
          type="password"
          placeholder="Senha"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </div>
      <div>
        <button className={ style.btn }>{submitName}</button>
      </div>
    </form>
  );
}

export default LoginForm;
