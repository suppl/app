import React from 'react';
import {Link} from 'react-router-component';


require('./sidebar.scss');

const Sidebar = () => (
    <div className="sidebar-component">
        <div className="top-menu">
            <a href="#/player" className="menu-item">
                <i className="flaticon-headphones-2"/>
                <span>Dashboard</span>
            </a>
            <a href="#/dashboard" className="menu-item active">
                <i className="icon-layers"/>
                <span>Sessions</span>

            </a>
            <a href="#/stats" className="menu-item">
                <i className="flaticon-graphics"/>
                <span>Stats</span>
            </a>
            <a href="#/achievements" className="menu-item">
                <i className="flaticon-quality"/>
                <span>Awards</span>
            </a>
            <a className="menu-item">
                <i className="flaticon-people-1"/>
                <span>Buddies</span>
            </a>
            <a  className="menu-item">
                <i className="flaticon-fight"/>
                <span>Challenges</span>
            </a>
            {/*<div className="menu-item"><i className="icon-bug"></i></div>*/}
        </div>
        <div className="bottom-menu">
            <div className="menu-item"><i className="icon-book"/></div>
        </div>
    </div>
);

export default Sidebar;