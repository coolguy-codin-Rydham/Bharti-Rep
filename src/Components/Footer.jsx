import Logo from "../assets/LogoDark.png"
import Social1 from "../assets/Social1.svg"
import Social2 from "../assets/Social2.svg"
import Social3 from "../assets/Social3.svg"
import Social4 from "../assets/Social4.svg"

const Footer = () => {

    const images = [Social1, Social2,Social3, Social4]
  return (
    <div className="max-w-[1440px] w-full p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col w-full">
            <img src={Logo} className="w-48" alt="" />
            <div className="grid grid-cols-1 gap-6 px-5 text-white">
                <p className="cursor-pointer">+149274912123</p>
                <p className="cursor-pointer">29 Home avenue</p>
                <p className="cursor-pointer">abc@xyz.com</p>
            </div>
        </div>

        <div className="grid w-full grid-cols-3 pt-20 text-lg text-white cursor-pointer">
            <div className="grid w-full grid-cols-1">
                <p>Home</p>
                <p>About</p>
                <p>Rooms</p>
            </div>
            <div className="grid w-full grid-cols-1">
                <p>Portfolio</p>
                <p>Blog</p>
                <p>Partnership</p>
            </div>
            <div className="grid w-full grid-cols-1">
                <p>Contact</p>
            </div>
        </div>
        <div className="grid w-full text-white place-items-center">
            <div>
                <p className="text-center">We are in social networks</p>
                <div className="flex gap-4 pt-3">

                {images.map((image, index)=>{
                    return (
                        <div className="p-4 border-2 border-white" key={index}>
                        <img key={index} src={image} className="w-5 h-5 " alt="" />
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer