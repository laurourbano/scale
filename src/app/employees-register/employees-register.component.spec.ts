import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesRegisterComponent } from './employees-register.component';

describe('EmployeesRegisterComponent', () => {
  let component: EmployeesRegisterComponent;
  let fixture: ComponentFixture<EmployeesRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
