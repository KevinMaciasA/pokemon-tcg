import axios from "axios";
import { CardData, GetCardData, GetCardsData } from "../types";

const API_BASE_URL = "https://api.pokemontcg.io/v2"
export const endpoints = {
  CARDS: "cards",
  CARD: "cards"
}

//to do: change fetchData to be output defined

export async function fetchData(endpoint: string): Promise<unknown> {
  const apiURL = `${API_BASE_URL}/${endpoint}`

  try {
    const response = await axios.get(apiURL, {
      headers: {
        "X-Api-Key": process.env.API_KEY,
      }
    })
    return response.data
  } catch (error) {
    console.log('There was an error', error);
    return
  }
}

export async function getCard(id: string): Promise<CardData> {
  const endpoint = `${endpoints.CARD}/${id}`

  const cardData = await fetchData(endpoint) as GetCardData
  return cardData.data
}

export async function getCards(limit?: number): Promise<CardData[]> {
  let endpoint = `${endpoints.CARDS}`
  const query = `?pageSize=${limit}`

  if (limit) endpoint += query

  const cardsData = await fetchData(endpoint) as GetCardsData
  return cardsData.data
}