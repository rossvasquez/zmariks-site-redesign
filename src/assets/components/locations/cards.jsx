import { useState } from "react";

import locClive from '../../static/locations/locClive.png'
import frontIC from '../../static/landingPage/frontIC.jpeg'
import locMC from '../../static/locations/locMC.png'

function Cards(){

    const [showMapC, setMapC] = useState(false);
    const [showMapTextC, setMapTextC] = useState('MAP');

    const clickMapC = () => {
        if (showMapC) {
            setMapC(false);
            setMapTextC('MAP');
        } else {
            setMapC(true);
            setMapTextC('CLOSE');
        }
    }

    const [showMapIC, setMapIC] = useState(false);
    const [showMapTextIC, setMapTextIC] = useState('MAP');

    const clickMapIC = () => {
        if (showMapIC) {
            setMapIC(false);
            setMapTextIC('MAP');
        } else {
            setMapIC(true);
            setMapTextIC('CLOSE');
        }
    }

    const [showMapMC, setMapMC] = useState(false);
    const [showMapTextMC, setMapTextMC] = useState('MAP');

    const clickMapMC = () => {
        if (showMapMC) {
            setMapMC(false);
            setMapTextMC('MAP');
        } else {
            setMapMC(true);
            setMapTextMC('CLOSE');
        }
    }

    const locations = [
        {
            image: locClive,
            location: 'Clive, Iowa',
            number: '(515) 223-9605',
            address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.540274000925!2d-93.79474642415049!3d41.60082727127359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ec212259c99203%3A0x264bd0614b57190a!2sZ;Mariks%20Noodle%20Cafe!5e0!3m2!1sen!2sus!4v1685052620492!5m2!1sen!2sus",
            hours1: '10:30AM-9:00PM Mon-Sat',
            hours2: '10:30AM-8:00PM Sun',
            click: clickMapC,
            showMap: showMapC,
            showText: showMapTextC
        },
        {
            image: frontIC,
            location: 'Iowa City, Iowa',
            number: '(319) 338-5500',
            address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.7755672794274!2d-91.53598192414722!3d41.660590871266514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e441ee291edc2d%3A0x355dcd462521b63e!2sZ;Mariks%20Noodle%20Cafe!5e0!3m2!1sen!2sus!4v1685048978853!5m2!1sen!2sus",
            hours1: '‎',
            hours2: '10:30AM-8:00PM Sun - Sat',
            click: clickMapIC,
            showMap: showMapIC,
            showText: showMapTextIC
        },
        {
            image: locMC,
            location: 'Mason City, Iowa',
            number: '(641) 450-1199',
            address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.947288276763!2d-93.23596082406534!3d43.14763617113059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f10795e33c6e61%3A0x2ed6c719f48b33d2!2sZ;mariks%20Noodle%20Cafe!5e0!3m2!1sen!2sus!4v1685052709812!5m2!1sen!2sus",
            hours1: '11:00AM-8:00PM Mon-Sat',
            hours2: '11:00AM-7:00PM Sun',
            click: clickMapMC,
            showMap: showMapMC,
            showText: showMapTextMC
        }
    ]

    const StoreMap = (props) =>
    <iframe src={props.src} className="w-full h-[21.8rem] rounded-md mt-4" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    const StoreImage = (props) =>
    <img src={props.src} className='opacity-20 rounded-md object-fit mt-4 w-full z-0' />

    const StoreHours = (props) =>
    <>
    <p className='absolute bottom-[3.8rem] w-full text-right pr-10 text-[2rem] md:text-4xl tracking-wide font-staat z-10'>{props.hours1}</p>
    <p className='absolute bottom-5 w-full text-right pr-10 text-[2rem] md:text-4xl tracking-wide font-staat z-10'>{props.hours2}</p>
    </>

    return(
        <div className='flex justify-center items-center my-8 mx-4'>
            <div className='max-w-5xl w-screen h-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                {locations.map((item, i) =>   
                    <div key={i} className='relative bg-amber-300 h-auto p-4 border-2 border-amber-300 shadow-lg rounded-lg w-full md:w-full overflow-hidden'>
                        <p className='relative text-4xl font-staat z-10'>{item.location}</p>
                        <p className='relative text-2xl font-semibold font-slab pt-1 z-10'>{item.number}</p>
                        {item.showMap ? <StoreMap src={item.address} /> : <StoreHours hours1={item.hours1} hours2={item.hours2} />}
                        {!item.showMap ? <StoreImage src={item.image} /> : null}
                        <button onClick={item.click} className='flex justify-center items-center text-3xl text-black font-staat absolute h-16 w-32 bg-amber-200 top-5 right-5 hover:shadow-md hover:cursor-pointer rounded-lg z-10'><span className='opacity-80'>{item.showText}</span></button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cards