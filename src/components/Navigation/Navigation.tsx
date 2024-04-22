import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navigation.scss";
//import { getBaseURL } from "../../utils";

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
  //const baseURL = getBaseURL();
  const resolvedPath = useResolvedPath(props.url);  
  const isActive = useMatch({path: resolvedPath.pathname, end: true});
  const url = props.url; //baseURL === "/" ? props.url : baseURL + props.url;
  return (
    <li className={isActive ? "navigation--active" : ""}>
      <Link to={url}>{children}</Link>
    </li>
  );
};

export default Navigation;