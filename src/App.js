import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import Browse from './components/Browse';

function App() {
  const router = createBrowserRouter([
    { path:"/",
      element: <Body />,
      errorElement: <PageNotFound />,
      children:[
        { path:"",
          element:<Login /> 
        },
        {path:"browse",
          element: <Browse />
        }
      ]
    }
  ]);

  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
