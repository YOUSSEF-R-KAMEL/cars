import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-how-it-work',
  imports: [CarouselModule],
  templateUrl: './how-it-work.component.html',
  styleUrl: './how-it-work.component.scss'
})
export class HowItWorkComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1500,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
  }

}
