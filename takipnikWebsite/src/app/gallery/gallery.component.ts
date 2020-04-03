import { Component, OnInit } from '@angular/core';
//third party
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  images:any = [];
  width:number = 600;
  height:number = 400;
  faSpinner = faSpinner;
  isLoading = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
          this.isLoading = false;
       }, 1000);

    this.images.push(
      {url: "assets/overTheBoxes.jpg"},
      {url: "assets/Ledge_sit.jpg"},
      {url: "assets/justFun.jpg"},
      {url: "assets/InkedCrotchShot.jpg"},
      {url: "assets/coverPic.jpg"},
      {url: "assets/blueFaces.jpg"},
      {url: "assets/blueFaces.jpg"},
      {url: "assets/overTheBoxes.jpg"},
      {url: "assets/Ledge_sit.jpg"},
      {url: "assets/justFun.jpg"},
      {url: "assets/InkedCrotchShot.jpg"},
      {url: "assets/coverPic.jpg"},
      {url: "assets/blueFaces.jpg"}
    )
  }

}
