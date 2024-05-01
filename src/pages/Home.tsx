import { useEffect, useRef } from "react";
import Typed from "typed.js";
import photoURL from "../assets/img/profile-image.jpg";

function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Technical Lead", "Web Developer", "Full Stack Developer"],
      typeSpeed: 80,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className='flex flex-col-reverse items-center justify-center md:flex-row'>
        <div className='basis-3/5 justify-center px-2 md:pr-7'>
          <h1 className='text-3xl text-gray-900 font-[500] sm:text-6xl'>
            Hello I'm{" "}
            <span className='font-sora font-[600]'>Eduardo Juárez</span>{" "}
            <br></br>
            <span ref={el} />
          </h1>
          <p className='text-xl text-gray-600 text-justify mt-5 md:text-2xl md:text-left'>
            I'm a Experienced <em>Enterprise Web Developer</em> with a strong
            background in web application development and a proven track record
            of integrating applications with Restful APIs.
            <br />
            Skilled in a wide range of technologies including JavaScript,
            TypeScript, React, Vue, jQuery, Node.js, Stenciljs, Lit, HTML, CSS,
            and more. Adept at providing IT consulting services, development,
            leading teams, and delivering UX/UI solutions. Proactive, positive,
            and eager to learn new technologies.
          </p>
        </div>
        <div className='basis-2/5'>
          <img
            className='rounded-3xl mx-auto w-2/3 md:w-full mb-10 md:mb-0'
            src={photoURL}
            alt='eduardo-profile-img'
          />
        </div>
      </div>
    </>
  );
}

export default Home;
