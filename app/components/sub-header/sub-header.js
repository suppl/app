import React from 'react';

import {connect} from "react-redux";

require('./sub-header.scss');

class SubHeader extends React.Component {


    render() {
        return (
            <div className="sub-header-component">
                <div className="sub-heading">{this.props.text}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state);

    return state
};

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch({
            type: 'ADD'
        })
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubHeader)