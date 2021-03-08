import React, { Component } from "react";
import { LOGIN } from "../../config/serverData";
import axios from "axios";
import { Link } from "react-router-dom";

export class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: props.status,
			email: "",
			password: "",
			errors: []
		};
		//
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.redirectIfLoggedIn();
	}

	handleSubmit(event) {
		event.preventDefault();
		const { email, password } = this.state;

		axios
			.post(
				LOGIN,
				{
					email,
					password
				},
				{ withCredentials: true }
			)
			.then((res) => {
				if (res.data.code === 401) {
					this.setState({
						errors: [...this.state.errors, res.data.error]
					});
				} else {
					this.setState({
						status: res.data.status
					});
					this.props.setStatus(res.data.status);
					this.props.history.push("/");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	redirectIfLoggedIn() {
		if (this.state.status === "LOGGED_IN") this.props.history.push("/");
	}

	renderErrors() {
		if (this.state.errors.length > 0) {
			return (
				<>
					<h3>Errors:</h3>
					<ul>
						{this.state.errors.map((e, i) => (
							<li key={i}>{e}</li>
						))}
					</ul>
				</>
			);
		} else {
			return null;
		}
	}

	render() {
		return (
			<div style={{ marginLeft: "30%" }}>
				{this.renderErrors()}
				<form onSubmit={this.handleSubmit}>
					<input type="email" name="email" placeholder="youremail@mail.com" value={this.state.email} onChange={this.handleChange} />
					<input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
					<button>Continue</button>
				</form>
				<p>
					Don't have an account? <Link to="/signup">Signup</Link>
				</p>
			</div>
		);
	}
}

export default Login;
