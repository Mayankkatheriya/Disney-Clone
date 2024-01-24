import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';

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
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
