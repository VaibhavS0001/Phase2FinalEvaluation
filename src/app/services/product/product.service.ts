import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/products/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[] = [];
  url = 'api/products/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}`);
  }

  createProduct(product: IProduct): Observable<IProduct> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<IProduct>(`${this.url}`, product, { headers });
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<IProduct>(`${this.url}/${product.id}`, product, {
      headers,
    });
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
