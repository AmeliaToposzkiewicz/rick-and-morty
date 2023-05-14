import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesTableRowComponent } from './episodes-table-row.component';

describe('EpisodesTableRowComponent', () => {
  let component: EpisodesTableRowComponent;
  let fixture: ComponentFixture<EpisodesTableRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodesTableRowComponent]
    });
    fixture = TestBed.createComponent(EpisodesTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
