import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfferseComponent } from './edit-offerse.component';

describe('EditOfferseComponent', () => {
  let component: EditOfferseComponent;
  let fixture: ComponentFixture<EditOfferseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOfferseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOfferseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
