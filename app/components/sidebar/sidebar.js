import React from 'react';
import {Link} from 'react-router-component';


require('./sidebar.scss');

const Sidebar = () => (
    <div className="sidebar-component">
        <div className="top-menu">
            <a href="#/player" className="menu-item">
                <i className="icon-headphones"/>
            </a>
            <a href="#/dashboard" className="menu-item active">
                <i className="icon-list"/>
            </a>
            <a href="#/stats" className="menu-item"><i className="icon-chart-growth"></i></a>
            <div className="menu-item"><i className="icon-bug"></i></div>
            <div className="menu-item"><i className="icon-trophy2"></i></div>
        </div>
        <div className="bottom-menu">
            <div className="menu-item"><i className="icon-book"></i></div>
        </div>
    </div>
);

export default Sidebar;