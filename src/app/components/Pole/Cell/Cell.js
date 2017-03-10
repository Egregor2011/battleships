import React from 'react';
import style from './Cell.css';

export default class Cell extends React.Component {
    constructor() {
        super();
        this.state = {
            color: style.cell,
            hit: false
        };
        this._handleClick = this._handleClick.bind(this);
        this._hitResult = this._hitResult.bind(this);

    }
    _hitResult() {
        const shot = `${this.props.x},${this.props.y}`;
        this.props.ships.map((ship) => {
            ship['positions'].map((pos) => {
                let target = pos.toString();
                if(shot === target) {
                    this.setState({hit: true});
                }
            })
        });
    }

    componentDidMount() {
        this._hitResult();
    }

    _handleClick() {
        this.state.hit === true ? this.setState({color: style.hit}) : this.setState({color: style.miss})
    }

    render() {
        return (
            <div onClick={this._handleClick} className={this.state.color}></div>
        )
    }
}