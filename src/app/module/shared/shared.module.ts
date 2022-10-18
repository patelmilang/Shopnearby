import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';




@NgModule({
  declarations: [
      LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoaderComponent
   ],
   providers:[AuthService, HttpService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
       
      providers: [AuthService, HttpService]
    };
  }
 }
