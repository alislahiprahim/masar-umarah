import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  PackageCardComponent,
  PackageCardData,
} from '../../../components/package-card/package-card.component';

@Component({
  selector: 'app-special-packages',
  standalone: true,
  imports: [NgFor, PackageCardComponent],
  template: `
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Discover our flexible packages designed to meet your unique needs.
            Whether you're a startup or an enterprise, we have a solution for
            you.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <app-package-card
            *ngFor="let pkg of specialPackages"
            [package]="pkg"
          ></app-package-card>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .special-packages {
        background-color: #f9fafb;
      }

      .package-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .package-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class SpecialPackagesComponent {
  specialPackages: PackageCardData[] = [
    {
      id: 1,
      image:
        'https://kit.creativemox.com/almahyra/wp-content/uploads/sites/23/2023/12/mecca-saudi-arabia-at-night-e1701589802777.jpg',
      title: 'باقة العمرة الفاخرة',
      hotelName: 'فندق هيلتون مكة',
      duration: '٧ أيام',
      airline: 'الخطوط السعودية',
      originalCost: 5000,
      discountedCost: 4500,
      discountPercentage: 10,
    },
    {
      id: 2,
      image:
        'https://kit.creativemox.com/almahyra/wp-content/uploads/sites/23/2023/12/mecca-saudi-arabia-at-night-e1701589802777.jpg',
      title: 'باقة الحج الاقتصادية',
      hotelName: 'فندق كونكورد مكة',
      duration: '١٠ أيام',
      airline: 'طيران الإمارات',
      originalCost: 10000,
      discountedCost: 8500,
      discountPercentage: 15,
    },
    {
      id: 3,
      image:
        'https://kit.creativemox.com/almahyra/wp-content/uploads/sites/23/2023/12/mecca-saudi-arabia-at-night-e1701589802777.jpg',
      title: 'باقة الحج الاقتصادية',
      hotelName: 'فندق كونكورد مكة',
      duration: '١٠ أيام',
      airline: 'طيران الإمارات',
      originalCost: 10000,
      discountedCost: 8500,
      discountPercentage: 15,
    },
    {
      id: 4,
      image:
        'https://kit.creativemox.com/almahyra/wp-content/uploads/sites/23/2023/12/mecca-saudi-arabia-at-night-e1701589802777.jpg',
      title: 'باقة الحج الاقتصادية',
      hotelName: 'فندق كونكورد مكة',
      duration: '١٠ أيام',
      airline: 'طيران الإمارات',
      originalCost: 10000,
      discountedCost: 8500,
      discountPercentage: 15,
    },
    {
      id: 5,
      image:
        'https://kit.creativemox.com/almahyra/wp-content/uploads/sites/23/2023/12/mecca-saudi-arabia-at-night-e1701589802777.jpg',
      title: 'باقة الحج الاقتصادية',
      hotelName: 'فندق كونكورد مكة',
      duration: '١٠ أيام',
      airline: 'طيران الإمارات',
      originalCost: 10000,
      discountedCost: 8500,
      discountPercentage: 15,
    },
  ];
}
