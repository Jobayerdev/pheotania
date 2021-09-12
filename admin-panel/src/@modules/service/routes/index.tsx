import { Navigate, PartialRouteObject } from 'react-router-dom';

import Services from './Services';

export const ServicesRoutes: PartialRouteObject[] = [
  { path: '', element: <Navigate to="/services/list" /> },
  { path: 'list', element: <Services /> },
  { path: 'create', element: <Services /> },
  { path: 'update/:id', element: <Services /> },
];
