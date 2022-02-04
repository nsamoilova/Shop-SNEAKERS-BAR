import React from "react";

const Header = (props) => {
    return (
        <div>
            <header>
                <div className="headerLeft">
                    <img src="/logo.svg" className="logo" />
                    <div >
                        <h3 className="titleHeader">Sneakers Bar</h3>
                        <p className="textHeader">Магазин лучших кроссовок</p>
                    </div>
                </div>


                <ul className="headerRight">
                    <li className="cart" onClick={props.onClickCart}>
                        <img src="cart.svg" className="cartImg" />

                        <span>1250 руб.</span>
                    </li>

                    <li>
                        <img src="favorites.svg" alt="Favorites" className="favorite"/>
                    </li>
                    <li >
                        <img src="/acc.svg" className="acc" />

                    </li>
                </ul>

            </header>

        </div>
    )
}

export default Header;