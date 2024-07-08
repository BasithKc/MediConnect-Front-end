import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardMilestoneComponent } from './onboard-milestone.component';

describe('OnboardMilestoneComponent', () => {
  let component: OnboardMilestoneComponent;
  let fixture: ComponentFixture<OnboardMilestoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardMilestoneComponent]
    });
    fixture = TestBed.createComponent(OnboardMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
