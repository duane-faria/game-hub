import React from "react";

import apiClient from "../services/api-client";

interface Genre {
  id: string;
  name: string;
  image_background: string;
}

interface UseGenres {
  error: string;
  genres: Genre[];
  loading: boolean;
}

interface FetchGamesResponse {
  count: 0;
  next: string;
  previous: string;
  results: Genre[];
}

export default function useGenres(): UseGenres {
  const [genres, setGenres] = React.useState<Genre[]>([]);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchGamesResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return {
    genres,
    loading,
    error,
  };
}
