const ABBREVIATIONS = {
  2: '',
  3: 'K',
  6: 'M',
  9: 'B',
};

export const formatNumber = (rawLikes) => {
  if (rawLikes === 0) {
    return 0;
  }

  if (rawLikes < 10000) {
    return rawLikes;
  }
  
  const places = Math.round(Math.log(rawLikes) / Math.log(10));
  const abbreviationIndex = Object.keys(ABBREVIATIONS).findLast((_places) => _places < places);

  return (rawLikes / Math.pow(10, abbreviationIndex)).toFixed(1) + ABBREVIATIONS[abbreviationIndex];
};