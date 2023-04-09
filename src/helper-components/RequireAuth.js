import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useUser } from './Context';

export function RequireAuth({ requiresAdmin, children }) {
  const location = useLocation();
  const { route } = useAuthenticator((context) => [context.route]);
  const { userGroups } = useUser();
  if (route !== 'authenticated') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if(requiresAdmin && userGroups.length && !userGroups.includes('Admins')) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  return children;
}