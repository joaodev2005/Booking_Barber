import { create } from 'zustand'

const itemsBarbers = [
    {
        id: 1,
        name: 'Barbearia Vintage',
        img: 'https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png',
        address: 'Rua da Barbearia, 123',
    },
    {
        id: 2,
        name: 'Cortes & Estilos',
        img: 'https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png',
        address: 'Rua. Brigadeiro Faria Lima, 80',
    },
    {
        id: 3,
        name: 'Homem Arrumado',
        img: 'https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png',
        address: 'Praça da Barba, 789',
    },
    {
        id: 4,
        name: 'Corte de Cabelo',
        img: 'https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png',
        address: 'Alameda dos Estilos, 202',
    },
    {
        id: 5,
        name: 'Macho Moda',
        img: 'https://utfs.io/f/23d9c4f7-8bdb-40e1-99a5-f42271b7404a-17q.png',
        address: 'Estrada do Machado, 303',
    },
    {
        id: 6,
        name: 'Barba & Navalha',
        img: 'https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png',
        address: 'Avenida Elegante, 404',
    },
    {
        id: 7,
        name: 'The Dapper Den',
        img: 'https://utfs.io/f/60f24f5c-9ed3-40ba-8c92-0cd1dcd043f9-16w.png',
        address: 'Praça da Aparência, 505',
    },
    {
        id: 8,
        name: 'Cabelo & Cia.',
        img: 'https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png',
        address: 'Rua Urbana, 606',
    },
    {
        id: 9,
        name: 'Estilo Urbano',
        img: 'https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png',
        address: 'Avenida Clássica, 707',
    }
]

type Item = {
    id: number
    name: string
    img: string
    address: string
}

type BarbersState =  {
    availableBarbers: Item[]
    cards: Item[]
    addCard: (item: Item) => void
}

export const useDataStore = create<BarbersState>((set) => ({
    cards: [],
    availableBarbers: itemsBarbers,
    addCard: (item) => set((state) => ({ cards: [...state.cards, item] })),
}))

