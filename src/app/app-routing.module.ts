import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WidgetContainerComponent} from './widget-container/widget-container.component';

const routes: Routes = [
  {
    path: 'home',
    component: WidgetContainerComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
