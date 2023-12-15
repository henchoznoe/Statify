import { SocialIcon } from 'react-social-icons';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-200 rounded-t-lg">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="https://statify.henchoz.org/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Statify</span>
            </Link>
            <p className="font-normal italic text-sm">Statify is not related to Spotify AB <br/> or any of it´s partners in any way</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Links</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <NavLink to="/" className="hover:underline">Home</NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="/stats/1" className="hover:underline">Stats</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow me</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="https://henchoz.org" target="_blank" className="hover:underline">Noé Henchoz</a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/henchoznoe" target="_blank" className="hover:underline">Github</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <NavLink to="/privacy-policy" className="hover:underline">Privacy Policy</NavLink>
                </li>
                <li>
                  <a href="https://www.spotify.com/us/account/overview/" target="_blank" className="hover:underline">Spotify account</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8"/>
        <div className="flex flex-col items-center md:flex-row justify-between">
          <span className="text-sm text-gray-500">
            Made by <a href="https://henchoz.org/" target="_blank" className="hover:underline">Noé Henchoz</a>.
            NO rights reserved and NO copyright © {new Date().getFullYear()}.
          </span>
          <div className="flex mt-4 md:mt-0 gap-2">
            <SocialIcon url="https://x.com/noehenchoz" target="_blank"/>
            <SocialIcon url="https://github.com/henchoznoe" target="_blank"/>
            <SocialIcon url="https://open.spotify.com/user/316w3yeeyepv3ageodtog5eqteuq" target="_blank"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;