import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      code: 'P001',
      name: 'Laptop',
      price: 1500,
      description: '15-inch high-performance laptop',
      reserved: 0
    },
    {
      code: 'P002',
      name: 'Wireless Headphones',
      price: 200,
      description: 'Noise-cancelling Bluetooth headphones',
      reserved: 0
    },
    {
      code: 'P003',
      name: 'Mechanical Keyboard',
      price: 100,
      description: 'RGB mechanical gaming keyboard',
      reserved: 0
    },
    {
      code: 'P004',
      name: 'Wireless Mouse',
      price: 50,
      description: 'Ergonomic wireless mouse',
      reserved: 0
    },
    {
      code: 'P005',
      name: 'USB-C Hub',
      price: 75,
      description: '7-in-1 USB-C docking station',
      reserved: 0
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  increaseReserved(code: string): void {
    const product = this.products.find(p => p.code === code);
    if (product) {
      product.reserved++;
    }
  }

  decreaseReserved(code: string): void {
    const product = this.products.find(p => p.code === code);
    if (product && product.reserved > 0) {
      product.reserved--;
    }
  }
}
