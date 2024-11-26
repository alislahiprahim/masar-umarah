import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCALSTORAGEKEYS } from '../models/consts';
import { Arabic } from './i18n/ar';
import { English } from './i18n/en';
import { isPlatformBrowser } from '@angular/common';
@Injectable()
export class LanguageService {
  #translate = inject(TranslateService);
  private platformId!: Object;
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;
  }
  setLanguage(lang: 'en' | 'ar') {
    if (isPlatformBrowser(this.platformId))
      localStorage.setItem(LOCALSTORAGEKEYS.LANG, lang);
    this.#translate.use(lang);
    this.#translate.setDefaultLang(lang);
    this.#translate.use(lang);
    this.#translate.setTranslation(lang, lang === 'ar' ? Arabic : English);
  }

  getCurrentLanguage(): string {
    return (
      this.#translate.currentLang ||
      localStorage.getItem(LOCALSTORAGEKEYS.LANG) ||
      'ar'
    );
  }
}
