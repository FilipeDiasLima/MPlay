interface SuggestProps {
  singers: [string];
  musics: [string];
}

export default function prettierMusics(suggestMusics: SuggestProps): object {
  const prettierMusicsArr = [];
  const { singers } = suggestMusics;
  const { musics } = suggestMusics;

  for (let i = 0; i < suggestMusics.singers.length; i += 1) {
    prettierMusicsArr.push(singers[i]);
    prettierMusicsArr.push(musics[i]);
  }

  return prettierMusicsArr;
}
