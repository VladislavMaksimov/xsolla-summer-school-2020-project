import { createContext } from 'react';

export const CardsContext = createContext({
    cards: [],
    setCards: () => {},
});

export const CardsConsumer = CardsContext.Consumer;