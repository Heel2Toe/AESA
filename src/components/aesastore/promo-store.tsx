import { GiCardboardBoxClosed } from "react-icons/gi";
import { MdOutlineSportsSoccer, MdOutlineSupportAgent } from "react-icons/md";
import PromoCard from "./promo-card";

const PromoStore = () => {
  return (
    <div className="min-h-[500px] w-full bg-[#244F67] flex flex-col sm:flex-row sm:space-x-5 md:space-x-10 justify-center items-center p-6 sm:p-2 text-[#244F67]">
      <PromoCard
        Icon={MdOutlineSupportAgent}
        title="READY FOR YOU"
        description="Got questions or need assistance finding the perfect fit? Reach out to us from the about section."
      />

      <PromoCard
        Icon={GiCardboardBoxClosed}
        title="DOORSTEP DELIVERY"
        description="We strive to get your order to you quickly so you can enjoy your purchase without any delay. Your time is valuable, and we make sure you don't waste a moment!"
      />

      <PromoCard
        Icon={MdOutlineSportsSoccer}
        title="MAKE YOUR DECISION"
        description="We offer a wide range of products, ensuring you find exactly what you’re looking for. Your perfect match is just a click away!"
      />
    </div>
  );
};

export default PromoStore;
