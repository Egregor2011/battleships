import React from 'react';
import styles from './App.css';
import Header from './components/Header/header.js';
import Counter from './components/Counter/Counter.js';
import Pole from './components/Pole/Pole';
import ShipList from './components/ShipList/ShipList.js';
import pole from './state/pole.js';
import {ships} from './state/state.js';



const App = () => (
    <div className={styles.app}>
        <Header/>
        <div className={styles.container}>
            <div className={styles.grid}>
                <Counter/>
                <ShipList ships={ships}/>
            </div>
            <div className={styles.grid}>
                <Pole ships={ships} cell={pole}/>
            </div>
        </div>
        <div className={styles.test}></div>
    </div>
);

export default App;
