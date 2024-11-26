import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register-login-header',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <!-- Desktop Auth Buttons -->
    <div class=" lg:flex items-center gap-2">
      <button
        class="btn btn-sm btn-accent hover:btn-primary"
        (click)="openLoginModal()"
      >
        {{ 'LOGIN' | translate }}
      </button>
      <!-- <button class="btn btn-sm btn-primary" (click)="openRegisterModal()">
        {{ 'REGISTER' | translate }}
      </button> -->
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterLoginHeaderComponent {
  openLoginModal(): void {
    // Implement login modal logic
    console.log('Opening login modal');
  }

  openRegisterModal(): void {
    // Implement register modal logic
    console.log('Opening register modal');
  }
}
