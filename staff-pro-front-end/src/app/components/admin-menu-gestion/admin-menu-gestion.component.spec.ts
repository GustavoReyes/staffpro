import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuGestionComponent } from './admin-menu-gestion.component';

describe('AdminMenuGestionComponent', () => {
  let component: AdminMenuGestionComponent;
  let fixture: ComponentFixture<AdminMenuGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMenuGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMenuGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
