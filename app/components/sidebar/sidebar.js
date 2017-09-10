import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import Router from 'react-router-component'


require('./sidebar.scss');


class Sidebar extends React.Component {
    // const screen = this.props.screen;

    render() {
        const isScreenClass = (screen) => this.props.screen == screen ? 'active' : '';

        return (
            <div className="sidebar-component">
                <div className="top-menu">
                    <Link href="/home" className={`menu-item`} style={{padding:'25px 0'}} >
                        <img src="/statics/images/suppl-favicon.png" alt="" style={{height:24}}/>
                    </Link>
                    <Link href="/home" className={`menu-item ${isScreenClass('home')}`}>
                        <i className="icon-uniE85A"/>
                        {/*<span>Home</span>*/}
                    </Link>

                    {/*<div className="menu-label">All yours</div>*/}
                    <Link href="/sessions" className={`menu-item ${isScreenClass('sessions')}`}>
                        <i className="icon-uniE6DC"/>
                        {/*<span>Sessions</span>*/}
                    </Link>
                    {/*<Link href="/stats" className="menu-item">*/}
                    {/*<i className="flaticon-graphic"/>*/}
                    {/*<span>Stats</span>*/}
                    {/*</Link>*/}
                    <Link href="/performance" className={`menu-item ${isScreenClass('performance')}`} title="Performance">
                        <i className="icon-uniE820"/>
                        {/*<span>Performance</span>*/}
                    </Link>
                    <Link href="/journey" className={`menu-item ${isScreenClass('journey')}`}>
                        <i className="icon-uniE817"/>
                        {/*<span>Journey</span>*/}
                    </Link>

                    {/*<div className="menu-label">Community</div>*/}
                    <Link href='/community' className={`menu-item ${isScreenClass('community')}`}>
                        <i className="icon-uniE724"/>
                        {/*<span>Community</span>*/}
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