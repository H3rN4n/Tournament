import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenPackComponent } from './components/open-pack/open-pack.component';

const routes: Routes = [
  { path: '', component: OpenPackComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
