import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [
    { id: 1, name: 'Gaming Laptops', description: 'High-performance laptops designed for gaming.', imageUrl: '' },
    { id: 2, name: '4K Monitors', description: 'Monitors with 4K resolution for ultra-clear display.', imageUrl: '' },
    { id: 3, name: 'Wireless Earbuds', description: 'Compact and wireless earbuds offering high-quality audio.', imageUrl: '' },
    { id: 4, name: 'Bluetooth Speakers', description: 'Portable Bluetooth speakers with high-quality sound and battery life.', imageUrl: '' },
    { id: 5, name: 'Smart Home Hubs', description: 'Devices that control and manage smart home systems.', imageUrl: '' },
    { id: 6, name: 'External SSDs', description: 'High-speed external solid-state drives for fast data storage.', imageUrl: '' },
    { id: 7, name: 'Smart Thermostats', description: 'Wi-Fi enabled thermostats for home temperature control.', imageUrl: '' },
    { id: 8, name: 'Virtual Reality Headsets', description: 'Headsets for immersive virtual reality experiences.', imageUrl: '' },
    { id: 9, name: 'Mechanical Keyboards', description: 'Keyboards with mechanical switches for a better typing experience.', imageUrl: '' },
    { id: 10, name: 'Gaming Chairs', description: 'Ergonomic chairs designed for long gaming sessions with added comfort.', imageUrl: '' },
    { id: 11, name: 'Smartwatches', description: 'Wearable technology for fitness tracking and notifications.', imageUrl: '' },
    { id: 12, name: 'Action Cameras', description: 'Compact cameras designed for capturing action-packed moments.', imageUrl: '' },
    { id: 13, name: 'Digital Cameras', description: 'High-resolution cameras for photography enthusiasts and professionals.', imageUrl: '' },
    { id: 14, name: 'Home Security Cameras', description: 'Cameras designed for monitoring and securing home environments.', imageUrl: '' },
    { id: 15, name: 'Bluetooth Headsets', description: 'Wireless headsets for hands-free communication and audio.', imageUrl: '' },
    { id: 16, name: 'Tablets', description: 'Portable computing devices with touchscreens for versatile use.', imageUrl: '' },
    { id: 17, name: 'USB Hubs', description: 'Devices that expand the number of USB ports for connecting peripherals.', imageUrl: '' },
    { id: 18, name: 'Laptop Stands', description: 'Stands designed to elevate laptops for better ergonomics and cooling.', imageUrl: '' },
    { id: 19, name: 'Network Routers', description: 'Routers providing high-speed internet connectivity for home and office.', imageUrl: '' },
    { id: 20, name: 'Smart Light Bulbs', description: 'Light bulbs that can be controlled remotely or via voice commands.', imageUrl: '' }
  ];


  constructor() { }

  getCategories():Observable<Category[]>{
    return of(this.categories);
  }
}
