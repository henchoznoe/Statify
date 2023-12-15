import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../shared/context/AuthContext.tsx';
import AccessDenied from './AccessDenied.tsx';
import Tabs from '../components/stats/Tabs.tsx';
import { toast } from 'react-toastify';
import { useHttpClient } from '../shared/hooks/http-hook.ts';
import { Spinner } from 'flowbite-react';
import { TopTracksType } from '../types/stats/top-tracks.ts';
import { TopArtistsType } from '../types/stats/top-artists.ts';
import { useNavigate, useParams } from 'react-router-dom';
import TopTracks from '../components/stats/TopTracks.tsx';
import TopArtists from '../components/stats/TopArtists.tsx';

const Stats = () => {

  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const { sendRequest, isLoading } = useHttpClient();
  const params = useParams();
  const [statsMode, setStatsMode] = useState<number>(params.mode === undefined ? 1 : +params.mode);
  const [statsPeriod, setStatsPeriod] = useState<number>(1);
  const [topTracks, setTopTracks] = useState<TopTracksType | null>(null);
  const [topArtists, setTopArtists] = useState<TopArtistsType | null>(null);

  useEffect(() => {
    navigate(`/stats/${statsMode}`);
  }, [statsMode, params.mode, navigate]);

  useEffect(() => {
    const getUsersTop = async () => {
      const timeRange = statsPeriod === 1 ? 'short_term' : statsPeriod === 2 ? 'medium_term' : 'long_term';
      const type = statsMode === 1 ? 'tracks' : 'artists';
      try {
        const response = await sendRequest(
          1,
          `https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=50`,
          'GET',
          null,
          { Authorization: 'Bearer ' + token }
        );
        if ( type === 'tracks' ) {
          setTopTracks(response);
        } else if ( type === 'artists' ) {
          setTopArtists(response);
        }
      } catch ( err: any ) {
        toast.error(err.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    };
    if ( token ) {
      getUsersTop();
    }
  }, [sendRequest, statsMode, statsPeriod, token]);

  if ( !token ) {
    return <AccessDenied/>;
  }

  return (
    <>
      <Tabs statsMode={statsMode} setStatsMode={setStatsMode} setStatsPeriod={setStatsPeriod}/>
      {isLoading[1] && (
        <div className="flex w-full justify-center py-12">
          <Spinner size="xl"/>
        </div>
      )}
      {statsMode === 1 && topTracks && <TopTracks data={topTracks}/>}
      {statsMode === 2 && topArtists && <TopArtists data={topArtists}/>}
    </>
  );
};

export default Stats;
