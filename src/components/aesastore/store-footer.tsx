import LinksVisit from "./links-visit";

const StoreFooter = () => {
    return ( 
        <div id="about" className="relative w-full min-h-[400px] bg-blue-100 flex flex-col md:flex-row justify-between items-center p-6 overflow-hidden">
        <div className="h-full md:w-[500px] flex flex-col space-y-6 text-[#244F67]">
            <h1 className="sporty-font text-4xl md:text-5xl lg:text-7xl">ABOUT US</h1>
            <p className="self-end text-xs md:text-sm lg:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo ipsum ante, eget venenatis libero tempus ac. Etiam sit amet magna turpis. 
            Maecenas orci ante, faucibus vitae aliquet nec, cursus et magna. Ut nec eros a nulla consectetur luctus quis id dui. Duis vel consequat tortor, 
            sed hendrerit tellus. In rhoncus convallis
            </p>
            <LinksVisit/>
        </div>
  
        <div className="h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] rounded-full border-8 flex justify-center items-center border-blue-200">
          <div className="relative h-[70%] w-[70%] rounded-full flex justify-center items-center bg-blue-200">
            <div className="absolute h-[148%] w-4 -rotate-[60deg] bg-blue-200"/>
            <div className="h-[70%] w-[70%] rounded-full bg-blue-100"/>
          </div>
          </div>

      </div>
     );
}
 
export default StoreFooter;