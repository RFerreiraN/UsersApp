import { useEffect, useState} from 'react';

export const UserApp = () => {

  const [users, setUsers] = useState([])
  const [endPoint, setEndPoint] = useState('users')

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

  const handleFetch = () => {
    setEndPoint('comments')
  }

  useEffect( () => {
    fetchUsers()
  }, [ endPoint ])

  return (
    <>
      <h1>Users App</h1>
      <ul>
        { users.map( user => (
          <li key={user.id}>
            { endPoint == 'users' ? user.name : user.body }
          </li>
        ))}
      </ul>
      <button onClick={ handleFetch }>Cambiar</button>
    </>
  )
}


/*
{ endPoint == 'users' ? users.map( user => <li key={user.id}>{user.name}</li>)
                              : users.map( user => <li key={user.id}>{user.body}</li>)
        }
*/