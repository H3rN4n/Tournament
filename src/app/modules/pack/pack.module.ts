import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import {
//   BOReducer
// } from './reducers';

import { SharedModule } from './../shared/shared.module';
import { OpenPackComponent } from './components/open-pack/open-pack.component';
import { CardComponent } from './components/card/card.component';

import {
  MdListModule,
  MdCardModule,
  MdIconModule,
  MdSelectModule,
  MdButtonModule,
  MdInputModule,
  MdSnackBarModule,
} from '@angular/material';

import { routing } from './routes';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MdListModule,
    MdIconModule,
    MdSelectModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    MdCardModule,
    SharedModule
    // StoreModule.forFeature('Bo', BOReducer)
  ],
  declarations: [OpenPackComponent, CardComponent]
})
export class PackModule { }
