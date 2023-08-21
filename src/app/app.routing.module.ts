import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './users/user/user.component';
import { ListComponent } from './users/list/list.component';
import { DetailsComponent } from './users/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact-reactive', component: ContactReactiveComponent },
  { path: 'contact-templete/:id', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserComponent, 
    children: [
      {path: 'list', component: ListComponent},
      {path: 'details', component: DetailsComponent}
    ] 
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
