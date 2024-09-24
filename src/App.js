import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js'
import Home from './Pages/Home.js'
import Shop from './Pages/Shop.js';
import About from './Pages/About.js'
import Contact from './Pages/Contact.js'
import Product from './Pages/Product.js'
import Error from './Pages/Error.js'
import SearchBar from './components/SearchBar.js';
import Cart from './Pages/Cart.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login.js';
import ScrollToTopButton from './components/ScrollToTop.js';
import AutoScroll from './components/AutoScroll.js';


function App() {
  return (
    <div className='2xl:container mx-auto'>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
      <AutoScroll />
      <ScrollToTopButton />
        <Header />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
