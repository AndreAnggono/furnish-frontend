import React, { useEffect, useState, Component } from "react";
import EditProfile from "./EditProfile";
import PrintProfile from "./PrintProfile";

export class UserShow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: props.status,
			user: props.user,
			editProfile: false
		};

		this.editProfile = this.editProfile.bind(this);
	}

	redirToLogin() {
		if (this.state.status === "NOT_LOGGED_IN") {
			this.props.history.push("/login");
		}
	}

	componentDidMount() {}

	editProfile() {
		this.setState({
			editProfile: true
		});
	}

	render() {
		if (!this.state.user) return null;
		return (
			<>
				<h1>Welcome back{this.state.user.firstName ? `, ${this.state.user.firstName}.` : null}</h1>
				{this.state.editProfile ? (
					<EditProfile user={this.state.user} handleClick={this.editProfile} />
				) : (
					<PrintProfile user={this.state.user} handleClick={this.editProfile} />
				)}
			</>
		);
	}
}

// const UserShow = (props) => {
// 	const [status, setStatus] = useState("");
// 	const [user, setUser] = useState("");
// 	const [editProfile, setEditProfile] = useState(false);

// const [user, setUser] = useState("");

// user.firstName = "";

// const redirToLogin = () => {
// 	if (status === "NOT_LOGGED_IN") {
// 		props.history.push("/login");
// 	}
// };

// useEffect(() => {
// 	setStatus(props.status);
// 	setUser(props.user);
// 	redirToLogin();
// }, [status]);

// useEffect(() => {
// 	setUser(props.user);
// }, []);

// const printProfile = () => {
// 	return (
// 		<div>
// 			<p>Name: {`${user.firstName} ${user.lastName}`}</p>
// 			<p>Email: {user.email}</p>
// 			<p>Shipping Address: {`${user.address.line}, ${user.address.city} ${user.address.postcode} ${user.address.state}`}</p>
// 		</div>
// 	);
// };

// 	if (!user) return null;

// 	return (
// 		<>
// 			<h1>Welcome back{user.firstName ? `, ${user.firstName}.` : null}</h1>
// 			{editProfile ? null : <PrintProfile user={user} />}
// 		</>
// 	);
// };

export default UserShow;
