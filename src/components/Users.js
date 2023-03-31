import { useState, Component } from 'react';
import User from './User';

import classes from './Users.module.css';



// class based components use concstructor to define state
// and state is always an object
const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {

  constructor() {
    this.state = {
      showUsers: true,
      moreState: "test", // in the handler below only showUsers would change, React merges the state object 
      usersList: DUMMY_USERS
    }
  }
  toggleUsersHandler() {
    this.setState((curstate) => {
      return {showUsers: !curstate.showUsers}
    })    // always takes an object)
  }

  render() {
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.showUsers && this.usersList}
      </div>
    );
  }
}



// const Users = () => {
  // const [showUsers, setShowUsers] = useState(true);

  // const toggleUsersHandler = () => {
  //   setShowUsers((curState) => !curState);
  // };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
