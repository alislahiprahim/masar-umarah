import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  template: `
    @if(viewPort()==='web'){
    <!-- Desktop User Profile (Dropdown) -->
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            [src]="user?.avatarUrl || 'assets/default-avatar.png'"
            alt="profile"
          />
        </div>
      </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a (click)="navigateToProfile()">Profile</a></li>
        <li><a (click)="openSettings()">Settings</a></li>
        <li><a (click)="logout()">Logout</a></li>
      </ul>
    </div>
    }@else {

    <!-- Mobile User Profile (Accordion) -->
    <ul class="menu user-profile-menu rounded-box w-56">
      <li>
        <details>
          <summary>My profile</summary>
          <ul>
            <li><a (click)="navigateToProfile()">Profile</a></li>
            <li><a (click)="openSettings()">Settings</a></li>
            <li><a (click)="logout()">Logout</a></li>
          </ul>
        </details>
      </li>
    </ul>
    }
  `,
  styles: [
    `
      summary {
        padding-left: 0.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent {
  viewPort = input.required<'web' | 'mobile'>();
  isProfileOpen: boolean = false;
  user: any = {
    avatarUrl: 'assets/default-avatar.png',
    // Add other user properties as needed
  };
  navigateToProfile(): void {
    // Implement navigation logic
    console.log('Navigating to profile');
  }

  openSettings(): void {
    // Implement settings logic
    console.log('Opening settings');
  }

  logout(): void {
    // Implement logout logic
    console.log('Logging out');
  }
}
