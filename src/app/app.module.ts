import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SandboxModule } from './sandbox/sandbox.module';
import { TranslateModule } from '@ngx-translate/core';
import { i18nConfig, i18nProvider } from '@app/shared/i18n/i18n.config';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { i18nInitializerProvider } from '@app/shared/i18n/i18n.initializer';
import i18n from './app.i18n';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule.forRoot(),
    TranslateModule.forRoot(i18nConfig()),

    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,

    SandboxModule
  ],
  providers: [
    i18nInitializerProvider,
    i18nProvider(i18n)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
