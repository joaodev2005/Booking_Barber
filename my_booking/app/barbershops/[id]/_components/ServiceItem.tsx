import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import Image from 'next/image'

const ServiceItem = ({ item }: { item: any }) => {
    return (
        <Card>
            <CardContent className='p-3'>
                <div className="flex gap-4 items-center">
                    <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                        <Image 
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            style={{ objectFit: 'contain' }}
                            className='rounded-lg'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <h2 className='font-bold text-sm'>{item.name}</h2>
                        <p className='text-sm text-gray-400'>{item.description}</p>

                        <div className="flex items-center justify-between mt-2">
                            <p className='font-bold text-primary text-sm'>R$ {item.price.toFixed(2)}</p>
                            <Button variant="secondary">
                                Reservar
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ServiceItem