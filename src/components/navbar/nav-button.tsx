import { useNavigate } from "react-router-dom";

const NavButton = ({text}:{text: string}) => {
    const navigate = useNavigate()
    return ( 
        <div className="bg-blue-400">
        <a onClick={()=>navigate('/store')}
        className="h-10 p-1 px-4 text-xl bg-white hover:translate-x-1 hover:-translate-y-1 duration-500">
        {text}
       </a>
        </div>
     );
}
 
export default NavButton;