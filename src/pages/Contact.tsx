import React, { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
  const feedbackMessages = {
    success: "Thank you for reaching out!",
    error: "All fields are required.",
    serviceUnavaiable: () => (
      <>
        <p>
          <b>Service Unavailable:</b>
          <br />
          Please try it latter or send me a direct message via{" "}
          <a
            className='font-[600] underline underline-offset-2'
            href='https://www.linkedin.com/in/jorge-eduardo-ju%C3%A1rez-herrera-1769b7a4/'
            target='_blank'
            rel='noreferrer'>
            LinkedIn
          </a>
        </p>
      </>
    ),
  };
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [emailDetails, setEmailDetails] = useState(initialState);

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (
      !emailDetails?.firstName ||
      !emailDetails?.lastName ||
      !emailDetails?.email ||
      !emailDetails?.message
    ) {
      handleError(feedbackMessages.error);
      return;
    }

    // TODO: Connect to third party Form API or create a custom service to handle contact me functionality
    handleSuccess(feedbackMessages.success);
    // FIXME: Temporal Service Unavailable message, replace with handleSuccess above.
    handleError(feedbackMessages.serviceUnavaiable());
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setEmailDetails((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleError(message: string | JSX.Element) {
    console.log(message);
    toast.error(message);
  }

  function handleSuccess(message: string) {
    console.log(message);
    //toast.success(message);
  }

  return (
    <>
      <h1 className='text-3xl text-gray-900 font-[500] sm:text-6xl'>
        Contact me!
      </h1>
      <p className='text-xl text-gray-600 mt-8 md:text-lg'>
        Submit the form below to get touch in with me.
      </p>
      <div
        className='dark:bg-slate-600 rounded-lg shadow-md
            shadow-emerald-400 md:w-[50%] mt-8 m-auto p-8'>
        <form action='#' method='POST'>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor='firstName' className='text-white font-[500]'>
              First Name
            </label>
            <input
              id='firstName'
              className='rounded h-12 p-2'
              name='firstName'
              placeholder='Type your name'
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor='lastName' className='text-white font-[500]'>
              Last Name
            </label>
            <input
              id='lastName'
              className='rounded h-12 p-2'
              name='lastName'
              placeholder='Type your last name'
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor='email' className='text-white font-[500]'>
              Email
            </label>
            <input
              id='email'
              className='rounded h-12 p-2'
              name='email'
              type='email'
              placeholder='Type your email'
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor='message' className='text-white font-[500]'>
              Message
            </label>
            <textarea
              id='message'
              className='rounded h-24 p-2'
              name='message'
              placeholder='Type your message'
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <button
            className='bg-emerald-500 text-white p-2 rounded-md mt-6 cursor-pointer hover:scale-110 duration-300'
            onClick={(e) => {
              handleSubmit(e);
            }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
