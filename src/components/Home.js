import React from "react";

function Home() {
	return (
		<div className="container">
			{/* <h1>WELCOME TO FURNIQUE</h1> */}
			{/* <a href="/products"><img src="../img/shelf.png" alt="Photo of a shelf" className="product__image-large align-left "/>
			See all products
			</a> */}

			<div className="sidebar">
			</div>

			<div className="banner">
				<a href="/products">See all products</a>
			</div>

			<section className="features">
			<div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="img/sprite.svg#icon-global"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">Environmental friendly</h4>
                <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
            </div>

            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="img/sprite.svg#icon-trophy"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">Fastest delivery</h4>
                <p className="feature__text">Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
            </div>

            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">All homes can be a smart home</h4>
                <p className="feature__text">Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
            </div>

            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="img/sprite.svg#icon-key"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">365 days of refund for mind-changing</h4>
                <p className="feature__text">Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="img/sprite.svg#icon-presentation"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">Top sales in 2020</h4>
                <p className="feature__text">Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
            </div>

            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="img/sprite.svg#icon-lock"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">Easy to assemble</h4>
                <p className="feature__text">Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
            </div>
			</section>

			<div className="story__pictures">
				Furnique story picture
			</div>

			<div className="story__content">
				Furnique Story
			</div>

		</div>
	);
}

export default Home;
