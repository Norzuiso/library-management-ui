import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReaderInfoComponent } from './show-reader-info.component';

describe('ShowReaderInfoComponent', () => {
  let component: ShowReaderInfoComponent;
  let fixture: ComponentFixture<ShowReaderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReaderInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowReaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
