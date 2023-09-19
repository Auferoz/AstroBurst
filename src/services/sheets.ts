import { type APICardResponse } from '../types/api' 

export const getSheetGameBy = async ({id}: { id: string}) => {
	const res = await fetch(`https://sheetdb.io/api/v1/uj1vwr8ger7n8/search?sheet=_GamesP_2023&id=${id}`)
	
	const game = (await res.json()) as APICardResponse[]

	return game
}

export const getSheetGamesAPI = async () => {
	const res = await fetch('https://sheetdb.io/api/v1/uj1vwr8ger7n8?sheet=_GamesP_2023', {
		method: "GET",
		headers: {
			"Content-Type": "application/json",	
		},
	})
	
	const data = (await res.json()) as APICardResponse[]
	const dataSort = data.sort((a, b) => b.id - a.id);

	return dataSort
}

