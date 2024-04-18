import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent {
  @Input() allProducts!: Product[];
  displayedColumns: string[] = ['id', 'name', 'value', 'quantity'];
}
