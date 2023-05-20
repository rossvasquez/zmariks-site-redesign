import tuscana from '../../static/landingPage/tuscana.jpg'

function OrderButtons(){
    return(
        <div className='w-full max-w-6xl h-auto mx-auto pt-6'>
            <a href='https://www.toasttab.com/locations/e577ec9b-f4bc-46ee-9f59-ef9fdd06c88b#!/' target='_blank' className='flex justify-center items-center text-4xl font-semibold text-gray-800 w-auto mx-8 bg-gradient-to-r hover:border-[.1rem] border-slate-100 from-amber-300 to-amber-200 shadow-sm hover:shadow-xl hover:cursor-pointer h-32 rounded-[.25rem]'>Order Takeout</a>
            <a href='https://catering-order-system-2ae86.web.app/' target='_blank' className='flex justify-center items-center text-4xl font-semibold text-gray-100 w-auto mx-8 my-4 border-0 hover:border-[.01rem] bg-[#74c1cc] border-amber-300 shadow-sm hover:shadow-xl hover:cursor-pointer h-32 rounded-[.25rem]'>Order Catering</a>
        </div>
    )
}

export default OrderButtons