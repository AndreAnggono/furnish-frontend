import React from "react";
import CartSummary from "./CartSummary";
import CheckoutCart from "./CheckoutCart";
import Search from "./Search";

function Header() {
	return (
        <div>
            <header className="header">
                <span>
                    <a href="/"><img src="../../img/logo-furnique-2.png" alt="logo" className="logo"/></a>
                </span>
                

                <Search/>

                

                <nav className="user-nav">
                    <CartSummary />

                    <CheckoutCart/>
                    

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

