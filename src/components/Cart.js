import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const DELIVERY_CHARGE = 10.0;

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0

  return (
    <div style={{'margin-bottom' : '10%'}}>
      <center><h3>Your Cart</h3></center>
      <div className = 'row' style={{display : 'flex', 'justify-content' : 'space-between', color : 'grey'}}>
          <h4>Cart Total</h4>
          <h4>{total}</h4>
      </div>
      <div className = 'row' style={{display : 'flex', 'justify-content' : 'space-between', color : 'grey'}}>
          <h4>Delivery Charge</h4>
          <h4>{total}</h4>
      </div>
      <div className = 'row' style={{display : 'flex', 'justify-content' : 'space-between', color : 'grey'}}>
          <h4>Total</h4>
          <h4>{total == 0 ? "0.00" : total + DELIVERY_CHARGE}</h4>
      </div>

      <p>Total: &#36;{total}</p>

      <button className='btn btn-success btn-block' onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = { products: PropTypes.array, total: PropTypes.string, onCheckoutClicked: PropTypes.func }

export default Cart