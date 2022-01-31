import React from "react";
import styles from './style.module.scss';
import CartDrawerOverlay from "./CartDrawerOverlay";

const Header = () => {
    return (
        <div className={styles.wrapper} >

             <CartDrawerOverlay/>
              
            <div style={{display: 'none'}} className={styles.overlay}>
                <div className={styles.drawer}>
                   <h2 className={styles.titleCart}>Корзина<img src="btn-remove.svg" alt="Remove" className={styles.removeBtn}></img></h2>
                   

                   <div className={styles.sneakersCart}>
                              <div className={styles.cartItem}>
    
                        <div style={{backgroundImage:'url(sneakers.jpeg)'}} className={styles.cartItemImg}>

                        </div>
                        <div className={styles.cartText}>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                          <img src="btn-remove.svg" alt="Remove" className={styles.removeBtn}></img>

                    </div>
                    
                    

                    <div className={styles.cartItem}>
    
                        <div style={{backgroundImage:'url(5snek.jpeg)'}} className={styles.cartItemImg}>

                        </div>
                        <div className={styles.cartText}>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                          <img src="btn-remove.svg" alt="Remove" className={styles.removeBtn}></img>

                    </div>
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

                        <button className={styles.greenButton}>Оформить заказ <img className={styles.arrow} src="arrow.svg" alt="arrow"></img> </button>
                    </div>
                  



                </div>
            </div>     
                
            

            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <img src="/logo.svg" className={styles.logo}  />
                   <div >
                       <h3 className={styles.titleheader}>Sneakers Bar</h3>
                       <p className={styles.textheader}>Магазин лучших кроссовок</p>
                    </div> 
                </div>

               
                    <ul className={styles.headerRight}>
                         <li className={styles.cart}>
                         <img src="/cart.svg" />

                             <span>1205 руб.</span>
                         </li>
                         <li>
                         <img src="/acc.svg" className={styles.acc} />

                         </li>
                       </ul>

               
                       

                
            </div>

            
        </div>

            
            
  
    )
}

export default Header;
