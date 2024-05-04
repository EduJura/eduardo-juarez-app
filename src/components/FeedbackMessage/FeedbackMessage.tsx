function FeedbackMessage({ ...props }): JSX.Element {
  return (
    <div className='text-center text-4xl italic text-slate-600 mt-8'>
      {props.message}
    </div>
  );
}

export default FeedbackMessage;
