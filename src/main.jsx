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
import CreateProductPage from './pages/create/CreateProductPage';
import CreateCategoryPage from './pages/create/CreateCategoryPage';
import CreateUserPage from './pages/create/CreateUserPage';
import CreateOrderPage from './pages/create/CreateOrderPage';

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
  {
    path: "/products/create",
    element: <CreateProductPage />,
  },
  {
    path: "/categories/create",
    element: <CreateCategoryPage />,
  },
  {
    path: "/users/create",
    element: <CreateUserPage />,
  },
  {
    path: "/orders/create",
    element: <CreateOrderPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
