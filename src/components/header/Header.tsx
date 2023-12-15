import { useContext, useEffect } from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook.ts';
import { AuthContext } from '../../shared/context/AuthContext.tsx';
import { Navbar } from 'flowbite-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import LoginButton from '../buttons/LoginButton.tsx';
import { menuItems, MenuItemsType } from '../../constants/header/menu-items.ts';
import { cn } from '../../utils/classNames.ts';
import ProfileMenu from './ProfileMenu.tsx';
import { toast } from 'react-toastify';

const Header = () => {

  const loc = useLocation();
  const navigate = useNavigate();
  const { token, avatar, setAvatar, setName, setProfile } = useContext(AuthContext);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const getUserInfos = async () => {
      try {
        const response = await sendRequest(1, 'https://api.spotify.com/v1/me', 'GET', null, { Authorization: 'Bearer ' + token });
        setAvatar(response.images[0].url);
        setName(response.display_name);
        setProfile(response.external_urls.spotify);
      } catch ( err: any ) {
        toast.error(err.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    };
    if ( token ) {
      getUserInfos();
    }
  }, [avatar, sendRequest, setAvatar, setName, setProfile, token]);

  return (
    <>
      <header className="sticky top-0 z-10 p-2 max-w-screen-xl mx-auto">
        <Navbar fluid className="mx-auto bg-gray-200 rounded-2xl">
          <Navbar.Brand className="hover:cursor-pointer w-28"
                        onClick={() => loc.pathname !== '/' ? navigate('/') : location.reload()}
          >
            <span className="self-center whitespace-nowrap text-xl font-semibold font-montserrat tracking-wider">Statify</span>
          </Navbar.Brand>
          <div className="flex md:order-2 space-x-3 w-28 justify-end">
            {token ? <ProfileMenu/> : <LoginButton/>}
            <Navbar.Toggle className="hover:bg-gray-300"/>
          </div>
          <Navbar.Collapse>
            {menuItems.map((menu: MenuItemsType) => (
              <NavLink key={menu.to} to={menu.to}
                       className={cn('mb-2 md:mb-0 font-montserrat font-semibold tracking-wider text-gray-800 py-2 px-3 hover:bg-gray-300 hover:rounded-2xl rounded transition-all',
                         loc.pathname === menu.to || menu.to.substring(1,6) === loc.pathname.substring(1,6)? 'rounded-2xl bg-gray-300' : '')}
              >
                {menu.label}
              </NavLink>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;