import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import {
  BrowserRouter,
  Link
} from "react-router-dom";
import Data from './Context/Data';

function App() {
  return (
    <div className="max-h-[100vh] max-w-[100vw] ">
      <BrowserRouter>
        <Data>

            <Layout/>

        </Data>
     </BrowserRouter>
    </div>
  );
}

export default App;
