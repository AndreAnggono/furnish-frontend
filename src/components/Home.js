import React from "react";
import { LOGIN, LOGGED_IN } from "../config/serverData";
import axios from "axios";

function Home(props) {
	const checkLogin = async () => {
		console.log("1 this is current status", props.status);
		await axios.get(LOGGED_IN, { withCredentials: true }).then((res) => {
			console.log("2 this is res from server", res);
			console.log("2 this is status", props.status);
		});

		console.log("3 this is status", props.status);
		console.log("3 this is user", props.user);
	};

	return (
		<div className="landing">
			<h1>Home</h1>
			<button onClick={checkLogin}>Check login</button>
		</div>
	);
}

export default Home;
