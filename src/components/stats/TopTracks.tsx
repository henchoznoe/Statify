import { TopTracksType } from '../../types/stats/top-tracks.ts';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { cn } from '../../utils/classNames.ts';

type Props = {
  data: TopTracksType;
}

const TopTracks = ({ data }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl my-3 px-2 flex flex-col gap-2 mx-auto w-full">
        {data.items.map((track, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-gray-200 p-2 md:px-4 text-sm md:text-md font-medium text-gray-700">
                  <div className="flex items-center gap-3 md:gap-6">
                    <span>{index + 1}</span>
                    <img src={track.album.images[1].url} alt="Album cover" className="rounded w-10 md:w-16 h-auto"/>
                    <div className="flex flex-col items-start">
                      <span>{track.name}</span>
                      <div>
                        {track.artists.map((artist, index, array) => (
                          <span key={index} className="font-normal">
                            {artist.name}
                            {index !== array.length - 1 && `, `}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ChevronUpIcon
                    className={cn('h-5 w-5 text-gray-700  transform duration-300', open ? 'rotate-180' : '')}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 p-2 text-sm text-gray-700">
                  <div className="flex justify-between items-center gap-3">
                    <div className="relative w-11/12 h-6 bg-gray-300 rounded-full">
                      <div
                        className="absolute h-full bg-spotify rounded-full"
                        style={{ width: `${track.popularity}%` }}
                      ></div>
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white pl-2">
                        <span className="text-sm">Popularity {track.popularity}%</span>
                      </div>
                    </div>
                    <a href={track.external_urls.spotify} target="_blank" className="w-1/12 flex justify-end">
                      <img
                        src="/img/spotify-black.png"
                        alt="Spotify logo"
                        className="w-6 md:w-8"
                      />
                    </a>
                  </div>
                </Disclosure.Panel>

              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default TopTracks;
