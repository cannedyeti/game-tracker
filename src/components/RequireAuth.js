import { useState, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { getUserGroups } from '../api/user';

export function RequireAuth({ requiresAdmin, children }) {
  const [userGroups, setUserGroups] = useState([])
  async function fetchGroups() {
    setUserGroups(await getUserGroups())
  }
  useEffect(() => {
    fetchGroups()
  }, []);
  const location = useLocation();
  const { route } = useAuthenticator((context) => [context.route]);
  if (route !== 'authenticated') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if(requiresAdmin && userGroups.length && !userGroups.includes('Admins')) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children;
}