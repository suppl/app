import React from 'react';

import * as ACTIONS from '../../constants/actions.constants';

import {connect} from "react-redux";

require('./award.scss');

class Award extends React.Component {

    render() {

        const getClasses = () => [
            this.props.award.visible ? 'active' : '',
            this.props.award.theme
        ].join(' ');

        return (
            <div className={`award-component ${getClasses()}`}>
                <div className="award-close icon-cross" onClick={this.props.hideAward}/>

                {/*<div className="award-icon icon-heart"/>*/}
                {/*<div className="award-icon icon-graduation-hat"/>*/}
                {/*<div className="award-icon icon-diamond3"/>*/}
                <div className="award-icon icon-diamond3"/>
                {/*<div className="award-icon icon-hand"/>*/}
                <div className="award-title">{this.props.award.award.name}</div>
                <div className="award-text" dangerouslySetInnerHTML={{__html: this.props.award.award.description}}></div>

                <div className="award-band">See all awards! &raquo;</div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    showAward: () => dispatch({
        type: ACTIONS.SHOW_AWARD,
        message: 'MEEE'
    }),

    hideAward: () => dispatch({
        type: ACTIONS.HIDE_AWARD
    })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Award)