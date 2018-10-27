import React, {Component} from 'react';
import Sidebar from './sidebar';
import Header from './header';
import View from './view';

export default class Dashboard extends Component{
    constructor(props){
        super(props);

        this.pages = ['home', 'calender', 'contacts', 'tools', 'todo'];
        this.state = {
            currentPage : 'home'
        }
    }

    render(){
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
    }
};