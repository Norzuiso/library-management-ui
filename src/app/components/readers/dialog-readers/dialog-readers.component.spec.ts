import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReadersComponent } from './dialog-readers.component';

describe('DialogReadersComponent', () => {
  let component: DialogReadersComponent;
  let fixture: ComponentFixture<DialogReadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogReadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
