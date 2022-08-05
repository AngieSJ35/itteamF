import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOfferseComponent } from './new-offerse.component';

describe('NewOfferseComponent', () => {
  let component: NewOfferseComponent;
  let fixture: ComponentFixture<NewOfferseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOfferseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOfferseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
