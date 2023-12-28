import { createContext } from 'react';
import { MainContextType } from '../types/mainContext';

const MainContext = createContext({} as MainContextType);

export default MainContext;
