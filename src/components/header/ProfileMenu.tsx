import { useContext } from 'react';
import { Avatar, Dropdown } from 'flowbite-react';
import { AuthContext } from '../../shared/context/AuthContext.tsx';
import { CogIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const ProfileMenu = () => {

  const { avatar, name, profile, logout } = useContext(AuthContext);

  return (
    <Dropdown arrowIcon={false} inline className="p-2 w-40" label={<Avatar alt="Profile" img={avatar} rounded/>}>
      <Dropdown.Header>
        <span className="block text-sm font-semibold truncate">
          {name}
        </span>
      </Dropdown.Header>
      <Dropdown.Item className="rounded flex gap-2" onClick={() => open(profile)}>
        <UserCircleIcon className="w-5 h-5"/>
        Profile
      </Dropdown.Item>
      <Dropdown.Item className="rounded flex gap-2" onClick={() => open('https://www.spotify.com/us/account/overview/')}>
        <CogIcon className="w-5 h-5"/>
        Settings
      </Dropdown.Item>
      <Dropdown.Divider/>
      <Dropdown.Item className="rounded text-red-600 hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10 flex gap-2" onClick={logout}>
        <PowerIcon className="w-5 h-5"/>
        Logout
      </Dropdown.Item>
    </Dropdown>
  );
};

export default ProfileMenu;