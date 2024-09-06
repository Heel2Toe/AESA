import PolaroidImage from "./polaroid-image";
import { useState } from "react";
import classNames from "classnames";
import CenterTiming from "./center-timing";

interface props {
  picture: string;
  location: string;
  name: string;
}

const Polaroid: React.FC<props> = ({ name, location, picture}) => {

  const [timings, setTimings] = useState(false);

  return (
    <div className="relative h-96 flex flex-col justify-between w-80 bg-white p-2 group">
      {timings ? <CenterTiming name={name} /> : <PolaroidImage picture={picture} location={location}/> }
      <div className="flex justify-between items-center">
        <p className="text-3xl sporty-font text-[#244F67]">{name}</p>

        <button 
        onClick={()=>setTimings(!timings)}
        className={classNames("p-2 px-4 outline-none sporty-font hover:bg-cyan-950 hover:text-white duration-300",
          timings ? 'bg-cyan-950 text-white' : 'bg-blue-200 text-[#244F67]'
        )}>
          {timings ? 'Go Back' : 'Timings'}
        </button>
      </div>
    </div>
  );
};

export default Polaroid;
