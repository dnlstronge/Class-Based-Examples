import classes from './User.module.css';
import { Component } from "react";

/* repeat but use a class  */

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }

}


// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
