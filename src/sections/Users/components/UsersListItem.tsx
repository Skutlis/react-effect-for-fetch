import React from "react";
import { User } from "..";


export default function UserListItem(props : {user : User}){
    const fullName = props.user.firstName + " " + props.user.lastName
    return (
        <li>
            <img
                src={props.user.profileImage}
                alt={fullName}
                />
                <h3>{fullName}</h3>
                <p>Email: {props.user.email}</p>
        </li>
    )
}