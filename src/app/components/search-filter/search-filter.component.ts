import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgFor],
  templateUrl: './search-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFilterComponent implements OnInit {
  #fb = inject(FormBuilder);
  filterForm!: FormGroup;
  durations = [
    { value: '1-3', label: '1-3 hours' },
    { value: '3-6', label: '3-6 hours' },
    { value: '6-12', label: '6-12 hours' },
    { value: '12+', label: '12+ hours' },
  ];

  numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  ngOnInit(): void {
    this.filterForm = this.#fb.group({
      date: [''],
      duration: [''],
      number: [''],
      searchQuery: [''],
    });
  }

  onSubmit() {
    if (this.filterForm.valid) {
      console.log('Filter values:', this.filterForm.value);
      // Handle the search/filter logic here
    }
  }

  resetFilters() {
    this.filterForm.reset();
  }
}
