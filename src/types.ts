export interface FestivalEvent {
  id: string;
  title: string;
  category: 'Competitions' | 'Workshops' | 'Exhibitions' | 'Lectures' | 'Robotics' | 'Summits' | 'Technoholix' | 'Experiences';
  tagline: string;
  description: string;
  venue: string;
  dates: string;
  image: string;
  highlights: string[];
  capacity?: string;
  registrationOpen: boolean;
}

export interface CompetitionTrack {
  id: string;
  name: string;
  category: 'Robotics' | 'Autonomous AI' | 'Aerospace' | 'Coding' | 'Sustainability' | 'BioTech';
  tagline: string;
  prizePool: string;
  teamSize: string;
  image: string;
  summary: string;
  rulesOverview: string;
  arenaType: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  institution: string;
  topic: string;
  image: string;
  quote: string;
  edition: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  domain: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  spotsLeft: number;
  image: string;
  keyTopics: string[];
}

export interface ArchiveMilestone {
  year: number;
  edition: string;
  theme: string;
  footfall: string;
  image: string;
  milestone: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  timeSlot: string;
  location: string;
  image: string;
}
