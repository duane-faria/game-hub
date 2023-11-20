import React from "react";

import apiClient from "../services/api-client";

export interface GamePlatform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: GamePlatform }[];
    metacritic: number;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

interface UseGames {
    error: string;
    games: Game[];
    loading: boolean;
}

export default function useGames(): UseGames {
    const [games, setGames] = React.useState<Game[]>([]);
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);

        apiClient.get<FetchGamesResponse>('/games')
            .then((response) => {
                setGames(response.data.results)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); 

    return {
        games,
        loading,
        error,
    }

}