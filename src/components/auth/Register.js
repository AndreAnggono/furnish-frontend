import React, { Component } from "react";
import { USERS } from "../../config/serverData";
import axios from "axios";
import "../../css/andre.css";

export class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: props.status,
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			password_confirmation: "",
			validations: {
				email: false,
				password: false,
				password_confirmation: false,
				submitDisabled: true
			},
			errors: []
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const { firstName, lastName, email, password, password_confirmation } = this.state;

		axios
			.post(
				USERS,
				{
					firstName,
					lastName,
					email,
					password,
					password_confirmation
				},
				{ withCredentials: true }
			)
			.then((res) => {
				if (res.data.code === 401) {
					this.setState({
						errors: [res.data.error],
						validations: {
							email: true,
							password: false,
							password_confirmation: false,
							submitDisabled: true
						}
					});
				} else {
					this.setState({
						status: res.data.status
					});
					this.props.setStatus(res.data.status);
					this.props.history.push("/");
				}
			})
			.catch((err) => console.log(err));
	}

	async handleChange(event) {
		await this.setState({
			[event.target.name]: event.target.value
		});

		const { password: pwd, password_confirmation: pwdConf } = this.state;
		const { password: pwdVal, password_confirmation: pwdConfVal, email } = this.state.validations;

		if (event.target.name === "password_confirmation" && pwd !== pwdConf && !pwdVal && !pwdConfVal) {
			this.setState({
				validations: {
					email,
					password: true,
					password_confirmation: true,
					submitDisabled: true
				},
				errors: [...this.state.errors, "Password doesn't match Password Confirmation"]
			});
		} else if (
			(event.target.name === "password" || event.target.name === "password_confirmation") &&
			this.state.password === this.state.password_confirmation &&
			this.state.password !== ""
		) {
			this.setState({
				validations: {
					email,
					password: false,
					password_confirmation: false,
					submitDisabled: false
				},
				errors: []
			});
		}

		if (event.target.name === "email" && this.state.password === this.state.password_confirmation && this.state.password !== "") {
			this.setState({
				validations: {
					email: false,
					password: false,
					password_confirmation: false,
					submitDisabled: false
				}
			});
		}
	}

	renderErrors() {
		if (this.state.errors.length > 0) {
			return (
				<>
					<h3 className="error">Errors:</h3>
					<ul>
						{this.state.errors.map((e, i) => (
							<li key={i} className="error">
								{e}
							</li>
						))}
					</ul>
				</>
			);
		} else {
			return null;
		}
	}

	redirectIfLoggedIn() {
		if (this.state.status === "LOGGED_IN") this.props.history.push("/");
	}

	render() {
		return (
			<div>
				<h1>Registration</h1>
				<div className="form__login">
					{this.renderErrors()}
					<form onSubmit={this.handleSubmit}>
						<div>
							<label>
								First Name:
								<input className="form__input" type="text" name="firstName" placeholder="first name" onChange={this.handleChange} />
							</label>
						</div>
						<div>
							<label>
								Last Name:
								<input className="form__input" type="text" name="lastName" placeholder="last name" onChange={this.handleChange} />
							</label>
						</div>
						<div>
							<label>
								Email:
								<input
									type="email"
									name="email"
									placeholder="youremail@mail.com"
									required
									onChange={this.handleChange}
									className={this.state.validations.email ? "error-box form__input" : "form__input"}
								/>
							</label>
						</div>
						<div>
							<label>
								Password:
								<input
									type="password"
									name="password"
									placeholder="password"
									required
									onChange={this.handleChange}
									className={this.state.validations.password ? "error-box form__input" : "form__input"}
								/>
							</label>
						</div>
						<div>
							<label>
								Password Confirmation:
								<input
									type="password"
									name="password_confirmation"
									placeholder="password"
									required
									onChange={this.handleChange}
									className={this.state.validations.password_confirmation ? "error-box form__input" : "form__input"}
								/>
							</label>
						</div>
						<button className="btn btn__green" disabled={this.state.validations.submitDisabled}>
							Create account
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
