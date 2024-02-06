"use client"

import Header from "../_components/Header";
import { ptBR } from 'date-fns/locale/pt-BR';
import { format } from 'date-fns'
import Search from "./_components/Search";
import BookingItem from "../_components/BookingItem";
import BarbershopItem from "./_components/BarbershopItem";
import { useDataStore } from '@/app/items/useDataStore'

export default function Home() {

  const items = useDataStore(state => state.availableBarbers)

  return (
    <>
      <Header />

      <div className='p-5'>
        <h2 className='text-xl font-bold'>Olá, seja bem vindo!</h2>
        <p className='capitalize text-sm'>
          {format(new Date(), "EEEE, dd 'de' MMM", {
            locale: ptBR
          })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">Agendamentos</h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs uppercase text-gray-400 font-bold mb-3">recomendados</h2>

        <div className="px-5 flex gap-4 overflow-x-auto [&::webkit-scrollbar]:hidden">
          {items.map((item) => (
            <BarbershopItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs uppercase text-gray-400 font-bold mb-3">populares</h2>

        <div className="px-5 flex gap-4 overflow-x-auto [&::webkit-scrollbar]:hidden">
          {items.map((item) => (
            <BarbershopItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
