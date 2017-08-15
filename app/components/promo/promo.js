import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import Router from 'react-router-component'
import * as _ from 'lodash';

import * as ACTIONS from '../../constants/actions.constants';
import {SessionList, isAudioAvailable} from '../../services/session.service';
import {SetUrl, If} from '../../services/helper.service';

require('./promo.scss');


class Sidebar extends React.Component {
    // const screen = this.props.screen;

    render() {

        const size    = this.props.size;
        const session = _.find(SessionList, {slug: this.props.sessionId});
        const audio   = _.find(SessionList, {id: this.props.audioId}) || session.audios[0];

        return (
            <div>
                <If condition={size === 'large'}>
                    <Link className="dashboard-banner dashboard-banner-large" href={`/sessions/${session.slug}`} style={{
                        backgroundImage: `url('${session.pattern}')`,
                        backgroundColor: session.color,
                    }}>
                        <div>Day {audio.index} of {session.audios.length}</div>
                        <div className="banner-title" style={{marginLeft: -3}}>{session.name}</div>
                        {/*<div className="banner-session">{session.description}</div>*/}
                        <div className="banner-butn clickable">
                            <i className="fa fa-play"/>
                            <span>Begin</span>
                        </div>
                        <div className="banner-stats">

                        </div>
                    </Link>
                </If>

                <If condition={size === 'mid'}>
                    <Link className="dashboard-banner-mid" href={`/sessions/${session.slug}`} style={{
                        backgroundImage: `url('${session.pattern}')`,
                        backgroundColor: session.color,
                    }}>
                        {/*<i className="fa fa-play clickable" onClick={() => this.props.showAudio(session, audio)}/>*/}
                        <div className="flex flex-min">
                            <div className="banner-title">{session.name}</div>
                            <div>Day {audio.index} of {session.audios.length}</div>
                            {/*<div className="banner-session">{session.description}</div>*/}
                            {/*<div className="banner-play clickable">*/}
                                {/*<i className="fa fa-play "/>*/}
                            {/*</div>*/}
                        </div>
                    </Link>
                </If>

                <If condition={size === 'small'}>
                    <Link className="dashboard-banner-low" href={`/sessions/${session.slug}`} style={{
                        backgroundImage: `url('${session.pattern}')`,
                        backgroundColor: session.color,
                    }}>
                        <i className="fa fa-play clickable"/>
                        <div className="flex flex-min">
                            <div className="banner-title">{session.name}</div>
                            <div className="banner-session">{session.audios.length} Sessions</div>
                        </div>
                    </Link>
                </If>
            </div>

        )
    }
}


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    showAudio: (session, audio) => dispatch({
        type: ACTIONS.SHOW_AUDIO,
        session,
        audio
    }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)