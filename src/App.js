import React from 'react'
import TarjetaFruta from './Componentes/TarjetaFruta/'

const App = () => 
(
  <div>
    

    <TarjetaFruta name='Sandia' price={2.00}/>
    <TarjetaFruta name='naranja' price={3.00}/>
    <TarjetaFruta name='manzana' price={4.00}/>
    <TarjetaFruta name='pera' price={5.00}>
      elementos o componentes internos
    </TarjetaFruta>
  </div>
)
export default App