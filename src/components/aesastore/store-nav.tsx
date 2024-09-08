import classNames from "classnames";
import { useNavigate } from "react-router-dom";

interface navbarArrProps {
    title: string,
    sectionnav: string,
}

interface props1{
    page : 'school' | 'store',
    elements: navbarArrProps[]
}



const StoreNav:React.FC<props1> = ({ page, elements }) => {
    const navigate = useNavigate(); 

    return ( 
        <div className={classNames("absolute top-4 left-1/2 -translate-x-1/2 w-[250px] sm:-translate-x-0  sm:left-4 sm:w-[350px] md:w-[400px] lg:w-[500px] rounded-md z-10",
            page == 'store' ? 'bg-blue-300' : 'bg-[#244F67]'
        )}>

        <div className={classNames(`h-full w-full p-4 border flex items-center
         justify-between rounded-md translate-x-1 -translate-y-1 hover:translate-x-0 
         hover:translate-y-0 duration-500 group`,
         page == 'store' ? 'bg-[#244F67] text-white' : 'bg-blue-200 text-[#244F67]' 
         )}>

            <p className="text-md sm:text-xl md:text-2xl lg:text-3xl mb-1 group-hover:rotate-90 duration-500">⍉</p>
            <div className="sporty-font text-sm sm:text-lg md:text-xl lg:text-2xl space-x-2 sm:space-x-5 md:space-x-7 lg:space-x-10 sm:mr-4 md:mr-6 lg:mr-10">
                {elements.map((item, key)=>(
                    <a key={key} className={classNames("outline-none hover:text-blue-200 cursor-pointer duration-300",
                        page == 'store' ? 'hover:text-blue-200' : 'hover:text-blue-500'
                    )} 
                    href={item.sectionnav}>{item.title}</a>
                ))}
             <a className={classNames("outline-none hover:text-blue-200 cursor-pointer duration-300",
                page == 'store' ? 'hover:text-blue-200' : 'hover:text-blue-500'
             )} 
               onClick={()=>navigate(page == 'store' ? '/' : '/store')}>{page == 'store' ? 'AESA' : 'STORE'}</a>
            </div>
        </div>
        </div>
     );
}
 
export default StoreNav;