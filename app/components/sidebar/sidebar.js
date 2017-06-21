import React from 'react';
import {Link} from 'react-router-component';


require('./sidebar.scss');

const Sidebar = () => (
    <div className="sidebar-component">
        <div className="top-menu">
            <Link href="/dashboard" className="menu-item">
                <i className="flaticon-dashboard-1"/>
                <span>Dashboard</span>
            </Link>

            <div className="menu-label">All yours</div>
            <Link href="/sessions" className="menu-item active">
                <i className="flaticon-layers"/>
                <span>Sessions</span>
            </Link>
            {/*<Link href="/stats" className="menu-item">*/}
                {/*<i className="flaticon-graphic"/>*/}
                {/*<span>Stats</span>*/}
            {/*</Link>*/}
            <Link href="/awards" className="menu-item">
                <i className="flaticon-trophy"/>
                <span>Awards</span>
            </Link>
            <Link href="/progress" className="menu-item">
                <i className="flaticon-cardiogram"/>
                <span>Progress</span>
            </Link>

            <div className="menu-label">Community</div>
            <Link href='/community' className="menu-item">
                <i className="flaticon-people-5"/>
                <span>Community</span>
            </Link>
            <Link  className="menu-item">
                <i className="flaticon-technology"/>
                <span>Activity</span>
            </Link>
        </div>
        {/*<div className="bottom-menu">*/}
            {/*<div className="menu-item"><i className="icon-book"/></div>*/}
        {/*</div>*/}
    </div>
);

export default Sidebar;