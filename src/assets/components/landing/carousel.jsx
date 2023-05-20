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
                thumbWidth={120}
            >
                <div className='bg-[#63b0bb] h-[34rem] px-10'>
                    <p className='relative text-6xl md:text-7xl xl:text-8xl w-full mx-auto text-amber-300 textShadow pt-32 sm:pt-32 z-10'>make lunch colorful.</p>
                    <p className='relative text-3xl md:text-4xl xl:text-5xl text-semibold mt-6 sm:mt-8 text-slate-50 w-full mx-auto textShadow z-10'>fresh ingredients and endless possibilities!</p>
                    <img className='absolute top-0 left-0 h-[34rem] object-cover blur-[2px] opacity-30 z-0' src={tuscana}/>
                </div>
                <div className='bg-[#63b0bb] h-[34rem] px-10'>
                    <p className='relative text-6xl md:text-7xl xl:text-8xl w-full mx-auto text-amber-300 textShadow pt-20 sm:pt-32 z-10'>z'mariks is great for kids</p>
                    <p className='relative text-3xl md:text-4xl xl:text-5xl text-semibold mt-6 sm:mt-8 text-slate-50 w-full mx-auto textShadow z-10'>families love our kid-friendly bowls and relaxed atmosphere!</p>
                    <img className='absolute top-0 left-0 h-[34rem] object-cover blur-[2px] opacity-30 z-0' src={mac}/>
                </div>
                <div className='bg-[#63b0bb] h-[34rem] px-10'>
                    <p className='relative text-6xl md:text-7xl xl:text-8xl w-full mx-auto text-amber-300 textShadow pt-32 sm:pt-32 z-10'>feeding a crowd?</p>
                    <p className='relative text-3xl md:text-4xl xl:text-5xl text-semibold mt-6 sm:mt-8 text-slate-50 w-full mx-auto textShadow z-10'>we'll help you host the perfect event!</p>
                    <img className='absolute top-0 left-0 h-[34rem] object-cover blur-[2px] opacity-30 z-0' src={krith}/>
                </div>
            </Carousel>
        </div>
    )
}

export default LandingCarousel