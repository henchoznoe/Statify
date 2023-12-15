import Heading from '../components/Heading.tsx';
import { Card } from 'flowbite-react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const PrivacyPolicy = () => {
  return (
    <>
      <Heading title="Privacy Policy"/>
      <div className="flex justify-center">
        <Card className="max-w-2xl mx-5 bg-gray-200 rounded-2xl">
          <div className="flex flex-col gap-4">
            <p className="font-normal text-gray-700 text-justify">
              Statify is an open-source application developed using the Spotify Web API.
              By opting to utilize this application, you acknowledge and consent to the use of your Spotify
              account username and data to generate information about your top artists and tracks.
            </p>
            <p className="font-normal text-gray-700 text-justify">
              It is important to note that none of the data accessed by Statify is retained or gathered in
              any storage system, and it is categorically not shared with any third-party entities. The sole
              purpose of utilizing this information is for the display of your data and related functionalities.
            </p>
            <p className="font-normal text-gray-700 text-justify">
              While we assure you that your data is handled with utmost integrity and is not subject to any
              malicious use, if you wish to revoke Statify's permissions, you can do so by visiting your apps
              page and selecting "REVOKE ACCESS" for Statify. For a more comprehensive guide on this process,
              please refer to the detailed instructions below.
            </p>
            <button type="button"
                    className="flex gap-2 items-center text-white justify-center bg-spotify font-montserrat font-semibold border border-gray-300 focus:outline-none hover:bg-spotifyh rounded-lg text-sm px-3 py-2"
                    onClick={() => open('https://support.spotify.com/us/article/spotify-on-other-apps/')}
            >
              <span>More information</span>
              <ArrowRightIcon className="w-5 h-5"/>
            </button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default PrivacyPolicy;