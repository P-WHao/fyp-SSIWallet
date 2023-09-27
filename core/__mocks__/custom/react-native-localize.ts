/* eslint-disable prettier/prettier */
const getLocales = () => [
    { countryCode: "US", languageTag: "en-US", languageCode: "en", isRTL: false },
    { countryCode: "MY", languageTag: "bm-MY", languageCode: "bm", isRTL: false },
    { countryCode: "CN", languageTag: "zh-CN", languageCode: "zh", isRTL: false },
  ]

  const getNumberFormatSettings = () => ({
    decimalSeparator: ".",
    groupingSeparator: ",",
  })

  const getCalendar = () => "gregorian" // or "japanese", "buddhist"
  const getCountry = () => "US" // the country code you want
  const getCurrencies = () => ["USD"] // can be empty array
  const getTemperatureUnit = () => "celsius" // or "fahrenheit"
  const getTimeZone = () => "America/Los_Angeles" // the timezone you want
  const uses24HourClock = () => true
  const usesMetricSystem = () => true

  const addEventListener = jest.fn()
  const removeEventListener = jest.fn()

  export {getLocales, getNumberFormatSettings, getCalendar, getCountry, getCurrencies, getTemperatureUnit, getTimeZone, uses24HourClock, usesMetricSystem, addEventListener, removeEventListener}