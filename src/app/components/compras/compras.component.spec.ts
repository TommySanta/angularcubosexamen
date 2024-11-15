import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPRASComponent } from './compras.component';

describe('COMPRASComponent', () => {
  let component: COMPRASComponent;
  let fixture: ComponentFixture<COMPRASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [COMPRASComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(COMPRASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
