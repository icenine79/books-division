import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBaseBooksComponent } from './components/main-base-books/main-base-books.component';
import { BooksRoutingModule } from './books-routing.module';



@NgModule({
  declarations: [MainBaseBooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class MainBooksModule { }
