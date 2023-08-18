export const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const RANDOM_PHRASES = [
  'wow 😍😍😍',
  'bro is NOT us',
  'what a scruptious little man',
  'LMAFAOFOAF',
  'hee hee',
  '😭😭😭😭😭😭',
  'GYATT',
  'BOMBOCLATTT',
  'bro\'s bloody bottoms are underneath 😭🙏',
  'oh my',
  'hm',
];
export const randomComment = () => {
  return RANDOM_PHRASES[randomInt(0, RANDOM_PHRASES.length)];
};