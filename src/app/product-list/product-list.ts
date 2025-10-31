import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  increase(code: string): void {
    this.productService.increaseReserved(code);
  }

  decrease(code: string): void {
    this.productService.decreaseReserved(code);
  }

  getTotal(): number {
    return this.products.reduce((total, product) => {
      return total + (product.price * product.reserved);
    }, 0);
  }
}
