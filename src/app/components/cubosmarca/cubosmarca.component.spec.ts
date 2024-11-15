import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubosmarcaComponent } from './cubosmarca.component';

describe('CubosmarcaComponent', () => {
  let component: CubosmarcaComponent;
  let fixture: ComponentFixture<CubosmarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CubosmarcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubosmarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
