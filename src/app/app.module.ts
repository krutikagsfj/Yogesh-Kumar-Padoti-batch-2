import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { SearchComponent } from './search/search.component';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { ObserveComponent } from './observe/observe.component';
import { SortDirective } from './sort.directive';

import { HttpClientModule} from '@angular/common/http';
import { MobileComponent } from './component/mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ShowComponent,
    SearchComponent,
    SearchPipe,
    ObserveComponent,
    SortDirective,
    MobileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
