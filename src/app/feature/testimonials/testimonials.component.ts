import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  imports: [CarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TESTIMONIALSComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1500,
    navSpeed: 700,
    margin: 40,
    responsive: {
      0: {
        items: 1
      },
      1300: {
        items: 2
      }
    },
  }
}
