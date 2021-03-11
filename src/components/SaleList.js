import axios from "axios";
import React, { Component } from "react";
import { SALES } from "../config/serverData";

export class SaleList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: []
		};
	}

	componentDidMount() {
		this.getSales();
	}

	async getSales() {
		await axios.get(`${SALES}/${this.props.user.id}`).then((res) => {
			console.log(res);
			this.setState({
				products: res.data
			});
		});
	}

	render() {
		return (
			<div>
				<h3>Your Purchase History</h3>
				<table>
					<thead>
						<tr>
							<th>Purchased Date</th>
							<th>Products</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>Total</td>
							<td>$</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}

export default SaleList;
