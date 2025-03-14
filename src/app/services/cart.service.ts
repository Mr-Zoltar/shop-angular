import { inject, Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productService = inject(ProductService);

  
}
