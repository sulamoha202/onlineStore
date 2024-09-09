import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productos: Product[] = [];
  @Input() title:string = 'Default Title';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.productos = products;
    });
  }
}
