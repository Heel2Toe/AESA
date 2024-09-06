
interface props{
    day: string,
    time: string
}
const DayBar:React.FC<props> = ({day, time}) => {
    return ( 
        <div className="w-full sporty-font border border-cyan-700 p-2 rounded-sm flex items-center 
        justify-between duration-300">
        <p>{day}</p>
        <p>{time}</p>
      </div>
     );
}
 
export default DayBar;