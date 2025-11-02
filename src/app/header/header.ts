import { Component } from '@angular/core';

// Header component - displays the store name at the top
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Store name variable
  name = "Tech Store";
}
