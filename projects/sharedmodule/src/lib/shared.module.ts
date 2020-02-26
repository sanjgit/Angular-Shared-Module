import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent } from './article-helpers';
import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';

import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import {
  ApiService,
  ArticlesService,
  AuthGuard,
  CommentsService,
  JwtService,
  ProfilesService,
  TagsService,
  UserService
} from './services';

import { AuthComponent } from './auth/auth.component';
import { NoAuthGuard } from './auth/no-auth-guard.service';
import { ToastService } from './toast-message/toast.service';
import { ToastComponent } from './toast-message/toast.component';
import {HeaderComponent } from './layout/header.component';
import {FooterComponent } from './layout/footer.component';
const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  }
]);
@NgModule({
  imports: [
    authRouting,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule   
  ],
  declarations: [
    ToastComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    ListErrorsComponent,
    ShowAuthedDirective    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    NoAuthGuard
    
  ],
  exports: [
    ToastComponent,
    HeaderComponent,
    FooterComponent,
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,    
    CommonModule,
    FavoriteButtonComponent,
    FollowButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule  {
  public static forRoot(config): ModuleWithProviders {
    return {
      ngModule: SharedModule ,
      providers: [
        ToastService,
        { provide: 'config', useValue: config },
        ApiService,
        { provide: 'envConfig', useValue: config }
      ]
    };
  }
}
