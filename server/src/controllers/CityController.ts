// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
// api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid=439d4b804bc8187953eb36d2a8c26a02

import { Request, Response } from 'express';

import prettierMusics from '../utils/prettierMusics';
import musicSuggestions from '../utils/musicSuggestions';
import weather_api from '../service/api';

interface SuggestProps {
  singers: [string];
  musics: [string];
}

class CityController {
  async store(request: Request, response: Response) {
    const { city } = request.body;

    const key = 'c5eb8eba4db828de283ea23ee2365e84';

    const info = await weather_api.get(`/weather?q=${city}&appid=${key}`);

    const temperature = Math.round(info.data.main.temp - 273.15);

    const nameCity = info.data.name;

    const suggestMusics = musicSuggestions(temperature) as SuggestProps;

    const result = prettierMusics(suggestMusics);

    return response.json({ result, temperature, nameCity });
  }
}

export default new CityController();
