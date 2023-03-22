import Home from './Pages/Home';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Component/Header';
import Details from './Pages/Details';
import React from 'react';
// import Display from './Pages /Display';

function App() {
  return (
    <RouterProvider router={route} /> //prop= router, value= route
  );
}

const YtsLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
const route = createBrowserRouter([
  {
    path: '/',
    element: <YtsLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'details/:id',
        element: <Details />
      }
      // ,
      // {
      //   path: 'display/:title',
      //   element: <Display />
      // }
    ]
  }
])

export default App;
