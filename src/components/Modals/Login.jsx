/**
 * Created by jr1500 on 30/09/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Tooltip from 'rc-tooltip';


class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {emailValid: true, passwordValid: true, focused: false};
  }

  componentDidUpdate() {
    if (this.props.showLoginModal === true && !this.state.focused) {
      this.state.focused = true;
      setTimeout(() => {
        document.getElementById('email').focus();
      }, 50);
    }
  }

  render() {
    return (
      <Modal isOpen={this.props.showLoginModal} onRequestClose={this.closeModal}>
          <div className="modal-table"><div className="modal-liner"><div className="modal modal-login" onKeyUp={(e) =>{
                      if(e.key === 'Enter') {
                        this.login(email.value, password.value, remember_me.checked);
                      } else {
                        this.resetTooltip(e);
                      }
                    }
                  }>
            <h2 className="modal-title">Log in to load your details</h2>
            <div className="form">
              <div className="fieldset">
                <div className="field text" >
                  <label>Email</label>
                  <div className="text">
                    <input className="text" autoFocus type="email" name="email" id="email" />
                    <Tooltip
                      key="tooltip"
                      animation="zoom"
                      trigger="focus"
                      overlayStyle={{zIndex:9999}}
                      overlayClassName="job-card-tooltip"
                      visible={!this.state.emailValid}
                      overlay={
                        <div className="field radio with-avatar">
                          <span>Sorry, the email you entered is not valid. Please try again.</span>
                        </div>
                        }
                      >
                      <span></span>
                    </Tooltip>
                  </div>
                </div>
                <div className="field text">
                  <label>Password</label>
                  <div className="text">
                    <Tooltip
                      key="tooltip"
                      animation="zoom"
                      trigger="focus"
                      overlayStyle={{zIndex:9999}}
                      overlayClassName="job-card-tooltip"
                      visible={!this.state.passwordValid}
                      overlay={
                        <div className="field radio with-avatar">
                          <span>Sorry, it seems like you have no write any valid password. Please try again or reset your password.</span>
                        </div>
                        }
                    >
                      <input className="text" type="password" name="password" id="password" />
                    </Tooltip>

                  </div>
                </div>
                <div className="field">
                  <label><input type="checkbox" name="remember_me" id="remember_me" /> Remember me?</label>
                </div>
              </div>
            </div>
            <div className="submit">

              <Tooltip
                key="tooltip"
                animation="zoom"
                trigger="focus"
                overlayStyle={{zIndex:9999}}
                overlayClassName="job-card-tooltip"
                visible={this.props.member.UserID === -1}
                overlay={
                        <div className="field radio with-avatar">
                          <span>The email and password did not match a user in the system. Please check and try again.</span>
                        </div>
                        }
              >
                <button className="button-solid"
                        onClick={() => this.login(email.value, password.value, remember_me.checked)}>Log in
                </button>
              </Tooltip>

              <br/>
              <a href="javascript: void 0" className="button-simple">Don't have a MyCareerPortfolio
                account? Create one</a><br/>
              <a href="javascript: void 0" className="button-simple">Forgotten your password?</a>
            </div>
            <a className="action-close icon-cross" href="javascript: void 0"
               onClick={this.closeModal}>&nbsp;</a>
          </div></div></div>
      </Modal>
    );
  }

  checkEmail = (emailAddress) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
  }

  login = (email, pass, remember) => {
    if(!this.checkEmail(email)){
      this.setState({emailValid: false});
      document.getElementById('email').focus();
      return;
    } else {
      if(pass.length < 4) {
        this.setState({passwordValid: false});
        document.getElementById('password').focus();
        return;
      }
    }
    this.props.logIn(email, pass, remember);
  }

  resetTooltip = (e) => {
    this.setState({emailValid: true});
    this.setState({passwordValid: true});
    this.props.resetLoginUserID();
  }

  closeModal = () => {
    this.setState({emailValid: true, passwordValid: true, focused: false});
    this.props.closeLoginModal();
  }

}



export default LoginModal;
