import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSpinnerService } from './shared/_services/loader/mat-spinner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public loaderService = inject(MatSpinnerService);

  public isLoading$: Observable<boolean> = this.loaderService.isLoading$;

  constructor() {}
}
