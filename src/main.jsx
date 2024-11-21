import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './assets/components/Home.jsx';
import Layout from './layout.jsx';
import About from './assets/components/About.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Contact from './assets/components/Contact.jsx';
import User from './assets/components/User.jsx';
import Github from './assets/components/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element: <Home />  
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contactUs",
//         element:<Contact/>
//       },
//       {
//         path:"user/:userid",
//         element:<User/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
