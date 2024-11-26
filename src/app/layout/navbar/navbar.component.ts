import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MiniSearchComponent } from '../../components/mini-search/mini-search.component';
import { RegisterLoginHeaderComponent } from '../../components/register-login-header/register-login-header.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MiniSearchComponent,
    UserProfileComponent,
    RegisterLoginHeaderComponent,
    RouterLink,
    NgFor,
    NgIf,
    TranslateModule,
  ],
  templateUrl: './navbar.component.html',
  styles: [
    `
      :host {
        display: block;
        position: sticky;
        top: 0;
        z-index: 50;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  links = [
    { name: 'HOME.HOME', route: '/home' },
    { name: 'PACKAGES', route: '/packages' },
    { name: 'GALLARY', route: '/gallary' },
    { name: 'ABOUT_US', route: '/about' },
    { name: 'CONTACT_US', route: '/about' },
  ];
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
