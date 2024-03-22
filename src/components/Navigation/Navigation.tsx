import { Link } from "react-router-dom";

function Navigation(): JSX.Element { 
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about-us'>About</Link>
        </li>
        <li>
          <Link to='/contact-us'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;