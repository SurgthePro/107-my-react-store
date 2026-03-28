import "./Contact.css";
import {useState} from 'react';

function Contact()
{
    const [isEmailVisible, setIsEmailVisible] = useState(false)

    function showEmail()
    {
        setIsEmailVisible(true)
    }
    function hideEmail()
    {
        setIsEmailVisible(false)
    }

    return(
            <div className= "bg-secondary text-white fs-4">
                <h1>This is the Contact Page:</h1>
                <h3>Email: gourmetproduce@gmail.com</h3>
                <h3>Phone Number: (333) 444-5555</h3>
                <h3>Hours of Operation:</h3>
                {
                    isEmailVisible == true
                    ?<p>sgonzalez@sdgku.edu</p>
                    : <p>Click the button below to see my email.</p>
                }
                <button className='btn btn-dark' onClick={showEmail}>Show my email</button>
                <button className="btn btn-dark" onClick={hideEmail}>Hide my email</button>
                <p>Monday thru Saturday; 9am to 6pm</p>
                <h2>Address:</h2>
                <p> 6666 North Produce Avenue</p>
                <p> Farmersville, CA 93539</p>
            </div>
    )
}
export default Contact;