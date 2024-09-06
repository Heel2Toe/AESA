import { useNavigate } from "react-router-dom";

const StoreNav = () => {
    const navigate = useNavigate();

    return ( 
        <div className="absolute top-4 left-4 w-[500px] bg-blue-300 rounded-md z-10">

        <div className="h-full w-full bg-cyan-900 p-4 border flex items-center
         justify-between rounded-md text-white translate-x-1 -translate-y-1 hover:translate-x-0 hover:translate-y-0 duration-500 group">
            <p className="text-3xl mb-1 group-hover:rotate-90 duration-500">⍉</p>
            <div className="sporty-font text-2xl space-x-10 mr-10">
             <a className="outline-none hover:text-blue-200 cursor-pointer duration-300">HOME</a>
             <a className="outline-none hover:text-blue-200 cursor-pointer duration-300" href="#products">PRODUCTS</a>
             <a className="outline-none hover:text-blue-200 cursor-pointer duration-300" href="#about">ABOUT</a>
             <a className="outline-none hover:text-blue-200 cursor-pointer duration-300" 
               onClick={()=>navigate('/')}>AESA</a>
            </div>
        </div>
        </div>
     );
}
 
export default StoreNav;