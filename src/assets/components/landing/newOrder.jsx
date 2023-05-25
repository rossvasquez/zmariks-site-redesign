import { useState } from "react";
import frontIC from '../../static/landingPage/frontIC.jpeg'
import frontMC from '../../static/landingPage/frontMC.jpg'
import frontClive from '../../static/landingPage/frontClive.jpg'
import doordash from '../../static/landingPage/doordash.png'
import grubhub from '../../static/landingPage/grubhub.png'
import chompLogo from '../../static/landingPage/chompLogo.png'
import pasta from '../../static/landingPage/pasta.png'
import orderNoodles from '../../static/orderNoodles.png'

function NewOrder() {

    const [showInitialOptions, setInitialOptions] = useState(false);
    const [showOrderOption, setShowOrderOptions] = useState(false);
    const [showResLocation, setResLocation] = useState(false);
    const [isTakeout, setIsTakeout] = useState(false);
    const [showCliveDelivery, setCliveDelivery] = useState(false);
    const [showICDelivery, setICDelivery] = useState(false);
    const [showMCDelivery, setMCDelivery] = useState(false);

    const openOrderOptions = () => {
        setInitialOptions(true);
        setShowOrderOptions(true);
    }

    const closeOrderOptions = () => {
        setInitialOptions(true)
        setShowOrderOptions(false);
        setResLocation(false);
        setCliveDelivery(false);
        setICDelivery(false);
        setMCDelivery(false);
    }

    const resLocationTakeout = () => {
        setInitialOptions(false);
        setResLocation(true);
        setIsTakeout(true);
    }

    const resLocationDelivery = () => {
        setInitialOptions(false);
        setResLocation(true);
        setIsTakeout(false);
    }

    const deliveryOrPickupLinkClive = () => {
        if (isTakeout) {
            window.open('https://www.toasttab.com/z-mariks-noodle-cafe-clive/v3', '_blank');
        } else {
            setResLocation(false);
            setCliveDelivery(true);
        }
    }

    const deliveryOrPickupLinkIC = () => {
        if (isTakeout) {
            window.open('https://www.toasttab.com/z-mariks-noodle-cafe-iowa-city/v3', '_blank');
        } else {
            setResLocation(false);
            setICDelivery(true);
        }
    }

    const deliveryOrPickupLinkMC = () => {
        if (isTakeout) {
            window.open('https://www.toasttab.com/z-mariks-noodle-cafe-mason-city/v3', '_blank');
        } else {
            setResLocation(false);
            setMCDelivery(true);
        }
    }

    const OrderNow = () =>
        <div onClick={openOrderOptions} className="flex justify-center text-7xl md:text-8xl hover:shadow-lg items-center w-full max-w-2xl mx-auto bg-amber-300 shadow-md text-slate-50 textShadow4 hover:cursor-pointer rounded-lg h-40 font-staat uppercase">Order</div>

    const OrderOptions = () => 
        <div className="flex flex-col w-full h-auto rounded-lg bg-amber-300 hover:cursor-pointer">
            <div onClick={closeOrderOptions} className="flex justify-center items-center text-xl text-amber-300 rounded-t-md hover:text-black bg-amber-200 h-12"><div className="before:content-['▲']"></div></div>
            {showInitialOptions ? <InitialOptions /> : null}
            {showResLocation ? <LocationOptions /> : null}
            {showCliveDelivery ? <CliveDelivery /> : null}
            {showICDelivery ? <ICDelivery /> : null}
            {showMCDelivery ? <MCDelivery /> : null}
        </div>

    const InitialOptions = () =>
        <div className="h-auto lg:h-80 w-full flex flex-col lg:flex-row hover:cursor-pointer">  
            <div onClick={resLocationTakeout} className="flex justify-center items-center text-3xl w-full h-40 lg:h-auto text-3xl">Takeout</div>
            <div className="w-[.5rem] h-full bg-amber-200"></div>
            <div onClick={resLocationDelivery} className="flex justify-center items-center text-3xl w-full h-40 border-t-2 border-amber-200 lg:border-0 lg:h-auto text-3xl">Delivery</div>
            <div className="w-[.5rem] h-full bg-amber-200"></div>
            <a href='https://catering-order-system-2ae86.web.app/' target='_blank' className="flex justify-center items-center text-3xl w-full h-40 lg:h-auto text-3xl border-t-2 border-amber-200 lg:border-0">Catering</a>
        </div>
    
    const LocationOptions = () =>
        <div className="h-auto lg:h-80 w-full flex flex-col lg:flex-row hover:cursor-pointer">
            <div onClick={deliveryOrPickupLinkClive} className="flex justify-center items-center h-44 lg:h-auto w-full overflow-hidden relative">
                <p className='relative z-10 text-3xl'>Clive</p>
                <img src={frontClive} className="absolute object-cover w-full mt-20 lg:mt-16 opacity-10 z-0" />
            </div>
            <div className="lg:w-[.5rem] w-full h-[.1rem] lg:h-full bg-amber-200"></div>
            <div onClick={deliveryOrPickupLinkIC} className="flex justify-center items-center h-44 lg:h-auto w-full overflow-hidden relative">
                <p className='relative z-10 text-3xl'>Iowa City</p>
                <img src={frontIC} className="absolute object-cover w-full opacity-10 z-0 scale-125 ml-4 mt-16 lg:mt-0" />
            </div>
            <div className="lg:w-[.5rem] w-full h-[.1rem] lg:h-full bg-amber-200"></div>
            <div onClick={deliveryOrPickupLinkMC} className="flex justify-center items-center h-44 lg:h-auto w-full overflow-hidden relative">
                <p className='relative z-10 text-3xl'>Mason City</p>
                <img src={frontMC} className="absolute object-cover w-full opacity-10 z-0 scale-125 lg:mt-2 mt-28" />
            </div>
        </div>
    
    const CliveDelivery = () =>
        <div className="flex flex-col md:flex-row w-full h-80 hover:cursor-pointer">
            <a target='_blank' href="https://www.doordash.com/store/z'mariks-noodle-cafe-clive-290410/" className="w-full h-full flex items-center justify-center md:border-r-2 border-b-2 border-amber-200"><img className="scale-75 sm:scale-50 md:scale-75" src={doordash} /></a>
            <a target='_blank' href="https://www.grubhub.com/restaurant/zmariks-noodle-cafe-12655-university-ave-clive/1536147" className="w-full h-full flex items-center justify-center"><img className="scale-50 sm:scale-[40%] md:scale-75" src={grubhub} /></a>
        </div>

    const ICDelivery = () =>
        <div className="flex flex-col lg:flex-row w-full h-full lg:h-80 hover:cursor-pointer">
            <a target='_blank' href="https://www.doordash.com/store/z'mariks-noodle-cafe-iowa-city-1528411/" className="w-full h-40 lg:h-full flex items-center justify-center lg:border-r-2 lg:border-b-0 border-b-2 border-amber-200"><img className="scale-75 sm:scale-50 lg:scale-75" src={doordash} /></a>
            <a target='_blank' href="https://www.grubhub.com/restaurant/zmariks-noodle-cafe-19-s-dubuque-st-iowa-city/5991704" className="w-full h-40 lg:h-full flex items-center justify-center lg:border-b-0 lg:border-r-2 border-b-2 border-amber-200"><img className="scale-50 sm:scale-[40%] lg:scale-75" src={grubhub} /></a>
            <a target='_blank' href="https://www.chomp.delivery/order/restaurant/zmariks-noodle-cafe-menu/100031" className="w-full h-40 lg:h-full flex items-center justify-center"><img className="scale-50 sm:scale-[40%] lg:scale-50" src={chompLogo} /></a>
        </div>
    
    const MCDelivery = () =>
        <div className="flex flex-col md:flex-row w-full h-80 hover:cursor-pointer">
            <a target='_blank' href="https://www.doordash.com/store/z'mariks-noodle-cafe-mason-city-839255/" className="w-full h-full flex items-center justify-center hover:shadow-inner"><img className="scale-50 sm:scale-[40%] md:scale-50" src={doordash} /></a>
        </div>

    const PastaImage = () =>
    <>
    <img src={orderNoodles} className="invisible sm:visible absolute top-20 pl-2 -mt-2 h-20 z-0 scale-[200%] opacity-80" />
    <div className='hidden'>Image Courtesy Vecteezy https://www.vecteezy.com/vector-art/15846132-instant-noodle-pattern-wallpaper-instant-noodle-symbol</div>
    </>

    return (
        <div className="flex justify-center relative z-10 w-screen bg-[#63b0bb] h-auto py-8 overflow-hidden shadow-inner">
            {!showOrderOption ? <PastaImage /> : null}
            <div className="relative w-screen max-w-7xl mx-auto z-10">
                <div className="bg-transparent h-auto mx-4">
                    {!showOrderOption ? <OrderNow /> : null}
                    {showOrderOption ? <OrderOptions /> : null}
                </div>
            </div>
        </div>
    )
    }

export default NewOrder