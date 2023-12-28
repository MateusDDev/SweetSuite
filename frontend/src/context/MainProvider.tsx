import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ProductType, UserType } from '../types/api';
import { MainContextType } from '../types/mainContext';
import MainContext from './MainContext';

type MainProviderProps = {
  children: React.ReactNode;
};

function MainProvider({ children }: MainProviderProps) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [user, setUser] = useState<UserType>();

  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/products');
      setProducts(res.data);
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [setProducts]);

  const value: MainContextType = {
    authorization: {
      isAuthorized,
      setIsAuthorized,
    },
    api: {
      products,
      setProducts,
      user,
      setUser,
    },
  };

  return (
    <MainContext.Provider value={ value }>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
