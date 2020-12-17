import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const Operations = ({ clickOperations, clickEqual }) =>(
    <section className="math-operations">
        <Button text="+" clickHan={clickOperations}/>
        <Button text="-" clickHan={clickOperations}/>
        <Button text="*" clickHan={clickOperations}/>
        <Button text="/" clickHan={clickOperations}/>
        <Button text="=" clickHan={clickEqual}/>
    </section>
)

Operations.protoTypes = {
    clickOperations: PropTypes.func.isRequired, 
    clickEqual: PropTypes.func.isRequired
}

export default Operations