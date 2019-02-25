import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <nav className="navbar">
                <div>
                    {/* <a className="logo" href="/">Reset</a> */}
					<a className="logo btn btn-danger" href="/">Reset</a>
                </div>
                <div className="navMessage">{this.props.navMessage}</div>
                <div className="score">
                    <p>Score: {this.props.score}</p>
                    <p>Top Score: {this.props.highest}</p>
                </div>
            </nav>
        )
    }
}

export default Header