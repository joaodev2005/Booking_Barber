
import Image from 'next/image'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Calendar, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from 'lucide-react'
import { useMediaQuery } from '@react-hook/media-query'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Avatar, AvatarImage } from './ui/avatar'

const Header = () => {
    const isMobileOrTablet = useMediaQuery('(max-width: 768px)')

    return (
        <Card>
            <CardContent className='p-5 flex justify-between items-center'>
                <Image
                    src="/Logo.png"
                    alt="Logo"
                    width={120}
                    height={22}
                />
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline" size="icon" className='h-8 w-8'>
                            <MenuIcon size={16} />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className='p-0'>
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
                            <Button variant="outline" className='justify-start'>
                                <HomeIcon className='mr-2' size={18} />
                                Inicio
                            </Button>
                            <Button variant="outline" className='justify-start'>
                                <Calendar className='mr-2' size={18} />
                                Agendamentos
                            </Button>
                        </div>

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
                {/* {isMobileOrTablet ? (  
                    <Button variant="outline" size="icon" className='h-8 w-8'>
                        <MenuIcon size={16} />
                    </Button>
                ) : (
                    <Button>
                        Login
                    </Button>
                )} */}
            </CardContent>
        </Card>
    )
}

export default Header