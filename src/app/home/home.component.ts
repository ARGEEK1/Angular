import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name!: string; // se coloca el signo de ! porque no se está deficiendo, solo se está declarando. 
  citeies = ['Caracas', 'Madrid', 'Santiago', 'Lima']; //
  title = 'reto01';
  imageUrl = 'https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png';
  selection!: string;
  criteria= '';

  addNewCity (city: string): void{
    this.citeies.push(city);
  }

  onCityClicked (city: string) : void {
    this.selection = city;
  }

  onClear() :void {
    this.selection= '';
  }
}
