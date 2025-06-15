 import { useState, useEffect} from "react";

export const useFetchUsers = ( {endPoint} ) => {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
        const data = await response.json()
        setUsers(data)
        setIsLoading(false)
      } catch (error) {
        console.error( error )
      }
    }

    useEffect( () => {
      fetchUsers()
    }, [ endPoint ])

  return {
    users,
    isLoading
  }
}
