import { create } from 'zustand'

const itemsBarbers = [
    {
        id: 1,
        name: 'Barbearia Vintage',
        img: 'https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png',
        address: 'Av. Lima, 430',
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
        address: 'Av. Brigadeiro, 730',
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

