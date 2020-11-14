import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddProduct({ onCreate }) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={ value } style={{ marginBottom: '1rem' }} onChange={ event => setValue(event.target.value) } />
            <button type="submit">Новый продукт</button>
        </form>
    )
}

AddProduct.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddProduct