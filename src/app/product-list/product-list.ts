import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductService } from '../services/product';

// Product list component - displays products in a table
@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  // Array to store all products
  products: Product[] = [];

  // Inject the product service to get data
  constructor(private productService: ProductService) {}

  // Initialize component - load products when page loads
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  // Add one to the reserved count
  addOne(code: string): void {
    this.productService.increaseReserved(code);
  }

  // Remove one from the reserved count
  removeOne(code: string): void {
    this.productService.decreaseReserved(code);
  }

  // Calculate total price of all reserved products
  calculateTotal(): number {
    let total = 0;
    // Loop through each product
    for (let product of this.products) {
      // Add price times reserved quantity
      total += product.price * product.reserved;
    }
    return total;
  }
}
