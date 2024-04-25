import Navigation from "../Navigation";

function Header(): JSX.Element { 
    return (
      <header className='w-full flex items-center justify-between bg-white dark:bg-slate-800 text-white flex-col md:flex-row p-[1%]'>
        <div className='font-lobster text-5xl'>EJ</div>
        <div>
          <Navigation />
        </div>
        <div>
          <button className='bg-purple'>Resume</button>
        </div>
      </header>
    );
}

export default Header;