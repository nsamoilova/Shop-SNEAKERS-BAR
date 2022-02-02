import React, {useState} from 'react';
import { Provider } from 'react-redux';
import Header from '../Header';
import Main from '../Main';
import { store } from '../../redux';
import styles from './style.module.scss';



const App = () => {

   
        return (
          <Provider store={store}>
             <div className={styles.wrapper}>
              <Header />
              <Main/>
              
            </div>
          </Provider>
           
        )
   
}

export default App;