import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGameVsPptComponent } from './choose-game-vs-ppt.component';

describe('ChooseGameVsPptComponent', () => {
  let component: ChooseGameVsPptComponent;
  let fixture: ComponentFixture<ChooseGameVsPptComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseGameVsPptComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseGameVsPptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

