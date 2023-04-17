import React from 'react'
import styles from "../styles/CardsContainer.module.css"

interface ContainerProps {
  children: JSX.Element | JSX.Element[],
}

export default function CardsContainer(props: ContainerProps): JSX.Element {
  return (
    <section className={styles.container}>
      {props.children}
    </section>
  )
}
