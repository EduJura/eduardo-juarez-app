import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navigation.scss";

function Navigation(): JSX.Element { 
  return (
    <nav>
      <ul>
        <CustomLink url='/'>Home</CustomLink>
        <CustomLink url='/about-us'>About Us</CustomLink>
        <CustomLink url='/contact-us'>Contact Us</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({children, ...props }): JSX.Element {
  const resolvedPath = useResolvedPath(props.url);  
  const isActive = useMatch({path: resolvedPath.pathname, end: true});
  return (
    <li className={isActive ? "navigation--active" : ""}>
      <Link to={props.url}>{children}</Link>
    </li>
  );
};

export default Navigation;