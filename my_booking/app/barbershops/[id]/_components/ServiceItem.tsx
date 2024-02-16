import { Button } from '@/app/_components/ui/button'
import { Calendar } from '@/app/_components/ui/calendar'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/app/_components/ui/sheet'
import { ptBR } from 'date-fns/locale'
import { generateDayTimeList } from '../_helpers/hours'
import { format } from 'date-fns'
import { toast } from 'sonner'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import React, { useState } from 'react'


const ServiceItem = ({ item }: { item: any }) => {
    const router = useRouter()

    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [hour, setHour] = useState<string | undefined>()
    const [sheetIsOpen, setSheetIsOpen] = useState(false)

    const timeList = generateDayTimeList(date!);

    const handleDateClick = (date: Date | undefined) => {
        setDate(date)
        setHour(undefined)
    }

    const handleHourClick = (hour: string) => {
        setHour(hour)
    }

    const handleBookingSubmit = () => {

        if (!date || !hour) {
            return;
        }

        const newDate = new Date(date);
       
        const [hourPart, minutePart] = hour.split(":");

        const newHour = new Date();
        newHour.setHours(parseInt(hourPart), parseInt(minutePart));

        const formattedDate = format(newDate, "'Para' dd 'de' MMMM", { locale: ptBR });
        const formattedHour = format(newHour, "'às' HH:mm");

        setSheetIsOpen(false);

        setHour(undefined);
        setDate(undefined);

        toast("Reserva efetuada com sucesso!", {
            description: `${formattedDate} ${formattedHour}`,
            action: {
                label: "Visualizar",
                onClick: () => router.push(`/bookings`),
            }
        })
    }

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

                            <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="secondary">
                                        Reservar
                                    </Button>
                                </SheetTrigger>

                                <SheetContent className='p-0'>
                                    <SheetHeader className='text-left px-5 py-6 border-b border-solid border-secondary'>
                                        <SheetTitle>Fazer Reserva</SheetTitle>
                                    </SheetHeader>

                                    <div className='py-6'>
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={handleDateClick}
                                            locale={ptBR}
                                            fromDate={new Date()}
                                            styles={{
                                                head_cell: {
                                                    width: '100%',
                                                },
                                                cell: {
                                                    width: '100%',
                                                },
                                                button: {
                                                    width: '100%',
                                                },
                                                nav_button_previous: {
                                                    width: '32px',
                                                    height: '32px',
                                                },
                                                nav_button_next: {
                                                    width: '32px',
                                                    height: '32px',
                                                },
                                                caption: {
                                                    textTransform: 'capitalize',
                                                }
                                            }}
                                        />
                                    </div>

                                    {date && (
                                        <div className='flex gap-3 overflow-x-auto py-6 px-5 border-t border-solid border-secondary [&::-webkit-scrollbar]:hidden'>
                                            {timeList.map((time) => (
                                                <Button
                                                    onClick={() => handleHourClick(time)}
                                                    variant={
                                                        hour === time ? 'default' : 'outline'
                                                    }
                                                    className='rounded-full'
                                                    key={time}>
                                                    {time}
                                                </Button>
                                            ))}
                                        </div>
                                    )}

                                    <div className="py-5 px-5 border-t border-solid border-secondary">
                                        <Card>
                                            <CardContent className='p-3 flex flex-col gap-1'>
                                                <div className="flex justify-between">
                                                    <h2 className='font-bold text-sm'>{item.name}</h2>
                                                    <h3 className='font-bold text-sm'>R$ {item.price.toFixed(2)}</h3>
                                                </div>

                                                {date && (
                                                    <div className="flex justify-between">
                                                        <h3 className='text-gray-400 text-sm'>Data</h3>
                                                        <h4 className='text-sm'>
                                                            {format(date, "dd 'de' MMMM", {
                                                                locale: ptBR
                                                            })}
                                                        </h4>
                                                    </div>
                                                )}

                                                {hour && (
                                                    <div className="flex justify-between">
                                                        <h3 className='text-gray-400 text-sm'>Horário</h3>
                                                        <h4 className='text-sm'>
                                                            {hour}
                                                        </h4>
                                                    </div>
                                                )}

                                                <div className="flex justify-between">
                                                    <h3 className='text-gray-400 text-sm'>Barbearia</h3>
                                                    <h4 className='text-sm'>
                                                        Barbearia Vintage
                                                    </h4>
                                                </div>

                                            </CardContent>
                                        </Card>
                                    </div>

                                    <SheetFooter className='px-5'>
                                        <Button onClick={handleBookingSubmit} disabled={!date || !hour} className='w-full'>
                                            Confirmar Reserva
                                        </Button>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ServiceItem