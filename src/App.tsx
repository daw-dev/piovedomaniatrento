import './App.css'
import useRequest from './utils/useRequest'
import piovedomaniatrento, { Forecast, forecastUrl } from './models/forecast'

function App() {
  const request = useRequest<Forecast>(forecastUrl);

  if(request.status === "loading")
    return <h1 className='loading'>VEDIAMO</h1>
  
  if(request.status === "error")
    return <h1 className='error'>BOH</h1>
  
  return <h1 className='answer'>{piovedomaniatrento(request.data) ? "SI" : "NO"}</h1>
}

export default App
