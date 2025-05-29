import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/_components/header/header.component';
import { FooterComponent } from './core/_components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material/material.module';
import { HttpBaseService } from './core/_services/http-base/http-base.service';
import { HttpClientModule } from '@angular/common/http';
import { SnackbarService } from './shared/_services/toast-message/snackbar.service';
import { SpinnerComponent } from './shared/_components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [HttpBaseService, SnackbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
