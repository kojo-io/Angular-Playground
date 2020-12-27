import { Component, OnInit } from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  rawImage: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(file): void {
    if (file.target.files && file.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.rawImage = event.target.result;
        console.log(this.rawImage);
      };
      reader.readAsDataURL(file.target.files[0]);
    } else {

    }
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

}
