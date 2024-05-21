import Bg1 from "../assets/Layer5.svg"
import Bg2 from "../assets/Layer 10.svg"
import Bg3 from "../assets/Layer 7.svg"


const Home = () => {
  return (
    <div className="p-5 relative flex max-w-[1440px] w-full">
      <div className="w-2/3 max-md:w-full">
        <img src={Bg3} alt="" />
      </div>
      <div className="w-1/3 max-md:hidden">
        <img src={Bg2} alt="" />
        <img src={Bg1} alt="" />
      </div>

      <div className="absolute text-6xl tracking-wider text-black bottom-5 pl-4">
        <p className="uppercase font-bold leading-relaxed text-white">Hello</p> 
        <p className="uppercase font-semibold text-5xl  max-md:text-white">And you are invited</p>
        </div>
    </div>
  )
}

export default Home
