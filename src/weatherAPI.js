// const API_KEY = 'c888268666fb979927a97be6d20393f6';
getWeather = (lat, lon) => {
  const baseURL = 'http://api.openweathermap.org/data/2.5/weather?appid=c888268666fb979927a97be6d20393f6&units=imperial';
  const url = `${baseURL}&lat=${lat}&lon=${lon}`;
  // const url = baseURL+'&lat='+lat+'&lon='+lon;
  return fetch(url)
    .then(res => res.json())
    .then(json => ({
      temp: json.main.temp,
      weather: json.weather[0].main,
    }));
};
