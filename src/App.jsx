import Org from './Components/pages/org';
import SignIn from './Components/pages/signin';
import "./index.css";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router} />
)

function App() {
  return (
    <div className='flex h-screen'>
      <div className='w-1/2 flex items-center justify-center bg-white'>
        <SignIn />
      </div>
      
      <div className='w-1/2 flex items-center justify-center bg-white'>
        <Org />
      </div>
    </div>
  );
}

export default App;