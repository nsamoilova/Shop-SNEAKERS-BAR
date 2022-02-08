import React, { useState } from "react";
import styles from './style.module.scss';

const Card = ( {id, imageUrl, title, price, onFavorite, onPlus, favorited = false} ) => {

  const [isAdd, setIsAdd] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited)
  

  const onClickPlus = () => {
      onPlus( {imageUrl, title, price} )
      setIsAdd(!isAdd)
  }

  const onClickFavorite = () => {
    onFavorite( {id,imageUrl, title, price} )
    setIsFavorite(!isFavorite)
}

    return (
        <div >
            <div className={styles.card}>
                <div className={styles.favorite}>
                    <img src={isFavorite ? "favoriteLike.svg" : "favoriteNot.svg"} onClick={onClickFavorite} alt="favoriteNot" ></img>
                </div>

                <img src={imageUrl} alt="sneakers1" width={133} height={112} ></img>
                <p className={styles.cardText}>{title}</p>
                <div className={styles.cardButton}>
                    <div className={styles.cardPrice}>
                        <p>Цена:</p>
                        <b>{price} руб.</b>
                    </div>

                    <img className={styles.plus} src={isAdd ? "plusChek.svg" : "plus.svg"} onClick={onClickPlus}></img>
                </div>  </div>
        </div>
    )
}

export default Card;