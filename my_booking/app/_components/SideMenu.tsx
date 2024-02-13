"use client"

import { UserIcon, LogInIcon, HomeIcon, Calendar } from 'lucide-react'
import { Button } from './ui/button'
import { SheetHeader, SheetTitle } from './ui/sheet'
import Link from 'next/link'

const SideMenu = () => {
    return (
        <>
            <SheetHeader className='text-left border-b border-solid border-secondary p-5'>
                <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className='px-5 py-6 flex  flex-col gap-3'>
                <div className="flex items-center gap-3">
                    <UserIcon />
                    <h2 className='font-bold'>Olá, Faça seu Login!</h2>
                </div>

                <Button variant="secondary" className='w-full justify-start'>
                    <LogInIcon className='mr-2' size={18} />
                    Fazer Login
                </Button>
            </div>

            <div className='flex flex-col gap-3 px-5'>
                <Button variant="outline" className='justify-start' asChild>
                    <Link href='/'>
                        <HomeIcon className='mr-2' size={18} />
                        Inicio
                    </Link>
                </Button>
                
                <Button variant="outline" className='justify-start'>
                    <Calendar className='mr-2' size={18} />
                    Agendamentos
                </Button>
            </div>
        </>
    )
}

export default SideMenu