"use client"

import BarbershopInfo from "./_components/BarbershopInfo"
import ServiceItem from "./_components/ServiceItem"
import { useServiceStore } from "@/app/items/useService"

// type BarbershopDetailsPageProps = {
//     params: {
//         id: string
//     }
// }

const BarbershopDetailsPage = () => {

    const services = useServiceStore(state => state.services)

    return (
        <div>
            <BarbershopInfo />

            <div className="px-5 flex flex-col gap-4 py-6">
                {services.map((service) => (
                    <ServiceItem key={service.id} item={service} />
                ))}
            </div>
        </div>
    )
}

export default BarbershopDetailsPage

