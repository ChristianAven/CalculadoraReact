// importaciones
import React from 'react'
import PropTypes from 'prop-types'

// generacion de la funcion del componente
const Result = ({ num }) => (
    <div className="result">
        {num}
    </div>
)

Result.protoTypes = {
    num: PropTypes.string.isRequired
}

Result.defaultProps = {
    num: 0
}

// exportamos el componente
export default Result