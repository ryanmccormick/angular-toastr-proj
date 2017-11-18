import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgToastrModule } from '../../ng-toastr/ng-toastr.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
