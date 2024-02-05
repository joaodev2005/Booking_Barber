import Header from "../_components/Header";
import { ptBR } from 'date-fns/locale/pt-BR';
import { format } from 'date-fns'
import Search from "./_components/Search";
import BookingItem from "../_components/BookingItem";
export default function Home() {
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
    </>
  );
}
