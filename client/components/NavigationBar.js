import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout }  from '../actions/authActions';

class NavigationBar extends React.Component{
  
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render(){
    const { isAuthenticated } = this.props.auth;

    const userLink = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/dash">Dashboard</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href="#" onClick={this.logout.bind(this)}>Logut</a></li>
      </ul>
    );

    const guestLink = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );

    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/signup" className="navbar-brand">ReactJS</Link>
          </div>
          <div className="collapse navbar-collapse">
           { isAuthenticated ? userLink : guestLink }
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {logout})(NavigationBar);
