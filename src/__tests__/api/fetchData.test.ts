import { getCard, getCards } from "@/api/pokemon/fetchData"

describe("[API] Pokemon", () => {
  test('[GET] Cards', async () => {
    const cards = await getCards()

    expect(cards).toBeDefined()
  }, 15000)

  test('[GET] Cards limit is x', async () => {
    const TEST_LIMIT = 5

    const cards = await getCards(TEST_LIMIT)
    console.log(cards)
    expect(cards.length).toBe(TEST_LIMIT)
  })

  test('[GET] Card data', async () => {
    const card = await getCard("xy1-1")

    expect(card).toBeDefined()
  })
})
