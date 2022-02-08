import React from "react";
import Card from "../components/Card"


const Home = ({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart
          } ) => {
    return (
       
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
                                onFavorite={onAddToFavorite}
                                onPlus={onAddToCart}
                                {...item}
                            />
                        ))}






                </div>


            </div>
      
    )

}
export default Home;