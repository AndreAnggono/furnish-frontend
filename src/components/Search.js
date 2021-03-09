import React, { useState } from "react";

function Search(props) {
	const [term, setTerm] = useState("");

	const _onChange = (event) => {
		setTerm(event.target.value);
	};

	const _onSubmit = (event) => {
		// event.preventDefault();
		// props._onSubmit(term);
	};

	return (
		<>
			<form onSubmit={_onSubmit} action="/search" className="search">
				<input className="search__input" placeholder="Search furniture" value={term} onChange={_onChange} name="q" />
				<button className="search__button">
					<svg className="search__icon">
						<use xlinkHref="../../img/sprite.svg#icon-magnifying-glass"></use>
					</svg>
				</button>
			</form>
		</>
	);
}

export default Search;
