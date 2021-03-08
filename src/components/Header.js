import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { LOGOUT } from "../config/serverData";
import CartSummary from "./CartSummary";
import CheckoutCart from "./CheckoutCart";
import Search from "./Search";
import axios from "axios";

function Header(props) {
	const [status, setStatus] = useState("");
	let history = useHistory();
	// setStatus(props.status);

	const logout = () => {
		axios.delete(LOGOUT, { withCredentials: true }).then((res) => {
			props.setStatus(res.data.status);
		});
	};

	const redirToLogin = () => {
		history.push("/login");
	};

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	return (
		<div>
			<header className="header">
				<span>
					<a href="/">
						<img src="../../img/logo-furnique-2.png" alt="logo" className="logo" />
					</a>
				</span>

				<Search />

				<nav className="user-nav">
					<CartSummary />

					<CheckoutCart />

					<div className="user-nav__icon-box">
						<svg className="user-nav__icon">
							<use xlinkHref="../../img/sprite.svg#icon-emoji-flirt"></use>
						</svg>
					</div>

					<div className="user-nav__user">
						{/* <span className="user-span__user-login">Login</span>
						<span className="user-span__user-login">Sign Up</span>
						<span className="user-span__user-name">User name</span> */}
						{status === "LOGGED_IN" ? (
							<span className="user-span__user-login" onClick={logout}>
								Logout
							</span>
						) : (
							<span className="user-span__user-login" onClick={redirToLogin}>
								Sign in / Sign up
							</span>
						)}
					</div>
				</nav>
			</header>
		</div>
	);
}

export default Header;
