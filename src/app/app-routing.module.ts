import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailOfferseComponent } from './offerse/detail-offerse.component';
import { EditOfferseComponent } from './offerse/edit-offerse.component';
import { ListOfferseComponent } from './offerse/list-offerse.component';
import { NewOfferseComponent } from './offerse/new-offerse.component';

const routes: Routes = [
  {path: '', component: ListOfferseComponent},
  {path: 'detail/:offerse_id', component: DetailOfferseComponent},
  {path: 'new', component: NewOfferseComponent},
  {path: 'edit/:offerse_id', component: EditOfferseComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
