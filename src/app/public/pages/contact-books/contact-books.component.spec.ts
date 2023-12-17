import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBooksComponent } from './contact-books.component';

describe('ContactBooksComponent', () => {
  let component: ContactBooksComponent;
  let fixture: ComponentFixture<ContactBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
