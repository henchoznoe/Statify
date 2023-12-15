import Heading from '../components/Heading.tsx';
import { Button, Card } from 'flowbite-react';
import LoginButton from '../components/buttons/LoginButton.tsx';
import { createElement, useContext } from 'react';
import { AuthContext } from '../shared/context/AuthContext.tsx';
import { Link, useNavigate } from 'react-router-dom';
import { homeButtons, HomeButtonsType } from '../constants/home/home-buttons.ts';
import { homeFeatures, HomeFeaturesType } from '../constants/home/home-features.ts';

const Home = () => {

  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Heading title="Statify"/>
      <div className="flex flex-col items-center gap-8 mx-5">
        <Card className="max-w-2xl w-full bg-gray-200 rounded-2xl">
          {token ? (
            <div className="flex flex-col gap-2 items-center">
              {homeButtons.map((button: HomeButtonsType, index: number) => (
                <Button key={index}
                        color="dark"
                        className="w-full sm:w-1/2"
                        onClick={() => navigate(`/stats/${button.path}`)}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <p className="font-normal text-gray-700 text-justify">
                Please login with your Spotify account to see your favorites tracks, artists and genres.
              </p>
              <LoginButton/>
              <p className="font-normal text-sm italic text-gray-700 text-center">
                By logging in, you agree to our <Link to="/privacy-policy" className="text-spotify">Privacy Policy</Link>.
              </p>
            </div>
          )}
        </Card>
        <Card className="max-w-2xl w-full bg-gray-200 rounded-2xl mb-10">
          <div className="flex flex-col gap-6">
            {homeFeatures.map((feat: HomeFeaturesType, index: number) => (
              <div key={index} className="flex gap-5">
                <div className="flex items-center justify-center w-1/12">
                  {createElement(feat.icon, {
                    className: 'h-8 w-8'
                  })}
                </div>
                <div className="flex flex-col gap-2 w-11/12">
                  <h2 className="text-xl font-semibold font-montserrat">{feat.title}</h2>
                  <p className="font-normal text-sm italic text-gray-700">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Home;