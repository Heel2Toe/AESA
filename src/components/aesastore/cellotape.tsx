import classNames from "classnames"

interface props{
 position: 'br' | 'tl' 
}

const Cellotape:React.FC<props> = ({ position }) => {
    return ( 
      <div className={classNames("absolute h-6 w-16 sm:h-8 sm:w-20 md:h-10 md:w-24 z-10 bg-blue-300 -rotate-45  bg-opacity-70",
        position == 'br' ? '-bottom-3 right-0 translate-x-6 sm:translate-x-8' : '-top-3 left-0 -translate-x-6 sm:-translate-x-8'
      )}/>
     );
}
 
export default Cellotape;