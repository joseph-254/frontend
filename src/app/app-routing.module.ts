import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { StudentListComponent } from './Pages/student-list/student-list.component';
import { StudentUpdateComponent } from './Pages/student-update/student-update.component';


const routes: Routes = [
//  {path: '', component: HomePageComponent, title: "home"},
 {path: '', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) },
 {path: 'about-us', component: AboutPageComponent, title: "about us"},
 {path: 'contact-us', component: ContactPageComponent, title: "contact us"},
 {path: 'students', component: StudentCreateComponent, title: "students"},
 {path: 'students-list', component: StudentListComponent, title: "student list"},
 {path: 'students/:id/edit', component: StudentUpdateComponent, title: "student update"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
