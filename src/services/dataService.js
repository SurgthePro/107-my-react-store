//Note: This js file is not a jsx file because it won't need React since it will not include any html elements--it only needs logic code.  Nevertheless, it is still a component.
//Products in the Catalog  Note:The following object is in JSON format.  Note: We don't need to import anything here bc nothing is needed, for now. Later, yes.  
const catalog = [
    {
        "title": "Orange", 
        "category": "fruit",
        "price": 15.99,
        "image": "orange.png", //Note: You can use a temporary "placeholder" when you don't yet have an image source.  
        "_id": "1" //Must be a unique value.  This is essentially the most important object attribute.  We will actually be getting a real/authentic id from the server later on.
    },
    {
        "title": "Apple", 
        "category": "fruit",
        "price": 20.99,
        "image": "apple.png",
        "_id": "2" //Must be a unique value.
    },
    {
        "title": "Strawberries", 
        "category": "berry",
        "price": 15.99,
        "image": "strawberry.png",
        "_id": "3" //Must be a unique value.
    }
];
//Note: The code above is an array of object literals. This array (for now) acts as a simple database for us since we don't currently have a DB. This array is already in JSON format.
//Note: A class is a constructor (it's an object creator).  So the following is a constructor.  A class name begins with an UpperCase.  
class DataService {
    getProducts() //Here, we are creating a method of our object--the method performs something on its object.  Here, it returns the contents of the catalog (the product/catalog array).  This code is requesting a catalog from the data service. Is getProducts() an actual method? Yes, but it's created (and named) by the
    {
        return catalog;// Here, we are requesting the contents of the catalogue array on this page.
    }
}
export default DataService; //Here, we are sharing this component as a child so it can be used by whoever receives it (the Catalog component). 