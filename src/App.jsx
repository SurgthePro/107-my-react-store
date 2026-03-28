// App.jsx is the parent container of all components: it displays everything on the webpage in the order found in its returned div container (that's its sole purpose).
// Line 13:  //This displays the contents of the Navbar component. Also, we are displaying the children (three altogether--two from other components) of this file.  
// Line 16: The QuantityPicker can be "copied" multiple times to but each one is independent of the others (each one has its own value--depending on what the user does) and each one has its own identifier--however, the user only sees one of them.  Here's where we are creating s state-variable.

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Admin from './pages/Admin'
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import Footer from "./components/Footer";  //Here, we are importing the jsx file to its parent file.
import Navbar from "./components/Navbar";  //Here, we are importing the jsx file to its parent file. 
  

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import QuantityPicker from './components/QuantityPicker'; Note: We need to remove this import since we are removing it from the return statement of the logic on this file.


//import 'bootstrap/dist/css/js/bootstrap.min.css.js';
function App() 
{
 
  return (
    <BrowserRouter> {/*Note: This replaced the <div>html elememt</div> */}
      <div className= 'd-flex flex-column min-vh-100'>
      <Navbar /> {/* Note: Navbar is displayed on all UI pages (and so is the footer).  */}
      <main className= "flex-grow-1">
      <Routes> {/* Note: All the three routes in between are the dynamic pages--all that is needed is that you type the paths at the end of the URL on the URL window at the top of the browser.  This way is more efficient--don't want full-page rendering/reloading:*/}
        <Route path='/about' element={<About/>} /> {/* Note: path is a parameter. The element specified is what will be rendered.*/}
        <Route path='/catalog' element={<Catalog/>} />{/* Note: This replaced the regular placeholder: <Catalog/> */}
        <Route path='/' element={<Home/>} />      
        <Route path='/contact' element={<Contact/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='*' element={<NotFound/>} />

      </Routes>
      </main>
        {/*<QuantityPicker/> Note:We need to remove this QuantityPicker component from here bc we don't want it related to App.jsx--we only want it related to its parent, which is the Product component.  */}
        
        {/* <Catalog/> Catalog is now a child of App.jsx */}
      <Footer/>  {/* Note: Since this footer is not in between "Routes," it will display on every page, and so will the navbar.*/}
      </div>
    </BrowserRouter>  
  )
}

export default App  //Do not put a semicolon here because this is the parent.  If we do nothing else can be added to this parent at all (nothing else can be executed).  It works similar to a return statement of a function.
