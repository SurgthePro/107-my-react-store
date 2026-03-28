// Imports:
import { Link} from 'react-router-dom' /*We added this to the file. */
import "./Navbar.css";

// Logic:
function Navbar()
{
    return(  //Here, we are returning the contents of a Navbar component.  Return statements are mandatory in React compoenents.
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Online-Store {/* This replaced the word: Navbar*/}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {/* Note: Here, we removed this: <a className=nav-link active" aria-current="page" href= "#"> */}
          <Link className="nav-link active" to={"/"}>  {/* Here, we added this entire line of code.*/}
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/about"}> {/* Here, we only added: to="/about"> */}
          {/* Note: Here, we removed this: <a className=nav-link active" aria-current="page" href= "#"> Note: We would be able to replace # with about, but eventhough it works, it would not be an efficient rendering.*/}
            About {/* Here, we replaced this word and removed "Link" */}
          {/* Here, we removed: </a>*/}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/catalog"}> {/* Here we made some changes also from the original cost previously there.*/}
            Catalog
          </Link> {/* This replaced the closing anchor tag.*/}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/contact"}> {/* Here we made some changes also from the original cost previously there.*/}
            Contact
          </Link> {/* This replaced the closing anchor tag.*/}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/admin"}> {/* Here we made some changes also from the original cost previously there.*/}
            Admin
          </Link> {/* This replaced the closing anchor tag.*/}
        </li>
        <li className="nav-item dropdown">
          
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          </a>
        </li>
      </ul>
                 {/*Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#"> 
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}

    </div>
  </div>
</nav>

    )
}
//Export:
export default Navbar; //Default means we are sending everything inside of the Navbar component. We have no special configuration.  