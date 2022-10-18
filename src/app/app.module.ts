import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './module/home/home.module';
import { FooterComponent } from './module/shared/components/footer/footer.component';
import { HeaderComponent } from './module/shared/components/header/header.component';
 
import { LayoutComponent } from './module/shared/components/layout/layout.component'; 
import { MenubarComponent } from './module/shared/components/menubar/menubar.component';
import { SidebarComponent } from './module/shared/components/sidebar/sidebar.component';
import { SharedModule } from './module/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './module/shared/interceptors/loader.interceptor';
import { ErrorCatchingInterceptor } from './module/shared/interceptors/error-catching.interceptor';
import { AuthAPIInterceptor } from './module/shared/interceptors/authapi.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MenubarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    SharedModule.forRoot(),
    HomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
   },
   {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorCatchingInterceptor,
    multi: true
 },
 {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthAPIInterceptor,
  multi: true
}
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
