export const forecastUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=46.0679&longitude=11.1211&daily=precipitation_probability_max&timezone=auto&forecast_days=3";

export interface Forecast {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: DailyUnits;
  daily: Daily;
}

interface Daily {
  time: string[];
  precipitation_probability_max: number[];
}

interface DailyUnits {
  time: string;
  precipitation_probability_max: string;
}

export default function piovedomaniatrento(forecast: Forecast){
  return forecast.daily.precipitation_probability_max[1] > 75;
}