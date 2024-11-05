import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  private url = 'https://localhost:7250/api/products';

  constructor(private http: HttpClient) {}

  GetAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  AddProduct(
    name: string,
    description: string,
    stock: number
  ): Observable<Product> {
    return this.http.post<Product>(this.url, { name, description, stock });
  }

  AddQuantity(id: number, quantity: number): Observable<Product> {
    return this.http.patch<Product>(`${this.url}/${id}/add-quantity`, {
      id,
      quantity,
    });
  }

  RemoveProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/${id}`);
  }

  RemoveQuantity(id: number, quantity: number): Observable<Product> {
    return this.http.patch<Product>(`${this.url}/${id}/remove-quantity`, {
      id,
      quantity,
    });
  }
}
