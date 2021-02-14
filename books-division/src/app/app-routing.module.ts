import { ShellComponent } from './bootstrap-components/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const books = ()=>import('./modules/main-books/main-books.module').then(b=>b.MainBooksModule);
const routes: Routes = [
  {path:'', component:ShellComponent,
  children:[
    {path:'home', loadChildren:books},
    {path: '', redirectTo:'home', pathMatch:'full'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
