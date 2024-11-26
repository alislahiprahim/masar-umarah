import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-statistics-bar',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <div class="statistics-container">
      <div class="stats-wrapper bg-white shadow-lg rounded-xl p-6">
        <div
          class="flex flex-wrap flex-row gap-3 justify-center sm:justify-between items-center w-full"
        >
          @for(stat of statistics; track stat.title; let last = $last){

          <div class="flex flex-col items-center justify-center text-center">
            <div class="stat-icon mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 mx-auto {{ stat.color }}"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  *ngIf="stat.icon === 'users'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
                <path
                  *ngIf="stat.icon === 'globe'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  *ngIf="stat.icon === 'star'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div
              class="stat-value text-lg md:text-2xl font-bold {{ stat.color }}"
            >
              {{ stat.value.toLocaleString() }}
            </div>
            <div class="stat-title text-xs md:text-sm text-gray-500 mt-1">
              {{ stat.title }}
            </div>
          </div>
          @if(!last){
          <div class="sm:h-16 sm:w-px bg-gray-300 mx-0 sm:mx-4 "></div>
          } }
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
      .statistics-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;

    .stats-wrapper {
      width: 100%;
      max-width: 800px;
    }
}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsBarComponent {
  statistics = [
    {
      title: 'Total Travelers',
      value: 50000,
      icon: 'users',
      color: 'text-accent',
    },
    {
      title: 'Total Travels',
      value: 15000,
      icon: 'globe',
      color: 'text-accent',
    },
    {
      title: 'Traveler Reviews',
      value: 45000,
      icon: 'star',
      color: 'text-accent',
    },
  ];
}
