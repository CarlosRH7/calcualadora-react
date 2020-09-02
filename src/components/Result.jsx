import React from 'react'
import PropTypes from 'prop-types'

const Result = ({value}) => (
    <div className="result">
        <span>{value}</span>
    </div>
)

// Validamos los props que vamos a recibir
Result.propTypes = {
    value: PropTypes.string.isRequired
}

// Defenimos los props en caso de ser requeridos y de no ser recibidos
Result.defaultProps = {
    value: "0"
}

export default Result;