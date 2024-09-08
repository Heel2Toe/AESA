import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

interface props {
    location: string,
    picture: string
}

const PolaroidImage:React.FC<props> = ({location, picture}) => {
    return ( 
        <motion.div 
        initial={{
            translateX: '-100%',
            opacity: 0
        }}
        animate={{
            translateX: '0%',
            opacity: 100
        }}
        exit={{
            translateX: '100%'
        }}
        className="relative overflow-clip">
        <div className="z-10 text-[#244F67] absolute top-2 left-1 flex justify-between items-center p-2 space-x-2 bg-white opacity-80 rounded-sm">
          <FaLocationDot/>
          <p className="text-sm text-bold sporty-font">{location}</p>
        </div>
        <img src={picture} className="h-80 duration-500 group-hover:scale-110" />
        </motion.div>
     );
}
 
export default PolaroidImage;