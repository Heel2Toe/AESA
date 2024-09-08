import StoreNav from "./store-nav"; 

const navbarProps = [
      {title : 'HOME', sectionnav: '#home'},
      {title : 'PRODUCTS', sectionnav: '#products'},
      {title : 'ABOUT', sectionnav: '#about'},
   ]


const StoreHome = () => {

    return ( 
        <div className="relative min-h-[700px] sm:min-h-[600px] w-full bg-[#244F67] flex flex-col sm:flex-row px-6 py-4 justify-start sm:justify-between items-center overflow-hidden">
      <div className="absolute z-absolute h-[180%] translate-x-14 w-20 bg-cyan-800 -rotate-45"/>
           <StoreNav page='store' elements={navbarProps}/>
     <div className="sm:w-[600px] flex flex-col space-y-4 z-10 text-white mt-20 p-7 sm:mt-0">
        <h1 className="sporty-font text-4xl sm:text-7xl [@media(min-width:1024px)]:text-8xl lg:text-9xl">AESA STORE</h1>
        <p className="self-end text-right sporty-font font-extralight text-xs sm:text-sm md:text-lg lg:text-xl tracking-wider">Get ready for the season with our exclusive collection of high-performance jerseys. Whether you're hitting the court or cheering from the sidelines, we've got you covered !</p>
     </div>

     <div className="relative h-60 w-60  sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[600px] lg:w-[600px]">
       <img src="./assets/tshirt.png" className="h-full w-full"/>
     </div>
        </div>
     );
}
 
export default StoreHome;