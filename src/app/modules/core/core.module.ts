import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MdMenuModule, MdIconModule, MdButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdMenuModule, MdIconModule, MdButtonModule
  ],
  declarations: [HomeComponent, SettingsComponent]
})
export class CoreModule { }
