import { Component, computed, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  productService = inject(ProductService);

  private _selectedCategory = signal<string | null>(null);

  searchQuery = signal<string>('');

  get selectedCategoryValue() {
    return this._selectedCategory();
  }

  set selectedCategoryValue(value: string | null) {
    this._selectedCategory.set(value);
  }

  filteredProducts = computed(() => {
    const allProducts = this.productService.products();
    const category = this._selectedCategory();
    const searchTerm = this.searchQuery().toLowerCase().trim();

    return allProducts.filter(product => {
      const matchesCategory = !category || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  });

  ngOnInit(): void {
    this.productService.loadProducts();
  }
}
