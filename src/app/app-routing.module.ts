import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'add',component:AddComponent},
  {path:'show',component:ShowComponent},
  {path:'search',component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
