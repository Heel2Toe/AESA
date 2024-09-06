import StoreNav from "./store-nav"; 

const StoreHome = () => {

    return ( 
        <div className="relative h-[600px] w-full bg-[#244F67] flex px-6 py-4 justify-between items-center overflow-hidden">
      <div className="z-absolute h-[180%] w-20 bg-[#244F67] -rotate-45"/>
           <StoreNav/>
     <div className="w-[600px] flex flex-col space-y-4 z-10 text-white">
        <h1 className="sporty-font text-9xl">AESA SPORTS</h1>
        <p className="self-end text-right sporty-font font-extralight text-xl tracking-wider">Get ready for the season with our exclusive collection of high-performance jerseys. Whether you're hitting the court or cheering from the sidelines, we've got you covered !</p>
     </div>

     <div className="relative h-[600px] w-[600px]">
       <img src="./assets/tshirt.png" className="h-full w-full"/>
     </div>
        </div>
     );
}
 
export default StoreHome;