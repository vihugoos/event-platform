import { ArrowLineRight } from 'phosphor-react'

export function MessageChoose() {
    return (
        <div className="flex-1">
            <h1 className={"flex justify-center mt-80 text-xl"}> 
                Please, choose an option on the side. <ArrowLineRight size={40} className="ml-3 pb-2 animate-pulse" />
            </h1>
        </div>
    )
}
