import React from "react";

function Sidebar() {
	return (
		<div className="navigation">
			<input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

			<label htmlFor="navi-toggle" className="navigation__button">
				<svg className="navigation__icon">
					<use xlinkHref="../../img/sprite.svg#icon-list"></use>
				</svg>
			</label>

			<div className="navigation__background">&nbsp;</div>

			<nav className="navigation__nav">
				<ul className="navigation__list">
					<li className="navigation__item">
						<a href="/products" className="navigation__link">
							All Products
						</a>
					</li>
					<li className="navigation__item">
						<a href="/livingroom" className="navigation__link">
							Living room
						</a>
					</li>
					<li className="navigation__item">
						<a href="/diningroom" className="navigation__link">
							Dining room
						</a>
					</li>
					<li className="navigation__item">
						<a href="/bedroom" className="navigation__link">
							Bed room
						</a>
					</li>
					<li className="navigation__item">
						<a href="/outdoor" className="navigation__link">
							Outdoor
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Sidebar;
