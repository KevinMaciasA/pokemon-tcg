import { CardData } from '@/api/types'
import React from 'react'
import styles from '../styles/PokemonCard.module.css'

interface CardProps {
  card: CardData;
}

export function PokemonCard(props: CardProps): JSX.Element {
  const {card} = props

  return (
    <article className={styles.card}>
      <img src={card.images.large} alt={card.name}/> 
    </article>
  )
}
