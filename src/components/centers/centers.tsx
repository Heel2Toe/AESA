import { centers } from "./centers-data";
import Polaroid from "./polaroid";


const Centers = () => {
  return (
    <div
      id="centers"
      className="min-h-[600px] w-full bg-blue-300 p-1 flex flex-col items-center space-y-4 pb-6 sm:pb-0"
    >
      <img src="./assets/centers.png" className="h-24 w-48 m-4" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {centers.map((item, key) => (
          <Polaroid
            key={key}
            picture={item.picture}
            name={item.name}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Centers;
