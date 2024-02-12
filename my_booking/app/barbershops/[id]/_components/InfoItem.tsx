import { Button } from '@/app/_components/ui/button'
import { Smartphone } from 'lucide-react'

import { useState } from 'react'

const InfoItem = () => {

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('(11) 98205-1234'); 
        setCopied(true);
        
        setTimeout(() => {
            setCopied(false);
        }, 3000); 
    };

    return (
        <div>
            <div className='border-b border-solid border-secondary pb-3'>
                <div className='px-5'>
                    <h3 className="text-sm font-semibold text-gray-400 mb-3">sobre nós</h3>
                        <p className='text-sm'>Bem-vindo à Vintage Barber, onde tradição encontra estilo. Nossa equipe de mestres barbeiros transforma cortes de cabelo e barbas em obras de arte. Em um ambiente acolhedor, promovemos confiança, estilo e uma comunidade unida.</p>
                </div>
            </div>

            <div className='border-b border-solid border-secondary pb-4'>
                <div className='px-5 flex items-center justify-between mt-3'>
                    <span className='flex ites-center gap-3'> <Smartphone  /> (11) 98205-1234</span>
                    <Button variant="secondary" onClick={handleCopy}>{copied ? 'Copiado' : 'Copiar'}</Button>
                </div>
                <div className='px-5 flex items-center justify-between mt-3'>
                    <span className='flex ites-center gap-3'> <Smartphone /> (11) 98205-1234</span>
                    <Button variant="secondary" onClick={handleCopy}>{copied ? 'Copiado' : 'Copiar'}</Button>
                </div>
            </div>

            <div className='px-5 mt-3 flex flex-col space-y-2 py-2'>
                <p className='flex justify-between w-full'>
                    <span className='text-sm text-gray-400'>Segunda</span>
                    <span className='text-sm'>Fechado</span>
                </p>
                <p className='flex justify-between w-full'>
                    <span className='text-sm text-gray-400'>Terça-Feira</span>
                    <span className='text-sm'>09:00 - 18:00</span>
                </p>
                <p className='flex justify-between w-full'>
                    <span className='text-sm text-gray-400'>Quarta-Feira</span>
                    <span className='text-sm'>09:00 - 18:00</span>
                </p>
                <p className='flex justify-between w-full'>
                    <span className='text-sm text-gray-400'>Quinta-Feira</span>
                    <span className='text-sm'>09:00 - 18:00</span>
                </p>
                <p className='flex justify-between w-full'>
                    <span className='text-sm text-gray-400'>Sexta-Feira</span>
                    <span className='text-sm'>09:00 - 18:00</span>
                </p>
                <p className='flex justify-between w-full'>
                    <span className='text-sm text-gray-400'>Sabado</span>
                    <span className='text-sm'>08:00 - 18:00</span>
                </p>
                <p className='flex justify-between w-full'>
                    <span className='text-sm text-gray-400'>Domingo</span>
                    <span className='text-sm'>Fechado</span>
                </p>
            </div>
            
        </div>
    )
}

export default InfoItem