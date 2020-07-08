import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PptlscpuVsCpuComponent } from './pptlscpu-vs-cpu.component';

describe('PptlscpuVsCpuComponent', () => {
  let component: PptlscpuVsCpuComponent;
  let fixture: ComponentFixture<PptlscpuVsCpuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PptlscpuVsCpuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PptlscpuVsCpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
