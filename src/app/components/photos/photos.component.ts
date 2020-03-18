import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos/photos.service';
import { Photo } from '../../models/photo'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];

  constructor(public photosService: PhotosService) {}

  ngOnInit() {
    this.photosService.getPhotos().subscribe(
      photos => {
        this.photos = photos;
      },
      error => console.log(error)
    );
  }

  click(id){
    alert("Te gusta esta Publicacion: " + id);
  }

}
