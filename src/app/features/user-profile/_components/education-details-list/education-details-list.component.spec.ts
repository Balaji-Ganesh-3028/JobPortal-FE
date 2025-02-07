import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDetailsListComponent } from './education-details-list.component';

describe('EducationDetailsListComponent', () => {
  let component: EducationDetailsListComponent;
  let fixture: ComponentFixture<EducationDetailsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationDetailsListComponent]
    });
    fixture = TestBed.createComponent(EducationDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
