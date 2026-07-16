import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { UserContext } from '../contexts/UserContext';

function RequireUser() {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/user-list"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return <Outlet />;
}

export default RequireUser;