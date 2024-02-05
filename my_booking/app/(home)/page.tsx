import { format } from 'date-fns'
import Header from "../_components/Header";
import { pt } from 'date-fns/locale';
import { ptBR } from 'date-fns/locale/pt-BR';

export default function Home() {
  return (
    <>
      <Header />

      <div className='p-5'>
        <h2>Olá, seja bem vindo!</h2>
        <p className='capitalize'>
          {format(new Date(), 'EEEE, d MMMM', {
            locale: ptBR
          })}
        </p>
      </div>
    </>
  );
}
