import { useState } from "react"

export default function MenuItems() {

    const [Current, setCurrent] = useState(0)

    const items1 = [1,1,1,1,1,1]

    const items2 = [1,1,1,1]

    const Mac = () =>
    items1.map((item) =>
        <div className="relative w-full h-[30rem] bg-gray-400 rounded-md shadow-md">
            <div className="bg-amber-300 h-32 w-full absolute bottom-0 rounded-b-md">
                <p className="w-full flex justify-center items-center h-20 text-2xl font-semibold">Item Name</p>
                <div className="flex flex-row w-full h-12">
                    <p className="w-full h-full pl-6 text-xl">CAL XXX</p>
                    <p className="w-full h-full pr-10 text-right text-xl">Info</p>
                </div>
            </div>
        </div>
    )

    const Noodles = () =>
    items2.map((item) =>
        <div className="relative w-full h-[30rem] bg-gray-400 rounded-md shadow-md">
            <div className="bg-amber-300 h-32 w-full absolute bottom-0 rounded-b-md">
                <p className="w-full flex justify-center items-center h-20 text-2xl font-semibold">Item Name</p>
                <div className="flex flex-row w-full h-12">
                    <p className="w-full h-full pl-6 text-xl">CAL XXX</p>
                    <p className="w-full h-full pr-10 text-right text-xl">Info</p>
                </div>
            </div>
        </div>
    )

    return(
        <>
            <div className="mt-4 w-full h-52 md:h-40 grid grid-cols-2 md:grid-cols-3 gap-2 p-2 max-w-5xl mx-auto">
                <div onClick={() => setCurrent(0)} className={`${Current === 0 ? "hover:scale-[100%]": "hover:scale-[102%]"} hover:cursor-pointer w-full h-full uppercase text-xl flex justify-center items-center shadow-md ${Current === 0 ? "bg-amber-300" : "bg-gray-200"} rounded-md`}>Mac</div>
                <div onClick={() => setCurrent(1)} className={`${Current === 1 ? "hover:scale-[100%]" : "hover:scale-[102%]"} hover:cursor-pointer w-full h-full uppercase text-xl flex justify-center items-center shadow-md ${Current === 1 ? "bg-amber-300" : "bg-gray-200"} rounded-md`}>Noodles</div>
                <div className={`hover:scale-[102%] hover:cursor-pointer w-full h-full uppercase text-xl flex justify-center items-center shadow-md bg-gray-200 rounded-md`}>Rice</div>
                <div className={`hover:scale-[102%] hover:cursor-pointer w-full h-full uppercase text-xl flex justify-center items-center shadow-md bg-gray-200 rounded-md`}>Salad</div>
                <div className={`hover:scale-[102%] hover:cursor-pointer w-full h-full uppercase text-xl flex justify-center items-center shadow-md bg-gray-200 rounded-md`}>Dessert</div>
                <div className={`hover:scale-[102%] hover:cursor-pointer w-full h-full uppercase text-xl flex justify-center items-center shadow-md bg-gray-200 rounded-md`}>Noodles</div>
            </div>

            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-2 max-w-5xl mx-auto">
                {Current === 0 ? <Mac /> : null}
                {Current === 1 ? <Noodles /> : null}
            </div>
        </>
    )
}