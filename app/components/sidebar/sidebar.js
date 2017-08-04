import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import Router from 'react-router-component'


require('./sidebar.scss');


class Sidebar extends React.Component {
    // const screen = this.props.screen;

    render() {
        const isScreenClass = (screen) => this.props.currentScreen == screen ? 'active' : '';

        return (
            <div className="sidebar-component">
                <div className="top-menu">
                    <Link href="/home" className={`menu-item ${isScreenClass('home')}`}>
                        <i className="icon-uniE7F1"/>
                        <span>Home</span>
                    </Link>

                    <div className="menu-label">All yours</div>
                    <Link href="/sessions" className={`menu-item ${isScreenClass('sessions')}`}>
                        <i className="icon-uniE6DC"/>
                        <span>Sessions</span>
                    </Link>
                    {/*<Link href="/stats" className="menu-item">*/}
                    {/*<i className="flaticon-graphic"/>*/}
                    {/*<span>Stats</span>*/}
                    {/*</Link>*/}
                    <Link href="/awards" className={`menu-item ${isScreenClass('awards')}`}>
                        <i className="icon-uniE820"/>
                        <span>Performance</span>
                    </Link>
                    <Link href="/progress" className={`menu-item ${isScreenClass('progress')}`}>
                        <i className="icon-uniE817"/>
                        <span>Journey</span>
                    </Link>

                    <div className="menu-label">Community</div>
                    <Link href='/community' className={`menu-item ${isScreenClass('community')}`}>
                        <i className="icon-uniE724"/>
                        <span>Community</span>
                    </Link>
                    {/*<Link className={`menu-item ${isScreenClass('activity')}`}>*/}
                        {/*<i className="flaticon-technology"/>*/}
                        {/*<span>Activity</span>*/}
                    {/*</Link>*/}
                </div>
                {/*<div className="bottom-menu">*/}
                {/*<div className="menu-item"><i className="icon-book"/></div>*/}
                {/*</div>*/}
            </div>
        );
    }
}


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)