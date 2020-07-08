import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PptcpuVsCpuComponent } from './pptcpu-vs-cpu.component';

describe('PptcpuVsCpuComponent', () => {
  let component: PptcpuVsCpuComponent;
  let fixture: ComponentFixture<PptcpuVsCpuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PptcpuVsCpuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PptcpuVsCpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
