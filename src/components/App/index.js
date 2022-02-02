import React, {useState} from 'react';
import Header from '../Header';
import Main from '../Main';

import styles from './style.module.scss'
const App = () => {

   

  
        return (
            <div className={styles.wrapper}>
              <Header />
              <Main/>
              
            </div>
        )
   
}

export default App;