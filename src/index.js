import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Login from './Page/Login';
import AddTours from './Page/AddTours';
import Signup from './Page/Signup';
import { store } from './redux/index';
import { Provider } from 'react-redux'  ;
import Booking from './Page/Cart';
import Tours from './Page/Tours';
import Menu from './Page/Menu';
import ImageGallery from './components/ImageGallery';
// import './bootstrap.min.css'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path="menu/:filterby" element={<Menu />} />
      <Route path="tours" element={<Tours />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="addtours" element={<AddTours/>} />
      <Route path="signup" element={<Signup/>} />
       <Route path="trip" element={<Booking/>} />
       <Route path="gallery" element={<ImageGallery/>} />   

      
      
      
      </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <RouterProvider router ={router}/>
 </Provider>
);


