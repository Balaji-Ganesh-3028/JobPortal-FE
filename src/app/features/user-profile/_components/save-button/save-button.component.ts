import { Component, Output, EventEmitter, Input } from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss'],
})
export class SaveButtonComponent {
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;

  @Input() public form!: FormGroup;
  @Input() public isDisabled = true;
  @Output() public onSaveClick = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  /**
   * Emits an event indicating that the save button has been clicked.
   * The emitted value is a boolean set to true.
   */

  onSaveClicked(): void {
    this.onSaveClick.emit(true);
  }
}
