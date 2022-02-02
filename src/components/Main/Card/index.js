import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setItemsInCart } from "../../../redux/cart/reducer";


import styles from './style.module.scss';


function Card({ id,title, imageUrl, price, onFavorite, onPlus }) {
    const dispatch = useDispatch();

    const [isAdd, setIsAdd] = useState(false);

    //    const onClickPlus = () => {
    //        onPlus({ title, imageUrl, price })
    //        setIsAdd(!isAdd)
    //    }

    const hadleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemsInCart({id,title, imageUrl, price})) ;
        onPlus({ id,title, imageUrl, price })
        setIsAdd(!isAdd)
    }


    return (
        <div className={styles.sneakers}>
            <div className={styles.card}>
                <div className={styles.favorite}>
                    <img src="favoriteNot.svg" alt="favoriteNot" onClick={onFavorite}></img>
                </div>

                <img src={imageUrl} alt="sneakers1" width={133} height={112} ></img>
                <p className={styles.cardText}>{title}</p>
                <div className={styles.cardButton}>
                    <div className={styles.cardPrice}>
                        <p>Цена:</p>
                        <b>{price}</b>
                    </div>

                    <img className={styles.plus} src={isAdd ? "plusChek.svg" : "plus.svg"} alt="plus" onClick={hadleClick}></img>

                </div>
            </div>







        </div>
    )
}

export default Card;