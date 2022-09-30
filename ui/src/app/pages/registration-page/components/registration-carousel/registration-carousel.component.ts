import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'registration-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registration-carousel.component.html',
  styleUrls: ['./registration-carousel.component.scss'],
})
export class RegistrationCarouselComponent {
  images = [
    {
      src: 'assets/registration-carousel/registration-carousel-1.jpg',
      alt: 'image 1',
    },
    {
      src: 'assets/registration-carousel/registration-carousel-2.jpg',
      alt: 'image 2',
    },
    {
      src: 'assets/registration-carousel/registration-carousel-3.jpg',
      alt: 'image 3',
    },
  ];

  interval!: any;
  src: string;
  alt: string;
  i: number;

  constructor() {
    this.i = 0;
    this.src = this.images[this.i].src;
    this.alt = this.images[this.i].alt;
  }

  ngAfterViewInit() {
    this.interval = setInterval(() => {
      this.i = (this.i + 1) % this.images.length;
      this.src = this.images[this.i].src;
      this.alt = this.images[this.i].alt;
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
