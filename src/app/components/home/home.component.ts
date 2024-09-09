import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredProductTitle: string = 'Featured Products';
  recentProductTitle: string = 'Recent Products';
}
