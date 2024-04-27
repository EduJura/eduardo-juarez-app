function Contact() {
  return (
    <>
      <h1 className='text-2xl text-gray-900 font-[500] sm:text-6xl'>
        Contact me!
      </h1>
      <p className='text-lg text-gray-600 mt-8'>
        Submit the form below to get touch in with me.
      </p>
      <div className='rounded dark:bg-slate-600 md:w-[50%] my-8 m-auto p-8'>
        <form action='#' method='POST'>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor='name' className='text-white font-[500]'>
              Name
            </label>
            <input className="rounded h-12" name='firstName' />
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor='lastName' className='text-white font-[500]'>
              Last Name
            </label>
            <input className="rounded h-12" name='lastName' />
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor='email' className='text-white font-[500]'>
              Email
            </label>
            <input className="rounded h-12" name='email' />
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor='message' className='text-white font-[500]'>
              Message
            </label>
            <textarea className="rounded h-24" name='message' />
          </div>
          <button className='bg-emerald-500 text-white p-2 rounded-md mt-6'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
