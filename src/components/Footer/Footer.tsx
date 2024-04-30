function Footer(): JSX.Element {
  return (
    <footer className='w-full h-24 flex items-center justify-between bg-white dark:bg-slate-800 text-white px-7 py-[1%] flex-col md:flex-row'>
      <div>
        <h1 className='font-sora font-[700] cursor-pointer hover:scale-110 duration-300 md:ml-4'>
          Eduardo Juárez
        </h1>
      </div>
      <div className='md:mr-4 '>Made with ❤️</div>
    </footer>
  );
}

export default Footer;
