import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  private url = 'https://localhost:7250/api/products';

  constructor(private http: HttpClient) {
    this.refreshProducts();
  }

  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  refreshProducts() {
    this.getAllProducts().subscribe({
      next: (res) => {
        this.productsSubject.next(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addProduct(name: string, stock: number) {
    return this.http.post<Product>(this.url, { name, stock }).pipe(
      tap(() => {
        this.refreshProducts();
      })
    );
  }

  addQuantity(id: number, quantity: number) {
    return this.http
      .patch<Product>(`${this.url}/${id}/add-quantity`, {
        id,
        quantity,
      })
      .pipe(
        tap(() => {
          this.refreshProducts();
        })
      );
  }

  removeProduct(id: number) {
    return this.http.delete<Product>(`${this.url}/${id}`).pipe(
      tap(() => {
        this.refreshProducts();
      })
    );
  }

  removeQuantity(id: number, quantity: number) {
    return this.http
      .patch<Product>(`${this.url}/${id}/remove-quantity`, {
        id,
        quantity,
      })
      .pipe(
        tap(() => {
          this.refreshProducts();
        })
      );
  }
}
