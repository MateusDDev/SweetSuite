/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaSearch } from 'react-icons/fa';
import { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import style from './styles/SearchProducts.module.css';
import MainContext from '../context/MainContext';

function SearchProduct() {
  const [isFocus, setIsFocus] = useState(false);
  const [query, setQuery] = useState('');
  const { api } = useContext(MainContext);
  const { setQueryData } = api;

  const handleSearch = async (q: string) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/products/search?name=${q}`);

      setQuery('');

      if (data.length < 1 || !query) {
        return toast.error('Nenhum produto encontrado');
      }

      setQueryData(data);
    } catch ({ response }: any) {
      console.error(response);
      toast.error(response.data.message);
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
