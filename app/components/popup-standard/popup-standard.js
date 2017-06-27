import React from 'react';
import {connect} from "react-redux";

import * as ACTIONS from '../../constants/actions.constants';

require('./popup-standard.scss');

class PopupStandard extends React.Component {
    render() {
        const getClasses = () => [
            this.props.popup.visible && this.props.popup.popupType === 'standard' ? 'active' : ''
        ].join(' ');

        return (
            <div className={`popup-component ${getClasses()}`}>
                <div className="popup-box">
                    {this.props.popup.canClose ?
                        <div className="popup-close icon-cross" onClick={this.props.hidePopup}/> : ''
                    }
                    <div className="popup-middle">
                        <div className="popup-title">{this.props.popup.title}</div>

                        <p>{this.props.popup.content}</p>

                        {this.props.popup.html}
                    </div>
                    <div className="popup-bottom">
                        {this.props.popup.canClose ?
                            <div className="butn transparent no-margin" style={{cursor: 'pointer'}} onClick={this.props.hidePopup}>Cancel</div> : ''
                        }
                        <div className="butn no-margin" style={{marginLeft: 'auto', 'minWidth': 'auto'}} onClick={this.props.popup.linkAction}>{this.props.popup.linkText}</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    hidePopup: () => dispatch({
        type: ACTIONS.HIDE_POPUP
    }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PopupStandard)