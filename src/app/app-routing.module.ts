import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { BookListComponent } from './component/book-list/book-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'booklist', pathMatch: 'full' },
  { path: 'booklist', component: BookListComponent },
  { path: 'booklist/:id', component: BookDetailsComponent },
  { path: '**', component: BookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
