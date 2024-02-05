import Image from 'next/image'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
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
                <Button variant="outline" size="icon" className='h-8 w-8'>
                    <MenuIcon size={16} />
                </Button>
            </CardContent>
        </Card>
    )
}

export default Header