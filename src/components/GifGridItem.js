import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ( { title, url} ) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}

export default GifGridItem

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


/**
 * Implementando Proptypes y actualizar snapshots
 * 
 * 1. Añadir PropTypes url, title -> Obligatorios
 * 2. Enviar url y title a la hora de utilizar shallow()
 * 3. Actualizar snapshot con los cambios 
 */