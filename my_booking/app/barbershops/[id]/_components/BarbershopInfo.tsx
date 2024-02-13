"use client"

import Image from "next/image"
import { Button } from "@/app/_components/ui/button"
import { ChevronLeftIcon, MenuIcon, MapPin, StarIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from '@/app/_components/ui/sheet'
import SideMenu from "@/app/_components/SideMenu"

const BarbershopInfo = () => {

    const handleBackgClick = () => {
        window.history.back()
    }

    return (
        <div>
            <div className="h-[250px] w-full relative">
                <Button size="icon" variant="outline" className="absolute top-4 left-4 z-50" onClick={handleBackgClick}>
                    <ChevronLeftIcon />
                </Button>

                <Sheet>
                    <SheetTrigger>
                        <Button size="icon" variant="outline" className="absolute top-4 right-4 z-50">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className='p-0'>
                        <SideMenu />

                        {/* usuario logado */}
                        {/* <div className="flex justify-between px-5 py-6 items-center">
                            <div className='flex items-center gap-3'>
                                <Avatar>
                                    <AvatarImage src="/img.png" />
                                </Avatar>
                                <h2 className='font-bold'>João</h2>
                            </div>

                            <Button variant="secondary" size="icon">
                                <LogOutIcon />
                            </Button>
                        </div> */}
                    </SheetContent>
                </Sheet>
                
                <Image
                    src="/img.png"
                    alt="Barbearia"
                    fill
                    className="object-cover opacity-75"
                />
                
            </div>
            <div className=" px-5 pt-3 pb-6 border-b border-solid border-secondary">
                <h1 className="text-xl font-bold">Barbearia Vintage</h1>
                <div className="flex items-center gap-1.5 mt-2">
                    <MapPin className="text-primary" size={18} />
                    <p className="text-sm text-gray-400">Rua das Barbas, 876</p>
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                    <StarIcon className="text-primary fill-primary" size={18} />
                    <p className="text-sm text-gray-400">5,0 (10 avaliação)</p>
                </div>
            </div>
        </div>
    )
}

export default BarbershopInfo