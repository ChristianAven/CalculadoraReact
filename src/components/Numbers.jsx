import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

//DRY
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = (onClickNumber) => {
    const renderButton = number => (
        <Button key={number.toString()} text={number.toString()} clickHan={onClickNumber} />
    )
    return numbers.map(renderButton)
}
// fin del DRY

const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers;