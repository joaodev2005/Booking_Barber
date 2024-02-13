"use client"

import { Button } from "@/app/_components/ui/button"
import BarbershopInfo from "./_components/BarbershopInfo"
import ServiceItem from "./_components/ServiceItem"
import InfoItem from "./_components/InfoItem"

import { useServiceStore } from "@/app/items/useService"

import { useState } from "react"

// type BarbershopDetailsPageProps = {
//     params: {
//         id: string
//     }
// }

const BarbershopDetailsPage = () => {

    const [showServices, setShowServices] = useState(true)

    const services = useServiceStore(state => state.services)

    return (
        <div>
            <BarbershopInfo />

            <div className='space-x-2 px-6'>
                <Button className='w-fit mt-3' variant="default" onClick={() => setShowServices(true)}>
                    Serviços
                </Button>
                <Button className='w-fit mt-3' variant="secondary" onClick={() => setShowServices(false)}>
                    Informações
                </Button>
            </div>

            <div className="px-5 flex flex-col gap-4 py-3">
                {showServices && services.map((service) => (
                    <ServiceItem key={service.id} item={service} />
                ))}
            </div>

            <div className="py-3">
                {!showServices && <InfoItem />}
            </div>
        </div>
    )
}

export default BarbershopDetailsPage