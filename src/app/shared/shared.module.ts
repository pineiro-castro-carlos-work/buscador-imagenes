import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { BuscadorUnsplashComponent } from './component/buscador-unsplash/buscador-unsplash.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BuscadorUnsplashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxImageZoomModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  exports: [
    BuscadorUnsplashComponent
  ]
})
export class SharedModule { }
