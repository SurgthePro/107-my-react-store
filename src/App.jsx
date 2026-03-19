// App.jsx is the parent container of all components: it displays everything on the webpage in the order found in its returned div container (that's its sole purpose).
// Line 13:  //This displays the contents of the Navbar component. Also, we are displaying the children (three altogether--two from other components) of this file.  
// Line 16: The QuantityPicker can be "copied" multiple times to but each one is independent of the others (each one has its own value--depending on what the user does) and each one has its own identifier--however, the user only sees one of them.  Here's where we are creating s state-variable.
import './App.css';
import Navbar from "./components/Navbar";  //Here, we are importing the jsx file to its parent file. 
import Footer from "./components/Footer";  //Here, we are importing the jsx file to its parent file.  
//import QuantityPicker from './components/QuantityPicker'; Note: We need to remove this import since we are removing it from the return statement of the logic on this file.
import Catalog from './pages/Catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/js/bootstrap.min.css.js';
function App() 
{
 
  return (
    
      <div>
        <Navbar /> 
        <h1>Hello from React</h1>
        {/*<QuantityPicker/> Note:We need to remove this QuantityPicker component from here bc we don't want it related to App.jsx--we only want it related to its parent, which is the Product component.  */}
        
        <Catalog/> {/* Catalog is now a child of App.jsx*/}
        <Footer/>  
      </div>
  )
}

export default App  //Do not put a semicolon here because this is the parent.  If we do nothing else can be added to this parent at all (nothing else can be executed).  It works similar to a return statement of a function.
