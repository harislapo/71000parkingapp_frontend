import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CommentsComponent } from './components/comments/comments.component';
import { RatingComponent } from './components/rating/rating.component';
import { ParkingsComponent } from './components/parkings/parkings.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeJumbotronComponent } from './components/home/home-jumbotron/home-jumbotron.component';
import { CardGridComponent } from './components/home/card-grid/card-grid.component';
import { ImageCarouselComponent } from './components/home/image-carousel/image-carousel.component';
import { HeadingSectionComponent } from './components/home/heading-section/heading-section.component';
import { SecondHeadingSectionComponent } from './components/home/second-heading-section/second-heading-section.component';
import { ParkingsJumbotronComponent } from './components/parkings/parkings-jumbotron/parkings-jumbotron.component';
import { AddParkingComponent } from './components/parkings/add-parking/add-parking.component';
import { ParkingPreviewComponent } from './components/parkings/parking-preview/parking-preview.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    CommentsComponent,
    RatingComponent,
    ParkingsComponent,
    FooterComponent,
    HomeJumbotronComponent,
    CardGridComponent,
    ImageCarouselComponent,
    HeadingSectionComponent,
    SecondHeadingSectionComponent,
    ParkingsJumbotronComponent,
    AddParkingComponent,
    ParkingPreviewComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    AdminComponent,
    ReserveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      tapToDismiss: true,
      timeOut: 2500,
      progressBar: true,
      progressAnimation: 'increasing',
      newestOnTop: true
    }),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
