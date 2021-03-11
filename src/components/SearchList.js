import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ROOT } from "../config/serverData";

const SearchList = (props) => {
	const [products, setProducts] = useState("");

	const getResult = () => {
		axios
			.get(ROOT + props.search)
			.then((res) => {
				setProducts(res.data.result);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getResult();
	}, []);

	if (!products) {
		return <div className="loading">Loading...</div>;
	}

	// @ts-ignore
	const productList = products.map((product) => {
		const { name, description, price, color, style, categories, image } = product;
		const showCategories = categories.map((category) => <li key={category}>{category}</li>);
		return (
			<div key={product.id}>
				<Link to={`product/${product.id}`}>
					<img className="product__image-thumbnail" src={image} alt="" />
				</Link>
				<p>
					<strong>{name}</strong>
				</p>
				<p>Description: {description}</p>
				<p>Price: ${price}</p>
				<p>Color: {color}</p>
				<p>Style: {style}</p>
				<ul>Categories: {showCategories}</ul>
			</div>
		);
	});

	return (
		<>
			<h1>{props.heading}</h1>
			{productList}
		</>
	);
};

export default SearchList;
