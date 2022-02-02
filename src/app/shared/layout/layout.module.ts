import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
// external libraries
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { CountUpModule } from 'ngx-countup';
import { AboutComponent } from './blank-layout/about/about.component';
import { WelcomeComponent } from './blank-layout/welcome/welcome.component';
import { ShapeComponent } from './blank-layout/shape/shape.component';
import { NavbarComponent } from './blank-layout/navbar/navbar.component';
import { TestimComponent } from './blank-layout/testim/testim.component'
import { FlickityModule } from 'ngx-flickity';
import { DownloadComponent } from './blank-layout/download/download.component';
import { CardsComponent } from './blank-layout/cards/cards.component';
import { SvgCircleComponent } from './blank-layout/svg-circle/svg-circle.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    AboutComponent,
    WelcomeComponent,
    ShapeComponent,
    NavbarComponent,
    TestimComponent,
    DownloadComponent,
    CardsComponent,
    SvgCircleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularTypewriterEffectModule,
    CountUpModule,
    FlickityModule
  ]
})
export class LayoutModule { }
