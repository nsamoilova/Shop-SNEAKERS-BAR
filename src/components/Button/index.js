import React from "react";
import styles from './style.module.scss';

const Button = ({children}) => {
    return(
        <div>
            <button className={styles.greenButton}>
                {children}
            </button>
        </div>
    )
}

export default Button;
