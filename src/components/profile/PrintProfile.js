import React from "react";

const PrintProfile = (props) => {
	const { user } = props;

	return (
		<div>
			<p>Name: {`${user.firstName} ${user.lastName}`}</p>
			<p>Email: {user.email}</p>
			<p>
				Shipping Address:
				{user.address
					? `${user.address.line ? user.address.line : ""}, ${user.address.city ? user.address.city : ""} ${
							user.address.postcode ? user.address.postcode : ""
					  } ${user.address.state ? user.address.state : ""}`
					: ""}
			</p>
			<button onClick={props.handleClick}>Edit Profile</button>
		</div>
	);
};

export default PrintProfile;
