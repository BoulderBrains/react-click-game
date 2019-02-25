import React, { Component } from 'react';

class Title extends Component {
    render() {
        return(
            <header className="header">
                <h1>Memory game</h1>
                <h2>Don't click the same image twice or it's game over!</h2>
            </header>
        )
    }
}

export default Title