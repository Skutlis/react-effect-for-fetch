import React from "react";
import { User } from "..";
import UserListItem from "./UsersListItem";



export default function UserList(props : {users : User[]}){
    
    return (
        <ul className="users-list">
            {props.users.map((user, index) => {
                return <UserListItem user={user} key={index} />
            })}
        </ul>
    )
}