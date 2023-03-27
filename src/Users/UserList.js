import React from "react";

import classes from "./UserList.module.css"
import Card from "../UI/Card";

function UserList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map(users=><li key={users.key}>{users.username} ( {users.age} year old)</li>)}
      </ul>
    </Card>
  );
}

export default UserList;
