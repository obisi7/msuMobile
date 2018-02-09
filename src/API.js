// API Courtesy: OpenWeatherMap - http://openweathermap.org
// Weather Conditions - http://openweathermap.org/weather-conditions

export default api = {
  baseURL: 'http://api.openweathermap.org/data/2.5/',
  dailyForecastUrl: 'forecast',
  currentWeatherUrl: 'weather',
  lat: '39.344',
  lon: '-76.58',

  key: 'c888268666fb979927a97be6d20393f6', // API Key is not required, but recommend by API provider. Put Your API key here

  getDailyForecastURL() {
    return `${baseURL}${dailyForecastUrl}?appid=c888268666fb979927a97be6d20393f6&lat=${lat}&lon=${lon}`;
    // return this.baseUrl + this.dailyForecastUrl;
  },
  getCurrentWeatherURL() {
    return `${baseURL}${currentWeatherUrl}?appid=c888268666fb979927a97be6d20393f6&lat=${lat}&lon=${lon}`;
    // return this.baseUrl + this.currentWeatherUrl;
  },
};

export const YOUTUBE_API = 'AIzaSyCq3IysjyfDAU_QYursgiYjnxwKp0wPy14';
