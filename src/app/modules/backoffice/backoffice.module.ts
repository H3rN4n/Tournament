import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoPanelComponent } from './components/bo-panel/bo-panel.component';
import { RouterModule } from '@angular/router';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  BOReducer
} from './reducers';

import {
  MdListModule,
  MdCardModule,
  MdIconModule,
  MdSelectModule,
  MdButtonModule,
  MdInputModule,
  MdSnackBarModule
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
    StoreModule.forFeature('Bo', BOReducer)
  ],
    declarations: [BoPanelComponent]
})
export class BackofficeModule { }
