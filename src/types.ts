export interface Match {
  id: string;
  team1: string;
  team2: string;
  time: string;
  prediction: string;
  odds: string;
  league: string;
  probability: number;
}

export interface Analysis {
  matchId: string;
  summary: string;
  keyStats: string[];
  recommendation: string;
}
