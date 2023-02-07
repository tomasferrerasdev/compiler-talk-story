export const estimatedReadingTime = (totalWords: number) => {
  const estimatedMinutes = totalWords / 200;
  const minutes = Math.round(estimatedMinutes);

  return minutes;
};
