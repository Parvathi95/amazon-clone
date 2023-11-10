import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Components/Home/Home';
import Footer from './Footer/Footer';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import ListProducts from './Components/ListProducts/ListProducts';
import Profile from './Components/Profile/Profile';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div>
      <Router>
       <div className="App">
        <Routes>
          <Route path='/' element={[<Header/>,<Home/>,<Footer/>]}></Route>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Orders' element={[<Header/>,<Orders/>,<Footer/>]}></Route>
          <Route path='/ListProducts' element={[<Header/>,<ListProducts/>,<Footer/>]}></Route>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Cart' element={[<Header/>,<Cart/>,<Footer/>]}/>
        </Routes>
       </div>
      </Router>
    </div>
  );
}

export default App;
