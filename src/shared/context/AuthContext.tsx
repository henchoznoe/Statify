import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface AuthContextType {
  token: string;
  avatar: string;
  name: string;
  profile: string;
  setToken: (token: string) => void;
  setAvatar: (avatar: string) => void;
  setName: (name: string) => void;
  setProfile: (profile: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: '',
  avatar: '',
  name: '',
  profile: '',
  setToken: () => {},
  setAvatar: () => {},
  setName: () => {},
  setProfile: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }: PropsWithChildren) => {

  const [token, setToken] = useState<string>('');
  const [tokenExpirationDate, setTokenExpirationDate] = useState<number | null>(null);
  const [avatar, setAvatar] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [profile, setProfile] = useState<string>('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedTokenExpirationDate = localStorage.getItem('tokenExpirationDate');

    if (storedToken && storedTokenExpirationDate) {
      setToken(storedToken);
      setTokenExpirationDate(Number(storedTokenExpirationDate));
    }
  }, []);

  useEffect(() => {
    if (tokenExpirationDate && tokenExpirationDate < Date.now()) {
      logout();
    }
  }, [tokenExpirationDate]);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpirationDate');
    setToken('');
    setTokenExpirationDate(null);
    toast.success('Logout successful!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000
    })
  };

  const contextValue: AuthContextType = {
    token,
    avatar,
    name,
    profile,
    setToken,
    setAvatar,
    setName,
    setProfile,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

