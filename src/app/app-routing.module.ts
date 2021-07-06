import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/pages/home/home.component';
import { CreateComponent } from './componentes/pages/sala/create/create.component';
import { DetailsComponent } from './componentes/pages/sala/details/details.component';
import { ListComponent } from './componentes/pages/sala/list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'salas', component: ListComponent},
  { path: 'sala/:id', component: DetailsComponent},
  { path: 'nova-sala', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
