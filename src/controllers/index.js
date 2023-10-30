// const httpStatus = require('http-status')
const HelloController = require('./hello')
const WeatherController = require('./weather')
const Base64EncodeController = require('./base64Encode')
const PatientDetails = require('./patientsDetails')

module.exports = { HelloController, WeatherController, Base64EncodeController, PatientDetails }
