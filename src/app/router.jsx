import { createBrowserRouter } from 'react-router';
import { Homepage, UserList, NotFound } from '../pages';
import { RequireUser } from '../components';

const router = createBrowserRouter([
  {
    path: '/user-list',
    Component: UserList,
  },
  {
    Component: RequireUser,
    children: [
      { index: true, Component: Homepage },
    ],
  },
  {
    path: '*',
    Component: NotFound, // 404 - Error
  },
]);

export default router;