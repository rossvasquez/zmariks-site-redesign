import frontClive from '../../static/landingPage/frontClive.jpg'
import frontIC from '../../static/landingPage/frontIC.jpeg'
import frontMC from '../../static/landingPage/frontMC.jpg'

function Cards(){

    const locations = [
        {
            image: frontClive,
            location: 'Clive, Iowa',
            number: '(515) 223-9605',
            address: '12655 University Avenue Clive, IA 50325',
            hours1: '10:30AM-9:00PM Mon-Sat',
            hours2: '10:30AM-8:00PM Sun'
        },
        {
            image: frontIC,
            location: 'Iowa City, Iowa',
            number: '(319) 338-5500',
            address: '19 S. Dubuque St Iowa City, IA 52240',
            hours1: '10:30AM-8:00PM Sun - Sat',
            hours2: ''
        },
        {
            image: frontMC,
            location: 'Mason City, Iowa',
            number: '(641) 450-1199',
            address: '2105 4th St SW Mason City, IA 50401',
            hours1: '11:00AM-8:00PM Mon-Sat',
            hours2: '11:00AM-7:00PM Sun'
        }
    ]

    return(
        <div className='flex justify-center items-center my-8 mx-4'>
            <div className='max-w-5xl w-screen h-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                {locations.map((item) =>   
                    <div className='relative bg-amber-300 h-auto pb-4 border-2 border-amber-300 rounded-lg w-full md:w-full overflow-hidden'>
                        <p className='relative text-4xl font-staat pl-4 pt-4 z-10'>{item.location}</p>
                        <p className='relative text-2xl font-semibold font-slab pt-0 pl-4 z-10'>{item.number}</p>
                        <p className='relative text-2xl font-slab p-4 z-10'>{item.address}</p>
                        <p className='relative text-3xl font-staat pt-4 pl-4 z-10'>{item.hours1}</p>
                        <p className='relative text-3xl font-staat pl-4 z-10'>{item.hours2}</p>
                        <img src={item.image} className='opacity-20 absolute w-full top-10 z-0' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cards