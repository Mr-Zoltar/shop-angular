import { computed, inject, Injectable, signal } from '@angular/core';
import { Product } from '../product/models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private URL = 'http://localhost:3000/products/';

  products = signal<Product[]>([]);

  cart = signal<Product[]>([]);

  cartCount = computed(() => this.cart().length);

  constructor() {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<Product[]>(this.URL).subscribe(data => {
      this.products.set(data);
    });
  }

  categories = computed(() => {
    const allCategories = this.products().map(product => product.category);
    return Array.from(new Set(allCategories));
  });

  refreshProducts() {
    this.loadProducts();
  }

}
