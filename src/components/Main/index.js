import React, { useEffect, useState} from "react";
import styles from './style.module.scss';
import Card from "./Card";
import SearchInput from "./SearchInput";
import { useDispatch, useSelector } from 'react-redux';
import { setItemsInCart, deleteItemFromCart } from "../../redux/cart/reducer";



function Main (props){

    const[items, setItems] = useState([]);
    // const[cartAddItems, setCartAddItems] = useState([]);
    const dispatch = useDispatch();

   


    useEffect(() => {

    fetch('https://61f989f669307000176f72fa.mockapi.io/items')
         .then((res) => {
             return res.json();

         })
         .then((json) => {
             setItems(json)
         })
    },[])

    // const onAddToCard = (obj) => {
    //     setCartAddItems([...cartAddItems,obj])
       
    //  }

    const onAddToCard = (obj) => {
        dispatch( setItemsInCart(obj))
    
        
    }

    
     
 
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
                         id={item.id}
                       title={item.title}
                       price={item.price}
                       imageUrl={item.imageUrl}
                       onFavorite={() => console.log('Добавили в закладки')}
                    //    onPlus={((obj) => onAddToCard(obj))}
                    onPlus={((obj) => (obj))}
                    /> 
                    ))}

                   

                     
                   
                    
                

                </div>
                

                

                  
            </div>
        </div>
    )
}

export default Main;