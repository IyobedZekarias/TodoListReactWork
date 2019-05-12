import React from 'react'

function Product(props){

	return(
		<div> 
			<h2>name: {props.productdata.name}</h2>
			<p>price: ${props.productdata.price}</p>
			<h5>{props.productdata.description}</h5>
		</div> 
	); 
}

export default Product