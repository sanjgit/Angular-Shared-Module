import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {
  SharedModule,
  ToastService,
  AuthGuard,
  ApiService,
  ArticlesService,  
  CommentsService,  
  JwtService,
  ProfilesService,
  TagsService,
  UserService
  
} from 'sharedmodule';
import { AppRoutingModule } from './app-routing.module';
//import { ToastNotifyComponent } from './toast-notify/toast-notify.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,    
    SharedModule.forRoot({ brand: 'BridgeHead.com',api_url: 'https://conduit.productionready.io/api' }),
    HomeModule,    
    AppRoutingModule
  ],
  providers: [ToastService, AuthGuard,
    ApiService,
    ArticlesService,  
    CommentsService,  
    JwtService,
    ProfilesService,
    TagsService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
