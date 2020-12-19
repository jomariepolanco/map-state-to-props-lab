import React, { Component } from 'react';
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {

  renderUsernames = () => {
    return this.props.users.map (user => <li>{user.username}</li>)
  }
  render() {
    console.log(this.props.users)
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.renderUsernames()}
          {/* In addition, display the total number of users curently in the store */}
          <h3>{this.props.users.length}</h3>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
