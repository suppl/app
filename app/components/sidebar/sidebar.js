import React from 'react';
import {Link} from 'react-router-component';


require('./sidebar.scss');

const Sidebar = () => (
    <div className="sidebar-component">
        <div className="top-menu">
            <a href="#/player" className="menu-item">
                <i className="icon-headphones"/>
                <span>Sessions</span>
            </a>
            <a href="#/dashboard" className="menu-item active">
                <i className="icon-layers"/>
                <span>Dashboard</span>

            </a>
            <a href="#/stats" className="menu-item">
                <i className="icon-chart-growth"/>
                <span>Stats</span>
            </a>
            <a href="#/achievements" className="menu-item">
                <i className="icon-trophy2"/>
                <span>Achievements</span></a>
            {/*<div className="menu-item"><i className="icon-bug"></i></div>*/}
        </div>
        <div className="bottom-menu">
            <div className="menu-item"><i className="icon-book"/></div>
        </div>
    </div>
);

export default Sidebar;