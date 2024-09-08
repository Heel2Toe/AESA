interface props {
  image: string;
}

const FlipCard: React.FC<props> = ({ image }) => {
  return (
    <div className="h-[370px] w-full md:h-[400px] overflow-hidden [perspective:1000px] group">
      <div
        className="relative h-full w-full duration-500 transition-all [transform-style:preserve-3d] 
                      group-hover:[transform:rotateY(180deg)]"
      >
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="Product"
          />
        </div>

        <div
          className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]
                       bg-blue-100 flex flex-col p-1 md:p-2 space-y-2 md:space-y-4 sporty-font text-[#244F67] "
        >
          <img
            src={image}
            className="w-full h-full object-cover absolute opacity-5 pointer-events-none"
            alt="Product"
          />
          <h1 className="sm:text-3xl md:text-4xl first:mt-0">TRACKSUIT</h1>

          <p className="text-[8px] sm:text-xs md:text-sm suse-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            commodo ipsum ante, eget venenatis libero tempus ac. Etiam sit amet
            magna turpis. Maecenas orci ante, faucibus vitae aliquet nec.
          </p>

          <p className="text-sm sm:text-xl md:text-2xl">PRICE : ₹1000.00</p>

          <button className="text-sm sm:text-lg md:text-xl cursor-pointer p-[1px] md:p-2 border border-cyan-900 hover:bg-[#244F67] hover:text-white duration-300">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
