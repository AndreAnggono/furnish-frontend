import axios from "axios";
import React, { Component } from "react";
import { SALES } from "../config/serverData";

export class SaleList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sales: [],
			total: 0
		};
	}

	componentDidMount() {
		this.getSales();
	}

	async getSales() {
		await axios.get(`${SALES}/${this.props.user.id}`).then((res) => {
			this.setState({
				sales: res.data
			});
		});

		let totalPrice = 0;

		for (let sale of this.state.sales) {
			for (let product of sale.products) {
				totalPrice += product.price / 100;
			}
		}

		this.setState({
			total: totalPrice
		});
	}

	formatDate(date) {
		const purchasedDate = new Date(date).getDate();
		const purchasedMonth = new Date(date).getMonth();
		const purchasedYear = new Date(date).getFullYear();

		return `${purchasedDate}/${purchasedMonth}/${purchasedYear}`;
	}

	formatProducts(p) {
		const products = p.map((product) => (
			<ul>
				<li>{product.item.name}</li>
			</ul>
		));
		return products;
	}

	formatQty(q) {
		const products = q.map((product) => (
			<ul>
				<li className="nobullet">{product.qty}</li>
			</ul>
		));
		return products;
	}

	formatPrice(p) {
		const products = p.map((product) => {
			return (
				<ul>
					<li className="nobullet">${product.price / 100}</li>
				</ul>
			);
		});
		return products;
	}

	render() {
		return (
			<div className="form__login" style={{ marginTop: "4rem" }}>
				<h3>Your Purchase History</h3>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Products</th>
							<th>Qty</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{this.state.sales.map((s) => (
							<tr>
								<td>{this.formatDate(s.saleDate)}</td>
								<td>{this.formatProducts(s.products)}</td>
								<td>{this.formatQty(s.products)}</td>
								<td>{this.formatPrice(s.products)}</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={3} id="profile-total">
								Total
							</td>
							<td colSpan={1}>${this.state.total}</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}

export default SaleList;
