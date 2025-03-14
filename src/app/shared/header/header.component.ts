import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../services/product.service';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  productService = inject(ProductService);

  cartCount = this.productService.cartCount;

  get isBadgeHidden() {
    return this.cartCount() === 0;
  }
}
