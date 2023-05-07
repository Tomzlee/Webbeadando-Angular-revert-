import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Image } from '../models/Image';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  
  // HTTP
  constructor(private http: HttpClient) { }


  loadImageMeta(metaUrl: string): Observable<Array<Image>> {
    const url : string = environment.hostUrl;
    return this.http.get(url + '/assets/' + metaUrl) as Observable<Array<Image>>;
  }

  loadImage(imageUrl: string) {
    const url : string = environment.hostUrl;

    return this.http.get(url+ '/assets/' + imageUrl, {responseType: 'blob'});
  }

  //'http://localhost:4200'
}
