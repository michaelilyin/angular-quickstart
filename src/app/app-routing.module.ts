import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from '@app/core/landing/landing.component';

const dialogRoutes: Routes = [
  {
    path: 'users',
    loadChildren: '@app/users/dialogs/dialogs.module#DialogsModule',
    outlet: 'dialog'
  },
  {
    path: 'core',
    loadChildren: '@app/core/dialogs/dialogs.module#DialogsModule',
    outlet: 'dialog'
  }
];

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'landing',
        component: LandingComponent
      }, {
        path: 'home',
        loadChildren: '@app/home/home.module#HomeModule'
      },
      {
        path: 'admin',
        loadChildren: '@app/admin/admin.module#AdminModule'
      }
    ]
  },
  ...dialogRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
