import R1 from "../assets/R11.svg";
import R2 from "../assets/R22.svg";
import R3 from "../assets/R33.svg";
import R4 from "../assets/R44.svg";
import R5 from "../assets/R55.svg";

const Rooms = () => {
  return (
    <div className="max-w-[1440px] w-full h-full p-10 text-center flex flex-col">
      <h2 className="text-6xl uppercase">
        Deluxe Rooms With <br /> A Beautiful View
      </h2>
      <div className="flex items-center justify-center w-full h-full max-md:flex-col">
        <div className="grid w-1/5 h-full grid-cols-1 gap-10 p-3 max-md:grid-cols-2 max-md:w-full place-items-center">
          <div className="text-left">
            <img src={R1} className="object-fill w-full h-full" alt="" />
            <h1 className="capitalize ">Deluxe Room</h1>
            <p className="text-xs capitalize">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates rem enim .
            </p>
          </div>
          <div className="text-left">
            <img src={R2} className="object-fill w-full h-full" alt="" />
            <h1 className="capitalize ">Deluxe Room</h1>
            <p className="text-xs capitalize">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates rem enim .
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-3/5 p-3 text-left max-md:h-full max-md:w-full ">
          <img src={R3} className="object-fill w-full h-full " alt="" />
          <h1 className="w-full text-2xl capitalize">Deluxe Room</h1>
          <p className="w-full capitalize ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            rem enim .
          </p>
        </div>
        <div className="grid w-1/5 h-full grid-cols-1 gap-10 p-3 max-md:grid-cols-2 max-md:w-full place-items-center">
          <div className="text-left">
            <img src={R4} className="object-fill w-full h-full" alt="" />
            <h1 className="capitalize ">Deluxe Room</h1>
            <p className="text-xs capitalize">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates rem enim .
            </p>
          </div>
          <div className="text-left">
            <img src={R5} className="object-fill w-full h-full" alt="" />
            <h1 className="capitalize ">Deluxe Room</h1>
            <p className="text-xs capitalize">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates rem enim .
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full px-10 py-5">
        {" "}
        <button className="py-1 text-2xl text-blue-700 duration-300 bg-transparent border-2 border-blue-700 px-9 hover:bg-blue-700 hover:text-white text-700">
          MORE
        </button>
      </div>
    </div>
  );
};

export default Rooms;
