

function ContactForm() {


    return(
        <form className='h-auto w-screen mt-14 max-w-6xl mx-auto px-2 mb-20'>
            <div className='flex flex-col h-auto w-full bg-amber-300 rounded-xl px-3 sm:px-4 pb-3 sm:pb-4 shadow-md'>
                <input placeholder='Name' required="true" type='text' className='p-4 text-xl w-full bg-amber-200 rounded-lg focus:outline-none focus:shadow-inner h-16 my-3 sm:my-4'></input>
                <input placeholder='E-Mail' required="true" type='email' className='p-4 text-xl w-full bg-amber-200 rounded-lg focus:outline-none focus:shadow-inner h-16'></input>
                <input placeholder='Phone Number' required="true" type='text' className='p-4 text-xl w-full bg-amber-200 rounded-lg focus:outline-none focus:shadow-inner h-16 my-3 sm:my-4'></input>
                <textarea placeholder='What Can We Help With?' required="true" className='p-4 text-xl w-full h-60 bg-amber-200 rounded-lg focus:outline-none focus:shadow-inner noResize'></textarea>
            </div>
            <button type='submit' className='flex justify-center items-center text-5xl sm:text-6xl font-staat textShadow5 text-slate-50 h-28 bg-amber-300 rounded-xl mt-2 w-full shadow-md hover:border-4 border-amber-200'>Send It Our Way</button>
        </form>
    )
}

export default ContactForm