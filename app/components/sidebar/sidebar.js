import React from 'react';

require('./sidebar.scss');

const Sidebar = () => (
    <div className="sidebar-component">
        <div className="top-menu">
            <div className="menu-item"><i className="icon-headphones"></i></div>
            <div className="menu-item active"><i className="icon-list"></i></div>
            <div className="menu-item"><i className="icon-bug"></i></div>
            <div className="menu-item"><i className="icon-trophy2"></i></div>
        </div>
        <div className="bottom-menu">
            <div className="menu-item"><i className="icon-book"></i></div>
        </div>
    </div>
);

export default Sidebar;