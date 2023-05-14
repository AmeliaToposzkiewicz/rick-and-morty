import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { EpisodeDetails } from 'src/app/services/api/api.type';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css'],
})
export class EpisodeDetailsComponent {
  episodeId: number;
  episodeDetails!: EpisodeDetails;

  constructor(private router: ActivatedRoute, private apiService: ApiService) {
    this.episodeId = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getEpisodeById(this.episodeId);
  }

  getEpisodeById(id: number) {
    this.apiService.getEpisode(id).subscribe((data) => {
      this.episodeDetails = data;
    });
  }
  getIdByLink(link: string): string {
    const segmentArray: string[] = link.split('/');
    return segmentArray[segmentArray.length - 1];
  }
}
