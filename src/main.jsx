import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import ContactResponses from './ContactResponses.jsx';
import { Developer } from './Developer.jsx';
import { Activist } from './Activist.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact-responses",
    element: <ContactResponses />,
  },
  {
    path: "/developer",
    element: <Developer />,
  },
  {
    path: "/activist",
    element: <Activist />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);