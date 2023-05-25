import franchiseCover from '../../static/contactCover.png'
import contactBack from '../../static/contactBack.png'

function TopText() {

    return (
        <>
        <img src={contactBack} className='absolute w-full left-0 pt-[20rem] scale-[320%] md:scale-[200%] lg:scale-100 opacity-[7%] -z-10' />
        <div className='relative flex flex-row justify-center items-center h-44 lg:h-48 w-screen mx-auto mt-20 lg:mt-28 shadow-md overflow-hidden bg-[#63b0bb]'>
            <p className='relative font-staat text-5xl md:text-6xl text-amber-300 textShadow5 tracking-wide z-10 text-center'>Franchise</p>
            <img className='absolute opacity-10 -top-10 -right-4 sm:right-0 md:-top-24 sm:-mt-14 w-full min-w-[40rem] blur-[2px]' src={franchiseCover} />
        </div>
        </>
    )

}

export default TopText