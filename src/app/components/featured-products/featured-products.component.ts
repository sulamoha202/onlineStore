import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/Product.model';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.featuredProducts = products.slice(0, 4);
    });
  }
}
