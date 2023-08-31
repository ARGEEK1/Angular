import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //name!: string; // se coloca el signo de ! porque no se está deficiendo, solo se está declarando.
  // imageUrl =
  //   'https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png';
  title = 'reto01';
  cities: City[] = []; //
  selection!: City;
  criteria = '';

  constructor(private readonly dataSvc: DataService) {}

  ngOnInit(): void {
    this.dataSvc.selectedCity$.subscribe((city: City) => (this.selection = city));
    this.dataSvc.getCities().subscribe((res) => {
      this.cities = [...res];
    });
  }

  updateCity(city: City): void {
    this.dataSvc.updateCity(city).subscribe(() => {
      const temArray = this.cities.filter((value) => value._id !== city._id);
      this.cities = [...temArray, city];
      this.onClear();
    });
  }

  addNewCity(city: string): void {
    this.dataSvc.addNewCity(city).subscribe((res) => {
      this.cities.push(res);
    });
  }

  onCitySelected(city: City): void {
    //this.selection = city;
    this.dataSvc.setCity(city);
  }

  onCityDelete(id: string): void {
    if (confirm('Are you sure you want to delete this city')) {
      this.dataSvc.deleteCity(id).subscribe(() => {
        const temArray = this.cities.filter((city) => city._id !== id);
        this.cities = [...temArray];
        this.onClear();
      });
    }
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: '',
    };
  }
}
