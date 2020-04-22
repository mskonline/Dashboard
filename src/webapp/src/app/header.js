import React, {Component} from 'react';
import Weather from '../components/weather'

class Header extends Component {
    render = () => {
        return (
            <div id='header'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="header">
                        {this.props.page}
                    </div>
                    <Weather/>
                </nav>
            </div>
        );
    };
};

export default Header;