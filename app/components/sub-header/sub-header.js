import React from 'react';

import {connect} from "react-redux";

require('./sub-header.scss');

class SubHeader extends React.Component {

    getNathans() {
        return this.props.actions.nathans;
    }

    render() {
        return (
            <div className="sub-header-component">
                <div className="sub-heading" onClick={this.props.add}>Heading {this.getNathans()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state);

    return {
        actions: state.actions,
        user: state.user
    }
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