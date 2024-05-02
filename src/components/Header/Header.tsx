import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import { IoCloudDownloadOutline } from "react-icons/io5";
import "./Header.scss";

function Header(): JSX.Element {
  return (
    <header className='header w-full flex items-center justify-between bg-white dark:bg-slate-800 text-white py-[1%] px-7 flex-col md:flex-row'>
      <Link className='font-vives text-3xl my-4 md:my-0' to='/'>
        JE
      </Link>
      <div className='my-4 md:my-0'>
        <Navigation />
      </div>
      <div className='hover:scale-110 duration-300 cursor-pointer my-4 md:my-0'>
        <a
          href='./files/resume.pdf'
          download='eduardo-juarez-full-developer-resume'
          className='flex items-center font-sora font-[500] text-emerald-400'>
          <IoCloudDownloadOutline className='text-2xl mr-1' />
          Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
