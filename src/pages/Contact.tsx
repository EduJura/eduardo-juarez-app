import React, { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
  const feedbackMessages = {
    success: "Thank you for reaching out!",
    error: "All fields are required.",
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
    console.log(
      `subject=Message from ${emailDetails.firstName}-${emailDetails.lastName} | ${emailDetails.email} &message=${emailDetails?.message}`
    );
    handleSuccess(feedbackMessages.success);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setEmailDetails((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleError(message: string) {
    console.log(message);
    toast.error(message);
  }

  function handleSuccess(message: string) {
    toast.success(message);
  }

  return (
    <>
      <h1 className='text-2xl text-gray-900 font-[500] sm:text-6xl'>
        Contact me!
      </h1>
      <p className='text-lg text-gray-600 mt-8'>
        Submit the form below to get touch in with me.
      </p>
      <div
        className='dark:bg-slate-600 rounded-lg shadow-md
            shadow-emerald-400 md:w-[50%] my-8 m-auto p-8'>
        <form action='#' method='POST'>
          <div className='flex flex-col gap-2 mt-8'>
            <label htmlFor='firstName' className='text-white font-[500]'>
              Name
            </label>
            <input
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
            className='bg-emerald-500 text-white p-2 rounded-md mt-6'
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
