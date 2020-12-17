// importaciones
import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

// generacion de la funcion
const Button = ({ type, text, clickHan }) =>(

    <button className={type} onClick={() => clickHan(text)} >
        <span>{text}</span>
    </button>
    
)

Button.ropTypes = {
    type: PropTypes.string, 
    text: PropTypes.string.isRequired,
    clickHan: PropTypes.func.isRequired
}

// exportacion
export default Button