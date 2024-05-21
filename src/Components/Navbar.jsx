import Logo from "../assets/LogoWhite.png";
import PropTypes from 'prop-types';
import Ham from "../assets/ham.svg"
const Navbar = ({refs}) => {

  const {HomeRef, FooterRef, RoomsRef, GharRef, NewsRef, StripRef}=refs
  const NavItems = [
    {
      name: "Home",
      ref:HomeRef
    },
    {
      name: "About Us",
      ref:FooterRef
    },
    {
      name: "Shop",
      ref:RoomsRef
    },
    {
      name: "Portfolio",
      ref:GharRef
    },
    {
      name: "Blog",
      ref:NewsRef
    },
    {
      name: "Contact",
      ref:StripRef
    },
  ];

  const handleClick=(item)=>{
    item.ref.current.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div className="p-5 flex max-w-[1440px] w-full">
      <div className="w-full">
        <img src={Logo} className="h-16 pl-10 cursor-pointer" alt="" />
      </div>
      <div className="flex items-center justify-around w-full font-bold max-md:hidden">
        {NavItems.map((item, index) => {
          return (
            <p key={index} onClick={()=>handleClick(item)} className="text-xl tracking-wide uppercase cursor-pointer">
              {item.name}
            </p>
          );
        })}
      </div>

      <div className="flex items-center justify-end w-full pr-10 md:hidden"><img src={Ham} className="w-10 h-10 " alt="" /></div>
      
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  refs: PropTypes.shape({
    HomeRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    FooterRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    RoomsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    GharRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    NewsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    StripRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  }).isRequired,
};
