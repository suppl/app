import React from 'react';

import {connect} from "react-redux";

require('./sub-header.scss');

class SubHeader extends React.Component {


    render() {
        return (
            <div className="sub-header-component">
                <div className="sub-heading">
                    {this.props.text} <div className="small-sub-heading">{this.props.subText}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

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