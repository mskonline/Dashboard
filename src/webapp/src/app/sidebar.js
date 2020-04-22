import React, {Component} from 'react';

class Sidebar extends Component {
    handleClick = (page) => {
        this.props.pageChange(page);
    };

    render = () => {
        const sidebarItems = this.props.pages.map((page) =>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title={page} key={page}>
                <a className="nav-link">
                    <span className="nav-link-text sidebaritem" onClick={() => this.handleClick(page)}>{page}</span>
                </a>
            </li>
        );

        return (
            <div id="sidebar">
                <a className="navbar-brand bg-dark dashboard" href="index.html">Dashboard</a>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                            {sidebarItems}
                        </ul>
                        <ul className="navbar-nav sidenav-toggler">
                            <li className="nav-item">
                                <a className="nav-link text-center" id="sidenavToggler">
                                    <i className="fa fa-fw fa-angle-left"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    };
};

export default Sidebar;