import React from 'react';
import {Link} from 'react-router-dom';

require('./sidebar.scss');

const Sidebar = () => (
    <div className="sidebar-component">
        <div className="top-menu">
            <Link to={`/player`} className="menu-item">
                <i className="icon-headphones"/>
            </Link>
            <Link to={`/dashboard`} className="menu-item active">
                <i className="icon-list"/>
            </Link>
            <div className="menu-item"><i className="icon-bug"></i></div>
            <div className="menu-item"><i className="icon-trophy2"></i></div>
        </div>
        <div className="bottom-menu">
            <div className="menu-item"><i className="icon-book"></i></div>
        </div>
    </div>
);

export default Sidebar;