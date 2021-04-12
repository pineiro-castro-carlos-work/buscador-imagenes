import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './component/home/home-view/home-view.component';
import { HomeModule } from './component/home/home.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HomeModule,
    NgxImageZoomModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
