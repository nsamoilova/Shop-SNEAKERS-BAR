import React from "react";
import Button from "../Button";

const Drawer = ( {onClose, items =[] } ) => {
    return (
        <div className="overlay" >
             <div className="drawer">
                   <h2 className="titleCart">Корзина<img src="btn-remove.svg" alt="Close" 
                   className="removeBtn"
                   onClick={onClose}
                   >
                    </img></h2>
                   

                   <div className="sneakersCart" >
                   {items.map((obj, index) => (
                            
                           <div className="cartItem" key={index}>
    
                           <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cartItemImg">
   
                           </div>
                           <div className="cartText">
                               <p>${obj.title}</p>
                               <b>${obj.price}</b>
                           </div>
                             <img src="btn-remove.svg" alt="Remove" className="removeBtn" ></img>
   
                      
                      </div>
   
                       ))}       

                    </div>
                    
                  
                    <div className="cartTotalBlock"   >
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
                      
                    
                       
                        <Button>Оформить заказ<img className="arrow" src="arrow.svg" alt="arrow"></img></Button>
                    </div>
                  
                     

             
                </div>
        </div>
            
    )  
}

export default Drawer;