import Cellotape from "./cellotape";
import { AiFillAmazonCircle } from "react-icons/ai";

const ProductCard = ({ image }: { image: string }) => {
  return (
    <div className="relative h-[240px] w-[160px] sm:h-[350px] sm:w-[220px]  md:h-[480px] md:w-[330px] bg-[#244F67] p-2 md:p-4 flex flex-col space-y-2 items-center group">
      <Cellotape position="br" />
      <Cellotape position="tl" />

      <div className="absolute top-2 left-1/2 -translate-x-1/2  h-2 w-2 rounded-full bg-gray-200 mb-4" />

      <div className="w-full flex items-center justify-between">
        <p className="sporty-font text-xl sm:text-2xl md:text-4xl text-white w-20">₹1000</p>

        <button className="sporty-font text-xs md:text-md lg:text-lg  text-white md:w-20 p-1 md:p-2 flex justify-between items-center bg-cyan-700 hover:bg-yellow-400 hover:text-black duration-300">
          <AiFillAmazonCircle/>
            <p>AMAZON</p> 
        </button>
      </div>

      <div className="h-[370px] w-full md:h-[400px] overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover mb-5 group-hover:scale-110 duration-500"
          alt="Product"
        />
      </div>
    </div>
  );
};

export default ProductCard;
