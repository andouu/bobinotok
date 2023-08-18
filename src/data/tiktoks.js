import { randomInt } from '../helpers/random';
import { ANDREW, SOAP, YUCHEN } from './users';
import { v4 as uuidv4 } from 'uuid';
import TT1 from '../assets/videos/tt1.mp4';
import TT2 from '../assets/videos/tt2.mp4';
import TT3 from '../assets/videos/tt3.mp4';
import TT4 from '../assets/videos/tt4.mp4';
import TT5 from '../assets/videos/tt5.mp4';
import TT6 from '../assets/videos/tt6.mp4';
import TT7 from '../assets/videos/tt7.mp4';

export const TIKTOKS = [
  {
    id: uuidv4(),
    src: TT1,
    user: YUCHEN,
    caption: 'HIEH HIEH BOAH',
    comments: [],
    tags: ['#foryou', '#dating', '#hiehhiehboah'],
    meta: {
      likes: randomInt(1, 4300000),
      comments: randomInt(1, 4300000),
      saves: randomInt(1, 4300000),
      shares: randomInt(1, 4300000),
    },
  },
  {
    id: uuidv4(),
    src: TT2,
    user: SOAP,
    caption: 'Found a cutie patootie on the subway 🥺',
    comments: [],
    tags: ['#fy', '#cute', '#subway', '#asian'],
    meta: {
      likes: randomInt(1, 4300000),
      comments: randomInt(1, 4300000),
      saves: randomInt(1, 4300000),
      shares: randomInt(1, 4300000),
    },
  },
  {
    id: uuidv4(),
    src: TT3,
    user: ANDREW,
    caption: 'Need I say more.',
    comments: [],
    tags: ['#4youpage', '#fish', '#GYAT', '#sexy', '#keshi'],
    meta: {
      likes: randomInt(1, 4300000),
      comments: randomInt(1, 4300000),
      saves: randomInt(1, 4300000),
      shares: randomInt(1, 4300000),
    },
  },
  {
    id: uuidv4(),
    src: TT4,
    user: SOAP,
    caption: 'bro was caught lackin 💀💀',
    comments: [],
    tags: ['#4u', '#sleeper', '#snoozin', '#blud'],
    meta: {
      likes: randomInt(1, 4300000),
      comments: randomInt(1, 4300000),
      saves: randomInt(1, 4300000),
      shares: randomInt(1, 4300000),
    },
  },
  {
    id: uuidv4(),
    src: TT5,
    user: YUCHEN,
    caption: 'Times really change fast I feel he was born yesterday 😭😭',
    comments: [],
    tags: ['#foryou', '#baby', '#momlife', '#leavingthenest'],
    meta: {
      likes: randomInt(1, 4300000),
      comments: randomInt(1, 4300000),
      saves: randomInt(1, 4300000),
      shares: randomInt(1, 4300000),
    },
  },
  {
    id: uuidv4(),
    src: TT6,
    user: YUCHEN,
    caption: 'Bobinofarming in the Bobinoland',
    comments: [],
    tags: ['#food', '#farmer', '#rednecklife', '#fyp'],
    meta: {
      likes: randomInt(1, 4300000),
      comments: randomInt(1, 4300000),
      saves: randomInt(1, 4300000),
      shares: randomInt(1, 4300000),
    },
  },
  {
    id: uuidv4(),
    src: TT7,
    user: YUCHEN,
    caption: 'kumalala kumalala kumala savestaaa',
    comments: [],
    tags: ['#soccer', '#mancity', '#barca', '#wow', '#fyp'],
    meta: {
      likes: randomInt(1, 4300000),
      comments: randomInt(1, 4300000),
      saves: randomInt(1, 4300000),
      shares: randomInt(1, 4300000),
    },
  },
];