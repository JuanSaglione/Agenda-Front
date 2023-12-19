import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedContactsComponent } from './shared-contacts.component';

describe('SharedContactsComponent', () => {
  let component: SharedContactsComponent;
  let fixture: ComponentFixture<SharedContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
