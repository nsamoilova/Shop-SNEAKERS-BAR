import React from "react";
import styles from './style.module.scss';
import Button from "../../Button";

function CartDrawerOverlay({ onClose, items = [] }) {
    return(
        <div>
              <div className={styles.overlay}>
                <div className={styles.drawer}>
                   <h2 className={styles.titleCart}>Корзина<img src="btn-remove.svg" alt="Remove" 
                   className={styles.removeBtn} 
                   onClick={onClose}>
                    </img></h2>
                   

                   <div className={styles.sneakersCart}>
                       {items.map((obj) => (
                           <div className={styles.cartItem} >
    
                           <div style={{backgroundImage: `url(${obj.imageUrl})`}} className={styles.cartItemImg}>
   
                           </div>
                           <div className={styles.cartText}>
                               <p>${obj.title}</p>
                               <b>${obj.price}</b>
                           </div>
                             <img src="btn-remove.svg" alt="Remove" className={styles.removeBtn} ></img>
   
                      
                      </div>
   
                       ))}       

                    </div>
                    
                    
                    <div className={styles.cartTotalBlock}>
                        <ul>
                      <li >
                          <span>Итого:</span>
                          <div></div>
                          <b>21 498 руб.</b>
                      </li>
                      <li >
                          <span>Налог 5%: </span>
                          <div></div>
                          <b>1074 руб.</b>
                      </li>
                      </ul>

                       
                        <Button>Оформить заказ<img className={styles.arrow} src="arrow.svg" alt="arrow"></img></Button>
                    </div>
                  



                </div>
            </div>
        </div>
    )
}

export default CartDrawerOverlay;