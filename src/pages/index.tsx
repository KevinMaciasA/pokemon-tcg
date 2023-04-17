import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { getCards } from '@/api/pokemon/fetchData'
import { CardData } from '@/api/types'
import { PokemonCard } from '@/components/PokemonCard'
import CardsContainer from '@/components/CardsContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cards, setCards] = useState<CardData[]>([])

  useEffect(() => {
    const fetchCards = async () => {
      const cards = await getCards(10)
      setCards(cards)
    }

    fetchCards()
  }, [])

  return (
    <>
      <Head>
        <title>Pokemon Deck Builder</title>
        <meta name="description" content="This website help you find a build decks of the pokemon trading card game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CardsContainer>
          {cards.map(card => <PokemonCard key={card.id} card={card} />)}
        </CardsContainer>
      </main>
    </>
  )
}
