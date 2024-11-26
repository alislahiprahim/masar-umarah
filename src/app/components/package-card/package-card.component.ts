import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
export interface PackageCardData {
  id: number;
  image: string;
  title: string;
  hotelName: string;
  duration: string;
  airline: string;
  originalCost: number;
  discountedCost: number;
  discountPercentage: number;
}
@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './package-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .card-hover {
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      }
    `,
  ],
})
export class PackageCardComponent {
  package = input.required<PackageCardData>();

  onDetailsClick() {
    // Navigate to package details or open modal
    console.log('View details for package:', this.package().id);
  }

  onBookNowClick() {
    // Initiate booking process
    console.log('Book package:', this.package().id);
  }
}
