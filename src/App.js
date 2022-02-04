import React, {useState, useEffect} from "react";
import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    
       
   ]
   
const App = () => {

    // const [items] = React.useState([])
    const[items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([])
    const [cartOpen,  setCardOpen] = useState(false);


   useEffect(() => {

    fetch('https://61f989f669307000176f72fa.mockapi.io/items')
         .then((res) => {
             return res.json();

         })
         .then((json) => {
             setItems(json)
         })
    },[])

    const onAddToCart = (obj) => {
       setCartItems(prev => [...prev, obj])
    }

    

    return (
        <div className="wrapper">

       
         
                {cartOpen && <Drawer items={cartItems} onClose = {() => setCardOpen(false)} /> }
                <Header onClickCart={() =>setCardOpen(true) } />
    

            <div className="content">

                <div className="contentSearch">
                    <h1 className="titleContent">Все кроссовки</h1>
                    <div className="searchBlock">
                    <img src="search.svg" alt="Search" width={14} height={14}></img>
                    <input placeholder="Поиск..."></input>
                </div>
                </div>
                

                

                <div className="sneakers" >
                    {items.map((item,index)  => (
                            <Card 
                          key={index}
                          title={item.title}
                          price={item.price}
                          imageUrl={item.imageUrl}
                          onFavorite={() => console.log('Добавили в закладки')}
                          onPlus = {(obj) => onAddToCart(obj)}
                       /> 
                       ))}

                         
                 
                         
                 
                   
                </div>

               
            </div>


        </div>


    )
}

export default App;