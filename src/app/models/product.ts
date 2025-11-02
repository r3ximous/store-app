// Product model - defines what a product looks like
export interface Product {
  code: string;       // Product code (e.g. P001)
  name: string;       // Product name
  price: number;      // Price in dollars
  description: string; // Product description
  reserved: number;   // How many are reserved
}
