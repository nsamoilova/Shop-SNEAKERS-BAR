import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";



const App = () => {

    // const [items] = React.useState([])
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([])
    const [cartOpen, setCardOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [favorites, setFavorites] = useState([])


    useEffect(() => {

        axios.get('https://61f989f669307000176f72fa.mockapi.io/items')
            .then((res) => {
                setItems(res.data)
            }),

            axios.get('https://61f989f669307000176f72fa.mockapi.io/cart')
                .then((res) => {
                    setCartItems(res.data)
                })

    }, [])

    const onAddToCart = (obj) => {
        axios.post('https://61f989f669307000176f72fa.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
       
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://61f989f669307000176f72fa.mockapi.io/cart/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id))
       
    }

    const onAddToFavorite = (obj) => {
        axios.get('https://61f989f669307000176f72fa.mockapi.io/favorite', obj)
        setFavorites(prev => [...prev, obj])
    }


    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }


    return (
        <div className="wrapper">



            {cartOpen && <Drawer items={cartItems} onClose={() => setCardOpen(false)}  onRemove={onRemoveItem}/>}
            <Header onClickCart={() => setCardOpen(true)} />


            <div className="content">

                <div className="contentSearch">
                    <h1 className="titleContent">{searchValue ? `Поиск запроса: "${searchValue}"` : "Все кроссовки"}</h1>
                    <div className="searchBlock">
                        <img src="search.svg" alt="Search" width={14} height={14}></img>
                        {searchValue && <img src="clear.svg"
                            alt="Clear"
                            className="clear"
                            onClick={() => setSearchValue('')}
                        />}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
                    </div>
                </div>




                <div className="sneakers" >
                    {items
                        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onFavorite={() => onAddToFavorite(obj)}
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))}






                </div>


            </div>


        </div>


    )
}

export default App;