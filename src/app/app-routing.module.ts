import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MachineLearningComponent } from './components/machine-learning/machine-learning.component';
import { DataStructuresComponent } from './components/data-structures/data-structures.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'data-structures', component: DataStructuresComponent },
  { path: 'machine-learning', component: MachineLearningComponent },
  { path: 'projects/:projectName', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
