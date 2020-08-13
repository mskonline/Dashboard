import React, {Component} from 'react';


class SingleMonthView extends Component {
    state = {
        currentYear: this.props.year,
        currentMonth: this.props.currentMonth
    };

    constructor(props) {
        super(props);

        // Internal configs
        this.config = {
            daysInAWeek: 7,
            gridCells: 42,
            months: [
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
            ]
        };

        var currentYear = this.state.currentYear;

        // Leap year check
        if (this.isLeapYear(currentYear)) {
            this.config.months[1].days = 29;
        }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.currentMonth !== this.props.currentMonth) {
            this.setState({currentMonth: this.props.currentMonth});
        }
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
        var isHidden = '';

        if (!this.props.showNavigation) {
            isHidden = 'none';
        }

        return (
            <div className="month-header">
                <div className="nav-btn">
                    <button onClick={this.decrementMonth} style={{float: 'left', display: isHidden}}> &laquo; </button>
                </div>
                <span className="month-name">{this.config.months[month].name}</span>
                <div className="nav-btn">
                    <button onClick={this.incrementMonth} style={{float: 'right', display: isHidden}}> &raquo; </button>
                </div>
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

        var days = new Array(this.config.gridCells);
        var day = 0;

        for (var i = startIndex; i < this.config.gridCells - 1; ++i) {
            days[i] = ++day;

            if (day == this.config.months[month].days) break;
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
        var startIndex = week * this.config.daysInAWeek;
        var daysSpan = [];

        for (let i = startIndex; i < (startIndex + this.config.daysInAWeek); ++i) {
            if (days[i]) {
                daysSpan.push(<span className="day">{days[i]}</span>);
            } else {
                daysSpan.push(<span className="day-null"> </span>);
            }
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

export default SingleMonthView;