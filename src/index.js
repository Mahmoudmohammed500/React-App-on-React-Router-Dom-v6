/*
    App8 >> 
            * Aplication on React Router Dom V6+
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Components/Root';
import Index from './Pages/Index';
import Faq from './Pages/Faq';
import Contact from './Pages/Contact';
import Errorpage from './Pages/Errorpage';
import UserRoot from './Components/UserRoot';
import UserInfo from './Pages/UserInfo';
import UserEdit from './Pages/UserEdit';
import UserIndex from './Pages/UserIndex';

const routes = createBrowserRouter([
  {
    path: "/", element: <Root />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <Index /> },
      { path: "faq", element: <Faq /> },
      { path: "contact", element: <Contact /> }
    ]
  },
  {
    path: "/user", element: <UserRoot />,
    children: [
      { index: true, element: <UserIndex /> },
      { path: "info", element: <UserInfo /> },
      { path: "edit", element: <UserEdit /> }
    ]
  }
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
