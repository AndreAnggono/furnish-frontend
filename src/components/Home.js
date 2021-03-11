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

			<section className="gallery">
				
				<figure className="gallery__item gallery__item--1"><img src="" alt="image 1" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--2"><img src="" alt="image 2" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--3"><img src="" alt="image 3" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--4"><img src="" alt="image 4" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--5"><img src="" alt="image 5" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--6"><img src="" alt="image 6" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--7"><img src="" alt="image 7" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--8"><img src="" alt="image 8" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--9"><img src="" alt="image 9" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--10"><img src="" alt="image 10" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--11"><img src="" alt="image 11" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--12"><img src="" alt="image 12" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--13"><img src="" alt="image 13" className="gallery__img"/></figure>
				<figure className="gallery__item gallery__item--14"><img src="" alt="image 14" className="gallery__img"/></figure>

			</section>
		</div>
	);
}

export default Home;
