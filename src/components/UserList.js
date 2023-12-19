import React from "react";
import UserCard from "./UserCard";

function UserList({users, setUserTweets}) {
  

  return (
    <div className="ui cards">
      {users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={(userTw) => {
              console.log(userTw)
              setUserTweets(userTw)
            }
          }
          {...user}
          user={user}
        />
      ))}
    </div>
  );
}

export default UserList;


//props.setUserTweets(userTw)