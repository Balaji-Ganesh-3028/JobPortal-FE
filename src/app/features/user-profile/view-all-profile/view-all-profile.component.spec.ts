import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProfileComponent } from './view-all-profile.component';

describe('ViewAllProfileComponent', () => {
  let component: ViewAllProfileComponent;
  let fixture: ComponentFixture<ViewAllProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllProfileComponent]
    });
    fixture = TestBed.createComponent(ViewAllProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
