import rewardsPeeps from '../../static/rewardsPeeps.png'
import rewardsBackground from '../../static/rewardsBackground.png'

function Blurb() {

    return (
        <>
        <div className='relative flex flex-row justify-center items-center h-44 lg:h-48 w-screen mx-auto mt-20 lg:mt-28 shadow-md overflow-hidden'>
            <p className='relative font-staat text-5xl md:text-6xl text-amber-300 textShadow5 tracking-wide z-10 text-center'>Frequent Noodler</p>
            <img className='absolute opacity-10 right-0 top-0 md:-mt-14 w-full min-w-[40rem] blur-[2px]' src={rewardsPeeps} />
        </div>
        <div className="relative flex flex-col justify-center h-auto w-screen mx-auto px-2 overflow-hidden">
            <p className='mt-12 uppercase text-4xl md:text-5xl text-slate-800 max-w-6xl mx-auto font-staat text-center leading-relaxed tracking-wide md:leading-relaxed md:tracking-wide'><span className='text-6xl sm:text-8xl font-slab text-slate-50 font-bold textShadow6'>Sign Up Today</span><br/>Recieve 50 Points</p>
            <div className='flex justify-center items-center h-auto bg-amber-300 rounded-lg shadow-lg w-full max-w-5xl mt-12 mx-auto'>
                <div className='flex flex-col items-center h-auto w-full'> 
                    <p className='text-2xl rounded-t-lg w-full sm:text-3xl text-black leading-relaxed bg-amber-300 pb-10 pt-9 px-6 h-auto text-center capitalize'>Earn 1 point for each dollar spent, Get $5 after reaching 50 points</p>
                    <div className='h-[.1rem] opacity-10 w-full bg-black'></div>
                    <p className='text-2xl w-full sm:text-3xl text-black leading-relaxed bg-amber-200 px-6 pb-10 pt-9 h-auto text-center capitalize'>Redeem points at the register or save them for later</p>
                    <div className='h-[.1rem] opacity-10 w-full bg-black'></div>
                    <p className='text-2xl w-full sm:text-3xl text-black leading-relaxed bg-amber-300 px-6 pb-10 pt-9 h-auto text-center capitalize'>Sign up for birthday rewards get $5 during your birthday month</p>
                    <div className='h-[.1rem] opacity-10 w-full bg-black'></div>
                    <p className='text-2xl rounded-b-lg w-full sm:text-3xl text-black leading-relaxed bg-amber-200 px-6 pb-10 pt-9 h-auto text-center capitalize'>Link your credit card to loyalty rewards from the welcome text</p>
                </div> 
            </div>
            <div className='flex md:flex-row flex-col h-auto w-full max-w-5xl pb-6 mt-2 mx-auto mb-16'>
                <a href='https://www.toasttab.com/z-mariks-noodle-cafe-clive/rewardsSignup' target='_blank' className='flex justify-center items-center text-5xl hover:cursor-pointer border-black border-opacity-10 hover:border-[.15rem] shadow-lg h-32 bg-amber-300 w-full mr-0 md:mr-1 rounded-lg md:rounded-xl font-staat tracking-wide text-slate-50 textShadow2'>Sign Up</a>
                <a href='https://www.toasttab.com/z-mariks-noodle-cafe-clive/rewards' target='_blank' className='flex justify-center items-center text-5xl hover:cursor-pointer border-black border-opacity-10 hover:border-[.15rem] shadow-lg h-32 bg-amber-300 w-full ml-0 md:ml-1 mt-2 md:mt-0 rounded-lg md:rounded-xl font-staat tracking-wide text-slate-50 textShadow2'>Check Balance</a>
            </div>
            <img src={rewardsBackground} className='absolute top-0 -left-40 md:left-0 scale-[400%] md:scale-100 opacity-[5%] -z-10' />
            <div className='hidden'>Background Image Courtesy of Vecteezy https://www.vecteezy.com/vector-art/4667857-money-sign-seamless-pattern-background-vector-illustration</div>
        </div>
        </>
    )
}

export default Blurb