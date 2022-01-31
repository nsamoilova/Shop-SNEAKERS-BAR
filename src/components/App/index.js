import React from 'react';
import Header from '../Header';
import Main from '../Main';

import styles from './style.module.scss'
class App extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
              <Header />
              <Main/>
              
            </div>
        )
    }
}

export default App;