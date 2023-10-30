const {
  API_KEY = '4e05a4d54055e8bb36c1078bbc0260c7',
  OPEN_WEATHER_URL_1 = 'http://api.openweathermap.org/data/2.5/weather?q=',
  OPEN_WEATHER_URL_2 = '&units=metric&appid=',
  MONGODB_SERVER = "localhost",//= "mongo-0.mongo-svc",
  MONGODB_ADMINUSERNAME = "nkjs",
  MONGODB_ADMINPASSWORD = "password",
  MONGODB_DATABASE
} = process.env

const config = {
  API_KEY,
  OPEN_WEATHER_URL_1,
  OPEN_WEATHER_URL_2,
  MONGODB_SERVER,
  MONGODB_ADMINUSERNAME,
  MONGODB_ADMINPASSWORD,
  MONGODB_DATABASE
}

module.exports = config
