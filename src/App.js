import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import axios from "axios";
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

                axios.get('https://61f989f669307000176f72fa.mockapi.io/favorite')
                .then((res) => {
                    setFavorites (res.data)
                })    

    }, [])

    const onAddToCart = (obj) => {
        // axios.post('https://61f989f669307000176f72fa.mockapi.io/cart', obj)
        // setCartItems(prev => [...prev, obj])
        if(cartItems.find(obj => obj.id == obj.id)){
            axios.delete(`https://61f989f669307000176f72fa.mockapi.io/cart/${obj.id}`)
            setCartItems(prev =>  prev.filter(item => item.id !== obj.id))
        } else {
            axios.post('https://61f989f669307000176f72fa.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
        }

    }

    const onRemoveItem = (id) => {
        axios.delete(`https://61f989f669307000176f72fa.mockapi.io/cart/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id))

    }

    const onAddToFavorite = async (obj) => {
    try{
        if (favorites.find((favObj) => favObj.id === obj.id)){
            axios.delete(`https://61f989f669307000176f72fa.mockapi.io/favorite/${obj.id}`)
            setFavorites(prev =>  prev.filter(item => item.id !== obj.id))
        } else {
            const { data } = await axios.post('https://61f989f669307000176f72fa.mockapi.io/favorite', obj)
            setFavorites(prev => [...prev, data])
           
        }
    } catch(error) {
        alert('Не удалось добавить в закладки')
    }
        
        
    }


    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }


    return (

        <div className="wrapper">



            {cartOpen && <Drawer items={cartItems} onClose={() => setCardOpen(false)} onRemove={onRemoveItem} />}
            <Header onClickCart={() => setCardOpen(true)} />

            <Routes>
                <Route path="/" exact element={<Home 
                        items={items}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        onAddToFavorite={((obj) => onAddToFavorite(obj))}
                        onAddToCart={((obj) => onAddToCart(obj))}
                />}>
                </Route>

                <Route path="/favorites" exact element={<Favorites
                      items={favorites}
                      onAddToFavorite={onAddToFavorite}
                />}>
                </Route>

            </Routes>
        </div>






    )
}

export default App;