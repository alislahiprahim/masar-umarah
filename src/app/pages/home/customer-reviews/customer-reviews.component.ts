import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperOptions } from 'swiper/types';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { NgFor, NgIf } from '@angular/common';
import { SwiperContainer } from 'swiper/element';

interface Review {
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [TranslateModule, NgFor],
  templateUrl: './customer-reviews.component.html',
  styleUrl: './customer-reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class CustomerReviewsComponent {
  private readonly swiperContainer =
    viewChild.required<ElementRef<SwiperContainer>>('swiperContainer');

  modules = [Pagination, Navigation, Autoplay];

  swiperConfig: SwiperOptions = {
    modules: this.modules,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // Mobile: 1 slide per view
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // Tablet: 2 slides per view
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      // Desktop: 3 slides per view
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    injectStyles: [
      `
      .swiper-button-next, .swiper-button-prev{
      color:var(--button-color) !important
      }
      `,
    ],
  };
  reviews: Review[] = [
    {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      rating: 5,
      text: 'Absolutely amazing product! It exceeded all my expectations.',
    },
    {
      name: 'Mike Thompson',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      rating: 4,
      text: 'Great quality and excellent customer service. Highly recommend!',
    },
    {
      name: 'Emily Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      rating: 5,
      text: 'A game-changing solution that transformed our workflow.',
    },
    {
      name: 'David Kim',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      rating: 4,
      text: 'Impressive functionality and user-friendly interface.',
    },
    {
      name: 'Alex Chen',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      rating: 5,
      text: 'Exceeded all our expectations. Truly remarkable product!',
    },
  ];
  constructor() {
    effect(() => {
      const swiperElement = this.swiperContainer().nativeElement;

      Object.assign(swiperElement, this.swiperConfig);
      swiperElement.initialize();
    });
  }

  renderStars(rating: number): string[] {
    return Array(5)
      .fill(0)
      .map((_, index) => (index < rating ? '★' : '☆'));
  }
}
