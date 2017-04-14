import React from 'react';
import {connect} from "react-redux";
import * as ACTIONS from '../../constants/actions.constants';

require('./player-list.component.scss');


class Splash extends React.Component {
    render() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);

        return (
            <div className={`player-list-component`}>
                <div className="list-container">
                    <div className="list-background"></div>
                    <div className="list-start">
                        <div className="start-circle">
                            <div className="start-inner-circle">Take 3</div>
                        </div>
                    </div>
                    <div className="list-item">
                        <div className="list-circle"><i className="fa fa-play fa-fw"></i></div>
                        <div className="list-line-started"></div>
                    </div>
                    <div className="list-item">
                        <div className="list-circle-number">2</div>
                        <div className="list-line"></div>
                    </div>
                    <div className="list-item">
                        <div className="list-circle-number">3</div>
                        <div className="list-line"></div>
                    </div>
                    <div className="list-item">
                        <div className="list-circle-number">4</div>
                        <div className="list-line"></div>
                    </div>
                    <div className="list-item">
                        <div className="list-circle-number">5</div>
                        <div className="list-line"></div>
                    </div>
                    <div className="last-item">
                        <div className="list-line"></div>
                    </div>
                </div>


            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({

    showNotification: () => dispatch({
        type: ACTIONS.SHOW_NOTIFICATION,
        message: 'MEEE'
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash)