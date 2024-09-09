import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/Product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id  = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getProduct(id).subscribe(product => {
        this.product = product;
      });
    }
  }

  agregarAlCarrito(product: Product) {
    console.log('Adding to cart:', product);
    alert("Product \""+ product.name +"\" added to the cart")
  }
}
