
import Image from 'next/image'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import SideMenu from './SideMenu'
import { MenuIcon } from 'lucide-react'

const Header = () => {

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