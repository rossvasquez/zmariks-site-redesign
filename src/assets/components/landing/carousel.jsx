import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import mac from '../../static/landingPage/mac.jpg'
import krith from '../../static/landingPage/krith.jpg'
import tuscana from '../../static/landingPage/tuscana.jpg'

function LandingCarousel() {

    return (
        <div className='w-screen mx-auto mt-20 lg:mt-28'>
            <Carousel 
                dynamicHeight={false}
                autoPlay={true}
                swipeable={true}
                infiniteLoop={true}
                emulateTouch={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                showArrows={false}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50}
            >
                <div className='bg-[#63b0bb] h-[34rem]'>
                    <p className='relative text-6xl sm:text-7xl w-full mx-auto text-slate-50 pt-16 leading-relaxed mb-10 z-10 textShadow2 font-lobster'>make lunch<br/><span className='text-amber-300 font-slab font-semibold textShadow3 md:textShadow1 text-7xl sm:text-9xl lg:text-[10rem]'>colorful.</span></p>
                    <p className='relative text-4xl sm:text-6xl text-semibold sm:mt-8 text-slate-50 w-screen h-auto leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed -ml-2 font-staat px-4 lg:px-10 py-2 pb-2 z-10 max-w-8xl'>Fresh Ingredients and Endless Possibilities</p>
                    <img className='absolute top-0 left-0 h-[34rem] w-auto object-cover blur-[2px] opacity-20 z-0' src={tuscana}/>
                </div>
                <div className='bg-[#63b0bb] h-[34rem]'>
                    <p className='relative text-6xl sm:text-7xl w-full mx-auto text-slate-50 pt-16 leading-relaxed mb-10 z-10 textShadow2 font-lobster'>kids love<br/><span className='text-amber-300 font-slab font-semibold textShadow3 md:textShadow1 text-7xl sm:text-9xl lg:text-[10rem]'>z'mariks.</span></p>
                    <p className='relative text-4xl sm:text-6xl text-semibold text-slate-50 w-screen h-auto leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed -ml-2 font-staat px-4 lg:px-10 py-2 pb-2 z-10 max-w-8xl'>Family Friendly Dishes and Atmosphere </p>
                    <img className='absolute top-0 left-0 h-[34rem] w-auto object-cover blur-[2px] opacity-20 z-0' src={mac}/>
                </div>
                <div className='bg-[#63b0bb] h-[34rem]'>
                    <p className='relative text-6xl sm:text-7xl w-full mx-auto text-slate-50 pt-16 leading-relaxed mb-10 z-10 textShadow2 font-lobster'>feeding a<br/><span className='text-amber-300 font-slab font-semibold textShadow3 md:textShadow1 text-7xl sm:text-9xl lg:text-[10rem]'>crowd?</span></p>
                    <p className='relative text-4xl sm:text-6xl text-semibold text-slate-50 w-screen h-auto leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed -ml-2 font-staat px-4 lg:px-10 py-2 pb-2 z-10 max-w-8xl'>We'll Help You Host The Perfect Event</p>
                    <img className='absolute top-0 left-0 h-[34rem] w-auto object-cover blur-[2px] opacity-20 z-0' src={krith}/>
                </div>
            </Carousel>
        </div>
    )
}

export default LandingCarousel