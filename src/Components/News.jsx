import G1 from "../assets/g1.svg"
import G2 from "../assets/g2.svg"
import G3 from "../assets/g3.svg"

const News = () => {

    const images = [G1, G2, G3];


  return (
    <div className="max-w-[1440px] flex w-full flex-col p-10">
        <div className="w-full p-10 text-center uppercase text-8xl"> News from us</div>
        <div className="grid w-full grid-cols-3 gap-10">
            {
                images.map((image, index)=>{
                    return (
                        <div key={index} className="w-full">
                            <img src={image} alt="news" className="w-full h-[400px] object-cover" />
                            <div className="w-full text-left"><h1 className="text-2xl font-bold leading-loose">
                                    News {index+1}
                                </h1>
                                <p className=" text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p></div>
                        </div>
                    )
                })
            }
        </div>
        <div className="flex items-center justify-center w-full p-10">

        <button className="px-8 py-2 text-2xl text-blue-700 duration-300 bg-transparent border-2 border-blue-700 hover:bg-blue-700 hover:text-white text-700">MORE</button>

        </div>

    </div>
  )
}

export default News
