import { useState, useEffect } from 'react';
import { getUserGroups } from '../api/user';

function Admin() {
  const [userGroups, setUserGroups] = useState([])

  async function fetchGroups() {
    setUserGroups(await getUserGroups())
  }
  
  useEffect(() => {
    fetchGroups()
  }, []);

  return (
    <>
    <h3>User groups</h3>
    <ul>
      {userGroups.map((group, index) => {
        return (
          <li key={index}>{group}</li>
        )
      })}
      </ul>
    </>
  )
}

export default Admin;