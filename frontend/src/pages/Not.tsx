import { useNavigate } from 'react-router-dom';

type NotProps = {
  title: string,
};

function Not({ title }: NotProps) {
  const navigate = useNavigate();

  return (
    <>
      <h1>{title}</h1>
      <br />
      <button onClick={ () => navigate(-1) }>Voltar</button>
    </>
  );
}

export default Not;
