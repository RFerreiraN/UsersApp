import { useState, useEffect } from "react";

export const UserList = ({ endPoint }) => {

  const [users, setUsers] = useState([])
  
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
        const data = await response.json()
        setUsers(data)
        console.log(data)
      } catch (error) {
        console.error( error )
      }
    }

    useEffect( () => {
      fetchUsers()
    }, [ endPoint ])

    
  return (
    <>
      <ul>
        { users.map( user => (
          <li key={user.id}>
            { endPoint == 'users' ? user.name : user.body }
          </li>
        ))}
      </ul>
    </>
  )
}
