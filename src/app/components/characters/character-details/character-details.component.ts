import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { CharacterDetails } from 'src/app/services/api/api.type';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent {
  characterId: number;
  characterDetails!: CharacterDetails;

  constructor(private router: ActivatedRoute, private apiService: ApiService) {
    this.characterId = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getCharacterById(this.characterId);
  }

  getCharacterById(id: number) {
    this.apiService.getCharacter(id).subscribe((data) => {
      this.characterDetails = data;
    });
  }
  getIdByLink(link: string): string {
    const segmentArray: string[] = link.split('/');
    return segmentArray[segmentArray.length - 1];
  }
}
