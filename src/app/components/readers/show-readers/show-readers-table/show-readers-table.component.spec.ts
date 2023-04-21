import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReadersTableComponent } from './show-readers-table.component';

describe('ShowReadersTableComponent', () => {
  let component: ShowReadersTableComponent;
  let fixture: ComponentFixture<ShowReadersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReadersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowReadersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
