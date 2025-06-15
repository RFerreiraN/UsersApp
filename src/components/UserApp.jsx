import { useState } from 'react';
import { UserList } from './UserList';

export const UserApp = () => {

  const [endPoint, setEndPoint] = useState('users')
  
  const handleFetch = () => {
      setEndPoint('comments')
  }

  return (
    <>
      <h1>Users App</h1>
      <UserList endPoint={ endPoint }/>
      <button onClick={ handleFetch }>Cambiar</button>
    </>
  )
}

