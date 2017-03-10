import React, { Component } from 'react';
import styles from './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import setScore from './actions/actions.js'
import Header from './components/Header/header.js';
import Counter from './components/Counter/Counter.js';
import Pole from './components/Pole/Pole';
import ShipList from './components/ShipList/ShipList.js';
import pole from './state/pole.js';
import {ships} from './state/state.js';


class App extends Component{
    render() {
        return (
            <div className={styles.app}>
                <Header/>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <Counter action={this.props.setScore} score={this.props.layout.score}/>
                        <ShipList ships={ships.layout}/>
                    </div>
                    <div className={styles.grid}>
                        <Pole ships={ships.layout} cell={pole}/>
                    </div>
                </div>
                <div className={styles.test}></div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        layout: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setScore: bindActionCreators(setScore, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
