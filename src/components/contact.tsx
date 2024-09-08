import { useState } from "react";
import TextBox from "./text-box";
import toast from "react-hot-toast";

const Contact = () => {

  const [user, setUser] = useState({
    Name: "",
    Number: "",
    Message: "",
  });

  const handleInput = (e: any) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(user);
    
  };

  const submit = () => {
    if(!user.Name || !user.Message || !user.Number){
        toast.error('Please enter all fields.');
        return;
    }

    window.location.href = `https://api.whatsapp.com/send?phone=+919074876596&text=Name:${user.Name}%20%0APhone:${user.Number}%20%0AMessage:${user.Message}`

  }

  return (
    <div id="contact" className="w-full h-[400px] bg-gray-900 flex justify-between items-center p-6 overflow-hidden">

      <div className="flex flex-col space-y-6">
        <h1 className="font-extrabold text-3xl sm:text-4xl text-white">
          Feel free to ask anything<span className="text-blue-400">.</span>
        </h1>
        <TextBox value="Name" onChange={handleInput} />
        <TextBox value="Number" onChange={handleInput} />
        <textarea
          name="Message"
          onChange={(e)=>handleInput(e)}
          placeholder="Message"
          className="max-h-32 outline-none p-2 bg-transparent placeholder:text-blue-300 placeholder:font-extrabold 
          border border-transparent font-semibold border-b-blue-300 text-white w-[90%]"
        />

        <div className="bg-blue-300 w-[90%]">
          <button 
          onClick={submit}
          className="w-full flex justify-between p-2 text-white bg-cyan-950 translate-x-1 
          -translate-y-1 hover:translate-x-0 hover:translate-y-0 duration-500">
            <p className="sporty-font">SUBMIT</p>
          </button>
        </div>

      </div>

      <div className="hidden md:flex h-[280px] w-[280px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] rounded-full border-8 justify-center items-center border-gray-800">
          <div className="relative h-[70%] w-[70%] rounded-full flex justify-center items-center bg-gray-800">
            <div className="absolute h-[148%] w-4 -rotate-[60deg] bg-gray-800"/>
            <div className="h-[70%] w-[70%] rounded-full bg-gray-900"/>
          </div>
          </div>
    </div>
  );
};

export default Contact;
