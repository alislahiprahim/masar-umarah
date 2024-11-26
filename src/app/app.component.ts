import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LanguageService } from './core/translations/language.service';
import { CustomerReviewsComponent } from './pages/home/customer-reviews/customer-reviews.component';
import { FooterComponent } from './layout/navbar/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    CustomerReviewsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [LanguageService],
})
export class AppComponent implements OnInit {
  #languageService = inject(LanguageService);
  toggleTheme() {
    const html = document.querySelector('html');
    const currentTheme = html?.getAttribute('data-theme');
    html?.setAttribute(
      'data-theme',
      currentTheme === 'lightCustom' ? 'darkCustom' : 'lightCustom'
    );
  }
  ngOnInit(): void {
    this.#languageService.setLanguage('ar');
    // register Swiper custom elements
  }
}
