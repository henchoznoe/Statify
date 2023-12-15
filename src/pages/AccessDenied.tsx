import LoginButton from '../components/buttons/LoginButton.tsx';
import Heading from '../components/Heading.tsx';

const AccessDenied = () => {
  return (
    <div className="flex flex-col justify-center text-center gap-3">
      <Heading title="Access denied!"/>
      <p className="font-montserrat font-medium text-lg md:text-xl">You're not logged in...</p>
      <p className="font-montserrat font-medium text-lg md:text-xl">Please log in with your Spotify account before access to this page.</p>
      <div className="w-full flex justify-center">
        <LoginButton/>
      </div>
    </div>
  );
};

export default AccessDenied;