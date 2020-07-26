import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImgSliderComponent} from "./img-slider.component";
import {ImgSlideComponent} from "./img-slide/img-slide.component";



@NgModule({
  declarations: [ImgSlideComponent, ImgSliderComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ImgSlideComponent, ImgSliderComponent
  ]
})
export class ImgSliderModule { }
