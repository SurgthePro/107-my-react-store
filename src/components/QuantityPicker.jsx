//Line 29: onClick is an event listener & handleDecrease is an event handler--it is disabled when the quantity is equal to 1. Also, className is used for React (we only use "class" for html and JS, but for React, "Class" is a different keyword). We don't want to use the set of parenthesis bc we want to wait until something happens for the function to execute--not the moment the page loads. Finally, we use curly braces instead of a set of parentheses (as those used with JQuery) when we want to include logic inside of html elements so that React recognizes that code in between the curly braces as logic.
//Line 27: A return statement is mandatory for React outer functions--they must return something to the front-end client.      
//Line 30: This label applies to both buttons.  But how does the system know that?        
import"./QuantityPicker.css"; //You always import its pair.
import { useState } from "react"; //Here, we need to indicate to this component that we want to use a state-variable.
//Logic:

// Line 12: useState and const are the only keywords used here (also "set" in "setQuantity" is also a keyword). Here, we are creating a state-variable. "quantity" is the name of the variable; Then we are setting that variable to be a state-variable, and then we are setting its initial state-value. "setQuantity" is the functionName used to change the value of the variable.  "useState" specfies that we are using the state-variable.

function QuantityPicker() //This is the outer function of this component. It contains two nested functions--nested at the same level. This handles the increase & decrease elements for the quantity state-variable.  In React,  outer functions are considered components, so their names begin with an Uppercase letter.
{
    const [quantity, setQuantity] = useState(1) 
    // const quantity = 1: // setQuantity has only one part that is a keyword: "set." useState() is a React method. 
    function handleDecrease() //This function is used so that when the user depresses the quantity decrease button, it will work.  Here, we are developing a state-variable.
    {
        console.log("Decrease BTN");
        let nextVal = quantity - 1;
        if(nextVal > 0)
        {
            setQuantity(nextVal); //Here, we are using the function to change/modify the value of the state-variable (quantity).
        }
            //quantity = quantity + 1; does not work with React--it only works in JS with regular variables.
    }

    function handleIncrease() 
    {
        console.log("Increase BTN")
        let nextVal = quantity + 1;
        setQuantity(nextVal);
    }

    return( 
        <div className = "quantity-picker">
            <button className = "btn-minus" onClick={handleDecrease} disabled={quantity===1}>-</button> {/* We can disable the decrease button when the value is equal to 1. Note: "disabled" is a function. */}
            <label>{quantity}</label>   {/* Here, we use curly braces because we are inserting a variable--logic.*/}
            <button className="btn-plus" onClick={handleIncrease}>+</button>  
        </div>
    )
}
export default QuantityPicker; //This component is exported to the Product.jsx file--its direct parent.  The semicolon is used here when there is nothing else to be executed or exported. 
//Note: If we create a props here, we can have access to only the data of the Product component.  But if we also want to access the Catalog component, we need to create a state-variable to catch the Catalog's data.  Why?  Because there is only direct communication between child & parent--not grandchild & grandparent.