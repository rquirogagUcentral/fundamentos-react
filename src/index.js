import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//crear Expresiones : dentro del componente app entre llaves se indica la expresion
//const name = 'fucking Roso'

//Crear un objeto y acceder
/*const usuario = {
  nombre: 'fkgRoso',
  edad: 28,
  pais: 'Colombia'
}

function getInfo(usuario)
{
  return ` hola , mi nombre es ${usuario.nombre } , tengo ${usuario.edad} años y vivo en ${usuario.pais}`  
}

const App = <h1>{getInfo(usuario)} </h1>

*/


//Crear Componentes
//Este es un componente funcional
//las Props son de solo lectura !!!! IMPORTANTE. y vienen como atributo del componente 
/*const TarjetaFruta = (props) =>
{
  console.log(props)
  return(
    <div>
      <h3>{props.name}</h3>
      <hr/>
      <p>${props.price}</p>
    </div>
  )  
}*/


//Clases
//Los props se instancian con el this.props...
//Pueden tener un cambio en el estado.

ReactDOM.render(<App />, document.getElementById('root'))