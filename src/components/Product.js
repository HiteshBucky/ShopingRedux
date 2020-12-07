import React from 'react'
import PropTypes from 'prop-types'

const Product = function ({ price, quantity, title, image }) {
	return (
		<>
			<div className="row mb-4">
				<div className="col-md-4 col-lg-2 col-xl-2">
			  		<img className="img-fluid w-100" src={image} alt="Sample" />
			  	</div>
			  	<div className="col-md-7 col-lg-9 col-xl-9">
  	 		  	    <div className="d-flex justify-content-between">
  			  	      <div>
  			  	        <h2>{title}</h2>
  			  	        <p className="mb-3 text-muted text-uppercase small">{title}</p>
  			  	      </div>
  			  	    </div>
  			  	    <div style={{float : 'left'}}>
  			  	    	<p className="mb-0"><span><strong id="summary">${price}</strong></span></p>
  			  	    </div>
  			  	</div>
			</div>
		</>
	)
}
  

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  image : PropTypes.string,
}

export default Product
