import Logo from "../images/Logo.png"
import Cover from "../images/cover.png"

const Navbar = () => {
    return (
        <>
        <header className="w-screen fixed  z-50 p-3 px-12 bg-slate-200">
        <div className="hidden md:flex justify-between h-full p-1 ">
              <img src={Logo} className="w-20 object-cover" alt="logo"/>
                                
            <ul className="flex gap-8 item-center ml-auto ">
                <li className="tet-base text-textColor hover:text-headingColor duration-300 transition-all ease-in-out cursor-pointer">Home</li>
                <li className="tet-base text-textColor hover:text-headingColor duration-300 transition-all ease-in-out cursor-pointer">Menu</li>
                <li className="tet-base text-textColor hover:text-headingColor duration-300 transition-all ease-in-out cursor-pointer">About Us</li>
                <li className="tet-base text-textColor hover:text-headingColor duration-300 transition-all ease-in-out cursor-pointer">Service</li>
            </ul>

        </div>
      </header>
      <div className="justify-center  ">
            <img className="w-screen " src={Cover} alt="Cover" />
            <p className="-mt-80 m-60 font-extrabold  font-serif text-6xl text-white z-10">SALE 50% OFF</p>          
      </div>
        </>
    )
}

export default Navbar;