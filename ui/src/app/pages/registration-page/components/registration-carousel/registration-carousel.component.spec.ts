import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCarouselComponent } from './registration-carousel.component';

describe('RegistrationCarouselComponent', () => {
  let component: RegistrationCarouselComponent;
  let fixture: ComponentFixture<RegistrationCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RegistrationCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
