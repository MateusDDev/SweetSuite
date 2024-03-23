import { createContext, useEffect, useState } from 'react';
import { LoginContextType, LoginType } from '../types/LoginContextType';
import { requestData, requestLogin, setToken } from '../services/request';
import useLocalStorage from '../hooks/useLocalStore';
import { UserType } from '../types/UserTypes';

type LoginChildren = {
  children: React.ReactNode
};

export const LoginContext = createContext({} as LoginContextType);

export function LoginProvider({ children }: LoginChildren) {
  const [localToken, setLocalToken] = useLocalStorage('token', '');
  const [user, setUser] = useState<UserType | null>(null);
  const isAuthenticated = !!user;

  const getUser = async (token: string) => {
    setToken(token);
    const dbUser = await requestData('/user');
    return dbUser;
  };

  useEffect(() => {
    const fetch = async () => {
      const dbUser = await getUser(localToken);
      setUser(dbUser);
    };
    fetch();
  }, [localToken, isAuthenticated]);

  const login = async ({ username, password }: LoginType) => {
    const { token } = await requestLogin('/login', { username, password });
    const dbUser = await getUser(token);

    setLocalToken(token);
    setUser(dbUser);
  };

  const value: LoginContextType = {
    isAuthenticated,
    user,
    login,
  };

  return (
    <LoginContext.Provider value={ value }>
      {children}
    </LoginContext.Provider>
  );
}
