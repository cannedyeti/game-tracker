import React, { createContext, useState, useContext, useEffect } from 'react';
import { getUserGroups } from '../api/user';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userGroups, setUserGroups] = useState();
  async function fetchGroups() {
    setUserGroups(await getUserGroups());
  }
  useEffect(() => {
    fetchGroups();
  }, []);
  return (
    <UserContext.Provider
      value={{
        userGroups
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) throw new Error('useUser must be used within a CountProvider');

  const { userGroups } = context;

  return { userGroups };
}
