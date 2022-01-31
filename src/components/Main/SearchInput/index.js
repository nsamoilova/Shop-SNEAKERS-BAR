import React from "react";
import styles from "./style.module.scss"

function SearchInput() {
    return(
        <div>
              <div className={styles.searchBlock}>
                       <img  src="search.svg" alt="Search" width={14} height={14}></img>
                       <input placeholder="Search..."></input>
                    </div>
        </div>
    )
} 

export default SearchInput;