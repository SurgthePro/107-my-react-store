import Product from "../components/Product"; //We also want props from the Product component ???
import "./Catalog.css";
import DataService from "../services/dataService"; //We use two periods because they are both in different folders--they are not siblings. Note: The dataService component is a JS file--it has no React in it.
import { useEffect, useState } from "react"; //This is needed for the establishment/creation of the state-variable.

function Catalog() //Note: This is the component function--the overall function that returns something (data) and that contains all the other functions in this file.
{
    //Here, we want to create secure variables.  Therefore, we need several state-variable (these are the global state-values in this component function)::
    const [products, setProducts] = useState ([]); //Here, we are bringing the products (this is our variable), then we are making it a state-variable and setting it's initial value to [] because we want not just one value, but several. Note: setProducts is a function (named by the dev) that passes values to the state-variable--it's the only tool that can modify the state-variable.
    const [categories, setCategories] = useState ([]); // To get the categories data from the dataService component.
    const [productsToDisplay, setProductsToDisplay] = useState ([]); //To hold the products selected according to their category.  
    
    function loadCatalog() // Note: This function is called in the useEffect (section loading) function.
    {
        let service = new DataService(); //This is a constructor function creating a new object assigned to a variable.
        let data = service.getProducts();//Here, we are assigning the catalog contents to the data variable.
        setProductsToDisplay(data); //Initially display all products.
        let cats = ["fruit", "berry"] //Create a temporary placeholder for the categories that currently exist.
        setCategories(cats); //Here, all categories that exist are set to State variables.
    }

    function filter(category) // The catalog key values are passed to this function.  This function is called when a category button is pressed.
    {
        let list = []; // Here, this list is initially an empty array.
        //We need to find the products that match the selected category.
        for(let i= 0; i < products.length; i++) // Note: i stands for the index of the items of an array.
        {
            let prod = products[i];  //Note: Prod is a temperary variable (0 to 2).
            if(prod.category === category) //Note: If the catalog array has a key named "category"
            {
                list.push(prod); //Add the product to the list array.
            }
        }
        setProductsToDisplay(list); //This displays the list array.
    }
    //Line 40: Here, we are loading the  data:
    //const products = [];
    useEffect(()=> //Note: The useEffect hook method only uses arrow function syntax.  The purpose of the useEffect hook method is to only make what's inside of it refresh--not the whole page.
    {
        
        let service = new DataService(); //Here, we are creating an instance of the class DataService. We are essentially creating a memory space for the new data and giving it a label. Note: Since this method has parentheses, it is being executed without having to wait for any event to occur.
        let data = service.getProducts(); //Here, we are getting the product data from the new class instance and assigning it to the variable: data.  Also, we are using the class method.
        setProducts(data); //Here, we are converting that variable to a state-variable. And we are passing it the data.  We essentially are passing all the product data in the array to the state-variable: "products"
        loadCatalog();
    }, []
    ); //The empty array  [] means this effect runs only ONCE--when the Catalog is loaded.  Here, we are defining how many times this function (useEffect) is executed--only once. 

    function displayProducts() // Note: This function is called when the "Products" button is depressed.
    {
        let service = new DataService(); //Here, we are creating an instance of the class DataService. We are essentially creating a memory space for the new data and giving it a label. Note: Since this method has parentheses, it is being executed without having to wait for any event to occur.
        let data = service.getProducts(); //Here, we are getting the product data from the new class instance and assigning it to the variable: data.  Also, we are using the class method.
        setProductsToDisplay(data); //Here, we are converting that variable to a state-variable. And we are passing it the data.  We essentially are passing all the product data in the array to the state-variable: "products"
    }
    //Every component only has one return statement.    
    return(

        <div className="catalog">
            <h1>Check our amazing products!</h1>
            {categories.map(category => <button key={category} onClick = {()=> filter(category)}>{category}</button>)} {/* Note: This code displays the two product category buttons.*/}
            <br/>
            {productsToDisplay.map(prod => <Product key={ prod._id} data={prod}/>)}   {/*Note: This code replaced the "placeholder:" "<Product/>"  This code displays the data. It is in curly braces bc it is logic code. The map method is a for each loop--it transforms each element in the array somehow (into something different). We want to create a product component. What is "prod"? It is a temporal variable.  The _id gives the name of each element. So, for each prod/element, we use/pass the _id to name it. "data" is the name of the prop we are using to communicate from child to parent. Is this entire code what is referred to as 'props'? */}
        
        <button className= "product-btn" onClick = {()=>displayProducts()}>Products</button> {/*Note: This code displays a button labelled "Products," which will display all of the catalog products. */}
        </div>
            )
}

export default Catalog; //This component is exported to the App/parent component.