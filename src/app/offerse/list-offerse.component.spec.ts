import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfferseComponent } from './list-offerse.component';

describe('ListOfferseComponent', () => {
  let component: ListOfferseComponent;
  let fixture: ComponentFixture<ListOfferseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfferseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfferseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
