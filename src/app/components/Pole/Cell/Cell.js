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
            ship['position'].map((pos) => {
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
        this.state.hit === true ? this.setState({color: style.red}) : this.setState({color: style.black})
    }

    render() {
        return (
            <div onClick={this._handleClick} data-position-x={this.props.x} data-position-y={this.props.y} className={this.state.color}></div>
        )
    }
}