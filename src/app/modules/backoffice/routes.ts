import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoPanelComponent } from './components/bo-panel/bo-panel.component';

const routes: Routes = [
  { path: '', component: BoPanelComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
