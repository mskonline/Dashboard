import React, {Component} from 'react';
import Sidebar from '../components/layout/sidebar';
import Header from '../components/layout/header';
import View from '../components/layout/view';

class Dashboard extends Component {
    constructor (props) {
        super(props);

        this.pages = ['home', 'calender', 'contacts', 'tools', 'todo'];
        this.state = {
            currentPage : 'home'
        }
    };

    render = () => {
        return (
            <div>
                <div id='container' style={{height : window.innerHeight}}>
                    <Sidebar pages={this.pages} pageChange={(page) => this.setState({currentPage: page})}/>
                    <div id='main'>
                        <Header page={this.state.currentPage}/>
                        <View page={this.state.currentPage}/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Dashboard;