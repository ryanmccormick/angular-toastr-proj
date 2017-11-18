import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgToastrComponent } from './ng-toastr.component';
import { NgToastrService } from './ng-toastr.service';

const sharedComponents = [NgToastrComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [sharedComponents],
  declarations: [sharedComponents],
  providers: [NgToastrService]
})
export class NgToastrModule { }
