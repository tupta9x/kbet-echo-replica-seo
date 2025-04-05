
import { Game, Category, Promotion, User } from "../types/types";

export const categories: Category[] = [
  {
    id: "cat1",
    name: "Slots",
    slug: "slots",
    description: "Classic and video slots with exciting themes",
    featured: true,
  },
  {
    id: "cat2",
    name: "Table Games",
    slug: "table-games",
    description: "Classic casino table games including blackjack, roulette and more",
    featured: true,
  },
  {
    id: "cat3",
    name: "Live Casino",
    slug: "live-casino",
    description: "Real-time casino games with live dealers",
    featured: true,
  },
  {
    id: "cat4",
    name: "Sports",
    slug: "sports",
    description: "Bet on your favorite sports events",
    featured: true,
  },
  {
    id: "cat5",
    name: "Jackpot",
    slug: "jackpot",
    description: "Games with massive jackpot prizes",
  },
  {
    id: "cat6",
    name: "New Games",
    slug: "new-games",
    description: "Recently added games to our collection",
  },
];

export const games: Game[] = [
  {
    id: "game1",
    title: "Book of Gold",
    description: "Explore ancient Egypt and discover hidden treasures in this popular slot game",
    imageUrl: "https://placehold.co/300x200/1a1a2e/ffc107?text=Book+of+Gold",
    categoryIds: ["cat1", "cat6"],
    featured: true,
    new: false,
    popular: true,
    provider: "Pragmatic Play",
    rtp: 96.5,
  },
  {
    id: "game2",
    title: "Starburst",
    description: "A classic slot with vibrant colors and expanding wilds",
    imageUrl: "https://placehold.co/300x200/1a1a2e/ffc107?text=Starburst",
    categoryIds: ["cat1"],
    featured: true,
    new: false,
    popular: true,
    provider: "NetEnt",
    rtp: 96.1,
  },
  {
    id: "game3",
    title: "Blackjack Pro",
    description: "Professional blackjack with multiple betting options",
    imageUrl: "https://placehold.co/300x200/1a1a2e/ffc107?text=Blackjack+Pro",
    categoryIds: ["cat2"],
    featured: false,
    new: false,
    popular: true,
    provider: "Evolution Gaming",
    rtp: 99.5,
  },
  {
    id: "game4",
    title: "European Roulette",
    description: "Classic European roulette with single zero",
    imageUrl: "https://placehold.co/300x200/1a1a2e/ffc107?text=European+Roulette",
    categoryIds: ["cat2"],
    featured: false,
    new: false,
    popular: false,
    provider: "Playtech",
    rtp: 97.3,
  },
  {
    id: "game5",
    title: "Live Baccarat",
    description: "Exclusive live baccarat tables with professional dealers",
    imageUrl: "https://placehold.co/300x200/1a1a2e/ffc107?text=Live+Baccarat",
    categoryIds: ["cat2", "cat3"],
    featured: true,
    new: false,
    popular: false,
    provider: "Evolution Gaming",
  },
  {
    id: "game6",
    title: "Premier League Betting",
    description: "Bet on all Premier League matches with competitive odds",
    imageUrl: "https://placehold.co/300x200/1a1a2e/ffc107?text=Premier+League",
    categoryIds: ["cat4"],
    featured: true,
    new: false,
    popular: true,
    provider: "KBET Sports",
  },
  {
    id: "game7",
    title: "Mega Moolah",
    description: "Progressive jackpot slot with life-changing prizes",
    imageUrl: "https://placehold.co/300x200/1a1a2e/ffc107?text=Mega+Moolah",
    categoryIds: ["cat1", "cat5"],
    featured: false,
    new: false,
    popular: true,
    provider: "Microgaming",
    rtp: 88.1,
  },
  {
    id: "game8",
    title: "Fortune Tiger",
    description: "New Asian-themed slot with exciting bonus features",
    imageUrl: "https://placehold.co/300x200/1a1a2e/ffc107?text=Fortune+Tiger",
    categoryIds: ["cat1", "cat6"],
    featured: true,
    new: true,
    popular: true,
    provider: "PG Soft",
    rtp: 96.8,
  },
];

export const promotions: Promotion[] = [
  {
    id: "promo1",
    title: "Welcome Bonus",
    description: "Get 100% bonus up to $500 on your first deposit",
    imageUrl: "https://placehold.co/800x400/1a1a2e/ffc107?text=Welcome+Bonus",
    ctaText: "Claim Now",
    ctaLink: "/promotions/welcome-bonus",
  },
  {
    id: "promo2",
    title: "Free Spins Friday",
    description: "Get 50 free spins every Friday on selected slot games",
    imageUrl: "https://placehold.co/800x400/1a1a2e/ffc107?text=Free+Spins+Friday",
    ctaText: "Learn More",
    ctaLink: "/promotions/free-spins",
    endDate: "2025-06-30",
  },
  {
    id: "promo3",
    title: "Refer a Friend",
    description: "Get $50 bonus for each friend you refer to KBET",
    imageUrl: "https://placehold.co/800x400/1a1a2e/ffc107?text=Refer+a+Friend",
    ctaText: "Start Referring",
    ctaLink: "/promotions/refer-friend",
  },
];

export const users: User[] = [
  {
    id: "user1",
    username: "admin",
    email: "admin@kbet.com",
    role: "admin",
  },
  {
    id: "user2",
    username: "john_doe",
    email: "john@example.com",
    role: "user",
  },
];

export const getFilteredGames = (categoryId?: string, searchTerm?: string) => {
  let filteredGames = [...games];
  
  if (categoryId) {
    filteredGames = filteredGames.filter(game => 
      game.categoryIds.includes(categoryId)
    );
  }
  
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredGames = filteredGames.filter(game => 
      game.title.toLowerCase().includes(term) || 
      game.description.toLowerCase().includes(term) ||
      game.provider.toLowerCase().includes(term)
    );
  }
  
  return filteredGames;
};
