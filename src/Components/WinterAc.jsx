import AC1 from "../assets/AC1.svg"
import AC2 from "../assets/AC2.svg"
import AC3 from "../assets/AC3.svg"
import AC4 from "../assets/AC4.svg"
import AC5 from "../assets/AC5.svg"

const WinterAc = () => {

    const data = [
        {
            name:"Sking",
            Image:AC1
        },
        {
            name:"Boarding",
            Image:AC2
        },
        {
            name:"Cycling",
            Image:AC3
        },
        {
            name:"Hiking",
            Image:AC4
        },
        {
            name:"Trekking",
            Image:AC5
        },
    ]
  return (
    <>
    <h1 className="w-full py-5 text-6xl uppercase text-center"> Winter Activities</h1>
    <div className="max-w-[1440px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full p-10 ">
      {
        data.map((img, index)=>(
            <div key={index} className={`${index%2==0?"max-md:hidden":"max-md:block max-lg:hidden"} w-full relative h-full`}>
                <img src={img.Image} className="object-cover h-full" alt="" />
                <div className="w-full bg-black/20 bottom-0 absolute"><p className="text-white text-4xl px-7 py-2">{img.name}</p>
                <p className="text-white px-7 py-1">We fill the space content. High-quality, beautiful, solid and pleasant</p></div>

            </div>
        ))
      }
    </div>
    </>
  )
}

export default WinterAc
