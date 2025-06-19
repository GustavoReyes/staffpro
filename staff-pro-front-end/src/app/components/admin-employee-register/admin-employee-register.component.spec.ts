import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeRegisterComponent } from './admin-employee-register.component';

describe('AdminEmployeeRegisterComponent', () => {
  let component: AdminEmployeeRegisterComponent;
  let fixture: ComponentFixture<AdminEmployeeRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEmployeeRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEmployeeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
