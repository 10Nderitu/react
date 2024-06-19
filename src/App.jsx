import Org from './Components/pages/org';
import SignIn from './Components/pages/signin';

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
