import React from "react";

function Header() {
	return (
        <div>
            <header className="header">
                <span>
                    <a href="/"><img src="../../img/logo-furnique-2.png" alt="logo" className="logo"/></a>
                </span>
                

                <form action="#" className="search">
                    <input className="search__input" placeholder="Search furniture"/>
                    <button className="search__button">
                        <svg className="search__icon">
                            <use xlinkHref="../../img/sprite.svg#icon-magnifying-glass"></use> 
                        </svg>
                    </button>
                </form>

                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="../../img/sprite.svg#icon-shopping-cart"></use> 
                        </svg>
                        <span className="user-nav__notification">7</span>
                    </div>

                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="../../img/sprite.svg#icon-check"></use> 
                        </svg>
                        <span>Checkout</span>
                    </div>

                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="../../img/sprite.svg#icon-emoji-flirt"></use> 
                        </svg>
                    </div>

                    <div className="user-nav__user">
                        <span className="user-span__user-login">Login</span>
                        <span className="user-span__user-login">Sign Up</span>
                        <span className="user-span__user-name">User name</span>
                        <span className="user-span__user-login">Logout</span>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;

