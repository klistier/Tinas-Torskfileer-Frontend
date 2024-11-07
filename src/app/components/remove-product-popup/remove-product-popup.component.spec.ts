import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProductPopupComponent } from './remove-product-popup.component';

describe('RemoveProductPopupComponent', () => {
  let component: RemoveProductPopupComponent;
  let fixture: ComponentFixture<RemoveProductPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveProductPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveProductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
