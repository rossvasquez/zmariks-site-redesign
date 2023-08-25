import { useState } from "react"

export default function ActionButtons() {

    const [ViewClive, setViewClive] = useState(true)
    const [ViewIowaCity, setViewIowaCity] = useState(true)
    const [ViewMasonCity, setViewMasonCity] = useState(true)

    const FurtherAction = (props) =>
    <div className="grid grid-cols-2 gap-2 h-32 w-full">
        <a href={props.purchase} target='_blank'><div className="h-full flex justify-center items-center rounded-md bg-amber-300 text-2xl font-staat hover:cursor-pointer border-black hover:border-2">Purchase</div></a>
        <a href={props.balance} target='_blank'><div className="h-full flex justify-center items-center rounded-md bg-amber-300 text-2xl font-staat hover:cursor-pointer border-black hover:border-2">Check Balance</div></a>
    </div>

    return(
        <div className="h-auto w-full max-w-4xl mx-auto grid grid-cols-1 gap-3 my-6 px-2">
            {ViewClive ? <div onClick={() => setViewClive(false)} className={`${!ViewIowaCity || !ViewMasonCity ? 'hidden' : null} flex justify-center items-center font-staat text-3xl rounded-md bg-amber-300 shadow-lg w-full h-32 hover:scale-[102%] hover:cursor-pointer border-black hover:border-2`}>Clive Gift Cards</div> : <FurtherAction purchase='https://www.toasttab.com/z-mariks-noodle-cafe-clive/giftcards' balance='https://www.toasttab.com/z-mariks-noodle-cafe-clive/findcard'/> }
            {ViewIowaCity ? <div onClick={() => setViewIowaCity(false)} className={`${!ViewClive || !ViewMasonCity ? 'hidden' : null} flex justify-center items-center font-staat text-3xl rounded-md bg-amber-300 shadow-lg w-full h-32 hover:scale-[102%] hover:cursor-pointer border-black hover:border-2`}>Iowa City Gift Cards</div> : <FurtherAction purchase='https://www.toasttab.com/z-mariks-noodle-cafe-iowa-city/giftcards' balance='https://www.toasttab.com/z-mariks-noodle-cafe-iowa-city/findcard'/> }
            {ViewMasonCity ? <div onClick={() => setViewMasonCity(false)} className={`${!ViewIowaCity || !ViewClive ? 'hidden' : null} flex justify-center items-center font-staat text-3xl rounded-md bg-amber-300 shadow-lg w-full h-32 hover:scale-[102%] hover:cursor-pointer border-black hover:border-2`}>Mason City Gift Cards</div> : <FurtherAction purchase='https://www.toasttab.com/z-mariks-noodle-cafe-mason-city/giftcards' balance='https://www.toasttab.com/z-mariks-noodle-cafe-mason-city/findcard'/> }
        </div>
    )
}