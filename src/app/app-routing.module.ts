import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomePageComponent } from './Page/home-page/home-page.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: "", component: HomePageComponent, pathMatch: 'full' },
  { path: 'product', component: ProductsComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "product/add", component: ProductAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  

exports: [RouterModule]
})
export class AppRoutingModule { }
