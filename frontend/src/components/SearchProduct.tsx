/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import style from './styles/SearchProducts.module.css';

function SearchProduct() {
  const [isFocus, setIsFocus] = useState(false);

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
        />
      </label>
      <button
        className={
            `${style.searchBtn} ${isFocus ? style.showBtn : style.hideBtn}`
            }
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchProduct;
