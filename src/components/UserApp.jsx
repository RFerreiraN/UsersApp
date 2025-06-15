import { useState } from 'react';
import { UserList } from './UserList';

export const UserApp = () => {

  const [endPoint, setEndPoint] = useState('users')
  
  const handleFetch = () => {
      setEndPoint(prev => prev === 'users' ? 'comments' : 'users')
  }

  return (
    <>
      <h1>Users App</h1>
      <button onClick={ handleFetch }>Cambiar</button>
      <UserList endPoint={ endPoint }/>
    </>
  )
}

