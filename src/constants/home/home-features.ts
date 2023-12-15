import { ArrowUturnLeftIcon, FolderArrowDownIcon, ListBulletIcon, PlayIcon } from '@heroicons/react/24/solid';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export type HomeFeaturesType = {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & { title?: string | undefined; titleId?: string | undefined; } & RefAttributes<SVGSVGElement>>;
}

export const homeFeatures: HomeFeaturesType[] = [
  {
    title: 'Your own stats',
    description: 'Explore your top-played songs, favorite artists, and preferred genres, with the flexibility to toggle between three distinct time frames. Your information is refreshed approximately on a daily basis.',
    icon: ListBulletIcon
  },
  {
    title: 'Create playlist',
    description: 'Generate a playlist based on your individual charts and enjoy seamless listening directly through your Spotify app.',
    icon: FolderArrowDownIcon
  },
  {
    title: 'Recently played tracks',
    description: 'Review the songs you\'ve recently listened to, complete with timestamps.',
    icon: ArrowUturnLeftIcon
  },
  {
    title: 'Now playing track',
    description: 'Review the song you\'re actually listened to.',
    icon: PlayIcon
  }
];