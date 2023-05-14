import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTableRowComponent } from './location-table-row.component';

describe('LocationTableRowComponent', () => {
  let component: LocationTableRowComponent;
  let fixture: ComponentFixture<LocationTableRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationTableRowComponent]
    });
    fixture = TestBed.createComponent(LocationTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
