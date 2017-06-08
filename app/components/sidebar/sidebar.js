import React from 'react';
import {Link} from 'react-router-component';


require('./sidebar.scss');

const Sidebar = () => (
    <div className="sidebar-component">
        <div className="top-menu">
            <a href="#/dashboard" className="menu-item">
                <i className="flaticon-circular-play-button"/>
                <span>Dashboard</span>
            </a>

            <div className="menu-label">All yours</div>
            <a href="#/sessions" className="menu-item active">
                <i className="flaticon-layers"/>
                <span>Sessions</span>
            </a>
            {/*<a href="#/stats" className="menu-item">*/}
                {/*<i className="flaticon-graphic"/>*/}
                {/*<span>Stats</span>*/}
            {/*</a>*/}
            <a href="#/achievements" className="menu-item">
                <i className="flaticon-trophy"/>
                <span>Awards</span>
            </a>
            <a href="#/progress" className="menu-item">
                <i className="flaticon-cardiogram"/>
                <span>Progress</span>
            </a>

            <div className="menu-label">Community</div>
            <a className="menu-item">
                <i className="flaticon-people-5"/>
                <span>Community</span>
            </a>
            <a  className="menu-item">
                <i className="flaticon-technology"/>
                <span>Activity</span>
            </a>
        </div>
        {/*<div className="bottom-menu">*/}
            {/*<div className="menu-item"><i className="icon-book"/></div>*/}
        {/*</div>*/}
    </div>
);

export default Sidebar;