import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Injectable, Provider } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class I18nResolver implements Resolve<any> {
  constructor(private translateService: TranslateService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.translateService.currentLang = 'en'; // this.translateService.getBrowserLang();
    this.translateService.defaultLang = 'en';
    return this.translateService.getTranslation(this.translateService.currentLang);
  }
}

export const I18nResolverProvider: Provider = I18nResolver;
