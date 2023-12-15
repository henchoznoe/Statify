import { TopArtistsType } from '../../types/stats/top-artists.ts';

type Props = {
  data: TopArtistsType;
}

const TopArtists = ({ data }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl my-3 px-2 w-full grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 md:grid-cols-4">
        {data.items.map((artist, index) => (
          <div className="flex flex-col items-center justify-end" key={index}>
            <img src={artist.images.length > 2 ? artist.images[1].url : '/img/empty.jpeg'}
                 alt="Artist cover"
                 className="w-32 sm:3/4 md:w-5/6 h-auto rounded-2xl mb-2"/>
            <span className="font-normal text-sm md:text-md lg:text-xl font-montserrat md:font-semibold mb-3">{index + 1}. {artist.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;