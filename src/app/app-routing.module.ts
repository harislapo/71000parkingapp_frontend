import { ReserveComponent } from './components/reserve/reserve.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddParkingComponent } from './components/parkings/add-parking/add-parking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ParkingsComponent } from './components/parkings/parkings.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/AuthGuard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'parkings', component: ParkingsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'reserved', component: ReserveComponent, canActivate: [AuthGuard] },
  {
    path: 'add-parking',
    component: AddParkingComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
