import { Component, inject } from '@angular/core';
import { USER_PROFILE_CONSTANTS } from '../../_constants/user-profile-constants.constants';
import { SnackbarService } from 'src/app/shared/_services/toast-message/snackbar.service';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.scss'],
})
export class CancelButtonComponent {
  public readonly USER_PROFILE_CONSTANTS = USER_PROFILE_CONSTANTS;
  private toastService = inject(SnackbarService);

  constructor() {}

  onCancelClicked() {
    this.toastService.openSnackBar('Profile creation cancelled', 'X', 5);
  }
}
