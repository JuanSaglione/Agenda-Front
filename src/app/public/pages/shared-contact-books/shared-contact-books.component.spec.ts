import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedContactBooksComponent } from './shared-contact-books.component';

describe('SharedContactBooksComponent', () => {
  let component: SharedContactBooksComponent;
  let fixture: ComponentFixture<SharedContactBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedContactBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedContactBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
