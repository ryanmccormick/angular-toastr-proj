import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgToastrComponent } from '../../ng-toastr/ng-toastr.component';


@NgModule({
  declarations: [
    AppComponent,
    NgToastrComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
