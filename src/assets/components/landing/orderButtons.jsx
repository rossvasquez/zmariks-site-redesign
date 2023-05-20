import tuscana from '../../static/landingPage/tuscana.jpg'

function OrderButtons(){
    return(
        <div className='w-full max-w-6xl h-auto mx-auto pt-6'>
            <a href='https://www.toasttab.com/locations/e577ec9b-f4bc-46ee-9f59-ef9fdd06c88b#!/' target='_blank' className='flex justify-center items-center text-4xl font-semibold text-gray-800 w-auto mx-4 bg-amber-300 hover:shadow-xl hover:cursor-pointer h-32 rounded-[.25rem]'>Order Takeout</a>
            <a href='https://catering-order-system-2ae86.web.app/' target='_blank' className='flex justify-center items-center text-4xl font-semibold text-gray-100 w-auto mx-4 my-4 bg-[#74c1cc] border-amber-300 hover:shadow-xl hover:cursor-pointer h-32 rounded-[.25rem]'>Order Catering</a>
        </div>
    )
}

export default OrderButtons