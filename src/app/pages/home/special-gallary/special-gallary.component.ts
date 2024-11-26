import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-special-gallary',
  standalone: true,
  imports: [NgFor, TranslateModule],
  templateUrl: './special-gallary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .gallery-section {
        background-color: #f9fafb;
      }

      .gallery-section h2 {
        color: #1f2937;
      }

      img {
        display: block;
        transition: transform 0.3s ease-in-out;
      }

      img:hover {
        transform: scale(1.05);
      }

      .columns-2 > *,
      .columns-3 > *,
      .columns-4 > * {
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class SpecialGallaryComponent {
  trips: any[] = [
    {
      id: 1,
      title: 'Mountain Expedition',
      location: 'Swiss Alps',
      imageUrl:
        'https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'June 15, 2024',
    },
    {
      id: 2,
      title: 'Tropical Paradise',
      location: 'Maldives',
      imageUrl:
        'https://images.pexels.com/photos/13650563/pexels-photo-13650563.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'July 22, 2024',
    },
    {
      id: 3,
      title: 'Desert Safari',
      location: 'Dubai',
      imageUrl:
        'https://images.pexels.com/photos/10969528/pexels-photo-10969528.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'August 5, 2024',
    },
    {
      id: 4,
      title: 'Northern Lights',
      location: 'Iceland',
      imageUrl:
        'https://images.pexels.com/photos/20406163/pexels-photo-20406163/free-photo-of-pier-and-motorboat-on-sea-coast-in-town.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'September 10, 2024',
    },
    {
      id: 5,
      title: 'Amazon Rainforest',
      location: 'Brazil',
      imageUrl:
        'https://images.pexels.com/photos/29536868/pexels-photo-29536868/free-photo-of-scenic-river-view-of-hoxter-and-idyllic-church.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'October 18, 2024',
    },
    {
      id: 6,
      title: 'Great Barrier Reef',
      location: 'Australia',
      imageUrl:
        'https://images.pexels.com/photos/29532867/pexels-photo-29532867/free-photo-of-breathtaking-ma-pi-leng-pass-in-ha-giang-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'November 30, 2024',
    },
  ];
}
