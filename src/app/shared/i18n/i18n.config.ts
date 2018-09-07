import { TranslateCompiler, TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { InjectionToken, Provider } from '@angular/core';
import * as _ from 'lodash';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

interface TranslationData { [p: string]: any; }

export const I18N = new InjectionToken('Module internationalization data');

export function i18nProvider(i18n: TranslationData): Provider {
  return {
    provide: I18N,
    useValue: _.cloneDeep(i18n),
    multi: true
  };
}

export class TsTranslateLoader implements TranslateLoader {
  private i18n: TranslationData;

  constructor(private translation: TranslationData[]) {
    const i18n = _.isArray(this.translation) ? this.translation : [this.translation];
    this.i18n = _.merge({}, ...i18n);
  }

  getTranslation(lang: string): Observable<any> {
    return of(this.i18n[lang]);
  }
}

export function i18nLoaderFactory(translation: TranslationData[]) {
  return new TsTranslateLoader(translation);
}

export function i18nConfig(): TranslateModuleConfig {
  return {
    isolate: true,
    loader: {
      provide: TranslateLoader,
      useFactory: (i18nLoaderFactory),
      deps: [
        I18N
      ]
    },
    // compiler: {
    //   provide: TranslateCompiler,
    //   useClass: TranslateMessageFormatCompiler
    // }
  };
}
