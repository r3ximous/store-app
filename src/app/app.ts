import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProductList } from './product-list/product-list';
import { Footer } from './footer/footer';

// Main app component - puts together all the pieces
@Component({
  selector: 'app-root',
  imports: [Header, ProductList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Rex\'s Tech Store';
}
