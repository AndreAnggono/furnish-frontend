
function Header() {
	return (
        <div>
            <header class="header">

                <a href="/"><img src="../../img/logo-big.png" alt="logo" class="logo"/></a>

                <form action="#" class="search">
                    <input class="search__input" placeholder="Search furniture"/>
                    <button class="search__button">
                        <svg class="search__icon">
                            <use xlinkHref="../../img/sprite.svg#icon-magnifying-glass"></use> 
                        </svg>
                    </button>
                </form>

                <nav class="user-nav">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="../../img/sprite.svg#icon-shopping-cart"></use> 
                        </svg>
                        <span class="user-nav__notification">7</span>
                    </div>

                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="../../img/sprite.svg#icon-check"></use> 
                        </svg>
                        <span>Go to Checkout</span>
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

