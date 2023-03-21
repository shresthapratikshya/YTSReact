// import logo from './logo.svg';
import './YTSfolder/style.css';
import Home from './YTSfolder/Home';
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider, Route, Switch, Routes } from 'react-router-dom';
import Header from './YTSfolder/Header';
import Details from './YTSfolder/Details';
import React from 'react';

function App() {
  return (
    <RouterProvider router={route} />
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
        path: 'details',
        element: <Details />
      }
    ]
  }
])

export default App;
