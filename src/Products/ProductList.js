import React from 'react'
import Product from './Product'
import PropTypes from 'prop-types'


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function ProductList(props) {
    return (
        <ul style={styles.ul}>
            {
                props.products.map((product, index) => {
                    return <Product product={product} key={product.id} index={index} onChange={props.onToggle}/>
                })
            }
        </ul>
    )
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default ProductList