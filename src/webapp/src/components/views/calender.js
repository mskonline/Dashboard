import React, {Component} from 'react';
import SingleMonthView from "../tools/calender/SingleMonthView";
import ThreeMonthsView from "../tools/calender/ThreeMonthsView";
import FullYearView from "../tools/calender/FullYearView";

class Calender extends Component {
    render = () => {
        return (
            <div>
                <SingleMonthView key={'single-month-view'} year={2020} currentMonth={0} showNavigation={true}/>
                <ThreeMonthsView key={'three-month-view'} year={2020} startMonth={0} showNavigation={true}/>
                <FullYearView/>
            </div>
        );
    }
}

export default Calender;