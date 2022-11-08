import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxComponent } from './Pages/box/box.component';
import { HomeComponent } from './Pages/home/home.component';
import { OrderComponent } from './Pages/order/order.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'box', component:BoxComponent},
  {path:'order', component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
