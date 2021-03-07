import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions} from '@angular/router';
import { AuthButtonComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import {AddpostComponent} from './components/addpost/addpost.component';
import {  LogoutComponent } from '../app/components/logout/logout.component';
import {RouteGuardService} from './route-guard.service';
import {ErrorComponent} from './components/error/error.component';
import {ResourcesComponent} from './components/resources/resources.component';
import { UploadComponent } from './components/upload/upload.component';
import {ClassComponent} from './components/resources/class/class.component';
import { MentalComponent } from './components/resources/mental/mental.component';
import { InsecurityComponent } from './components/resources/insecurity/insecurity.component';
import { TechComponent } from './components/resources/tech/tech.component';
import { FinancialComponent } from './components/resources/financial/financial.component';
import { TransportationComponent } from './components/resources/transportation/transportation.component';
import { CrimeComponent } from './components/resources/crime/crime.component';
import {TestComponent} from '../app/components/test/test.component';
import{HashtagComponent} from './components/hashtag/hashtag.component';
import {HashtagPostComponent} from './components/hashtag-post/hashtag-post.component';
import {ChatComponent} from '../app/components/chat/chat.component';
import {AboutComponent} from '../app/components/about/about.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  
  {path:"login",component:AuthButtonComponent},
  {path:"post",component:PostComponent},
  {path:"singlepost",component:SinglepostComponent,canActivate:[RouteGuardService]},
  {path:"addpost",component:AddpostComponent,canActivate:[RouteGuardService]},
  {path:"logout",component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:"resource",component:ResourcesComponent,canActivate:[RouteGuardService]},
  {path:"upload",component:UploadComponent,canActivate:[RouteGuardService]},
  {path:"classRes",component:ClassComponent,canActivate:[RouteGuardService]},
  {path:"mhRes",component:MentalComponent,canActivate:[RouteGuardService]},
  {path:"crimeRes",component:CrimeComponent,canActivate:[RouteGuardService]},
  {path:"insecurity",component:InsecurityComponent,canActivate:[RouteGuardService]},
  {path:"tech",component:TechComponent,canActivate:[RouteGuardService]},
  {path:"financial",component:FinancialComponent,canActivate:[RouteGuardService]},
  {path:"transportation",component:TransportationComponent,canActivate:[RouteGuardService]},
  {path:"test",component:TestComponent,canActivate:[RouteGuardService]},
  {path:"hashtags",component:HashtagComponent,canActivate:[RouteGuardService]},
  {path:"hashtagpost",component:HashtagPostComponent},
  {path:"chat",component:ChatComponent,canActivate:[RouteGuardService]},
  {path:"about",component:AboutComponent},

  {path: '**', redirectTo:'post'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
