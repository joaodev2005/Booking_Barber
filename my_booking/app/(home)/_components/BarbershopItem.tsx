import { Badge } from '@/app/_components/ui/badge'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'

const BarbershopItem = ({ item }: { item: any }) => {

    return (
        <Card className='min-w-[167px] max-w-[167px] rounded-2xl'>
            <CardContent className='px-1 py-0'>
                <div className='w-full h-[159px] relative'>
                    <div className='absolute top-2 left-2 z-50'>
                        <Badge variant="secondary" className='opacity-90 flex items-center gap-1'>
                            <StarIcon size={12} className='fill-primary text-primary' />
                            <span>4.5</span>
                        </Badge>
                    </div>
                    <Image
                        src={item.img}
                        alt={item.name}
                        style={{ objectFit: 'cover' }}
                        fill
                        className='h-[159px] w-full rounded-2xl'
                    />
                </div>
                <div className='px-2 pb-3'>
                    <h2 className='font-bold overflow-hidden text-ellipsis text-nowrap mt-2'>{item.name}</h2>
                    <p className='text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap'>{item.address}</p>
                    <Button className='w-full mt-3' variant="secondary">Agendar</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default BarbershopItem