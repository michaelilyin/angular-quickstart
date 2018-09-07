import { APP_INITIALIZER, Provider } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export function i18nInitializerFactory(translateService: TranslateService): () => void {
  translateService.currentLang = 'en'; // translateService.getBrowserLang();
  translateService.defaultLang = 'en';
  return () => {
    translateService.getTranslation(translateService.currentLang)
      .subscribe(translation => {});
  };
}

export const i18nInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: i18nInitializerFactory,
  multi: true,
  deps: [TranslateService]
};
