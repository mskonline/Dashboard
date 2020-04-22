import React from 'react';
import DatePicker from './tools/datepicker'

class Calender extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            renderDatePicker : this.renderDatePicker
        }
    }

    render(){
        let dPicker;
        if(this.state.renderDatePicker) {
            dPicker = <DatePicker top={this.state.dpTop} left={this.state.dpLeft}/>
        }

        return (
            <div className="container">
                <input onFocus={(e) => {this.openDatePicker(e)}} onBlur={() => {this.closeDatePicker()}}/>
                {dPicker}
            </div>
        );
    }

    openDatePicker(e) {
        let element = e.target;
        this.setState({
            renderDatePicker : true,
            dpTop: element.offsetTop + element.offsetHeight,
            dpLeft: element.offsetLeft
        })
    }

    closeDatePicker() {
        this.setState({
            renderDatePicker : false
        })
    }
}

export default Calender;