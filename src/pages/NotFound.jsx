import {Link } from 'react-router-dom';
function NotFound()
{
    return(
        <div> {/* There always needs to be one parent element with everything alse as children.*/}
            <h1>404 - Not Found</h1>
            <p>Ooops! The page you're looking for doesn't exist.</p>

            <Link to={"/"} className='btn btn-dark'>Go Home</Link> {/* Note: Anchor tags are used for external pages.*/}
        </div>
    )
}
export default NotFound;