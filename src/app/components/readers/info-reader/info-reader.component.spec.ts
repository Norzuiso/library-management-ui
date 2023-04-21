import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReaderComponent } from './info-reader.component';

describe('InfoReaderComponent', () => {
  let component: InfoReaderComponent;
  let fixture: ComponentFixture<InfoReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
