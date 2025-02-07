import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';

@Component({
  selector: 'app-education-details-list',
  templateUrl: './education-details-list.component.html',
  styleUrls: ['./education-details-list.component.scss'],
})
export class EducationDetailsListComponent implements OnInit, OnChanges {
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  @Input() public educationDetailsList: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(simpleChanges: any): void {}
}
