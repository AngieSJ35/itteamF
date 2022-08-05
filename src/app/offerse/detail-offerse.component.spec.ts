import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfferseComponent } from './detail-offerse.component';

describe('DetailOfferseComponent', () => {
  let component: DetailOfferseComponent;
  let fixture: ComponentFixture<DetailOfferseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOfferseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOfferseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
