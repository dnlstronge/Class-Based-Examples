import { Fragment, useState, useEffect, Component } from 'react';
import styles from './UserFinder.module.css'
 
import Users from './Users';
 
const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];

class UserFinder extends Component {
    constructor() {
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: ""
        }
    }
    searchChangeHandler() {
        this.setState({searchTerm: e.target.value})
    }
}
 
const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');
 
  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);
 
  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <Fragment>
        <div className={styles.finder} >
        <input type='search' onChange={searchChangeHandler} />
        </div>
      
      <Users users={filteredUsers} />
    </Fragment>
  );
};
 
export default UserFinder;