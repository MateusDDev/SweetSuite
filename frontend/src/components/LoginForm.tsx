import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import style from './styles/LoginForm.module.css';
import { LoginContext } from '../context/LoginContext';

type LoginFormProps = {
  submitName: string,
};

function LoginForm({ submitName }: LoginFormProps) {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogin = async (credentials: any) => {
    try {
      await login(credentials);
      navigate('/');
    } catch ({ response: { data } }: any) {
      return toast.error(data.message);
    }
  };

  return (
    <form
      className={ style.form }
      onSubmit={ handleSubmit(handleLogin) }
    >
      <div className={ style.inputs }>
        <input
          { ...register('username') }
          className={ style.input }
          type="text"
          name="username"
          placeholder="Nome de Usuário"
        />
        <input
          { ...register('password') }
          className={ style.input }
          type="password"
          name="password"
          placeholder="Senha"
        />
      </div>
      <div>
        <button className={ style.btn }>{submitName}</button>
      </div>
    </form>
  );
}

export default LoginForm;
