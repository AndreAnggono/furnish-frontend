import React, { Component } from "react";
import SERVER from "../../config/database";
import axios from "axios";

export class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: ""
		};
	}

	isLoggedIn() {
		axios.get(`${SERVER}isloggedin`).then((res) => {
			console.log(res.data);
			this.setState({
				status: res.data.status
			});
		});
	}

	componentDidMount() {
		this.isLoggedIn();
	}

	render() {
		return (
			<div style={{ marginLeft: "30%" }}>
				<form action="">
					<div>
						<label htmlFor="email">Email: </label>
						<input type="email" id="email" placeholder="youremail@mail.com" />
					</div>
					<div>
						<label htmlFor="password">Password: </label>
						<input type="password" id="password" />
					</div>
					<button>Login</button>
				</form>
			</div>
		);
	}
}

export default Login;
