// import logo from './logo.svg'
import Home from './components/home';
import AddProduct from './components/Addproducts';
import BidProduct from './components/Bidproducts';
import Products from './components/Products';
import Nav from './components/Nav';
import socketIO from 'socket.io-client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const socket = socketIO.connect('http://localhost:4000');

function App() {
  
  return (
    <BrowserRouter>
      <div>
        {/* Nav is available at the top of all the pages as a navigation bar */}
        <Nav socket={socket} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/add"
            element={<AddProduct socket={socket} />}
          />
          {/* Uses dynamic routing */}
          <Route
            path="/products/bid/:name/:price"
            element={<BidProduct socket={socket} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
