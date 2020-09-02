// Importaciones
import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

// Componente funcional

const Button = ({type, text, clickHandler}) => (
    <button className={type} onClick={() => clickHandler(text) }>
        <span>{text}</span>
    </button>
)


Button.prototypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

// Exportación de componentes
export default Button