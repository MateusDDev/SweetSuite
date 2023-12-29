import { useNavigate } from 'react-router-dom';
import style from './styles/Not.module.css';

type NotProps = {
  title: string,
};

function Not({ title }: NotProps) {
  const navigate = useNavigate();

  return (
    <main className={ style.main }>
      <h1>{title}</h1>
      <br />
      <button onClick={ () => navigate(-1) }>Voltar</button>
    </main>
  );
}

export default Not;
