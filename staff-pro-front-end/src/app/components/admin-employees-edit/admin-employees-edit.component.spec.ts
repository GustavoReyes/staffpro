import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeesEditComponent } from './admin-employees-edit.component';

describe('AdminEmployeesEditComponent', () => {
  let component: AdminEmployeesEditComponent;
  let fixture: ComponentFixture<AdminEmployeesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEmployeesEditComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminEmployeesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
