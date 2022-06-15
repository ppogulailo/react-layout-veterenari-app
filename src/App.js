import logo from './logo.svg';
import './App.css';
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import {Route, Routes} from "react-router-dom";
import Navigation from "./component/Navigation/Navigation";
function App() {
  return (
      <div className='page'>
              <header>
                  <Header/>
              </header>
              <nav>
                  <Navigation/>
              </nav>

              <main>
                  <Routes>
                      <Route path='/' element={<Main/>} />
                  </Routes>

              </main>
      </div>


  );
}

export default App;
