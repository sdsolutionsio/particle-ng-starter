import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleDemoComponent } from './particle-demo.component';

describe('ParticleDemoComponent', () => {
  let component: ParticleDemoComponent;
  let fixture: ComponentFixture<ParticleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticleDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
