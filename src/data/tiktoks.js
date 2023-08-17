import { randomInt } from '../helpers/random';
import { ANDREW, SOAP, YUCHEN } from './users';
import { v4 as uuidv4 } from 'uuid';

export const TIKTOKS = [
  {
    id: uuidv4(),
    user: YUCHEN,
    caption: 'I would happily eternally rest before I let a man turn me ugly.',
    comments: [],
    tags: ['#foryou', '#dating'],
    meta: {
      likes: randomInt(1, 4300000),
      comments: randomInt(1, 4300000),
      saves: randomInt(1, 4300000),
      shares: randomInt(1, 4300000),
    },
  },
  {
    id: uuidv4(),
    user: SOAP,
    caption: 'BRO I MEAN EVERYONE.',
    comments: [],
    tags: ['#gym', '#compressionshirt', '#fy'],
    meta: {
      likes: randomInt(1, 4300000),
      comments: randomInt(1, 4300000),
      saves: randomInt(1, 4300000),
      shares: randomInt(1, 4300000),
    },
  },
  {
    id: uuidv4(),
    user: ANDREW,
    caption: 'BRO I MEAN EVERYONE.',
    comments: [],
    tags: ['#gym', '#compressionshirt', '#fy'],
    meta: {
      likes: randomInt(1, 4300000),
      comments: randomInt(1, 4300000),
      saves: randomInt(1, 4300000),
      shares: randomInt(1, 4300000),
    },
  },
  {
    id: uuidv4(),
    user: SOAP,
    caption: 'BRO I MEAN EVERYONE.',
    comments: [],
    tags: ['#gym', '#compressionshirt', '#fy'],
    meta: {
      likes: randomInt(1, 4300000),
      comments: randomInt(1, 4300000),
      saves: randomInt(1, 4300000),
      shares: randomInt(1, 4300000),
    },
  },
  {
    id: uuidv4(),
    user: YUCHEN,
    caption: 'BRO I MEAN EVERYONE.',
    comments: [],
    tags: ['#gym', '#compressionshirt', '#fy'],
    meta: {
      likes: randomInt(1, 4300000),
      comments: randomInt(1, 4300000),
      saves: randomInt(1, 4300000),
      shares: randomInt(1, 4300000),
    },
  },
];