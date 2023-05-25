import TopText from '../assets/components/locations/topText'
import Cards from '../assets/components/locations/cards'
import locationsBack from '../assets/static/locationsBack.png'

function Locations(){

    return(
        <div className="relative h-auto w-screen overflow-hidden">
            <img src={locationsBack} className='absolute w-screen left-0 pt-[20rem] scale-[200%] md:scale-[150%] lg:scale-100 opacity-[7%] -z-10' />
        <TopText />
        <Cards />
        </div>
    )
}

export default Locations