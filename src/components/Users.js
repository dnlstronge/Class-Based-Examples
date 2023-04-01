import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

// class based components use concstructor to define state
// and state is always an object


class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      moreState: "test", // in the handler below only showUsers would change, React merges the state object
      //usersList: DUMMY_USERS,
    };
  }
  toggleUsersHandler() {
    this.setState((curstate) => {
      return { showUsers: !curstate.showUsers };
    }); // always takes an object) alwatys merges
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
// const [showUsers, setShowUsers] = useState(true);

// const toggleUsersHandler = () => {
//   setShowUsers((curState) => !curState);
// };

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
