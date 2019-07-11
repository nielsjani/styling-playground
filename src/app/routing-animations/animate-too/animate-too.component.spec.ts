import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateTooComponent } from './animate-too.component';

describe('AnimateTooComponent', () => {
  let component: AnimateTooComponent;
  let fixture: ComponentFixture<AnimateTooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateTooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateTooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
