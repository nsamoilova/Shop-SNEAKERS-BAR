import React from "react";
import styles from './style.module.scss';
import Card from "./Card";
import SearchInput from "./SearchInput";

function Main() {
    return(
        <div>
             <div className={styles.content}>
                <div className={styles.contentSearch}>
                    <h1 className={styles.titlecontent}>Все кроссовки</h1>
                   
                    <SearchInput/>
                </div>
                
               
                
                <div >
                    <Card/>
                   
                

                </div>
                

                

                  
            </div>
        </div>
    )
}

export default Main;