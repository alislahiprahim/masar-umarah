import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { StatisticsBarComponent } from '../../components/statistics-bar/statistics-bar.component';
import { SpecialPackagesComponent } from './special-packages/special-packages.component';
import { SpecialGallaryComponent } from './special-gallary/special-gallary.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslateModule,
    StatisticsBarComponent,
    SpecialPackagesComponent,
    SpecialGallaryComponent,
    CustomerReviewsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  videoUrl: SafeResourceUrl;
  isVideoLoaded: boolean = false;
  constructor(private sanitizer: DomSanitizer) {
    // YouTube video URL with necessary parameters for autoplay
    const videoId = 'L-YyR1oN66w'; // Replace with your video ID
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0;modestbranding=1&rel=0&playlist=${videoId};rel=0&playsinline=1&enablejsapi=1`;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  ngOnInit(): void {
    // if (!window.YT) {
    //   const tag = document.createElement('script');
    //   tag.src = 'https://www.youtube.com/iframe_api';
    //   document.body.appendChild(tag);
    // }
  }

  onVideoLoad() {
    // Delay to ensure video is actually playing
    setTimeout(() => {
      console.log('Video loaded');

      this.isVideoLoaded = true;
    }, 1000);
  }
}
