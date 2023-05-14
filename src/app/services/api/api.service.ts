import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CharacterDetails,
  CharactersResponse,
  EpisodeDetails,
  EpisodesResponse,
  LocationDetails,
  LocationResponse,
} from './api.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = `https://rickandmortyapi.com/api`;

  public getCharacters(pageNumber: string): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(`${this.baseUrl}/character`, {
      params: {
        page: pageNumber,
      },
    });
  }
  public getLocations(pageNumber: string): Observable<LocationResponse> {
    return this.http.get<LocationResponse>(`${this.baseUrl}/location`, {
      params: {
        page: pageNumber,
      },
    });
  }
  public getEpisodes(pageNumber: string): Observable<EpisodesResponse> {
    return this.http.get<EpisodesResponse>(`${this.baseUrl}/episode`, {
      params: {
        page: pageNumber,
      },
    });
  }

  public getCharacter(id: number): Observable<CharacterDetails> {
    return this.http.get<CharacterDetails>(`${this.baseUrl}/character/${id}`);
  }

  public getLocation(id: number): Observable<LocationDetails> {
    return this.http.get<LocationDetails>(`${this.baseUrl}/location/${id}`);
  }

  public getEpisode(id: number): Observable<EpisodeDetails> {
    return this.http.get<EpisodeDetails>(`${this.baseUrl}/episode/${id}`);
  }
}
