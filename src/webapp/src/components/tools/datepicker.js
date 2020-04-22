import React, {Component} from 'react';

class DatePicker extends Component {
    render = () => {
        let style = {
            position: 'absolute',
            backgroundColor: '#1fa4b0',
            top: this.props.top,
            left: this.props.left
        };

        return (<div style={style}> Datepicker </div>);
    };
}

export default DatePicker;