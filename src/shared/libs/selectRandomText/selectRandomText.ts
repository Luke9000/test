import texts from './texts.json';

export const selectRandomText = (): string => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
};
