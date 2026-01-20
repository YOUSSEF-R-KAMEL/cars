import { Component, inject, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars/cars.service';
import { ICar } from '../../shared/models/ICar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-all-cars',
  imports: [FormsModule, CommonModule, RouterLink, NgxPaginationModule],
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.scss',
})
export class AllCarsComponent implements OnInit {
  CarsService = inject(CarsService);
  cars: ICar[] = [];
  filteredCars: ICar[] = [];

  imagePaths: string[] = [
    'images/cars/car_01.png',
    'images/cars/car_02.png',
    'images/cars/car_03.png',
    'images/cars/car_04.png',
  ];
  searchVal: string = '';
  // Paginator
  page: number = 1;
  itemsPerPage: number = 12;


  ngOnInit(): void {
    this.getPopularCars();
  }

  getPopularCars(): void {
    this.CarsService.getAllCars().subscribe((res) => {
      this.cars = res.cars.map((car, index) => ({
        ...car,
        image: this.imagePaths[index % this.imagePaths.length],
        rating: Math.floor(Math.random() * 5) + 1,
        reviews: Math.floor(Math.random() * 500) + 1,
      }));
      this.filteredCars = [...this.cars];
    });
  }

  onSearch(): void {
    const searchTerm = this.searchVal.toLowerCase().trim();
    this.filteredCars = this.cars.filter(
      (car) =>
        car.car.toLowerCase().includes(searchTerm) ||
        car.car_model.toLowerCase().includes(searchTerm),
    );

  this.page = 1;

  }
}
