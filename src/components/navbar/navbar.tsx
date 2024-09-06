import { motion } from "framer-motion";
import NavButton from "./nav-button";

const Navbar = () => {
    return ( 
        <motion.div 
        initial={{
          translateY: '-200%'
        }}
        animate={{
          translateY: '0'
        }}
        transition={{
          duration: 1
        }}
        className="fixed z-20 h-20 w-full bg-cyan-950 bg-opacity-80 backdrop-blur-sm  p-2 px-4 flex items-center sporty-font space-x-4">
            <img src="./assets/logo.png" className="h-10 w-24"/>
          <NavButton text="Home"/>
          <NavButton text="Classes"/>
          <NavButton text="Store"/>
        </motion.div>
     );
}
 
export default Navbar;