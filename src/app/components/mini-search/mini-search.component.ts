import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mini-search',
  standalone: true,
  imports: [FormsModule, NgClass, TranslateModule],
  template: `
    <label
      class="input input-sm input-bordered flex items-center gap-2"
      [class.mb-4]="viewPort() === 'mobile'"
    >
      <input
        type="text"
        [(ngModel)]="searchQuery"
        (input)="onSearch()"
        [placeholder]="'SEARCH' | translate"
        class="grow"
        [ngClass]="{
          'w-full': viewPort() === 'mobile',
          'w-48': viewPort() === 'web'
        }"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="h-4 w-4 opacity-70"
      >
        <path
          fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniSearchComponent {
  viewPort = input.required<'web' | 'mobile'>();

  searchQuery: string = '';
  onSearch(): void {
    // Implement search logic
    console.log('Searching for:', this.searchQuery);
  }
}
