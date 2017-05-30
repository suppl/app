import React from 'react';
import {Link} from 'react-router-component';


require('./sidebar.scss');

const Sidebar = () => (
    <div className="sidebar-component">
        <div className="top-menu">
            <a href="#/dashboard" className="menu-item">
                <i className="flaticon-headphones"/>
                <span>Dashboard</span>
            </a>

            <div className="menu-label">
                All yours
            </div>
            <a href="#/sessions" className="menu-item active">
                <i className="icon-layers"/>
                <span>Sessions</span>
            </a>
            <a href="#/stats" className="menu-item">
                <i className="flaticon-graphic"/>
                <span>Stats</span>
            </a>
            <a href="#/achievements" className="menu-item">
                <i className="flaticon-medal"/>
                <span>Awards</span>
            </a>

            <div className="menu-label">
                Community
            </div>
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