
import { useQuery } from '@tanstack/react-query';
import { fetchGamezopGames, fetchGamzeopGameById } from '@/services/gamezopService';

export const useGamezopGames = () => {
  return useQuery({
    queryKey: ['gamezop-games'],
    queryFn: fetchGamezopGames,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  });
};

export const useGamezopGame = (gameId: string) => {
  return useQuery({
    queryKey: ['gamezop-game', gameId],
    queryFn: () => fetchGamzeopGameById(gameId),
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    enabled: !!gameId, // Only run if gameId is provided
  });
};
