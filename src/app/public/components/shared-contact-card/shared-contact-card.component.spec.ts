import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedContactCardComponent } from './shared-contact-card.component';

describe('SharedContactCardComponent', () => {
  let component: SharedContactCardComponent;
  let fixture: ComponentFixture<SharedContactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedContactCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
