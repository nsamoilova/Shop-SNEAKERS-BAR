import React from "react";
import Button from "../Button";

const Drawer = ( {onClose,onRemove, items =[] } ) => {
    return (
        <div className="overlay" >
             <div className="drawer">
                   <h2 className="titleCart">Корзина<img src="btn-remove.svg" alt="Close" 
                   className="removeBtn"
                   onClick={onClose}></img></h2>

                   {
                        items.length > 0 ? (
                    <div>
                        <div className="sneakersCart" >
                        {items.map((obj, index) => (
                                 
                                <div className="cartItem" key={index}>
         
                                <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cartItemImg">
        
                                </div>
                                <div className="cartText">
                                    <p>{obj.title}</p>
                                    <b>{obj.price}руб.</b>
                                </div>
                                  <img onClick={() => onRemove(obj.id)} src="btn-remove.svg" alt="Remove" className="removeBtn" ></img>
        
                           
                           </div>
        
                            )) }  
                    
     

                         </div>  
                          <div className="cartTotalBlock">
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
                         
                           )  : ( <div className="cartEmpty">
                      <img className="basket" alt="BasketEmpty" src="emptyBasket.jpeg"/>
                      <h2 >Корзина пустая</h2>
                      <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                       <button className="greenButton" onClick={onClose}>
                         <img src="arrow.svg" alt="Arrow" className="backArrow" /> Вернуться назад
                       </button>
                   </div>
                   
                           )}

             
                </div>
        </div>
            
    )  
}

export default Drawer;