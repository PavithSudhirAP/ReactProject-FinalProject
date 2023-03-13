import React, { useEffect, useState } from "react";
import axios from "axios";
//import egg from '../images/egg.jpg'
//import Header from "./Header";
import UsersList from "./UsersList";
import ResponsiveDrawer from './ResponsiveDrawer';

const baseURL = "  https://jsonplaceholder.typicode.com/users";

function Users() {
  
  
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsersList(response.data);
    });
  },[])

  return (
    <div className="contentWrap">
      <ResponsiveDrawer />
      <div className="listItems">
        <UsersList list={usersList} />
      </div> 
    </div>
  );
}

export default Users;
