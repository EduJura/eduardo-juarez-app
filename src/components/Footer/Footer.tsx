import { FaLinkedin } from "react-icons/fa";

function Footer(): JSX.Element {
  return (
    <footer className='w-full h-24 flex items-center justify-between bg-white dark:bg-slate-800 text-white px-7 py-[1%] md:flex-row'>
      <div className='flex flex-row items-center md:ml-4'>
        <a
          href='https://www.linkedin.com/in/jorge-eduardo-ju%C3%A1rez-herrera-1769b7a4/'
          target='_blank'
          rel='noreferrer'>
          <FaLinkedin className='text-3xl text-emerald-400 cursor-pointer hover:scale-110 duration-300' />
        </a>
      </div>
      <div className='md:mr-4'>Made with ❤️</div>
    </footer>
  );
}

export default Footer;
