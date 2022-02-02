import React, { useState } from "react";
import styles from './style.module.scss';
import CartDrawerOverlay from "./CartDrawerOverlay";
import { useSelector } from 'react-redux';

    const Header = () => {
    
   
 const[cardOpen,setCardOpen] = useState(false);
 const[cartItems, setCartItems] = useState([]);
 const items = useSelector(state => state.cart.itemsInCart);
//  const totalPrice = items.reduce((acc, cart) => acc += cart.price, 0)

 const onClickCard = () => {
     setCardOpen(true)
 }

 
 
 

    return (
        <div className={styles.wrapper}  >
           

             {cardOpen && <CartDrawerOverlay items={cartItems}  onClose={() => setCardOpen(false)}/> }
                  
        
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <img src="/logo.svg" className={styles.logo}  />
                   <div >
                       <h3 className={styles.titleheader}>Sneakers Bar</h3>
                       <p className={styles.textheader}>Магазин лучших кроссовок</p>
                    </div> 
                </div>

               
                    <ul className={styles.headerRight}>
                         <li className={styles.card} onClick={onClickCard} >
                         <img src="/cart.svg"  className={styles.cardAdd}/>

                            <span>0 руб.</span> 
                         </li>
                         <li >
                         <img src="/acc.svg" className={styles.acc} />

                         </li>
                       </ul>

               
                       

                
            </div>

            
        </div>

            
            
  
    )
}

export default Header;
