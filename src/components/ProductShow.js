import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../config/serverData";
import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";

function ProductShow({ match }) {
	// const [product, setProduct] = useState('');

	// useEffect(() => {
	//     const productURL = (id) => {
	//         return `/products/${id}`
	//     }
	//     const id = match.params.product_id;

	//     async function fetchProduct () {
	//     const response = await axios.get(productURL(id));
	//     // productObj = response.data;
	//     setProduct(response.data);
	//     }
	//     fetchProduct();
	// }, []);

	// if (!product) {
	//     return null;
	// }

	// @ts-ignore
	const { product_id } = useParams();
	const { data: product, isLoading, isError, error } = useQuery(["Product", product_id], () => axios(`${PRODUCTS}/${product_id}`).then((res) => res.data));

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>{error}</h1>;

	// @ts-ignore
	const { name, description, price, color, style, categories, image } = product;
	const showCategories = categories.map((category) => <li key={category}>{category}</li>);

	return (
		<>
			<h1>{name}</h1>
			<img className="product__image" src={image} alt="" />

			<p>Description: {description}</p>
			<p>Price: ${price}</p>
			<p>Color: {color}</p>
			<p>Style: {style}</p>
			<ul>Categories: {showCategories}</ul>
			<AddToCart product={product} />
			<RemoveFromCart product={product} />
		</>
	);
}

export default ProductShow;
