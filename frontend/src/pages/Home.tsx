import 'react-toastify/dist/ReactToastify.css';
import Products from '../components/Products';
import SearchProduct from '../components/SearchProduct';
import style from './styles/Home.module.css';

function Home() {
  return (
    <main className={ style.main }>
      <h1>Produtos</h1>
      <SearchProduct />
      <Products />
    </main>
  );
}

export default Home;
