
export function GetImage(content) {
  myRegexp = new RegExp(/<img.*?src="(.*?)"/);
  match = myRegexp.exec(content);
  if (match) {
    // match[1] = match[1].split(/\s+/);
    // match[1] = match[1].join(" \' ");
    // console.log('Matches found:' + ' ' + match[1]);
    return match[1];
  }
  console.log('No match found');
}

export function GetImage2(content) {
  myRegexp = new RegExp(/([^"]*)">/g);
  match = myRegexp.exec(content);

  return match || 0;
  // myRegexp = new RegExp(/<a\b[^>]* href="[^"]*"/);
  // match = myRegexp.exec(content);
  // if (match) {
  //   // match[1] = match[1].split(/\s+/);
  //   // match[1] = match[1].join(" \' ");
  //   // console.log('Matches found:' + ' ' + match[1]);
  //   return match[1];
  // }
  console.log('No match found');
}

//
export function ContentSnippet(content) {
  return `${content
    .split(/\s+/)
    .slice(0, 3)
    .join(' ')}`;
}

export function getDailyForecastURL() {
  baseURL = 'http://api.openweathermap.org/data/2.5/';
  dailyForecastUrl = 'forecast/daily';
  currentWeatherUrl = 'weather';
  lat = '39.344';
  lon = '-76.58';
  key = 'c888268666fb979927a97be6d20393f6'; // API Key is not required, but recommened by API provider. Put Your API key here

  return `${baseURL}${dailyForecastUrl}?appid=${key}&lat=${lat}&lon=${lon}`;
  // return this.baseUrl + this.dailyForecastUrl;
}

export function getCurrentWeatherURL() {
  baseURL = 'http://api.openweathermap.org/data/2.5/';
  dailyForecastUrl = 'forecast/daily';
  currentWeatherUrl = 'weather';
  lat = '39.344';
  lon = '-76.58';
  key = 'c888268666fb979927a97be6d20393f6'; // API Key is not required, but recommened by API provider. Put Your API key here

  return `${baseURL}${currentWeatherUrl}?appid=${key}&lat=${lat}&lon=${lon}`.toString();
  // return this.baseUrl + this.currentWeatherUrl;
}
