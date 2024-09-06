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
            {/* <button className="z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-2 outline-none sporty-font bg-transparent bg-opacity-70 group-hover:bg-blue-200 duration-300">BOOK NOW</button> */}
        <div className="z-10 text-[#244F67] absolute top-2 left-1 flex justify-between items-center p-1 px-4 bg-white opacity-80 rounded-sm">
          <FaLocationDot/>
          <p className="text-sm text-bold">{location}</p>
        </div>
        <img src={picture} className="h-80 duration-500 group-hover:scale-110" />
        </motion.div>
     );
}
 
export default PolaroidImage;