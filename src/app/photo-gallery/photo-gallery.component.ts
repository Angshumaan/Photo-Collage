import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoService } from '../photo.service';
import { Picsum } from '../picsum.model';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {
  constructor(private photoService: PhotoService, private http: HttpClient) {}

  page = 1;
  picsumPhotos: Picsum[] = [];
  isLoading = false;

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.photoService
      .getPicsumPhotos(this.page)
      .subscribe((picsumPhotos: Picsum[]) => {
        console.log(picsumPhotos);
        this.picsumPhotos = picsumPhotos;
      });
  }

  onScroll() {
    this.photoService
      .getPicsumPhotos(++this.page)
      .subscribe((picsumPhotos: Picsum[]) => {
        this.picsumPhotos.push(...picsumPhotos);
      });
  }
}
