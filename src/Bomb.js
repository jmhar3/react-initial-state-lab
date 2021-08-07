// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        if(this.state.secondsLeft === 0) {
            return <h2>Boom!</h2>
        } else {
            return <h4>{this.state.secondsLeft} seconds left before I go boom!</h4>
        }
    }
}