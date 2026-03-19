import "./Product.css";
import QuantityPicker from "./QuantityPicker"; //Note: We are importing it bc we want it to be a child of this component.  In addition, we are getting props from the Catalog component (in the Product function below).

function Product(props) // Note: Here, we have added a parameter to the function/component. It refers to the prop in the Catalog (parent) component. This function allows data to be shared from parent to child.  So, we need access to the Catalog/parent component--this is why we pass the argument "props."
{
    return(
        <div className="product">
            <img src={"/images/" +props.data.image} alt= "product"></img> {/*Here, we have replaced: "https://picsum.photos/200/180", whcih was a way of getting random placeholder images. Props is logic, so it needs curly braces.  We don't need to specify where the image folder comes from bc it's under the public folder.  In props we have data and from there we have the image attribute.  */}
            <h5>{ props.data.title}</h5> {/*Note: This code replaced the placeholder: Product's Title goes here. But now we use curly braces. This comes from the Catalog component. */}
            <div className= "prices">
                <label>{ props.data.price.toFixed(2)}</label> {/*Note: This code replaced the placeholder: Price   We now include curly braces also. The toFixed method is used for decimal quantities to set the number of decimals to the right of the decimal point. */}
                <label>Total</label>
            </div>
            <QuantityPicker/> {/*This becomes the child of the Product component. */}
        </div>
        
        
    )
}
export default Product; //This component is being exported to its direct parent (Catalog), but the communication only goes one way--not both.  Why can't you import the Catalog component?