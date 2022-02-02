import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './shared/layout/user-layout/user-layout.component';
import { BlankLayoutComponent } from './shared/layout/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { NotesModule } from './views/notes/notes.module';


const routes: Routes = [{
  path: 'admin',
  component: AdminLayoutComponent,
  children: [{ path: 'posts', loadChildren: () => import('./views/posts/posts.module').then(m => m.PostsModule) }]
},
{
  path: "auth",
  component: AuthLayoutComponent
},
{
  path: 'user',
  component: UserLayoutComponent,
  children: [{ path: 'notes', loadChildren: () => import('./views/notes/notes.module').then(m => m.NotesModule) }]
},
{
  path: "",
  component: BlankLayoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
