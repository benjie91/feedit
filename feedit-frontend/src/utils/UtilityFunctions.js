export const times = x => f => {
  if (x > 0) {
    f();
    times(x - 1)(f);
  }
};

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
