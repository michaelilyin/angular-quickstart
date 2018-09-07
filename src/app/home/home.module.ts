import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@app/home/home.component';
import { HomeRoutingModule } from '@app/home/home-routing.module';
import { HomeSharedModule } from '@app/home/shared/shared.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HomeSharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
  constructor() {
    console.info('create home module')
  }
}
