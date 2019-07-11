import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAnimationsComponent } from './css-animations.component';

describe('CssAnimationsComponent', () => {
  let component: CssAnimationsComponent;
  let fixture: ComponentFixture<CssAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
