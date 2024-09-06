import { motion } from "framer-motion";

const Home = () => {
    return ( 
        <motion.div 
        className="h-[700px] w-full bg-blue-100 flex justify-center items-center p-4 overflow-hidden">

          <div className="relative mb-5 flex items-center justify-center border-[16px] border-blue-200
                          rounded-full h-[400px] w-[400px] md:h-[600px] md:w-[600px]">
                            <motion.div 
                            initial={{
                              translateX: '100%',
                              translateY: '100%',
                              rotate: '0deg'
                            }}
                            animate={{
                              translateX: '0%',
                              translateY: '0%',
                              rotate: '120deg'
                            }}
                            transition={{
                              translate:{
                               duration: .8
                              },
                              rotate:{
                                delay: 1.1,
                                duration: .7
                              }
                            }}
                            className="absolute h-4 w-[325%] bg-blue-200 -rotate-[60deg]"/>
            <p className="text-[100px] md:text-[200px] font-extrabold text-[#244F67] mb-5 z-10">AESA</p>
          </div>
       </motion.div>
     );
}
 
export default Home;