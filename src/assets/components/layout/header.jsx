import { Link } from "react-router-dom";
import logoMain from '../../static/landingPage/logoMain.png'
import { useState } from "react";

function Header() {

    const [showMobileMenu, setMobileMenu] = useState(false);

    const tapMenu = () => {
      if (showMobileMenu) {
        setMobileMenu(false);
      } else {
        setMobileMenu(true);
      }
    }

    const tapLogo = () => {
      setMobileMenu(false);
    }

    const MobileMenu = () => 
      <> 
        <div className="fixed shadow-xl flex flex-col top-0 left-0 mt-20 h-screen w-screen z-30">
          <div className="relative flex flex-col rounded-xl bg-amber-200 h-auto py-4 z-30 -mt-10 pt-12">
            <Link onClick={tapMenu} className="flex justify-center items-center text-2xl bg-amber-300 h-16 rounded-md w-11/12 mx-auto my-2 hover:cursor-pointer">Menu</Link>
            <Link onClick={tapMenu} className="flex justify-center items-center text-2xl bg-amber-300 h-16 rounded-md w-11/12 mx-auto my-2 hover:cursor-pointer">Locations</Link>
            <Link onClick={tapMenu} to='/rewards' className="flex justify-center items-center text-2xl bg-amber-300 h-16 rounded-md w-11/12 mx-auto my-2 hover:cursor-pointer">Rewards</Link>
            <Link onClick={tapMenu} className="flex justify-center items-center text-2xl bg-amber-300 h-16 rounded-md w-11/12 mx-auto my-2 hover:cursor-pointer">Gift Cards</Link>
            <Link onClick={tapMenu} className="flex justify-center items-center text-2xl bg-amber-300 h-16 rounded-md w-11/12 mx-auto my-2 hover:cursor-pointer">Franchise</Link>
            <Link onClick={tapMenu} to='/contact' className="flex justify-center items-center text-2xl bg-amber-300 h-16 rounded-md w-11/12 mx-auto my-2 hover:cursor-pointer">Contact</Link>
          </div>
          <div className="relative h-full -mt-10 bg-slate-900 opacity-80 w-screen z-20"></div>
        </div>
      </>

    return (
      <>
        <nav className='flex justify-center items-center invisible lg:visible bg-amber-300 fixed top-0 h-28 w-screen shadow-lg overflow-show z-50'>
            <div className='absolute top-0 flex flex-row justify-center items-center w-screen h-28 pb-2'>
              <Link className='w-40 text-lg text-center hover:shadow-xl bg-transparent border-amber-200 hover:bg-[#63b0bb] hover:rounded-sm hover:border-0 h-14 pt-3 hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Menu</Link>
              <div className='h-14 w-[.1rem] bg-amber-200'></div>
              <Link className='w-40 text-lg text-center hover:shadow-xl bg-transparent border-amber-200 hover:bg-[#63b0bb] hover:rounded-sm hover:border-0 h-14 pt-3 hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Locations</Link>
              <div className='h-14 w-[.1rem] bg-amber-200'></div>
              <Link to='/rewards' className='w-40 text-lg text-center hover:shadow-xl bg-transparent hover:pl-0 pl-4 border-amber-200 hover:bg-[#63b0bb] hover:rounded-sm hover:border-0 h-14 pt-3 hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Rewards</Link>
              <Link to='/'><img src={logoMain} className='h-40 mx-4 mt-8 z-20'></img></Link>
              <Link className='w-40 text-lg text-center hover:shadow-xl bg-transparent hover:pr-0 pr-4 border-amber-200 hover:bg-[#63b0bb] hover:rounded-sm hover:border-0 h-14 pt-3 hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Gift Cards</Link>
              <div className='h-14 w-[.1rem] bg-amber-200'></div>
              <Link className='w-40 text-lg text-center hover:shadow-xl bg-transparent border-amber-200 hover:bg-[#63b0bb] hover:rounded-sm hover:border-0 h-14 pt-3 hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Franchise</Link>
              <div className='h-14 w-[.1rem] bg-amber-200'></div>
              <Link to='/contact' className='w-40 text-lg text-center hover:shadow-xl bg-transparent border-amber-200 hover:bg-[#63b0bb] hover:rounded-sm hover:border-0 h-14 pt-3 hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Contact</Link>
            </div>
        </nav>
        <nav className='flex visible lg:invisible bg-amber-300 fixed top-0 h-20 w-screen shadow-lg overflow-show z-50'>
          <Link to='/'><img onClick={tapLogo} src={logoMain} className='absolute left-4 sm:left-10 top-0 -mt-3 sm:-mt-4 h-32 sm:h-40 hover:cursor-pointer'></img></Link>
          <button onClick={tapMenu} className='absolute border-[.3rem] rounded-md border-transparent hover:border-amber-200 sm:right-6 right-3 h-16 hover:bg-amber-200 w-16 mt-2'>
            <div className='h-[.45rem] rounded-md left-0.5 w-11/12 bg-black absolute top-1'></div>
            <div className='h-[.45rem] rounded-md ml-0.5 w-11/12 bg-black'></div>
            <div className='h-[.45rem] rounded-md left-0.5 w-11/12 bg-black absolute bottom-1'></div>
          </button>
        </nav>
        {showMobileMenu ? <MobileMenu /> : null}
        
      </>
    )
  }
  
  export default Header