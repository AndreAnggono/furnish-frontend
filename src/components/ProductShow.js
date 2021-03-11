import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../config/serverData";

import CheckInStock from "./CheckInStock";


function ProductShow({ match }) {

	// @ts-ignore
	const { product_id } = useParams();
	const { data: product, isLoading, isError, error } = useQuery(["Product", product_id], () => axios(`${PRODUCTS}/${product_id}`).then((res) => res.data));

	if (isLoading) return <div className="loading">Loading...</div>;
	if (isError) return <h1>{error}</h1>;

	// @ts-ignore
	const { name, description, price, color, style, categories, image } = product;
	const showCategories = categories.map((category) => <li key={category}>{category}</li>);

	return (
		<>
			<h1 style={{fontSize: '4rem', textTransform: 'uppercase'}}>{name}</h1>
			<img className="product__image" src={image} alt="" />
			<div style={{marginLeft: '10rem', padding: 'auto'}}>
				<p className="product__price" style={{fontSize: '3rem'}}>${price}</p>
				<CheckInStock product={product}/>
				<p> Description: {description}</p>
				
				<p>Color: {color}</p>
				<p>Style: {style}</p>
				<ul>Categories: {showCategories}</ul>
				
			</div>
			
		</>
	);
}

export default ProductShow;
