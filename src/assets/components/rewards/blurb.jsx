import girlPhone from '../../static/girlPhone.png'

function Blurb() {

    return (
        <>
        <div className='relative flex flex-row justify-center items-center h-80 w-screen mx-auto mt-20 pl-60 shadow-lg'>
            <p className='relative w-full font-slab text-6xl text-amber-300 textShadow3 font-semibold z-10 ml-40'>Loyalty Rewards</p>
            <img className='absolute opacity-20 h-full ml-40' src={girlPhone} />
        </div>
        <div className="flex flex-col justify-center mb-40 h-auto w-screen max-w-7xl mx-auto">
            <p className='mt-12 uppercase text-6xl font-semibold text-slate-50 text-center'>Sign Up Today and Recieve 50 Points</p>
            <div className='h-auto bg-amber-300 rounded-lg shadow-md pb-10 w-full mt-10 mx-auto px-4'>
                <p className='text-4xl text-black text-center mt-10'>Earn 1 point for each dollar spent, Get $5 after reaching 50 points</p>
                <p className='text-4xl text-black text-center mt-10'>Redeem points at the register or save them for later</p>
                <p className='text-4xl text-black text-center mt-10'>Sign up for birthday rewards get $5
   during your birthday month</p>
                <p className='text-4xl text-black text-center mt-10'>Link your credit card to loyalty rewards from the welcome text</p>
            </div>
        </div>
        </>
    )
}

export default Blurb