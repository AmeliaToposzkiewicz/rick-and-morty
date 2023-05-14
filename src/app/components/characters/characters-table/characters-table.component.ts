import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { CharacterDetails } from 'src/app/services/api/api.type';
@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.css'],
})
export class CharactersTableComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  charactersDetails: CharacterDetails[] = [];
  nextPage: string | null = null;
  prevPage: string | null = null;

  //metoda cyklu życia
  ngOnInit(): void {
    const firstPage: string = '1';
    this.getCharactersData(firstPage);
  }

  getCharactersData(pageNumber: string) {
    this.apiService.getCharacters(pageNumber).subscribe((data) => {
      this.charactersDetails = data.results;

      // Analizujemy wartosc next i wybieramy numer kolejnego page'a jesli istnieje
      const { next, prev } = data.info;
      //  const next  = data.info.next;
      this.nextPage = next ? new URL(next).searchParams.get('page') : null;
      this.prevPage = prev ? new URL(prev).searchParams.get('page') : null;
    });
  }

  onNextPage() {
    console.log('Request o następną stronę');
    if (this.nextPage) {
      this.getCharactersData(this.nextPage);
    }
  }
  onPrevPage() {
    console.log('Request o poprzednią stronę');
    if (this.prevPage) {
      this.getCharactersData(this.prevPage);
    }
  }
}
