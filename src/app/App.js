import React, { Component } from 'react';
import styles from './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {setScore, hitPoint} from './actions/actions.js'
import Header from './components/Header/header.js';
import Counter from './components/Counter/Counter.js';
import Field from './components/Field/Field';
import ShipList from './components/ShipList/ShipList.js';


@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component{
    gameOverCheck() {
        const check = this.props.layout.layout.map(ship => ship['sunk']);
        if (!check.includes(false)) this.props.setScore()
    }
    componentDidUpdate() {
        return this.gameOverCheck();
    }
    render() {
        return (
            <div className={styles.app}>
                <Header/>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <Counter score={this.props.layout.score}/>
                        <ShipList ships={this.props.layout.layout}/>
                    </div>
                    <div className={styles.field}>
                        <Field setScore={this.props.setScore} actions={this.props.hitPoint}
                                cell={this.props.layout.playground}/>
                    </div>
                </div>
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
        setScore: bindActionCreators(setScore, dispatch),
        hitPoint: bindActionCreators(hitPoint, dispatch),
    }
}
