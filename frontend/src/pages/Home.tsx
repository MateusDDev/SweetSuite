import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Products from '../components/Products';
import SearchProduct from '../components/SearchProduct';
import style from './styles/Home.module.css';
import Loading from '../components/Loading';

function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <main className={ style.main }>
      <h1>Produtos</h1>
      <SearchProduct setSearchLoading={ setLoading } />
      {loading
        ? <Loading />
        : <Products />}
    </main>
  );
}

export default Home;
