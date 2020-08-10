import React, {Component, Fragment} from 'react';
import {Button} from './App'

export class Counter extends Component {
    state = {
        count: 0
    }

    increment = () =>
        this.setState(prevState => ({
            count: prevState.count + 1
        }));

    decrement = () =>
        this.setState(prevState => ({
            count: prevState.count - 1
        }));

    render() {
        return (
            <Fragment>
                <Button onClick={this.increment}>+</Button>
                <Button onClick={this.decrement}>-</Button>
                <div>{this.state.count}</div>
            </Fragment>
        );
    }
}