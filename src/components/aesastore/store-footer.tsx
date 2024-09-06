import LinksVisit from "./links-visit";

const StoreFooter = () => {
    return ( 
        <div id="about" className="w-full h-[400px] bg-blue-100 flex justify-between items-center p-6 overflow-hidden">
        <div className="h-full w-[500px] flex flex-col space-y-6 text-[#244F67]">
            <h1 className="sporty-font text-7xl">ABOUT US</h1>
            <p className="self-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo ipsum ante, eget venenatis libero tempus ac. Etiam sit amet magna turpis. 
            Maecenas orci ante, faucibus vitae aliquet nec, cursus et magna. Ut nec eros a nulla consectetur luctus quis id dui. Duis vel consequat tortor, 
            sed hendrerit tellus. In rhoncus convallis
            </p>
            <LinksVisit/>
        </div>
  
        <div className={`h-[500px] w-[500px] rounded-full border-8 flex justify-center items-center border-blue-200`}>
          <div className={`relative h-80 w-80 rounded-full flex justify-center items-center bg-blue-200`}>
            <div className={`h-60 w-60 rounded-full bg-blue-100`}/>
            <div className={`absolute h-[500px] w-4 -rotate-[60deg] bg-blue-200`}/>
          </div>
          </div>
      </div>
     );
}
 
export default StoreFooter;