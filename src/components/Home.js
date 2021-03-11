import React from "react";

function Home() {
	return (
		<div className="container">

			<div className="sidebar">
			</div>

			<div className="banner">
				<div className='realtors'>
					<a href="/products"><button className="btn btn__black">See all products</button></a>
					<a href="/livingroom"><button className="btn btn__black">See Living room products</button></a>
					<a href="/diningroom"><button className="btn btn__black">See Dining room products</button></a>
				</div>
				
			</div>

			<section className="features">
			<div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="img/sprite.svg#icon-leaf"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">Environmental friendly</h4>
                <p className="feature__text">We value the Earth by providing energy-saving solutions.</p>
            </div>

            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="img/sprite.svg#icon-truck"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">Fastest delivery</h4>
                <p className="feature__text">Our products will be delivered within 3 working days no matter where you are.*</p>
            </div>

            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="img/sprite.svg#icon-home"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">All homes can be a smart home</h4>
                <p className="feature__text">That's where our futures are.</p>
            </div>

            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="img/sprite.svg#icon-coin-dollar"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">365 days of refund for mind-changing</h4>
                <p className="feature__text">You don't have to worry about making wrong decisions.</p>
            </div>

            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="img/sprite.svg#icon-stats-dots"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">Top sales in 2020</h4>
                <p className="feature__text">Thanks to our customers' love for Furniques.</p>
            </div>

            <div className="feature">
                <svg className="feature__icon">
                    <use xlinkHref="img/sprite.svg#icon-tools"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">Easy to assemble</h4>
                <p className="feature__text">No professionals needed.</p>
            </div>
			</section>

			<div className="story__pictures">
				
			</div>

			<div className="story__content">
				<svg className="feature__icon" style={{marginLeft: -60}}>
                    <use xlinkHref="img/sprite.svg#icon-quote"></use>
                </svg>
			  		<i>We write the story by our own story...</i>
				<svg className="feature__icon" style={{marginLeft: -10}}>
                    <use xlinkHref="img/sprite.svg#icon-quote"></use>
                </svg>
			</div>

		</div>
	);
}

export default Home;
