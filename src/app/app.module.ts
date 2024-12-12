import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { DetaillService } from './services/detaill.service';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContainerComponent,
    HeaderComponent,
    SearchComponent,
    ProductsComponent,
    FilterComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers:[DetaillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
