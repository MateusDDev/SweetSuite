import { createContext } from 'react';
import { MainContextType } from '../types/MainContext';

const MainContext = createContext({} as MainContextType);

export default MainContext;
