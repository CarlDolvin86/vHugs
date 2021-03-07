import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthButtonComponent} from './../app/components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { FormsModule } from '@angular/forms';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { UploadComponent } from './components/upload/upload.component';
import { ClassComponent } from './components/resources/class/class.component';
import { MentalComponent } from './components/resources/mental/mental.component';
import { CrimeComponent } from './components/resources/crime/crime.component';
import { InsecurityComponent } from './components/resources/insecurity/insecurity.component';
import { TechComponent } from './components/resources/tech/tech.component';
import { FinancialComponent } from './components/resources/financial/financial.component';
import { TransportationComponent } from './components/resources/transportation/transportation.component';
import { TestComponent } from './components/test/test.component';
import { FooterComponent } from './components/footer/footer.component';
import { HashtagComponent } from './components/hashtag/hashtag.component';
import { HashtagPostComponent } from './components/hashtag-post/hashtag-post.component';
import { ChatComponent } from './components/chat/chat.component';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StartheaderComponent } from './components/startheader/startheader.component';
import { AuthheaderComponent } from './components/authheader/authheader.component';
import { AboutComponent } from './components/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    PostComponent,
    SinglepostComponent,
    AddpostComponent,
    HeaderComponent,
    ErrorComponent,
    ResourcesComponent,
    UploadComponent,
    ClassComponent,
    MentalComponent,
    CrimeComponent,
    InsecurityComponent,
    TechComponent,
    FinancialComponent,
    TransportationComponent,
    TestComponent,
    FooterComponent,
    HashtagComponent,
    HashtagPostComponent,
    ChatComponent,
    StartheaderComponent,
    AuthheaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-2l31c7yc.us.auth0.com',
      clientId: 'DRtrRV35vFzpVUOkZf4cdS1M6QgwYZ8k'}),
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
