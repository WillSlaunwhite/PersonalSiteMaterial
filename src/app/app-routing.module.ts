import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { MachineLearningComponent } from './components/machine-learning/machine-learning.component';
import { DataStructuresComponent } from './components/data-structures/data-structures.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'data-structures', component: DataStructuresComponent },
  { path: 'machine-learning', component: MachineLearningComponent },
  { path: 'projects/:projectName', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
