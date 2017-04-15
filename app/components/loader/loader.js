import React from 'react';

import * as ACTIONS from '../../constants/actions.constants';

import {connect} from "react-redux";

require('./loader.scss');

class Loader extends React.Component {

    getClasses() {
        return [
            this.props.settings.loaderVisible ? 'active' : ''
        ].join(' ');
    }

    render() {

        return (
            <div className={`loader-component ${this.getClasses()}`}>
                <div className="loader-icon icon-loading icon-3d-rotate"/>
                <div className="loader-text">Hold tight!</div>


            </div>
        )
    }
}

const mapStateToProps = state => {
    //console.log('', state)

    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        showLoader: () => dispatch({
            type: ACTIONS.SHOW_LOADER,
            message: 'MEEE'
        }),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loader)