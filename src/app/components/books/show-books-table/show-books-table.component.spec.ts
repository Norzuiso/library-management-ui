import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBooksTableComponent } from './show-books-table.component';

describe('ShowBooksTableComponent', () => {
  let component: ShowBooksTableComponent;
  let fixture: ComponentFixture<ShowBooksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBooksTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBooksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
