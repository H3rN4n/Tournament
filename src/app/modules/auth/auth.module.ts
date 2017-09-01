import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfService } from './providers/af.service';

import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Auth', reducers)
  ],
  exports: [],
  declarations: [],
  providers: [ AfService ]
})
export class AuthModule { }