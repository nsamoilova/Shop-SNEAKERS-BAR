import React from "react";
import Card from "../components/Card";

const Favorites = ( {items, onAddToFavorite} ) => {
    return (
        <div className="content">

            <div className="contentSearch">
                <h1> Мои закладки</h1>

            </div>




            <div className="sneakers" >

                {items
                    .map((item, index) => (
                        <Card
                            key={index}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item}
                        />
                    ))}






            </div>


        </div>

    )
}

export default Favorites;