import Navigation from "../Navigation";
import { IoCloudDownloadOutline } from "react-icons/io5";

function Header(): JSX.Element {
  return (
    <header className='w-full flex items-center justify-between bg-white dark:bg-slate-800 text-white flex-col md:flex-row p-[1%]'>
      <div className='font-vives text-3xl'>JE</div>
      <div>
        <Navigation />
      </div>
      <div className='hover:scale-110 duration-300 cursor-pointer'>
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
