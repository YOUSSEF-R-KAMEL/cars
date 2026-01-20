export interface IDataResponse {
  cars: ICar[];
}

export interface ICar {
  id: number;
  car: string;
  car_model: string;
  car_color: string;
  car_model_year: number;
  car_vin: string;
  price: string;
  availability: boolean;
  image: string;
  rating: number;
  reviews: number;
  passengers: number;
  doors: number;
  luggage: number;
  transmission: string;
  airConditioning: boolean;
}
