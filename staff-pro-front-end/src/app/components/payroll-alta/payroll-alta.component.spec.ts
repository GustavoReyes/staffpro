import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollAltaComponent } from './payroll-alta.component';

describe('PayrollAltaComponent', () => {
  let component: PayrollAltaComponent;
  let fixture: ComponentFixture<PayrollAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollAltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
