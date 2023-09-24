import { type APICardResponse } from '../types/apiGame' 

const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuZ2J5ZXZ5c2R1eWd4YmluZm9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxNTkyMDksImV4cCI6MjAxMDczNTIwOX0.xsBuay-5-e8hRK1926KbcGi6Sezp_fbjcitVCe0Iktg"



export const getSheetGameBy = async ({id}: { id: string}) => {
	const res = await fetch(`https://zngbyevysduygxbinfor.supabase.co/rest/v1/GamesP_2023?id=eq.${id}&select=*`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"apikey": apikey,
			"Authorization": "Bearer " + apikey
		},
	})
	const game = (await res.json()) as APICardResponse[]

	return game
}


export const getSheetGamesAPI = async () => {
	const res = await fetch('https://zngbyevysduygxbinfor.supabase.co/rest/v1/GamesP_2023?select=*', {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"apikey": apikey,
			"Authorization": "Bearer " + apikey
		},
	})
	const data = (await res.json()) as APICardResponse[]
	const dataSort = data.sort((a, b) => b.id - a.id);

	return dataSort
}


export const getSheetMoviesAPI = async () => {
	const res = await fetch('https://zngbyevysduygxbinfor.supabase.co/rest/v1/MoviesL_2023?select=*', {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"apikey": apikey,
			"Authorization": "Bearer " + apikey
		},
	})
	const data = (await res.json()) as APICardResponse[]
	const dataSort = data.sort((a, b) => b.id - a.id);

	return dataSort
}


export const getSheetSeriesAPI = async () => {
	const res = await fetch('https://zngbyevysduygxbinfor.supabase.co/rest/v1/TVShow_2023?select=*', {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"apikey": apikey,
			"Authorization": "Bearer " + apikey
		},
	})
	const data = (await res.json()) as APICardResponse[]
	const dataSort = data.sort((a, b) => b.id - a.id);

	return dataSort
}

