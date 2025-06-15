
import { useFetchUsers } from "../Hooks/useFetchUsers";

export const UserList = ( endPoint ) => {
  const { users, isLoading } = useFetchUsers( endPoint )
  return (
    <>
      <ul>
        { users.map( user => (
          
          <li key={user.id}>
            { isLoading 
            ? <p>Cargando...</p> 
              : endPoint == 'users' ? user.name : user.email }
          </li>
        ))}
      </ul>
    </>
  )
}
