import { Component } from '@angular/core';
import { DetaillService } from '../services/detaill.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent {
    products = [
    {id: 1, name: 'Apple Watch', price: '109', color: 'Black', available: 'Available', image: '/assets/products/product-image1.jpg'},
    {id: 2, name: 'Samsung Galaxy Buds', price: '99', color: 'brown', available: 'Not Available', image: '/assets/products/product-image2.jpg'},
    {id: 3, name: 'Sony WH-1000XM4 Headphones', price: '299', color: 'Gray', available: 'Available', image: '/assets/products/product-image3.jpg'},
    {id: 4, name: 'Dell XPS 13 Laptop', price: '1299', color: 'Silver', available: 'Not Available', image: '/assets/products/product-image4.jpg'},
    {id: 5, name: 'Amazon Kindle Paperwhite', price: '139', color: 'Blue', available: 'Available', image: '/assets/products/product-image5.jpg'},
    {id: 6, name: 'Google Nest Mini', price: '49', color: 'Charcoal', available: 'Available', image: '/assets/products/product-image6.jpg'},
    {id: 7, name: 'Fitbit Charge 5', price: '149', color: 'Black', available: 'Not Available', image: '/assets/products/product-image7.jpg'}
    
    
];

selectedProduct: any = null; // Holds the selected product for detail view

currentFilter = 'all'; // Default filter
searchTerm: string = '';

constructor(private detaillService : DetaillService){
}
 OnDetaill(){
  this.detaillService.OnDetaillClicked();
 }


getAllProducts(){
  return this.products.length;
}
getAvailableProducts(){
  return this.products.filter(product => product.available === 'Available').length;
}
getNotAvailableProducts(){
  return this.products.filter(product => product.available === 'Not Available').length;
}

onFilterChange(filter: string) {
  this.currentFilter = filter;
}

onSearchChange(searchValue: string) {
  this.searchTerm = searchValue.toLowerCase();
}

getFilteredProducts() {

  let filteredProducts = this.products;

//Filter based on availability
  if (this.currentFilter === 'available') {
    filteredProducts = filteredProducts.filter((product) => product.available === 'Available');
  } else if (this.currentFilter === 'not-available') {
    filteredProducts = filteredProducts.filter((product) => product.available === 'Not Available');
  }

  //Filter based on search term
  if (this.searchTerm){
    filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(this.searchTerm)
  );
  }
  

  return filteredProducts;  
}

}
