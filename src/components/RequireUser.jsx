import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { ThemeContext } from '../contexts/ThemeContext';

function RequireUser() {
  const { user } = useContext(ThemeContext);
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