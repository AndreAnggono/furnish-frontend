import React, { Component } from "react";

export class EditProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: props.user.firstName,
			lastName: props.user.lastName,
			email: props.user.email,
			address: props.user.address,
			password: "",
			password_confirmation: ""
		};

		this._handleChange = this._handleChange.bind(this);
	}

	_handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<div>
				<form action="">
					<div>
						<label>
							First Name:
							<input type="text" name="firstName" value={this.state.firstName} onChange={this._handleChange} />
						</label>
					</div>
					<div>
						<label>
							Last Name:
							<input type="text" name="lastName" value={this.state.lastName} onChange={this._handleChange} />
						</label>
					</div>
					<div>
						<label>
							Email:
							<input type="email" name="email" value={this.state.email} onChange={this._handleChange} />
						</label>
					</div>

					<div>
						<label>
							Password:
							<input type="password" name="password" value={this.state.password} onChange={this._handleChange} />
						</label>
					</div>

					<div>
						<label>
							Password Confirmation:
							<input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this._handleChange} />
						</label>
					</div>
					<button>Cancel</button>
					<button>Save</button>
				</form>
			</div>
		);
	}
}

export default EditProfile;
