import { Request, Response } from 'express';

import prettierMusics from '../utils/prettierMusics';
import musicSuggestions from '../utils/musicSuggestions';
import weather_api from '../service/api';

interface SuggestProps {
  singers: [string];
  musics: [string];
}

class CoordController {
  async store(request: Request, response: Response) {
    const { latitude, longitude } = request.query;

    const key = 'c5eb8eba4db828de283ea23ee2365e84';

    const info = await weather_api.get(
      `/weather?lat=${latitude}&lon=${longitude}&appid=${key}`,
    );

    const temperature = Math.round(info.data.main.temp - 273.15);

    const nameCity = info.data.name;

    const suggestMusics = musicSuggestions(temperature) as SuggestProps;

    const result = prettierMusics(suggestMusics);

    return response.json({ result, temperature, nameCity });
  }
}

export default new CoordController();
