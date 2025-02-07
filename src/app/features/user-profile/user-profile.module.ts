import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { DemographicDetailsComponent } from './_components/demographic-details/demographic-details.component';
import { EducationDetailsComponent } from './_components/education-details/education-details.component';
import { ExperienceDetailsComponent } from './_components/experience-details/experience-details.component';
import { AddressComponent } from './_components/address/address.component';
import { ButtonComponent } from './_components/button/button.component';
import { EducationDetailsListComponent } from './_components/education-details-list/education-details-list.component';
import { ExperienceDetailsListComponent } from './_components/experience-details-list/experience-details-list.component';
import { AddressListComponent } from './_components/address-list/address-list.component';
import { CancelButtonComponent } from './_components/cancel-button/cancel-button.component';
import { SaveButtonComponent } from './_components/save-button/save-button.component';
import { RequiredFieldDirective } from 'src/app/core/directives/required-field.directive';

@NgModule({
  declarations: [
    UserProfileComponent,
    CreateProfileComponent,
    EditProfileComponent,
    DemographicDetailsComponent,
    EducationDetailsComponent,
    ExperienceDetailsComponent,
    AddressComponent,
    ButtonComponent,
    EducationDetailsListComponent,
    ExperienceDetailsListComponent,
    AddressListComponent,
    CancelButtonComponent,
    SaveButtonComponent,
    RequiredFieldDirective,
  ],
  imports: [CommonModule, UserProfileRoutingModule, MaterialModule],
})
export class UserProfileModule {}
