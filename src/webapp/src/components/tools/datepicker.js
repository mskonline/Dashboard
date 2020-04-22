import React from 'react';

class DatePicker extends React.Component {
    render() {
        console.log(this.props.top);
        console.log(this.props.left);

        let style = {
            position: 'absolute',
            backgroundColor: '#1fa4b0',
            top: this.props.top,
            left: this.props.left
        };



        return (<div style={style}> Datepicker </div>);
    }

    render
}

export default DatePicker