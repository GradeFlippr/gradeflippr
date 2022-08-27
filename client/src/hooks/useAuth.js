import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

const AuthContext = createContext();
console.log('IN useAuth');

export const AuthProvider = ({ children }) => {
  console.log('IN AuthProvider');
  const [user, setUser] = useLocalStorage('user', null);
  console.log(`USER: ${user}, setUser: ${JSON.stringify(setUser)}`);
  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    navigate('/dashboard/tutor', { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};
