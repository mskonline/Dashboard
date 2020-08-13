import React, {Component} from 'react';
import SingleMonthView from "./SingleMonthView";

class ThreeMonthsView extends Component {
    state = {
        currentYear: this.props.year,
        currentMonth: this.props.startMonth
    };

    render() {
        return (
            <div className="three-months">
                {this.displayHeader()}
                <div className="three-months-body">
                    <SingleMonthView key={'m1'} year={this.state.currentYear} currentMonth={this.state.currentMonth}
                                     showNavigation={false}/>
                    <SingleMonthView key={'m2'} year={this.state.currentYear}
                                     currentMonth={(this.state.currentMonth + 1) % 12} showNavigation={false}/>
                    <SingleMonthView key={'m3'} year={this.state.currentYear}
                                     currentMonth={(this.state.currentMonth + 2) % 12} showNavigation={false}/>
                </div>
            </div>
        );
    }

    displayHeader = () => {
        var isHidden = '';

        if (!this.props.showNavigation) {
            isHidden = 'none';
        }

        return (
            <div className="three-months-header">
                <div className="three-months-btn-left" style={{float: 'left'}}>
                    <button onClick={this.decrementMonth} style={{display: isHidden}}> &laquo; </button>
                </div>

                <div className="three-months-btn-right" style={{float: 'right'}}>
                    <button onClick={this.incrementMonth} style={{display: isHidden}}> &raquo; </button>
                </div>
            </div>
        );
    };

    incrementMonth = () => {
        var nextMonth = (this.state.currentMonth + 3) % 12;
        this.setState({currentMonth: nextMonth});
    };

    decrementMonth = () => {
        var nextMonth = this.state.currentMonth - 3;

        if (nextMonth < 0) nextMonth = 11;
        this.setState({currentMonth: nextMonth});
    };
}

export default ThreeMonthsView;