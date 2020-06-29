import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';

const AppRoutes: Routes = [
  {path:'', component: MainComponent, pathMatch:'full'},
  {path:'category', component: CategoryComponent},
]

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});
