import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllProfileComponent } from './features/user-profile/view-all-profile/view-all-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./features/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
