import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPayrollEditComponent } from './admin-payroll-edit.component';

describe('AdminPayrollEditComponent', () => {
  let component: AdminPayrollEditComponent;
  let fixture: ComponentFixture<AdminPayrollEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPayrollEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPayrollEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
