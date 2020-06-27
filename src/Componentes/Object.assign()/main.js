const perfil = {
    nombre: 'Gerardo'
}

const region = {
    pais: 'Mexico'
}

const social = {
    twitter: '@xxxxx'
}

const resutado = Object.assign(
    {},
    perfil, 
    region, 
    perfil
)

console.log(resultado)

//se muestra en la consola lo siguiente
//{nombre: 'Gerardo', pails:'Mexico', twitter:'@xxxxx'}

//el orden del llamado si afecta el resultado, si se agrega nombre a  objeto social 
/*
    const social = {
        twitter:'@xxxxxx',
        nombre: 'Pedro'
    }
    el resultado será 
    {nombre: 'Pedro', pails:'Mexico', twitter:'@xxxxx'}

    se reescribe una propiedad escrita anteriormente
    no altera en profundidad (Objeto dentro de otro objeto)

    para agregar un object assign dentro de otro se realiza lo siguiente

    const perfil = {
    nombre: 'Gerardo'
    info: 
        {
            direccion: 'la direccion es...'
        }
    }

    const region = {
        pais: 'Mexico'
        info: 
        {
            coordenadas: 'las coordenadas son...'
        }
    }
    }
    const resultado = Object.assign(
        {},
        perfil,
        region,
        social,
        {
            info: Object.assign(
                {},
                perfil.info,
                region.info
                )
        }
    )

    el resultado por consola es:
    {nombre : 'Pedro', info: {}, pais: 'Mexico', twitter:'@xxxxx'}
    info { coordenadas : ...., direccion : .....}


    Object.assign es caracteristica de ES6

*/ 



//OPERADOR SPREAD
 /* 
    const resultado = {
        ...region,
        ...perfil,
        ...social,
        info: {
            ...perfil.info,
            ...region.info
        }
    }
 */


//OPERADOR SPREAD.. CON ARRAYS

const frutasVerdes = [
    'kiwi',
    'uva',
    'limon'
]

const frutasRojas = [
    'manzana',
    'fresa',
    'sandia'
]

const frutas =  [
    'nueva fruta al comienzo',
    ...frutasVerdes,
    'nueva fruta en medio',
    ...frutasRojas,
    'nueva fruta al final'
]
