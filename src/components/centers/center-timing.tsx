import { motion } from "framer-motion";
import DayBar from "./timing-day-bar";
import { centerTimings } from "./centers-data";

const CenterTiming = ({name}:{name:string}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: "-100%",
      }}
      animate={{
        opacity: 100,
        translateX: "0%",
      }}
      exit={{
        translateX: "100%",
      }}
      className="h-80 bg-blue-100 w-full flex flex-col items-center p-2 px-2 space-y-2 "
    >
      <div className="w-full space-y-2 text-sm">
        {centerTimings[name].map((item, index)=>(
            <DayBar key={index} time={item.time} day={item.day} />
        ))}
      </div>
    </motion.div>
  );
};

export default CenterTiming;
