import { SplashScreen } from './components/SplashScreen';
import { Home } from './components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Inbox } from './components/Inbox';
import { Profile } from './components/Profile';
import './App.css';
import 'normalize.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/inbox',
        element: <Inbox />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  }
])

const App = () => {
  return (
    <>
      <SplashScreen />
      <RouterProvider router={router} />
    </>
  )
}

export default App;
