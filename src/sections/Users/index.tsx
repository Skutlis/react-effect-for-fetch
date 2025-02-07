import React, { useEffect, useState } from "react"
import UserList from "./components/UsersList";

export interface User{
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  gender: string;
  email: string;
  jobTitle: string;
  latitude: number;
  longitude: number;
  favouriteColour: string;
  profileImage: string;
}

export const userURL = "https://boolean-uk-api-server.fly.dev/Skutlis/contact"

function UsersSection() {
  
  
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(userURL);
      const jsonData : User[] = await response.json();
      setUsers(jsonData)
    }
    fetchUserData();
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList users={users} />
      </div>
    </section>
  )
}

export default UsersSection
