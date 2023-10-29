import React from "react";

import apiClient from "../services/api-client";

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

interface UseGames {
    error: string;
    games: Game[];
}

export default function useGames(): UseGames {
    const [games, setGames] = React.useState<Game[]>([]);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
            .then((response) => {
                setGames(response.data.results)
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    return {
        error,
        games,
    }

}