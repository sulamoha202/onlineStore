import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/Product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl = "http://localhost:8080/api/products";

  private testProducts: Product[]=[
    { id: 1, name: 'Gaming Laptop Xtreme', description: 'Gaming laptop with RTX 3080, 32GB RAM, 1TB SSD', price: 2500, imageUrl: "" },
    { id: 2, name: 'Ultra HD 4K Monitor', description: '27-inch 4K monitor with HDR and 144Hz refresh rate', price: 600, imageUrl: "" },
    { id: 3, name: 'Wireless Earbuds Pro', description: 'Noise-cancelling wireless earbuds with 24-hour battery life', price: 200, imageUrl: "" },
    { id: 4, name: 'Bluetooth Speaker', description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design', price: 120, imageUrl: "" },
    { id: 5, name: 'VR Headset', description: 'Virtual reality headset with motion controllers and 4K display', price: 400, imageUrl: "" },
    { id: 6, name: 'Smart Home Hub', description: 'Voice-controlled smart home hub with IoT connectivity', price: 150, imageUrl: "" },
    { id: 7, name: 'External SSD', description: '2TB external SSD with USB-C for fast data transfer', price: 300, imageUrl: "" },
    { id: 8, name: 'Smart Thermostat', description: 'Wi-Fi enabled smart thermostat for home automation', price: 180, imageUrl: "" },
    { id: 9, name: 'Gaming Chair', description: 'Ergonomic gaming chair with lumbar support and RGB lighting', price: 250, imageUrl: "" },
    { id: 10, name: 'Mechanical Keyboard', description: 'Mechanical keyboard with customizable RGB and Cherry MX switches', price: 150, imageUrl: "" }
  ]
  ;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return of(this.testProducts);
    //return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<Product | undefined> {
    const product = this.testProducts.find(p => p.id === id);
    return of(product);
    //return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

}
