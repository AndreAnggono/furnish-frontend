import axios from "axios";
import React, { Component } from "react";
import { USERS } from "../../config/serverData";

export class EditProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userId: props.user.id,
			firstName: props.user.firstName ? props.user.firstName : null,
			lastName: props.user.lastName ? props.user.lastName : null,
			email: props.user.email,

			password: "",
			password_confirmation: "",
			validations: {
				email: false,
				password: false,
				password_confirmation: false
			},
			errors: [],
			valid: false
		};

		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.user.address) {
			this.setState({
				line: this.props.user.address.line,
				city: this.props.user.address.city,
				postcode: this.props.user.address.postcode,
				state: this.props.user.address.state
			});
		} else {
			this.setState({
				line: "",
				city: "",
				postcode: "",
				state: ""
			});
		}
	}

	renderErrors() {
		if (this.state.errors.length > 0) {
			return (
				<div>
					<h3 className="error">Errors:</h3>
					<ul>
						{this.state.errors.map((e, i) => (
							<li key={i} className="error">
								{e}
							</li>
						))}
					</ul>
				</div>
			);
		} else {
			return null;
		}
	}

	_handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});

		if (event.target.name === "email") {
			this.setState({
				validations: {
					email: false,
					password: this.state.validations.password,
					password_confirmation: this.state.validations.password_confirmation
				},
				errors: []
			});
		}

		if (event.target.name === "password" || event.target.name === "password_confirmation") {
			this.setState({
				validations: {
					email: this.state.validations.email,
					password: false,
					password_confirmation: false
				},
				errors: []
			});
		}
	}

	async _handleSubmit(event) {
		event.preventDefault();

		const userObj = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			address: {
				line: this.state.line,
				city: this.state.city,
				postcode: this.state.postcode,
				state: this.state.state
			}
		};

		if (this.state.email !== this.props.user.email) {
			await axios.get(`${USERS}/e/${this.state.email}`).then((res) => {
				if (res.data.length === 0) {
					userObj.email = this.state.email;
					this.setState({
						valid: true
					});
				} else {
					this.setState({
						errors: [...this.state.errors, "Email has already been taken. Please choose a different one."],
						validations: {
							email: true,
							password: this.state.validations.password,
							password_confirmation: this.state.validations.password_confirmation
						},
						valid: false
					});
				}
			});
		}

		if (this.state.password !== "" && this.state.password === this.state.password_confirmation) {
			userObj.password = this.state.password;
			userObj.password_confirmation = this.state.password_confirmation;
			this.setState({
				valid: true
			});
		} else if (this.state.password !== "" && this.state.password !== this.state.password_confirmation) {
			this.setState({
				errors: [...this.state.errors, "Password doesn't match Password Confirmation"],
				valid: false,
				validations: {
					email: this.state.validations.email,
					password: true,
					password_confirmation: true
				}
			});
		}

		axios.put(`${USERS}/${this.state.userId}`, userObj).then((res) => {
			window.location.reload();
		});
	}

	render() {
		return (
			<div>
				<form action="" onSubmit={this._handleSubmit}>
					<div>
						<label>
							First Name:
							<input className="form__input" type="text" name="firstName" value={this.state.firstName} onChange={this._handleChange} />
						</label>
					</div>
					<div>
						<label>
							Last Name:
							<input className="form__input" type="text" name="lastName" value={this.state.lastName} onChange={this._handleChange} />
						</label>
					</div>
					<div>
						<label>
							Email:
							<input
								type="email"
								name="email"
								value={this.state.email}
								onChange={this._handleChange}
								className={this.state.validations.email ? "error-box form__input" : "form__input"}
								required
							/>
						</label>
					</div>
					<div>
						<label>
							Line Address:
							<input className="form__input" type="text" name="line" value={this.state.line} onChange={this._handleChange} />
						</label>
					</div>
					<div>
						<label>
							City:
							<input className="form__input" type="text" name="city" value={this.state.city} onChange={this._handleChange} />
						</label>
					</div>
					<div>
						<label>
							Postcode:
							<input className="form__input" type="text" name="postcode" value={this.state.postcode} onChange={this._handleChange} />
						</label>
					</div>
					<div>
						<label>
							State:
							<select name="state" value={this.state.state} onChange={this._handleChange} defaultValue="-">
								<option value="-" disabled>
									-- select an option --
								</option>
								<option value="ACT">ACT</option>
								<option value="NSW">NSW</option>
								<option value="NT">NT</option>
								<option value="QLD">QLD</option>
								<option value="SA">SA</option>
								<option value="TAS">TAS</option>
								<option value="VIC">VIC</option>
								<option value="WA">WA</option>
							</select>
						</label>
					</div>
					<div>
						<label>
							Password:
							<input
								type="password"
								name="password"
								value={this.state.password}
								onChange={this._handleChange}
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
								value={this.state.password_confirmation}
								onChange={this._handleChange}
								className={this.state.validations.password_confirmation ? "error-box form__input" : "form__input"}
							/>
						</label>
					</div>
					<button className="btn btn__red" type="button" onClick={this.props.handleCancel}>
						Cancel
					</button>
					<button className="btn btn__blue" >Save</button>
				</form>
				{this.renderErrors()}
			</div>
		);
	}
}

export default EditProfile;
