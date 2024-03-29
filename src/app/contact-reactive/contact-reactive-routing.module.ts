import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive.component';
import { withoutSaveGuard } from '../guards/without-save.guard';
import { dataServiceResolver } from '../resolvers/data.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ContactReactiveComponent,
    canDeactivate: [withoutSaveGuard],
    resolve: {
      departments: dataServiceResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactReactiveRoutingModule {}
