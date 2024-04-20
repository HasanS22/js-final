import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to home if no route matched
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routes: Routes = [
  // Your route definitions here
];




