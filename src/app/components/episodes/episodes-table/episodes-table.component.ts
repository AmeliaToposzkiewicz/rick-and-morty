import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { EpisodeDetails } from 'src/app/services/api/api.type';

@Component({
  selector: 'app-episodes-table',
  templateUrl: './episodes-table.component.html',
  styleUrls: ['./episodes-table.component.css'],
})
export class EpisodesTableComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  episodesDetails: EpisodeDetails[] = [];
  nextPage: string | null = null;
  prevPage: string | null = null;

  ngOnInit(): void {
    const firstPage: string = '1';
    this.getEpisodesData(firstPage);
  }

  getEpisodesData(pageNumber: string) {
    this.apiService.getEpisodes(pageNumber).subscribe((data) => {
      this.episodesDetails = data.results;

      const { next, prev } = data.info;
      this.nextPage = next ? new URL(next).searchParams.get('page') : null;
      this.prevPage = prev ? new URL(prev).searchParams.get('page') : null;
    });
  }

  onNextPage() {
    console.log('Request o następną stronę');
    if (this.nextPage) {
      this.getEpisodesData(this.nextPage);
    }
  }
  onPrevPage() {
    console.log('Request o poprzednią stronę');
    if (this.prevPage) {
      this.getEpisodesData(this.prevPage);
    }
  }
}
