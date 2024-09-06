import classNames from "classnames"

interface props{
 position: 'br' | 'tl' 
}

const Cellotape:React.FC<props> = ({ position }) => {
    return ( 
      <div className={classNames("absolute h-10 w-24 z-10 bg-blue-300 -rotate-45  bg-opacity-70",
        position == 'br' ? '-bottom-3 right-0 translate-x-8' : '-top-3 left-0 -translate-x-8'
      )}/>
     );
}
 
export default Cellotape;