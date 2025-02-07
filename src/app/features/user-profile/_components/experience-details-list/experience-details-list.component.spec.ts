import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailsListComponent } from './experience-details-list.component';

describe('ExperienceDetailsListComponent', () => {
  let component: ExperienceDetailsListComponent;
  let fixture: ComponentFixture<ExperienceDetailsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceDetailsListComponent]
    });
    fixture = TestBed.createComponent(ExperienceDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
