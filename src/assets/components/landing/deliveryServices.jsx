import chompLogo from '../../static/landingPage/chompLogo.png'
import doordash from '../../static/landingPage/doordash.png'
import grubhub from '../../static/landingPage/grubhub.png'

function DeliveryServices() {

    return(
        <div className='w-screen max-w-6xl h-auto mx-auto px-4 mb-8'>
            <a href='https://www.doordash.com/business/z%27mariks-noodle-cafe-153806/' target='_blank' className='flex justify-center items-center rounded-[.25rem] bg-[#FF3008] w-full mx-auto h-32 hover:shadow-xl py-6'>
                <img src={doordash} className='w-11/12 py-1 scale-100 sm:scale-50' />
            </a>
            <a href='https://www.chomp.delivery/order/restaurant/zmariks-noodle-cafe-menu/100031' target='_blank' className='flex justify-center items-center rounded-[.25rem] bg-black w-full mx-auto h-32 hover:shadow-xl py-6 mt-4'>
                <img src={chompLogo} className='w-auto scale-75 sm:scale-[40%] pl-1 pt-2' />
            </a>
            <a href='https://www.grubhub.com/restaurant/zmariks-noodle-cafe-19-s-dubuque-st-iowa-city/5991704' target='_blank' className='flex justify-center items-center rounded-[.25rem] bg-[#ff8000] w-full mx-auto h-32 hover:shadow-xl py-6 mt-4'>
                <img src={grubhub} className='w-auto scale-75 sm:scale-[25%]' />
            </a>
        </div>
    )
}

export default DeliveryServices