import React from "react";
import { Link  } from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <header>
                <Link to="/">
                <div className="headerLeft">
                     <img src="/logo.svg" className="logo" />
                    <div >
                        <h3 className="titleHeader">Sneakers Bar</h3>
                        <p className="textHeader">Магазин лучших кроссовок</p>
                    </div>
                </div>
                    </Link>
                   


                <ul className="headerRight">
                    <li className="cart" onClick={props.onClickCart}>
                        <img src="cart.svg" className="cartImg" />

                        <span>1250 руб.</span>
                    </li>

                    <li>
                        <Link to="/favorites">
                            <img src="favorites.svg" alt="Favorites" className="favorite"/>
                        </Link>
                       
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