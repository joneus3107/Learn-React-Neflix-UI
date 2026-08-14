import { createBrowserRouter } from 'react-router';
import { Homepage, UserList, NotFound, Search } from '../pages';
import { RequireUser } from '../components';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: '/user-list',
    Component: UserList,
  },
  {
    Component: RequireUser,
    children: [
      {
        Component: MainLayout,
        children: [
          { index: true, Component: Homepage },
          { path: '/search', Component: Search }
        ]
      }
    ],
  },
  {
    path: '*',
    Component: NotFound, // 404 - Error
  },
]);

export default router;