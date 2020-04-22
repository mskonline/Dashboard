import React, {Component} from 'react';
import Timestamp from '../tools/timestamp';

class Tools extends Component{
    render = () => {
        return (
            <div id='tools'>
                <Timestamp/>
            </div>
        );
    };
}

export default Tools;