import React, { useEffect, useState, Component } from "react";
import EditProfile from "./EditProfile";
import PrintProfile from "./PrintProfile";
import SaleList from "../SaleList";

export class UserShow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: props.status,
			user: props.user,
			editProfile: false
		};

		this.editProfile = this.editProfile.bind(this);
		this._handleCancel = this._handleCancel.bind(this);
	}

	redirToLogin() {
		if (this.state.status === "NOT_LOGGED_IN") {
			this.props.history.push("/login");
		}
	}

	componentDidMount() {
		this.redirToLogin();
	}

	editProfile() {
		this.setState({
			editProfile: true
		});
	}

	_handleCancel() {
		this.setState({
			editProfile: false
		});
	}

	render() {
		if (!this.state.user) return null;
		return (
			<div>
				<h1>Welcome back{this.state.user.firstName ? `, ${this.state.user.firstName}.` : null}</h1>
				<div className="form__login" style={{marginBottom: '4rem'}}>
				
					{this.state.editProfile ? (
						<EditProfile user={this.state.user} handleCancel={this._handleCancel} />
					) : (
						<PrintProfile user={this.state.user} handleClick={this.editProfile} />
					)}
					
				</div>
				<hr/>
				<SaleList user={this.state.user} />
			</div>
			
		);
	}
}

export default UserShow;
