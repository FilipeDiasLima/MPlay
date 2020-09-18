import { toParties, pop, rock, classics } from './musics';

export default function musicSuggest(temp: number): object {
  const allmusics = { suggest: { toParties, pop, rock, classics } };
  if (temp > 30) {
    const suggest = toParties;
    return suggest;
  }
  if (temp >= 15 && temp <= 30) {
    const suggest = pop;
    return suggest;
  }
  if (temp >= 10 && temp <= 14) {
    const suggest = rock;
    return suggest;
  }
  if (temp < 10) {
    const suggest = classics;
    return suggest;
  }

  return allmusics;
}
