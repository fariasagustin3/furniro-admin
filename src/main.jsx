import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import CategoriesPage from './pages/CategoriesPage';
import UsersPage from './pages/UsersPage';
import OrdersPage from './pages/OrdersPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/orders",
    element: <OrdersPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
