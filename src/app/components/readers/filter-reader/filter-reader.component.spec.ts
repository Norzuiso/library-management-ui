import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterReaderComponent } from './filter-reader.component';

describe('FilterReaderComponent', () => {
  let component: FilterReaderComponent;
  let fixture: ComponentFixture<FilterReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
