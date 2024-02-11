import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CategoryIconPipe } from './pipes/category-icon.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { CustomPipesComponent } from './pages/custom-pipes/custom-pipes.component';

import { UppercaseFirstPipe } from './pipes/web-medium/uppercase-first.pipe';
import { ReverseStringPipe } from './pipes/web-medium/reverse-string.pipe';
import { FilterArrayPipe } from './pipes/web-medium/filter-array.pipe';
import { TruncateTextPipe } from './pipes/web-medium/truncate-text.pipe';
import { SortArrayPipe } from './pipes/web-medium/sort-array.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    ToggleCasePipe,
    CategoryIconPipe,
    SortByPipe,
    CustomPipesComponent,
    UppercaseFirstPipe,
    ReverseStringPipe,
    FilterArrayPipe,
    TruncateTextPipe,
    SortArrayPipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
