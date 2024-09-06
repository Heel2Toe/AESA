import { GiCardboardBoxClosed } from "react-icons/gi";
import { MdOutlineSportsSoccer, MdOutlineSupportAgent } from "react-icons/md";

const PromoStore = () => {
  return (
    <div className="h-[500px] w-full bg-[#244F67] flex space-x-10 justify-center items-center p-2 text-[#244F67]">

      <div className="h-[350px] w-[330px] border border-bl flex-col space-y-2 p-4 bg-blue-100">
      <MdOutlineSupportAgent className="text-7xl"/>
      <h1 className="sporty-font text-3xl">READY FOR YOU</h1>
      <p className="suse-font">Got questions or need assistance finding the perfect fit? Reach out to us from the about section.</p>
      </div>

      <div className="h-[350px] w-[330px] border border-bl flex-col space-y-2 p-4 bg-blue-100">
      <GiCardboardBoxClosed className="text-7xl"/>
      <h1 className="sporty-font text-3xl">DOORSTEP DELIVERY</h1>
      <p className="font-sans">We strive to get your order to you quickly so you can enjoy your purchase without any delay. Your time is valuable, and we make sure you don't waste a moment!</p>
      </div>

      <div className="h-[350px] w-[330px] border border-bl flex-col space-y-2 p-4 bg-blue-100">
      <MdOutlineSportsSoccer className="text-7xl"/>
      <h1 className="sporty-font text-3xl">MAKE YOUR DECISION</h1>
      <p className="font-sans">We offer a wide range of products, ensuring you find exactly what you’re looking for. Your perfect match is just a click away!</p>
      </div>


    </div>
  );
};

export default PromoStore;
