import { IconType } from "react-icons";

interface props{
    Icon : IconType,
    title: string,
    description: string
}

const PromoCard:React.FC<props> = ({Icon, title, description}) => {
    return ( 
        <div className="h-[200px] mt-4 sm:h-[250px] md:h-[300px] lg:h-[350px] w-[280px] sm:w-[330px] flex flex-col space-y-2 p-4 bg-blue-100">
        <Icon className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl"/>
        <h1 className="sporty-font sm:text-xl md:text-2xl lg:text-3xl">{title}</h1>
        <p className="suse-font text-xs md:text-sm lg:text-md">{description}</p>
        </div>
     );
}
 
export default PromoCard;