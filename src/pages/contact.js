import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="h-screen flex justify-center items-center text-center bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <Link to="/">
        <button className="py-6 px-10 bg-green-500 rounded-full text-3xl hover:bg-green-400 transition duration-300 ease-in-out flex items-center animate-bounce" to="/">
          Whatsapp
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
          </svg>
        </button>
      </Link>
      {/* <div class="flex flex-col-reverse ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div> */}
    </div>
  );
};

export default Contact;
