import React from "react";
import styles from './style.module.scss'

function Card(){
    return (
        <div className={styles.sneakers}>
             <div className={styles.card}>
                        <div className={styles.favorite}>
                            <img src="favoriteNot.svg" alt="favoriteNot"></img>
                        </div>
                        
                  <img src="sneakers.jpeg" alt="sneakers1" width={133} height={112} ></img>
                  <p className={styles.cardText}>Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <div className={styles.cardButton}>
                    <div className={styles.cardPrice}>
                        <p>Цена:</p>
                        <b>12 999p</b>
                    </div>
                    <button className={styles.button}>
                        <img src="pl.svg" alt="plus"></img>
                    </button>
                </div>
                </div>

                <div className={styles.card}>
                <div className={styles.favorite}>
                            <img src="favoriteNot.svg" alt="favoriteNot"></img>
                        </div>
                  <img src="2snek.jpeg" alt="snek2" width={133} height={112} ></img>
                  <p className={styles.cardText}>Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <div className={styles.cardButton}>
                    <div className={styles.cardPrice}>
                        <p>Цена:</p>
                        <b>12 999p</b>
                    </div>
                    <button className={styles.button}>
                        <img src="pl.svg" alt="plus"></img>
                    </button>
                   </div>
                </div>

                <div className={styles.card}>
                  <img src="3snek.jpeg" alt="snek3" width={133} height={112} ></img>
                  <p className={styles.cardText}>Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <div className={styles.cardButton}>
                    <div className={styles.cardPrice}>
                        <p>Цена:</p>
                        <b>12 999p</b>
                    </div>
                    <button className={styles.button}>
                        <img src="pl.svg" alt="plus"></img>
                    </button>
                   </div>
                </div>

                <div className={styles.card}>
                  <img src="4snek.jpeg" alt="snek3" width={133} height={112} ></img>
                  <p className={styles.cardText}>Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <div className={styles.cardButton}>
                    <div className={styles.cardPrice}>
                        <p>Цена:</p>
                        <b>12 999p</b>
                    </div>
                    <button className={styles.button}>
                        <img src="pl.svg" alt="plus"></img>
                    </button>
                   </div>
                </div>
 
        </div>
    )
}

export default Card;