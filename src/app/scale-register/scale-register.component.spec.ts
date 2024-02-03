import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleRegisterComponent } from './scale-register.component';

describe('ScaleRegisterComponent', () => {
  let component: ScaleRegisterComponent;
  let fixture: ComponentFixture<ScaleRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaleRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScaleRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
