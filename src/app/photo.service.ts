import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Picsum } from './picsum.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPicsumPhotos(page: number): Observable<Picsum[]> {
    return this.http.get(
      `https://picsum.photos/v2/list?page=${page}&limit=100`
    ) as Observable<Picsum[]>;
  }
}
