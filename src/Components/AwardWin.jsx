
import IMG1 from "../assets/Layer 2.svg"
import IMG2 from "../assets/Layer 9.svg"
import IMG3 from "../assets/Layer 19.svg"
import IMG4 from "../assets/Layer 25.svg"
import IMG5 from "../assets/Layer 26.svg"
import IMG6 from "../assets/Layer 27.svg"
const AwardWin = () => {

    const Items = [
        {
            image:IMG1,
            name:"Middle of Downtown"
        },
        {
            image:IMG2,
            name:"Great Environment",
        },
        {
            image:IMG3,
            name:"Free Breakfast"
        },
        {
            image:IMG4,
            name:"Middle of Downtown"
        },
        {
            image:IMG5,
            name:"Great Environment",
        },
        {
            image:IMG6,
            name:"Free Breakfast"
        }


    ]
  return (
    <div className="max-w-[1440px] flex w-full flex-col p-10">

        <div className=" uppercase text-4xl tracking-widest font-bold w-full text-center">Award Winning Hotels</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5">
    {Items.map((item, index)=>{
        return (
            <div className="flex flex-col items-center justify-center" key={index}>
                <img  src={item.image} className="aspect-[16/9]" alt="" />
                <p className="w-full text-center">{item.name}</p>
                <p className="text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsum quaerat veritatis eum iusto hic optio natus, repellendus omnis sed.</p>
            </div>
        )
    })}
        </div>

        <div className="w-full p-5 flex items-center justify-center">
            <button className="border-blue-700 border-2 py-1 px-9 text-blue-700 hover:bg-blue-700 hover:text-white duration-300 text-700 bg-transparent text-2xl">MORE</button>
        </div>

      
    </div>
  )
}

export default AwardWin
