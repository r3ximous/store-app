# Rex's Tech Store - Angular Store App

## Project Overview
This is an Angular-based store application with product listing, reservation functionality, and a clean, modern UI.

## Components

### 1. Header Component (`src/app/header/`)
- Displays the store name: "Rex's Tech Store"
- Purple gradient background
- Responsive design

### 2. Product List Component (`src/app/product-list/`)
- Displays 5 tech products in a table
- Each product has:
  - Code (e.g., P001)
  - Name
  - Price (formatted with currency pipe)
  - Description
  - Reserved quantity
  - Increase (+) and Decrease (−) buttons
  - Subtotal (price × reserved)
- Total row at the bottom showing sum of all reservations

### 3. Footer Component (`src/app/footer/`)
- Copyright notice: © 2025 Rex Marciano and Team
- Team member names (update in `footer.html`)
- Purple gradient background matching header

### 4. Product Service (`src/app/services/product.ts`)
- Manages the mock product database
- Methods:
  - `getProducts()` - Returns all products
  - `increaseReserved(code)` - Increments reserved count
  - `decreaseReserved(code)` - Decrements reserved count (minimum 0)

### 5. Product Model (`src/app/models/product.ts`)
- TypeScript interface defining product structure:
  - code: string
  - name: string
  - price: number
  - description: string
  - reserved: number

## Running the Application

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Open browser:**
   Navigate to `http://localhost:4200/`

## Taking Screenshots for Assignment

### Screenshot 1: Initial State
1. Open the app at `http://localhost:4200/`
2. Ensure all products show `Reserved: 0`
3. Ensure Total Price shows `$0.00`
4. Take a full-page screenshot

### Screenshot 2: After Reservations
1. Click the `+` button next to **Laptop (P001)** **twice** (Reserved should be 2)
2. Click the `+` button next to **Mechanical Keyboard (P003)** **once** (Reserved should be 1)
3. Verify the Total Price shows: **$3,100.00**
   - (1500 × 2) + (100 × 1) = 3000 + 100 = 3100
4. Take a full-page screenshot

## Features Implemented

✅ Header with store name  
✅ Product table with 5 products  
✅ Increase/Decrease buttons for reservations  
✅ Real-time subtotal calculation  
✅ Total price calculation  
✅ Footer with copyright and team names  
✅ Service-based architecture  
✅ TypeScript interfaces for type safety  
✅ Angular pipes for currency formatting  
✅ Responsive CSS styling  
✅ Gradient backgrounds  
✅ Hover effects on buttons  

## Customization

### Update Team Names
Edit `src/app/footer/footer.html` and replace placeholder names:
```html
<p class="team-names">Team Members: Rex Marciano, [Name 2], [Name 3]</p>
```

### Update Store Name
Edit `src/app/header/header.ts`:
```typescript
storeName = "Your Store Name Here";
```

### Add/Remove Products
Edit `src/app/services/product.ts` and modify the `products` array.

## Project Structure
```
src/app/
├── models/
│   └── product.ts          # Product interface
├── services/
│   └── product.ts          # Product service (mock database)
├── header/
│   ├── header.ts           # Header component
│   ├── header.html         # Header template
│   └── header.css          # Header styles
├── product-list/
│   ├── product-list.ts     # Product list component with logic
│   ├── product-list.html   # Product table template
│   └── product-list.css    # Product list styles
├── footer/
│   ├── footer.ts           # Footer component
│   ├── footer.html         # Footer template
│   └── footer.css          # Footer styles
├── app.ts                  # Root component
├── app.html                # Root template
└── app.css                 # Root styles
```

## Technologies Used
- Angular 20.3.0
- TypeScript
- RxJS
- CSS3 (Gradients, Flexbox)
- Angular CLI

## Assignment Notes
- All code is original and follows Angular best practices
- Uses Angular's dependency injection for services
- Implements proper component communication
- Uses TypeScript for type safety
- Follows Angular style guide conventions

---

**Created by:** Rex Marciano  
**Date:** October 31, 2025  
**Course:** [Your Course Name]
