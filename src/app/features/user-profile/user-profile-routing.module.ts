import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewAllProfileComponent } from './view-all-profile/view-all-profile.component';
const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    children: [
      { path: '', redirectTo: 'create', pathMatch: 'full' },
      {
        path: 'create',
        component: CreateProfileComponent,
        title: 'Create Profile',
      },
      {
        path: 'edit',
        component: CreateProfileComponent,
        title: 'Edit Profile',
      },
      { path: 'view', component: ViewProfileComponent, title: 'View Profile' },
      {
        path: 'view/:userId',
        component: ViewProfileComponent,
        title: 'View Profile',
      },
      {
        path: 'view-all',
        component: ViewAllProfileComponent,
        title: 'View All Profiles',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
