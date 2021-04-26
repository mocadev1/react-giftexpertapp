import React from 'react'

const GifGridItem = ( { title, url} ) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}

export default GifGridItem


/**
 * 1. Configurar Enzyme
 * 2. Configurar Enzyme to Json
 * 3. Debe de Mostrar el componente correctamente
 *      * utilizar el shallow
 *      * retorna "algo" que llamaremos wrapper. // "algo" es el componente renderizado por enzyme
 *      * wrapper .toMatchSnapshot() // haremos la prueba para que coincida con el snapshot
 */