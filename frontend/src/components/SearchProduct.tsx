import { FaSearch } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import style from './styles/SearchProducts.module.css';
import MainContext from '../context/MainContext';
import { requestData } from '../services/request';

type SearchProductProps = {
  setSearchLoading: React.Dispatch<React.SetStateAction<boolean>>
};

function SearchProduct({ setSearchLoading }: SearchProductProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [query, setQuery] = useState('');
  const { setQueryData } = useContext(MainContext);

  const handleSearch = async (q: string) => {
    if (!q.trim()) return toast.error('Digite um produto para busca');

    try {
      setSearchLoading(true);
      const products = await requestData(`/products/search?name=${q}`);

      setQuery('');

      if (products.length < 1 || !query) {
        return toast.error('Nenhum produto encontrado');
      }

      setQueryData(products);
      setSearchLoading(false);
    } catch ({ response }: any) {
      console.error(response);
      toast.error(response.data.message);
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <div className={ style.container }>
      <label
        className={
         `${style.inputContainer} ${isFocus ? style.hideIptBorder : style.showIptBorder}`
          }
      >
        <FaSearch
          className={
        `${style.searchIcon} ${isFocus ? style.hideIcon : style.showIcon}`
        }
        />
        <input
          type="text"
          className={ style.searchBar }
          onFocus={ () => setIsFocus(true) }
          onBlur={ () => setIsFocus(false) }
          value={ query }
          onChange={ ({ target }) => setQuery(target.value) }
        />
      </label>
      <button
        className={
            `${style.searchBtn} ${isFocus ? style.showBtn : style.hideBtn}`
            }
        onClick={ () => handleSearch(query) }
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchProduct;
