import { Component, OnInit } from '@angular/core';
import { GalleryObject } from '../../shared/constants/constants';
import { GalleryService } from '../../shared/services/gallery.service';
import { Image } from '../../shared/models/Image';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryObject?: Array<Image>;
  chosenImage?: Image;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {

    console.log(environment);

    this.galleryService.loadImageMeta('__credits.json').subscribe((data:Array<Image>)=>{
      console.log(data);
      this.galleryObject = data;
    });
  }

  loadImage(imageObject: Image) {
    this.chosenImage = imageObject;
  }

}