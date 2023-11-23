import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProducteditComponent } from './productedit/productedit.component';

const routes: Routes = [
  {path:"create",component:ProductcreateComponent},
  {path:"list",component:ProductlistComponent},
  {path:"details/:id",component:ProductdetailsComponent},
  {path:"edit/:id",component:ProducteditComponent},
  {path:"",component:ProductlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
