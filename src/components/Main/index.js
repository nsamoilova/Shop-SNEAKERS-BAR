import React, {useEffect, useState} from "react";
import styles from './style.module.scss';
import Card from "./Card";
import SearchInput from "./SearchInput";



function Main() {

    const[items, setItems] = useState([]);
    const[cartItems, setCartItems] = useState([]);
   


    useEffect(() => {

    fetch('https://61f989f669307000176f72fa.mockapi.io/items')
         .then((res) => {
             return res.json();

         })
         .then((json) => {
             setItems(json)
         })
    },[])

    const onAddToCard = (obj) => {
        setCartItems([...cartItems,obj])
     }

     console.log(cartItems)
     
 
    return(
        <div>
             <div className={styles.content}>
                <div className={styles.contentSearch}>
                    <h1 className={styles.titlecontent}>Все кроссовки</h1>
                   
                    <SearchInput/>
                </div>
                
               
                
                <div className={styles.sneakers}>
                    
                    {items.map((item) =>(
                         <Card 
                       title={item.title}
                       price={item.price}
                       imageUrl={item.imageUrl}
                       onFavorite={() => console.log('Добавили в закладки')}
                       onPlus={((obj) => onAddToCard(obj))}
                    /> 
                    ))}

                   

                     
                   
                    
                

                </div>
                

                

                  
            </div>
        </div>
    )
}

export default Main;