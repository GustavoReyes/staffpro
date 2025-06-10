import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPayrollsComponent } from './admin-payrolls.component';

describe('AdminPayrollsComponent', () => {
  let component: AdminPayrollsComponent;
  let fixture: ComponentFixture<AdminPayrollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPayrollsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPayrollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
