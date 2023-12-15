import Spotify from '../icons/Spotify.tsx';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/context/AuthContext.tsx';
import { toast } from 'react-toastify';

const SPOTIFY_URL = `${import.meta.env.VITE_SPOTIFY_AUTH_ENDPOINT}
?client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}
&redirect_uri=${import.meta.env.VITE_SPOTIFY_REDIRECT_URI}
&scope=${import.meta.env.VITE_SPOTIFY_SCOPE}
&response_type=${import.meta.env.VITE_SPOTIFY_RESPONSE_TYPE}`;

const LoginButton = () => {

  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const hash = location.hash;
      if ( hash ) {
        const storedToken = extractTokenFromHash(hash);
        location.hash = '';
        if ( storedToken ) {
          setToken(storedToken);
          const expiresIn = extractExpiresInFromHash(hash);
          const expirationDate = expiresIn ? Date.now() + expiresIn * 1000 : null;
          localStorage.setItem('token', storedToken);
          localStorage.setItem('tokenExpirationDate', String(expirationDate));
          toast.success('Login successful!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000
          });
        }
      }
    } catch ( err: any ) {
      toast.error(err.message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }, [token, setToken, navigate]);

  const extractTokenFromHash = (hash: string) => {
    const tokenParam = hash.substring(1).split('&').find((elem) => elem.startsWith('access_token'));
    return tokenParam ? tokenParam.split('=')[1] : null;
  };

  const extractExpiresInFromHash = (hash: string) => {
    const expiresInParam = hash.substring(1).split('&').find((elem) => elem.startsWith('expires_in'));
    return expiresInParam ? parseInt(expiresInParam.split('=')[1], 10) : null;
  };

  return (
    <button type="button"
            className="flex gap-2 items-center justify-center text-white bg-spotify font-montserrat font-semibold border border-gray-300 focus:outline-none hover:bg-spotifyh rounded-lg text-sm px-3 py-2"
            onClick={() => open(SPOTIFY_URL, '_self')}
    >
      <span>Login</span>
      <Spotify/>
    </button>
  );
};

export default LoginButton;