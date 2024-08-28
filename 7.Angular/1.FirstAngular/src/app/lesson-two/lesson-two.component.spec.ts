import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTwoComponent } from './lesson-two.component';

describe('LessonTwoComponent', () => {
  let component: LessonTwoComponent;
  let fixture: ComponentFixture<LessonTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonTwoComponent]
    });
    fixture = TestBed.createComponent(LessonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
