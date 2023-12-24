import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Página não encontrada</h1>
      <br />
      <Link to="/">
        <h2>Voltar para a página inicial</h2>
      </Link>
    </>
  );
}

export default NotFound;
