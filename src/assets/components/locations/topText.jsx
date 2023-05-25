import contactCover from '../../static/contactCover.png'
import locationsBack from '../../static/locationsBack.png'

function TopText() {


    return (
        <>
        <div className='relative flex flex-row justify-center items-center h-44 lg:h-48 w-screen mx-auto mt-20 lg:mt-28 shadow-md overflow-hidden bg-[#63b0bb]'>
            <p className='relative font-staat text-5xl md:text-6xl text-amber-300 textShadow5 tracking-wide z-10 text-center'>Locations</p>
            <img className='absolute opacity-10 -top-10 -right-4 sm:right-0 md:-top-24 sm:-mt-14 w-full min-w-[40rem] blur-[2px]' src={contactCover} />
        </div>
        </>
    )

}

export default TopText