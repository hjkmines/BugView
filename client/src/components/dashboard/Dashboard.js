import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import './Dashboard.css'; 

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div 
        // className="container valign-wrapper"
        >
        <div 
        // className="row"
        >
          <div 
          // className="landing-copy col s12 center-align"
          >
            <h4 style={{ textAlign: 'center', marginBottom: '50px' }}>
              <b>Hey there,</b> {user.name} 👋
              <p className="flow-text grey-text text-darken-1">
              </p>
            </h4>
            <div id='icons1'>
            <div className='icon'>
              <i className="material-icons" style={{ fontSize: '150px', textAlign: 'center', display: 'block', color: 'DeepSkyBlue' }}>account_circle</i>
              <h5 style={{ textAlign: 'center', marginBottom: '50px' }}><strong>My Profile</strong></h5>
            </div>
            <div className='icon'>
              <i className="material-icons" style={{ fontSize: '150px', textAlign: 'center', display: 'block', color: 'DeepSkyBlue' }}>add_circle</i>
              <h5 style={{ textAlign: 'center', marginBottom: '50px' }}><strong>Create a new ticket</strong></h5>
            </div>
            <div className='icon'>
              <i className="material-icons" style={{ fontSize: '150px',  textAlign: 'center', display: 'block', color: 'DeepSkyBlue' }}>forum</i>
              <h5 style={{ textAlign: 'center', marginBottom: '50px' }}><strong>Messages</strong></h5>
            </div>
            </div>
            <div id='icons2'>
            <div className='icon'>
              <i className="material-icons" style={{ fontSize: '150px', textAlign: 'center', display: 'block', color: 'DeepSkyBlue' }}>group</i>
              <h5 style={{ textAlign: 'center', marginBottom: '50px' }}><strong>Teams</strong></h5>
            </div>
            <div className='icon'>
              <i className="material-icons" style={{ fontSize: '150px', textAlign: 'center', display: 'block', color: 'DeepSkyBlue' }}>notifications</i>
              <h5 style={{ textAlign: 'center', marginBottom: '50px' }}><strong>Notifications</strong></h5>
            </div>
            <div className='icon'>
              <i className="material-icons" style={{ fontSize: '150px', textAlign: 'center', display: 'block', color: 'DeepSkyBlue' }}>storage</i>
              <h5 style={{ textAlign: 'center', marginBottom: '50px' }}><strong>Ticket Log</strong></h5>
            </div>
            </div>
            <div id='log-out'>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
