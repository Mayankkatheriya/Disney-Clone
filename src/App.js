import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      exact: true,
      element: <Login />
    }
  ])

  return (
    <div className="App">
      <Header />
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
