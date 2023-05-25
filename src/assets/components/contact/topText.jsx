import contactCover from '../../static/contactCover.png'

function TopText() {

    return (
        <>
        <div className='relative flex flex-row justify-center items-center h-44 lg:h-48 w-screen mx-auto mt-20 lg:mt-28 shadow-md overflow-hidden'>
            <p className='relative font-staat text-5xl md:text-6xl text-amber-300 textShadow5 tracking-wide z-10 text-center'>Contact Us</p>
            <img className='absolute opacity-10 -top-10 -right-4 sm:right-0 md:-top-24 sm:-mt-14 w-full min-w-[40rem] blur-[2px]' src={contactCover} />
        </div>
        <div className="relative flex flex-col justify-center h-auto w-screen mx-auto px-2 overflow-hidden mt-12">
            <p className='text-center text-6xl sm:text-7xl font-slab text-slate-50 font-bold 
            textShadow7 leading-tight md:leading-tight'>
                What's On Your Mind?
            </p>
            <p className='mt-6 text-center uppercase text-3xl md:text-4xl text-slate-800 max-w-6xl mx-auto 
            font-staat leading-snug md:leading-snug tracking-wide md:tracking-wide'>
                Questions, Comments, or Concerns - we'd love to hear from you!
            </p>
        </div>
        </>
    )
}

export default TopText