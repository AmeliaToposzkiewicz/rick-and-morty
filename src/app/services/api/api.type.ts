export type Gender = 'Male' | 'Female';

export interface CharactersResponse {
  info: CharactersInfoResponse;
  results: CharacterDetails[];
}

export interface CharactersInfoResponse {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterDetails {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface LocationResponse {
  info: LocationInfoResponse;
  results: LocationDetails[];
}

export interface LocationInfoResponse {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface LocationDetails {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface EpisodesResponse {
  info: EpisodesInfoResponse;
  results: EpisodeDetails[];
}

export interface EpisodesInfoResponse {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface EpisodeDetails {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
