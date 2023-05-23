import { Link } from "react-router-dom";
import logoMain from '../../static/landingPage/logoMain.png'

function Header() {

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
              <Link className='w-40 text-lg text-center hover:shadow-xl bg-transparent border-amber-200 hover:bg-[#63b0bb] hover:rounded-sm hover:border-0 h-14 pt-3 hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Contact</Link>
            </div>
        </nav>
        <nav className='flex visible lg:invisible bg-amber-300 fixed top-0 h-20 w-screen shadow-lg overflow-show z-50'>
          <img src={logoMain} className='absolute left-4 sm:left-10 top-0 -mt-3 sm:-mt-4 h-32 sm:h-40'></img>
          <button className='absolute border-[.3rem] rounded-md border-transparent hover:border-amber-200 sm:right-6 right-3 h-16 hover:bg-amber-200 w-16 mt-2'>
            <div className='h-[.45rem] rounded-md left-0.5 w-11/12 bg-black absolute top-1'></div>
            <div className='h-[.45rem] rounded-md ml-0.5 w-11/12 bg-black'></div>
            <div className='h-[.45rem] rounded-md left-0.5 w-11/12 bg-black absolute bottom-1'></div>
          </button>
        </nav>
      </>
    )
  }
  
  export default Header