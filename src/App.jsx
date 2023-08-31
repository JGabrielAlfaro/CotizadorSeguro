import AppSeguro from "./components/AppSeguro";
import {CotizadorProvider} from './context/ContizadorProvider'

function App() {
  return (
    <CotizadorProvider>
       <AppSeguro />
    </CotizadorProvider>
     
  )
}

export default App
