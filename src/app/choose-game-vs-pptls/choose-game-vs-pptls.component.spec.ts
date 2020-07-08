import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGameVsPptlsComponent } from './choose-game-vs-pptls.component';

describe('ChooseGameVsPptlsComponent', () => {
  let component: ChooseGameVsPptlsComponent;
  let fixture: ComponentFixture<ChooseGameVsPptlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseGameVsPptlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseGameVsPptlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
