import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import Root from './routes/Root.tsx'
import Profile from './routes/profilePage.tsx'
import NotFound from './routes/notFound.tsx'
import Profiles from './routes/profiles.tsx'


const router = createBrowserRouter([
	{
		path: '/',
		element: <Root/>,
		errorElement: <NotFound/>
	},
	{
		path: '/profiles',
		element: <Profiles/>,
		children: [
			{
				path: '/profiles/:profileId',
				element: <Profile/>
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
