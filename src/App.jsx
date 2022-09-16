import './index.css'
import { Navbar } from './Nav';
import {Home} from './Home';

function App() {

  // const title = "Welcome to my Blogs"

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
