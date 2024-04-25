import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navigation.scss";

function Navigation(): JSX.Element { 
  return (
    <nav>
      <ul className="flex">
        <CustomLink url='/'>Home</CustomLink>
        <CustomLink url='/skills'>Skills</CustomLink>
        <CustomLink url='/projects'>Projects</CustomLink>
        <CustomLink url='/contact'>Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({children, ...props }): JSX.Element {  
  const resolvedPath = useResolvedPath(props.url);  
  const isActive = useMatch({path: resolvedPath.pathname, end: true});
  const url = props.url; 
  return (
    <li
      className="font-sora font-[700] cursor-pointer hover:scale-110 duration-300 mx-2">
      <Link className={`${isActive ? "text-emerald-400" : ""}`} to={url}>
        {children}
      </Link>
    </li>
  );
};

export default Navigation;