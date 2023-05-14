import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersTableRowComponent } from './characters-table-row.component';

describe('CharactersTableRowComponent', () => {
  let component: CharactersTableRowComponent;
  let fixture: ComponentFixture<CharactersTableRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersTableRowComponent]
    });
    fixture = TestBed.createComponent(CharactersTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
