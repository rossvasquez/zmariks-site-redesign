import logoMain from '../../static/landingPage/logoMain.png'

function Header() {

    return (
      <>
        <nav className='flex justify-center items-center bg-amber-300 fixed top-0 h-40 w-screen shadow-lg overflow-show'>
            <div className='absolute top-0 flex flex-row justify-center items-center w-screen h-40'>
              <navLink className='w-auto mx-2 px-6 text-lg hover:drop-shadow-xl bg-transparent border-2 border-amber-200 hover:bg-[#63b0bb] hover:border-0 h-14 pt-3 rounded-md hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Menu</navLink>
              <navLink className='w-auto mx-2 px-6 text-lg hover:drop-shadow-xl bg-transparent border-2 border-amber-200 hover:bg-[#63b0bb] hover:border-0 h-14 pt-3 rounded-md hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Locations</navLink>
              <navLink className='w-auto mx-2 px-6 text-lg hover:drop-shadow-xl bg-transparent border-2 border-amber-200 hover:bg-[#63b0bb] hover:border-0 h-14 pt-3 rounded-md hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Frequent Noodler</navLink>
              <img src={logoMain} className='h-52 mx-4 mt-4 z-20'></img>
              <navLink className='w-auto mx-2 px-6 text-lg hover:drop-shadow-xl bg-transparent border-2 border-amber-200 hover:bg-[#63b0bb] hover:border-0 h-14 pt-3 rounded-md hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Noodle Buckz</navLink>
              <navLink className='w-auto mx-2 px-6 text-lg hover:drop-shadow-xl bg-transparent border-2 border-amber-200 hover:bg-[#63b0bb] hover:border-0 h-14 pt-3 rounded-md hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Franchise</navLink>
              <navLink className='w-auto mx-2 px-6 text-lg hover:drop-shadow-xl bg-transparent border-2 border-amber-200 hover:bg-[#63b0bb] hover:border-0 h-14 pt-3 rounded-md hover:cursor-pointer hover:text-slate-50 hover:pt-3.5'>Contact</navLink>
            </div>
        </nav>
      </>
    )
  }
  
  export default Header