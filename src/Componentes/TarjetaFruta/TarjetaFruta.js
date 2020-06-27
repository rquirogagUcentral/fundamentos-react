import React from 'react'

//import './TarjetaFruta.css'
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component
{
  //El constructor se ejecuta cuando se crea el componente
  //constructor(){
  //  super()

    //this.agregar = this.agregar.bind(this) 
    //this.quitar = this.quitar.bind(this) 
/*
    /*const METHODS = [
      'agregar',
      'quitar',
      'limpiar'
    ]

    METHODS.forEach((method) => {
      this[method] = this[method].bind(this)
    })
    this.state = {
    cantidad:0
  }

  }
*/
//Inicializadores de propiedad
//No forman parte del standar, funciona por que se tiene babel
 state = {
    cantidad:0
  }
agregar= () => {
  this.setState({
    cantidad: this.state.cantidad +1
  })
}
quitar = () =>{
  this.setState({
    cantidad: this.state.cantidad -1
  })
}
limpiar = ()=> {
  this.setState({
    cantidad: 0
  })
}

 
  render()
  {
      const hasItems= this.state.cantidad > 0
      const activeClass = hasItems ? styles['card-active'] : ''
      //tambien se puede concatenar: 
      const clases=  styles.card + ' ' + activeClass
      //const clases =  `card ${activeClass}`
      
    return(
      <div className={clases}>
        <h3>{this.props.name}</h3>

        <div>Cantidad : {this.state.cantidad }</div>
        <button onClick={ this.agregar}>+</button>
        <button onClick={ this.quitar}>-</button>
        <button onClick={ this.limpiar}>Limpiar</button>
        <hr/>
        <p>$ {this.props.price}</p>

        <p>
            Total: $ {this.props.price * this.state.cantidad}
        </p>
      </div>
    )  
  }
}

export default TarjetaFruta