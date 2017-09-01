import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { TeamsModule } from './../teams/teams.module';
import { CoreModule } from './../core/core.module';

import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    TeamsModule,
    CoreModule,
    RouterModule.forRoot(routes, { useHash: false }) //enableTracing: true
  ],
  declarations: []
})
export class RoutingModule { }
