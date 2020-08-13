import React, {Component} from 'react';


class Calender extends Component {
    state = {
        currentMonth: 0,
        currentYear: 2020
    };

    constructor(props) {
        super(props);

        this.months = [
            {
                name: 'January',
                days: 31
            },
            {
                name: 'February ',
                days: 28
            },
            {
                name: 'March',
                days: 31
            },
            {
                name: 'April',
                days: 30
            },
            {
                name: 'May',
                days: 31
            },
            {
                name: 'June',
                days: 30
            },
            {
                name: 'July',
                days: 31
            },
            {
                name: 'August',
                days: 31
            },
            {
                name: 'September',
                days: 30
            },
            {
                name: 'October',
                days: 31
            },
            {
                name: 'November',
                days: 30
            },
            {
                name: 'December',
                days: 31
            }
        ];

        var currentYear = this.state.currentYear;

        if (this.isLeapYear(currentYear))
            this.months[1].days = 29;
    }

    render = () => {
        var year = this.state.currentYear;
        var month = this.state.currentMonth;

        return this.displayMonth(new Date(year, month, 1));
    };

    displayMonth = (date) => {
        let month = date.getMonth();
        let firstDayOfMonth = date.getDay();

        return (

            <div className="month">
                {this.displayMonthHeader(month)}
                {this.displayWeekHeader()}
                {this.displayMonthBody(month, firstDayOfMonth)}
            </div>
        );
    };

    displayMonthHeader = (month) => {
        return (
            <div className="month-header">
                <button onClick={this.decrementMonth} style={{float: 'left'}}> &laquo; </button>
                <span className="month-name">{this.months[month].name}</span>
                <button onClick={this.incrementMonth} style={{float: 'right'}}> &raquo; </button>
            </div>
        );
    };


    displayWeekHeader = () => {
        return (
            <div className="week-header">
                <div className="day">M</div>
                <div className="day">T</div>
                <div className="day">W</div>
                <div className="day">T</div>
                <div className="day">F</div>
                <div className="day">S</div>
                <div className="day">S</div>
            </div>
        )
    };

    displayMonthBody = (month, firstDayOfMonth) => {
        var startIndex = firstDayOfMonth - 1;

        if (startIndex < 0) startIndex = 6;

        var days = new Array(42);
        var day = 0;

        for (var i = startIndex; i < 41; ++i) {
            days[i] = ++day;

            if (day == this.months[month].days) break;
        }

        return (
            <div className="month-body">
                <div className="week">
                    {this.displayWeek(0, days)}
                </div>
                <div className="week">
                    {this.displayWeek(1, days)}
                </div>
                <div className="week">
                    {this.displayWeek(2, days)}
                </div>
                <div className="week">
                    {this.displayWeek(3, days)}
                </div>
                <div className="week">
                    {this.displayWeek(4, days)}
                </div>
                <div className="week">
                    {this.displayWeek(5, days)}
                </div>
            </div>
        );
    };

    displayWeek = (week, days) => {
        var startIndex = week * 7;
        var daysSpan = [];

        for (let i = startIndex; i < (startIndex + 7); ++i) {
            if (days[i])
                daysSpan.push(<span className="day">{days[i]}</span>);
            else
                daysSpan.push(<span className="day"> </span>);
        }

        return (daysSpan);
    };

    isLeapYear = (year) => {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    };

    incrementMonth = () => {
        var nextMonth = (this.state.currentMonth + 1) % 12;
        this.setState({currentMonth: nextMonth});
    };

    decrementMonth = () => {
        var nextMonth = this.state.currentMonth - 1;

        if (nextMonth < 0) nextMonth = 11;
        this.setState({currentMonth: nextMonth});
    };
}

export default Calender;