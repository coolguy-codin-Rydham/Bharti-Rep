import { useRef } from 'react'
import AwardWin from './Components/AwardWin'
import Footer from './Components/Footer'
import Ghar from './Components/Ghar'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import News from './Components/News'
import Rooms from './Components/Rooms'
import Strip from './Components/Strip'
import WinterAc from './Components/WinterAc'

function App() {

  const HomeRef = useRef(null);
  const StripRef = useRef(null);
  const AwardRef = useRef(null);
  const WinterRef = useRef(null);
  const RoomsRef = useRef(null);
  const GharRef = useRef(null);
  const NewsRef = useRef(null);
  const FooterRef = useRef(null);


  return (
    <div>
      <div className='flex items-center justify-center w-full'>
        <Navbar refs = {{HomeRef, StripRef, AwardRef, WinterRef, RoomsRef, GharRef, NewsRef, FooterRef}}/>
      </div>
      <div ref={HomeRef} className='flex items-center justify-center w-full'>
        <Home/>
      </div>
      <div ref={StripRef} className='flex items-center justify-center w-full'>
        <Strip/>
      </div>
      <div ref={AwardRef} className='flex items-center justify-center w-full'>
        <AwardWin/>
      </div>
      <div  ref={WinterRef} className='flex flex-col items-center justify-center w-full'>
        <WinterAc/>
      </div>
      <div ref={RoomsRef} className='flex items-center justify-center w-full'>
        <Rooms/>
      </div>
      <div ref={GharRef} className='flex items-center justify-center w-full'>
        <Ghar/>
      </div>
      <div ref={NewsRef} className='flex items-center justify-center w-full'>
        <News/>
      </div>
      <div ref={FooterRef} className='flex items-center justify-center w-full bg-[#252525]'>
      <Footer/>
      </div>

    </div>
  )
}

export default App
